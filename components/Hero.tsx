'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedSubtitles from './AnimatedSubtitles'
import RotatingPlanet from './RotatingPlanet'

const GradientBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
)

const GridBackground = () => (
  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
)

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    onClick={() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }}
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown className="w-8 h-8 text-blue-400" />
      <ChevronDown className="w-8 h-8 text-blue-400 -mt-4" />
    </motion.div>
  </motion.div>
)

const subtitles = [
  "full-stack software developer",
  "designer",
  "AI conjurer"
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground />
      <GridBackground />
      <div className="absolute inset-0 scale-150">
        <RotatingPlanet />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Mikko McMenamin
        </motion.h1>
        <AnimatedSubtitles subtitles={subtitles} />
      </div>

      <ScrollIndicator />
    </section>
  )
}

