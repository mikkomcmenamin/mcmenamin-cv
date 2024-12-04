'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

function BlackHoleObject() {
  const ref = useRef<THREE.Group>(null!);
  const { mouse } = useThree();
  const isMobile = useIsMobile();

  const blackHoleSize = isMobile ? 1.5 : 2.2;
  const debris1Size = isMobile ? 0.15 : 0.2;
  const debris2Size = isMobile ? 0.1 : 0.15;
  const debris1Position = isMobile
    ? ([-2, 1.2, -1] as const)
    : ([-3, 1.7, -1] as const);
  const debris2Position = isMobile
    ? ([2.2, -0.9, -1] as const)
    : ([3.3, -1.3, -1] as const);

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

  useFrame((state, delta) => {
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.y * (Math.PI / 16),
      0.1
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * (Math.PI / 8),
      0.1
    );
    blackHoleMaterial.uniforms.time.value += delta;
  });

  return (
    <group ref={ref}>
      <Sphere args={[blackHoleSize, 64, 64]} position={[0, 0, 0]}>
        <primitive object={blackHoleMaterial} attach="material" />
      </Sphere>
      <Sphere args={[debris1Size, 32, 32]} position={debris1Position}>
        <meshBasicMaterial color="#1a1a1a" />
      </Sphere>
      <Sphere args={[debris2Size, 32, 32]} position={debris2Position}>
        <meshBasicMaterial color="#1a1a1a" />
      </Sphere>
    </group>
  );
}

export default function BlackHole() {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, isMobile ? 4.5 : 6], fov: 50 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <BlackHoleObject />
      </Canvas>
    </div>
  );
}
