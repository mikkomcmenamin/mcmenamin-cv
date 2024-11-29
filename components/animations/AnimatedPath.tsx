import { motion } from 'framer-motion';

interface AnimatedPathProps {
  d: string;
  fill?: string;
  duration?: number;
  ease?: string;
  className?: string;
}

export function AnimatedPath({
  d,
  fill = 'currentColor',
  duration = 1.5,
  ease = 'easeInOut',
  className = '',
}: AnimatedPathProps) {
  return (
    <motion.path
      d={d}
      fill={fill}
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration, ease }}
    />
  );
}
