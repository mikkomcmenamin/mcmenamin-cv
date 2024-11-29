import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PulseOpacityProps {
  children: ReactNode;
  duration?: number;
  minOpacity?: number;
  className?: string;
}

export function PulseOpacity({
  children,
  duration = 2,
  minOpacity = 0.7,
  className = '',
}: PulseOpacityProps) {
  return (
    <motion.span
      className={className}
      animate={{ opacity: [1, minOpacity, 1] }}
      transition={{ duration, repeat: Infinity }}
    >
      {children}
    </motion.span>
  );
}
