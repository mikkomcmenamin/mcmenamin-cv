import { motion } from "framer-motion";

export default function LoadingBar() {
  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-400 to-cyan-300"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
