'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import {
  IPortfolioItem,
  portfolioDescription,
  portfolioItems,
} from '@/lib/data/portfolioData';
import { FadeIn } from './animations/FadeIn';
import { TechTag } from './ui/TechTag';

interface ExpandedViewProps {
  item: IPortfolioItem;
  onClose: () => void;
  layoutId: string;
}

const ExpandedView = ({ item, onClose, layoutId }: ExpandedViewProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={layoutId}
        className="w-full max-w-3xl rounded-lg bg-gray-900 px-3 py-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <motion.h3
            layoutId={`title-${layoutId}`}
            className="text-2xl font-semibold text-cyan-300"
          >
            {item.title}
          </motion.h3>
          <button
            onClick={onClose}
            className="text-gray-400 transition-colors hover:text-[#ff0044] hover:shadow-[0_0_15px_rgba(255,0,68,0.5)]"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <motion.div layoutId={`image-${layoutId}`} className="relative">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="h-auto w-full rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="mb-4 mt-4 text-cyan-100">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <TechTag key={index} name={tag} />
            ))}
          </div>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              {item.link.replace('https://', '')}
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function DesignPortfolio() {
  const [selectedItem, setSelectedItem] = useState<IPortfolioItem | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="mt-16" id="portfolio">
      <h2 className="mb-8 text-2xl font-semibold text-cyan-300">
        Pretty Okay Apps
      </h2>
      <p className="mb-6 leading-relaxed text-cyan-100 sm:mb-8">
        {portfolioDescription}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => {
              setSelectedItem(item);
              setSelectedId(`card-${index}`);
            }}
          >
            <FadeIn delay={index * 0.1}>
              <motion.div layoutId={`image-card-${index}`} className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-black/30 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <motion.h3
                  layoutId={`title-card-${index}`}
                  className="mb-2 text-xl font-semibold text-white"
                >
                  {item.title}
                </motion.h3>
                <p className="text-sm text-cyan-300">{item.description}</p>
              </div>
            </FadeIn>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && selectedId && (
          <ExpandedView
            item={selectedItem}
            layoutId={selectedId}
            onClose={() => {
              setSelectedItem(null);
              setSelectedId(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
