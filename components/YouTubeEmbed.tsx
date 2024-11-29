'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isLoaded) {
    return (
      <button
        onClick={loadVideo}
        className="group relative h-full w-full cursor-pointer bg-black"
        aria-label="Load video"
      >
        {/* Thumbnail */}
        <Image
          width={800}
          height={600}
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
        />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 transition-colors group-hover:bg-red-700">
            <div className="ml-1 h-0 w-0 border-b-8 border-l-[16px] border-t-8 border-b-transparent border-l-white border-t-transparent" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <iframe
      className="h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      loading="lazy"
    />
  );
}
