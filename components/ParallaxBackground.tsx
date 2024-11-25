'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const shapes = [
  { type: 'circle', size: 40, color: 'rgba(6, 182, 212, 0.1)' },
  { type: 'square', size: 60, color: 'rgba(59, 130, 246, 0.1)' },
  { type: 'triangle', size: 50, color: 'rgba(16, 185, 129, 0.1)' },
  { type: 'circle', size: 30, color: 'rgba(236, 72, 153, 0.1)' },
  { type: 'square', size: 70, color: 'rgba(245, 158, 11, 0.1)' },
  { type: 'triangle', size: 45, color: 'rgba(139, 92, 246, 0.1)' },
]

const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((shape, index) => (
            <motion.div
                key={index}
                className="absolute"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: mousePosition.x * (0.02 + index * 0.01),
                  y: mousePosition.y * (0.02 + index * 0.01),
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                style={{
                  width: shape.size,
                  height: shape.size,
                  backgroundColor: shape.color,
                  borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '0%' : '0%',
                  clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
                }}
            />
        ))}
      </div>
  )
}

export default ParallaxBackground

