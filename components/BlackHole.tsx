'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

function BlackHoleObject() {
    const ref = useRef<THREE.Group>(null!)
    const { mouse } = useThree()

    const blackHoleMaterial = useMemo(() => new THREE.ShaderMaterial({
        uniforms: {
            color: { value: new THREE.Color(0x000000) },
            glowColor: { value: new THREE.Color(0x00aaff) },
            time: { value: 0 },
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
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 3.0);
        intensity += pow(0.6 - dot(normalize(vWorldPosition), vec3(0, 0, 1.0)), 3.0);
        intensity *= 1.0 + 0.2 * sin(time * 0.5); // Slower pulsating effect
        vec3 glow = mix(color, glowColor, intensity);
        gl_FragColor = vec4(glow, 1.0);
      }
    `,
    }), [])

    useFrame((state, delta) => {
        ref.current.rotation.x = THREE.MathUtils.lerp(
            ref.current.rotation.x,
            mouse.y * (Math.PI / 16),
            0.1
        )
        ref.current.rotation.y = THREE.MathUtils.lerp(
            ref.current.rotation.y,
            mouse.x * (Math.PI / 8),
            0.1
        )
        blackHoleMaterial.uniforms.time.value += delta
    })

    return (
        <group ref={ref}>
            <Sphere args={[2.2, 64, 64]} position={[0, 0, 0]}>
                <primitive object={blackHoleMaterial} attach="material" />
            </Sphere>
            <Sphere args={[0.2, 32, 32]} position={[-3, 1.7, -1]}>
                <meshBasicMaterial color="#1a1a1a" />
            </Sphere>
            <Sphere args={[0.15, 32, 32]} position={[3.3, -1.3, -1]}>
                <meshBasicMaterial color="#1a1a1a" />
            </Sphere>
        </group>
    )
}

export default function BlackHole() {
    return (
        <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                <ambientLight intensity={0.1} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <BlackHoleObject />
            </Canvas>
        </div>
    )
}

