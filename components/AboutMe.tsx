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
      <p className="text-cyan-100 leading-relaxed">{aboutMeData.description}</p>
    </motion.section>
  );
}
