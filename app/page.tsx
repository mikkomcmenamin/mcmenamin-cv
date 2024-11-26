"use client";

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Education from "../components/Education";
import FuturisticContact from "../components/FuturisticContact";
import DesignPortfolio from "../components/DesignPortfolio";
import GlassmorphicNav from "../components/GlassmorphicNav";
import MildlyCurious from "../components/MildlyCurious";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black from-5% via-gray-900/90 via-20% via-gray-950 via-60% to-black text-white pb-24">
      <Hero />
      <GlassmorphicNav />

      <main className="max-w-4xl mx-auto px-4 py-16 space-y-32">
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-cyan-300">
            About Me
          </h2>
          <p className="text-cyan-100 leading-relaxed">
            Hi! I&#39;m a highly driven Senior Frontend Developer with over 7
            years of expertise building enterprise-grade applications. I have an
            eye for good design and user experience, and I&#39;ve built apps for
            web, desktop, mobile, and XR platforms. I specialize in frontend
            frameworks such as React, Flutter, and Unity, but I&#39;m also adept
            at full-stack tasks when required. My experience spans situational
            awareness software, augmented reality apps, generative AI, games,
            mobile and web apps, and digital twins. I help teams ship software
            to production with determination, focusing on creating responsive
            and accessible UX.
          </p>
        </motion.section>

        <section id="experience">
          <Timeline />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="portfolio">
          <DesignPortfolio />
        </section>

        <section id="education">
          <Education />
        </section>

        <section>
          <MildlyCurious />
        </section>

        <section id="contact">
          <FuturisticContact />
        </section>
      </main>
    </div>
  );
}
