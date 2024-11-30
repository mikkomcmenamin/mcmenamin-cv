'use client';

import { useState, useEffect } from 'react';
import { useTypingAnimation } from '@/lib/hooks/useTypingAnimation';
import { FadeIn } from './animations/FadeIn';
import { BlinkingCursor } from './animations/BlinkingCursor';

interface AnimatedSubtitlesProps {
  subtitles: string[];
}

export default function AnimatedSubtitles({
  subtitles,
}: AnimatedSubtitlesProps) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const { displayedText, isComplete } = useTypingAnimation(
    subtitles[currentSubtitleIndex],
    30
  );

  useEffect(() => {
    if (isComplete && currentSubtitleIndex < subtitles.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSubtitleIndex((prevIndex) => prevIndex + 1);
      }, 700); // Wait for 500ms before moving to the next subtitle
      return () => clearTimeout(timer);
    }
  }, [isComplete, currentSubtitleIndex, subtitles.length]);

  return (
    <div className="mb-8 flex h-24 flex-col items-center justify-center text-lg font-light uppercase tracking-wide text-cyan-300 sm:text-xl">
      {subtitles.map((subtitle, index) => (
        <FadeIn key={index} delay={index * 0.1} className="h-8 overflow-hidden">
          {index === currentSubtitleIndex ? (
            <>
              {displayedText}
              {!isComplete && <BlinkingCursor />}
            </>
          ) : index < currentSubtitleIndex ? (
            subtitle
          ) : null}
        </FadeIn>
      ))}
    </div>
  );
}
