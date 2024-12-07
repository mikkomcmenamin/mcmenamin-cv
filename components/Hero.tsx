'use client';

import { ChevronDown } from 'lucide-react';
import AnimatedSubtitles from './AnimatedSubtitles';
import BlackHole from './BlackHole';
import SpaceBackground from './SpaceBackground';
import { FadeIn } from './animations/FadeIn';
import { FloatingAnimation } from './animations/FloatingAnimation';
import { ScrollIndicator } from './animations/ScrollIndicator';
import KeyboardGuide from './KeyboardGuide';

const GradientBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-75" />
);

const ChevronIndicator = () => (
  <ScrollIndicator className="absolute bottom-48 left-1/2 -translate-x-1/2 transform sm:bottom-24">
    <ChevronDown className="h-8 w-8 text-blue-400" />
    <ChevronDown className="-mt-4 h-8 w-8 text-blue-400" />
  </ScrollIndicator>
);

const subtitles = [
  'full-stack software developer',
  'ux/ui designer',
];

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <SpaceBackground />
      <GradientBackground />
      <KeyboardGuide />
      <FadeIn
        duration={0.5}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <BlackHole />
        </div>
      </FadeIn>

      <FadeIn
        duration={0.8}
        y={20}
        className="relative z-20 mt-8 max-w-5xl px-4 text-center"
      >
          <h1
              className="mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold uppercase tracking-wider text-transparent sm:text-4xl"
              style={{textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'}}
          >
              Mikko McMenamin
          </h1>
          <AnimatedSubtitles subtitles={subtitles}/>
      </FadeIn>

        <ChevronIndicator/>
    </section>
  );
}
