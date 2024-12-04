'use client';

import { useState, useEffect } from 'react';

export function useIsMobile() {
  // Default to false - assume desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This only runs in the browser after hydration
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}
