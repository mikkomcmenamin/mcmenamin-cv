"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSubtitles from "./AnimatedSubtitles";
import BlackHole from "./BlackHole";
import SpaceBackground from "./SpaceBackground";
import LoadingCircle from "./LoadingCircle";

const GradientBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-75" />
);

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    onClick={() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }}
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown className="w-8 h-8 text-blue-400" />
      <ChevronDown className="w-8 h-8 text-blue-400 -mt-4" />
    </motion.div>
  </motion.div>
);

const subtitles = [
  "full-stack software developer",
  "ux/ui designer",
  "product engineer",
  "AI conjurer",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {!mounted ? (
          <motion.div
            key="loading"
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingCircle />
          </motion.div>
        ) : (
          <>
            <SpaceBackground />
            <GradientBackground />
            <motion.div
              key="blackhole"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full max-w-3xl max-h-3xl">
                <BlackHole />
              </div>
            </motion.div>

            <motion.div
              className="relative z-20 text-center max-w-5xl px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 tracking-wider uppercase"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ textShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
              >
                Mikko McMenamin
              </motion.h1>
              <AnimatedSubtitles subtitles={subtitles} />
            </motion.div>

            <ScrollIndicator />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
