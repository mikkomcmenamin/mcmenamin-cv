import { motion } from 'framer-motion';

interface PulsingDotProps {
  color?: string;
  size?: string;
  duration?: number;
  position?: string;
  pulseSize?: number;
  className?: string;
}

export function PulsingDot({
  color = 'rgb(34, 211, 238)', // cyan-400
  size = '6px',
  duration = 1.5,
  position = '0%',
  pulseSize = 6,
  className = '',
}: PulsingDotProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        left: `calc(${position} - 3px)`,
        backgroundColor: color,
        width: size,
        height: size,
      }}
      animate={{
        boxShadow: [
          `0 0 0 0 ${color}66`, // 40% opacity
          `0 0 0 ${pulseSize}px ${color}00`, // 0% opacity
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
}
