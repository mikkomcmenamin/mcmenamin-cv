'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {useTypingAnimation} from "@/app/hooks/useTypingAnimation";

const BlinkingCursor = () => (
  <motion.span
    className="inline-block w-0.5 h-6 bg-cyan-300 ml-1"
    animate={{ opacity: [0, 1] }}
    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
  />
)

interface AnimatedSubtitlesProps {
  subtitles: string[]
}

export default function AnimatedSubtitles({ subtitles }: AnimatedSubtitlesProps) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0)
  const { displayedText, isComplete } = useTypingAnimation(subtitles[currentSubtitleIndex], 30)

  useEffect(() => {
    if (isComplete && currentSubtitleIndex < subtitles.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSubtitleIndex((prevIndex) => prevIndex + 1)
      }, 500) // Wait for 500ms before moving to the next subtitle
      return () => clearTimeout(timer)
    }
  }, [isComplete, currentSubtitleIndex, subtitles.length])

  return (
    <div className="text-xl sm:text-2xl text-gray-300 mb-8 h-24 flex flex-col items-center justify-center">
      {subtitles.map((subtitle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-8 overflow-hidden"
        >
          {index === currentSubtitleIndex ? (
            <>
              {displayedText}
              {!isComplete && <BlinkingCursor />}
            </>
          ) : index < currentSubtitleIndex ? (
            subtitle
          ) : null}
        </motion.div>
      ))}
    </div>
  )
}

