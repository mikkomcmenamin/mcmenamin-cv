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
import AboutMe from "../components/AboutMe";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black from-5% via-gray-900/90 via-20% via-gray-950 via-60% to-black text-white pb-24">
      <Hero />
      <GlassmorphicNav />

      <main className="max-w-4xl mx-auto px-4 py-16 space-y-32">
        <AboutMe />

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
