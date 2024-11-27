'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {ISkill, skills} from "@/lib/data/skillsData";

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-cyan-300">Tech Skills</h2>
      <div className="grid grid-cols-2 gap-2 gap-x-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

function SkillBar({ skill, index } : {skill: ISkill, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="mb-1">
        <span className="text-xs sm:text-sm font-medium text-cyan-300 block">{skill.name}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2.5 mb-2 sm:mb-4 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
      <motion.div
        className="absolute top-[calc(100%-6px)] sm:top-[calc(100%-10px)] left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"
        animate={isInView ? {
          boxShadow: [
            '0 0 0 0 rgba(34, 211, 238, 0.4)',
            '0 0 0 6px rgba(34, 211, 238, 0)',
          ],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ left: `calc(${skill.level}% - 3px)` }}
      />
    </motion.div>
  )
}

