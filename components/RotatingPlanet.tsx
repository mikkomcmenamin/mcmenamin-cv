'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, Ring } from '@react-three/drei'
import * as THREE from 'three'

function BlackHole() {
  const ref = useRef<THREE.Group>(null!)
  const { mouse } = useThree()

  const ringGeometry = useMemo(() => new THREE.RingGeometry(2, 2.2, 128), [])
  const glowMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xff7b00) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying vec2 vUv;
      void main() {
        float strength = distance(vUv, vec2(0.5));
        strength = 1.0 - strength;
        strength = pow(strength, 3.0);
        gl_FragColor = vec4(color, strength);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
  }), [])

  useFrame(() => {
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
  })

  return (
      <group ref={ref}>
        <Sphere args={[1.8, 64, 64]} position={[0, 0, 0]}>
          <meshBasicMaterial color="#000000" />
        </Sphere>
        <Ring args={[2, 2.2, 128]} rotation-x={Math.PI / 2}>
          <meshBasicMaterial color="#ff7b00" side={THREE.DoubleSide} transparent opacity={0.5} />
        </Ring>
        <mesh geometry={ringGeometry} material={glowMaterial} rotation-x={Math.PI / 2} scale={1.1} />
        <Sphere args={[0.2, 32, 32]} position={[-2.5, 1.5, 0]}>
          <meshBasicMaterial color="#1a1a1a" />
        </Sphere>
        <Sphere args={[0.15, 32, 32]} position={[2.8, -1.2, 0]}>
          <meshBasicMaterial color="#1a1a1a" />
        </Sphere>
      </group>
  )
}

export default function RotatingBlackHole() {
  return (
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <BlackHole />
        </Canvas>
      </div>
  )
}

