'use client';

import { motion, AnimatePresence } from 'framer-motion';
import LoadingCircle from './LoadingCircle';

export default function LoadingOverlay() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <LoadingCircle />
      </motion.div>
    </AnimatePresence>
  );
}
