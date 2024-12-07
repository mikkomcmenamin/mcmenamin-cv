'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree, RootState } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

function BlackHoleObject() {
  const ref = useRef<THREE.Group>(null!);
  const { pointer, viewport } = useThree();
  const isMobile = useIsMobile();

  const mobileSize = viewport.width * 0.5;
  const desktopSize = 1.9;
  const blackHoleSize = isMobile ? mobileSize : desktopSize;

  const blackHoleMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0x000000) },
          glowColor: { value: new THREE.Color(0x00aaff) },
          time: { value: 0 },
          isMobile: { value: isMobile ? 1.0 : 0.0 },
        },
        vertexShader: `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      uniform vec3 color;
      uniform vec3 glowColor;
      uniform float time;
      uniform float isMobile;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        float power = isMobile > 0.5 ? 4.0 : 3.0;  // Higher power = thinner edge
        float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), power);
        intensity += pow(0.6 - dot(normalize(vWorldPosition), vec3(0, 0, 1.0)), power);
        intensity *= 1.0 + 0.2 * sin(time * 0.5); // Slower pulsating effect
        vec3 glow = mix(color, glowColor, intensity);
        gl_FragColor = vec4(glow, 1.0);
      }
    `,
      }),
    [isMobile]
  );

  const gridMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          isMobile: { value: isMobile ? 1.0 : 0.0 },
        },
        transparent: true,
        vertexShader: `
          varying vec3 vPosition;
          varying vec2 vUv;
          void main() {
            vPosition = position;
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float isMobile;
          varying vec3 vPosition;
          varying vec2 vUv;
          
          float grid(vec2 uv, float size) {
            vec2 grid = fract(uv * size);
            return (step(0.985, grid.x) + step(0.985, grid.y)) * 0.5;
          }
          
          void main() {
            float buildDuration = 2.5;
            float holdDuration = 0.0;
            float fadeDuration = 0.7;
            float totalDuration = buildDuration + holdDuration + fadeDuration;
            
            if(time < 0.0 || time > totalDuration) {
              gl_FragColor = vec4(0.0);
              return;
            }
            
            float gridSize = isMobile > 0.5 ? 30.0 : 40.0;
            float baseGrid = grid(vUv, gridSize);
            float secondaryGrid = grid(vUv, gridSize * 0.5);
            
            float buildProgress = clamp(time / buildDuration, 0.0, 1.0);
            float heightMask = 1.0 - smoothstep(buildProgress, buildProgress + 0.15, vUv.y);
            
            float opacity = 1.0;
            if(time > (buildDuration + holdDuration)) {
              float fadeProgress = (time - buildDuration - holdDuration) / fadeDuration;
              opacity = 1.0 - smoothstep(0.0, 1.0, fadeProgress);
            }
            
            float finalGrid = (baseGrid + secondaryGrid * 0.5) * heightMask;
            float edgeGlow = 1.0 - length(vUv - 0.5) * 1.2;
            edgeGlow = max(0.0, edgeGlow);
            
            vec3 gridColor = vec3(0.0, 0.8, 1.0);
            gl_FragColor = vec4(gridColor, finalGrid * opacity * edgeGlow * 0.5);
          }
        `,
      }),
    [isMobile]
  );

  useFrame((state: RootState, delta: number) => {
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      pointer.y * (Math.PI / 16),
      0.1
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      pointer.x * (Math.PI / 8),
      0.1
    );
    blackHoleMaterial.uniforms.time.value += delta;

    if (state.clock.elapsedTime > 0.4) {
      gridMaterial.uniforms.time.value += delta;
    }
  });

  const gridSize = blackHoleSize * 1.01;

  return (
    <group ref={ref}>
      <Sphere args={[blackHoleSize, 64, 64]} position={[0, 0, 0]}>
        <primitive object={blackHoleMaterial} attach="material" />
      </Sphere>
      <Sphere args={[gridSize, 64, 64]} position={[0, 0, 0]}>
        <primitive object={gridMaterial} attach="material" />
      </Sphere>
    </group>
  );
}

export default function BlackHole() {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 4 : 6],
          fov: isMobile ? 75 : 50,
        }}
        dpr={[1, 2]} // Limit pixel ratio for better performance
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <BlackHoleObject />
      </Canvas>
    </div>
  );
}
