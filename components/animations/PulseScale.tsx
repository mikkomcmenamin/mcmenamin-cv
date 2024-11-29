import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PulseScaleProps {
  children: ReactNode;
  duration?: number;
  scale?: number;
  className?: string;
}

export function PulseScale({
  children,
  duration = 2,
  scale = 1.2,
  className = '',
}: PulseScaleProps) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, scale, 1] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
