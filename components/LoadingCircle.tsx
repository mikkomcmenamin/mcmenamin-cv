import { motion } from "framer-motion";

export default function LoadingCircle() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full border-2 border-transparent"
        style={{
          borderRightColor: "#60A5FA", // blue-400
          borderTopColor: "#67E8F9", // cyan-300
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
