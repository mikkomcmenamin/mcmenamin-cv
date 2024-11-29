'use client';

import { aboutMeData } from '@/lib/data/aboutMeData';
import { FadeIn } from './animations/FadeIn';
import { PulseOpacity } from './animations/PulseOpacity';

interface WorkItem {
  position: string;
  company: string;
  url?: string;
}

export default function AboutMe() {
  return (
    <section id="about">
      <FadeIn delay={0.2} duration={0.8}>
        <h2 className="mb-6 text-2xl font-semibold text-cyan-300">
          {aboutMeData.title}
        </h2>
        <p className="mb-4 leading-relaxed text-cyan-100">
          {aboutMeData.description}
        </p>

        <div className="rounded-lg border border-cyan-800/50 bg-cyan-950/50 p-4">
          <p className="text-sm text-cyan-200">Currently:</p>
          <div className="mt-2 flex flex-col gap-2">
            {aboutMeData.currentWork.map((work: WorkItem, index) => (
              <FadeIn
                key={work.company}
                className="flex items-center gap-2"
                delay={0.6 + index * 0.1}
                y={-20}
              >
                <span className="text-sm text-cyan-100 sm:text-base">
                  {work.position} @
                </span>
                <PulseOpacity className="font-semibold text-cyan-300">
                  {work.url ? (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors hover:text-cyan-400 sm:text-base"
                    >
                      {work.company}
                    </a>
                  ) : (
                    work.company
                  )}
                </PulseOpacity>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
