import { motion, HTMLMotionProps } from 'framer-motion';

interface HoverScaleProps
  extends Omit<HTMLMotionProps<'div'>, 'whileHover' | 'whileTap'> {
  children: React.ReactNode;
  scale?: number;
  tapScale?: number;
}

export function HoverScale({
  children,
  scale = 1.1,
  tapScale = 0.95,
  className = '',
  ...props
}: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: tapScale }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
