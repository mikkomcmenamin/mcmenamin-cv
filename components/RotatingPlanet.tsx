'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Planet() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse, viewport } = useThree()
  const sphere = useMemo(() => {
    const positions = new Float32Array(10000 * 3)
    const radius = 1.5

    for (let i = 0; i < positions.length; i += 3) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  useFrame((state, delta) => {
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.y * (Math.PI / 8),
      0.1
    )
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * (Math.PI / 4),
      0.1
    )
  })

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4080ff"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default function RotatingPlanet() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Planet />
      </Canvas>
    </div>
  )
}

