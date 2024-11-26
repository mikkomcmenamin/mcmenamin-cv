'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const GlowingOrb = () => (
  <div className="absolute w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
)

const GridBackground = () => (
  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
)

export default function HolographicHeader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="relative w-full h-[400px] mb-12 overflow-hidden rounded-lg bg-gray-900 flex items-center justify-center">
      <GridBackground />
      <GlowingOrb />
      <GlowingOrb />
      
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4 text-white"
        >
          Mikko McMenamin
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-2xl text-cyan-300 bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full">
            Quantum Code Architect
          </span>
        </motion.div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="rgb(17, 24, 39)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </header>
  )
}

