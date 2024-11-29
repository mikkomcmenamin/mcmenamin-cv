import { motion } from 'framer-motion';

interface BlinkingCursorProps {
  className?: string;
  duration?: number;
}

export function BlinkingCursor({
  className = 'ml-1 inline-block h-6 w-0.5 bg-cyan-300',
  duration = 0.5,
}: BlinkingCursorProps) {
  return (
    <motion.span
      className={className}
      animate={{ opacity: [0, 1] }}
      transition={{ duration, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
}
