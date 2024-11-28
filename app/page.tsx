'use client';

import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import DesignPortfolio from '../components/DesignPortfolio';
import GlassmorphicNav from '../components/GlassmorphicNav';
import MusicSection from '../components/MusicSection';
import AboutMe from '../components/AboutMe';

export default function CVPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-24">
      <Hero />
      <GlassmorphicNav />

      <main className="mx-auto w-full max-w-4xl space-y-24 px-4 py-16">
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
          <MusicSection />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
