import { motion } from 'framer-motion';

export default function LoadingCircle() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        className="h-[90vw] w-[90vw] rounded-full border-2 border-transparent md:h-[750px] md:w-[750px]"
        style={{
          borderRightColor: '#60A5FA', // blue-400
          borderTopColor: '#67E8F9', // cyan-300
        }}
        initial={{
          rotate: 0,
          opacity: 0,
        }}
        animate={{
          rotate: 360,
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 0.3 },
          rotate: {
            duration: 1,
            ease: 'linear',
            repeat: Infinity,
            delay: 0,
          },
        }}
      />
    </div>
  );
}
