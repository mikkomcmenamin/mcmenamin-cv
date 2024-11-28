'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ISkill, skills } from '@/lib/data/skillsData';

export default function Skills() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-cyan-300">Tech Skills</h2>
      <div className="grid grid-cols-2 gap-2 gap-x-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: ISkill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="mb-1">
        <span className="block text-xs font-medium text-cyan-300 sm:text-sm">
          {skill.name}
        </span>
      </div>
      <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-700 sm:mb-4 sm:h-2.5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
      <motion.div
        className="absolute left-0 top-[calc(100%-6px)] h-1.5 w-1.5 rounded-full bg-cyan-400 sm:top-[calc(100%-10px)] sm:h-2 sm:w-2"
        animate={
          isInView
            ? {
                boxShadow: [
                  '0 0 0 0 rgba(34, 211, 238, 0.4)',
                  '0 0 0 6px rgba(34, 211, 238, 0)',
                ],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ left: `calc(${skill.level}% - 3px)` }}
      />
    </motion.div>
  );
}
