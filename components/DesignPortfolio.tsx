"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, Code2 } from "lucide-react";
import {
  IPortfolioItem,
  portfolioDescription,
  portfolioItems,
} from "@/lib/data/portfolioData";

export default function DesignPortfolio() {
  const [selectedItem, setSelectedItem] = useState<IPortfolioItem | null>(null);

  return (
    <section className="mt-16" id="portfolio">
      <h2 className="text-2xl font-semibold mb-8 text-cyan-300">
        Pretty Okay Apps
      </h2>
      <p className="text-cyan-100 leading-relaxed mb-6 sm:mb-8">
        {portfolioDescription}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-cyan-300 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-gray-900 p-6 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-cyan-300">
                {selectedItem.title}
              </h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-cyan-100 mb-4">{selectedItem.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedItem.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm inline-flex items-center"
                >
                  <Code2 className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
