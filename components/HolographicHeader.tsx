'use client';

import { useEffect, useState } from 'react';
import { FadeIn } from './animations/FadeIn';
import { AnimatedPath } from './animations/AnimatedPath';

const GlowingOrb = () => (
  <div className="absolute h-64 w-64 animate-pulse rounded-full bg-cyan-500 opacity-20 blur-3xl filter" />
);

const GridBackground = () => (
  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
);

export default function HolographicHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="relative mb-12 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900">
      <GridBackground />
      <GlowingOrb />
      <GlowingOrb />

      <div className="relative z-10 text-center">
        <FadeIn y={-20} duration={0.8}>
          <h1 className="mb-4 text-6xl font-bold text-white">
            Mikko McMenamin
          </h1>
        </FadeIn>
        <FadeIn y={20} duration={0.8} delay={0.2}>
          <span className="rounded-full bg-gray-800 bg-opacity-50 px-4 py-2 text-2xl text-cyan-300">
            Quantum Code Architect
          </span>
        </FadeIn>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AnimatedPath
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="rgb(17, 24, 39)"
          duration={1.5}
          ease="easeInOut"
        />
      </svg>
    </header>
  );
}
