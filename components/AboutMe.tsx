"use client";

import { motion } from "framer-motion";
import { aboutMeData } from "@/lib/data/aboutMeData";

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-cyan-300">
        {aboutMeData.title}
      </h2>
      <p className="text-cyan-100 leading-relaxed mb-4">
        {aboutMeData.description}
      </p>

      <motion.div
        className="bg-cyan-950/50 p-4 rounded-lg border border-cyan-800/50"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-cyan-200 text-sm">Currently:</p>
        <div className="flex flex-col gap-2 mt-2">
          {aboutMeData.currentWork.map((work, index) => (
            <motion.div
              key={work.company}
              className="flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <span className="text-cyan-100">{work.position} @</span>
              <motion.span
                className="text-cyan-300 font-semibold"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {work.url ? (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {work.company}
                  </a>
                ) : (
                  work.company
                )}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
