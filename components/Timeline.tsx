'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Activity } from 'lucide-react'
import {timelineItems} from "@/app/data/timelineData";

export default function Timeline() {
  return (
    <section className="relative">
      <h2 className="text-2xl font-semibold mb-8 text-cyan-300">Professional Experience</h2>
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500" />
      {timelineItems.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </section>
  )
}

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="ml-8 mb-12 relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="absolute -left-[8px] top-1 w-4 h-4 bg-gray-900 rounded-full border-2 border-cyan-400 z-10">
          {item.isActive ? (
            <motion.div
              className="w-full h-full rounded-full bg-cyan-400 absolute"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </div>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl border border-cyan-800">
          <div className="mb-4 flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">{item.position}</h3>
              <p className="text-cyan-400">{item.company}</p>
              <p className="text-sm text-cyan-500">{item.period}</p>
            </div>
            {item.isActive && (
              <motion.div
                className="bg-cyan-500 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Activity className="w-3 h-3 mr-1" />
                Active
              </motion.div>
            )}
          </div>
          <p className="text-cyan-100 mb-4">{item.description}</p>
          {item.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900 text-cyan-300"
                >
                  <Code2 className="w-3 h-3 mr-1" />
                  {tech}
                </span>
              ))}
            </div>
          )}
          {item.projects && (
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-cyan-200">Key Projects:</h4>
              {item.projects.map((
project, projectIndex) => (
                <div key={projectIndex} className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                  <h5 className="text-md font-medium text-cyan-200 mb-2">{project.name}</h5>
                  <p className="text-sm text-cyan-500 mb-2">{project.period}</p>
                  <p className="text-cyan-100 mb-3">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900 text-cyan-300"
                        >
                          <Code2 className="w-3 h-3 mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

