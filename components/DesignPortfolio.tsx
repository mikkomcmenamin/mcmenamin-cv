'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, Code2 } from 'lucide-react';
import {
  IPortfolioItem,
  portfolioDescription,
  portfolioItems,
} from '@/lib/data/portfolioData';
import { FadeIn } from './animations/FadeIn';
import { ScaleIn } from './animations/ScaleIn';

export default function DesignPortfolio() {
  const [selectedItem, setSelectedItem] = useState<IPortfolioItem | null>(null);

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
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedItem(item)}
          >
            <FadeIn delay={index * 0.1}>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-black/30 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-cyan-300">{item.description}</p>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <FadeIn duration={0.3}>
            <ScaleIn
              duration={0.4}
              className="w-full max-w-3xl rounded-lg bg-gray-900 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-2xl font-semibold text-cyan-300">
                  {selectedItem.title}
                </h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={600}
                height={400}
                className="mb-4 h-auto w-full rounded-lg"
              />
              <p className="mb-4 text-cyan-100">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-cyan-900 px-2 py-1 text-sm text-cyan-300"
                  >
                    <Code2 className="mr-1 h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </ScaleIn>
          </FadeIn>
        </div>
      )}
    </section>
  );
}
