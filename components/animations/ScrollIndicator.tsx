import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollIndicatorProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  bounceDuration?: number;
  className?: string;
  onClick?: () => void;
}

export function ScrollIndicator({
  children,
  delay = 0.6,
  duration = 0.8,
  bounceDuration = 3,
  className = '',
  onClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  },
}: ScrollIndicatorProps) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      onClick={onClick}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: bounceDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
