'use client';

import { ChevronDown } from 'lucide-react';
import AnimatedSubtitles from './AnimatedSubtitles';
import SpaceBackground from './SpaceBackground';
import { FadeIn } from './animations/FadeIn';
import { ScrollIndicator } from './animations/ScrollIndicator';
import KeyboardGuide from './KeyboardGuide';
import BlackHoleSection from "@/components/BlackHoleSection";

const GradientBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-75" />
);

const ChevronIndicator = () => (
  <ScrollIndicator className="absolute bottom-48 left-1/2 -translate-x-1/2 transform sm:bottom-24">
    <ChevronDown className="h-8 w-8 text-blue-400" />
    <ChevronDown className="-mt-4 h-8 w-8 text-blue-400" />
  </ScrollIndicator>
);

const subtitles = ['full-stack software developer', 'ux/ui designer'];

const MainContent = () => (
  <div className="absolute inset-0 mt-[28vh] flex items-start justify-center sm:mt-12 sm:items-center">
    <FadeIn
      duration={0.8}
      y={20}
      className="z-10 w-full max-w-5xl px-4 text-center"
    >
      <h1
        className="mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold uppercase tracking-wider text-transparent sm:text-4xl"
        style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
      >
        Mikko McMenamin
      </h1>
      <AnimatedSubtitles subtitles={subtitles} />
    </FadeIn>
  </div>
);

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center overflow-hidden pt-12 sm:justify-center sm:pt-0">
      <SpaceBackground />
      <GradientBackground />
      <BlackHoleSection />
      <div className="relative z-10 flex h-full w-full flex-col">
        <KeyboardGuide />
        <MainContent />
        <KeyboardGuide />
        <ChevronIndicator />
      </div>
    </section>
  );
}
