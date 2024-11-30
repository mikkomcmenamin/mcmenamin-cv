'use client';

import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isDesktop, setIsDesktop] = useState(false); // Start with mobile assumption
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    checkIsDesktop();

    // Add event listener
    window.addEventListener('resize', checkIsDesktop);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // During SSR and initial hydration, return false
  if (!hasMounted) return true;

  return !isDesktop; // Return true if mobile, false if desktop
}
