'use client';

import { useState, useEffect } from 'react';
import { FadeIn } from './animations/FadeIn';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

export default function KeyboardGuide() {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isMobile) return null;

  return (
    <FadeIn duration={0.5} className="fixed bottom-8 left-8 z-[100]">
      <div className="space-y-2 text-sm text-cyan-300">
        <p className="flex items-center gap-2">
          Press
          <kbd className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 font-mono text-xs">
            Tab
          </kbd>
          and
          <kbd className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 font-mono text-xs">
            Enter
          </kbd>
          to navigate
        </p>
        <p className="flex items-center gap-2">
          Or use
          <kbd className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 font-mono text-xs">
            ←
          </kbd>
          <kbd className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 font-mono text-xs">
            →
          </kbd>
          arrows
        </p>
      </div>
    </FadeIn>
  );
}
