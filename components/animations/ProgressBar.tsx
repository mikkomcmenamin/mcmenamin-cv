import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressBarProps {
  progress: number;
  delay?: number;
  duration?: number;
  className?: string;
  barClassName?: string;
}

export function ProgressBar({
  progress,
  delay = 0,
  duration = 1,
  className = '',
  barClassName = '',
}: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className={`h-1.5 w-full overflow-hidden rounded-full bg-gray-700 sm:h-2.5 ${className}`}
    >
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 ${barClassName}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration, delay }}
      />
    </div>
  );
}
