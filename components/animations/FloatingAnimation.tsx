import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingAnimationProps {
  children: ReactNode;
  duration?: number;
  y?: number;
  className?: string;
}

export function FloatingAnimation({
  children,
  duration = 8,
  y = 10,
  className = '',
}: FloatingAnimationProps) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
