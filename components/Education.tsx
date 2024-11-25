'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'
import {certifications, educationItems} from "@/app/data/educationData";

export default function Education() {
  return (
    <section>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-200 flex items-center">
            <BookOpen className="mr-2" />
            Education
          </h3>
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-6 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl border border-cyan-800"
            >
              <h4 className="text-lg font-semibold text-cyan-300">{item.degree}</h4>
              <p className="text-cyan-400">{item.school}</p>
              <p className="text-sm text-cyan-500">{item.year}</p>
            </motion.div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-200 flex items-center">
            <Award className="mr-2" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-lg shadow-xl border border-cyan-800 hover:border-cyan-600 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">{cert}</span>
                  <Award className="text-cyan-500" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

