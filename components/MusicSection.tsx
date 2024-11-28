'use client';

import { Music } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';

export default function MusicSection() {
  return (
    <section id="music">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-cyan-300">
        <Music className="h-6 w-6" />
        Music
      </h2>
      <div className="space-y-6">
        <div className="rounded-lg border border-cyan-800 bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-xl">
          <h3 className="mb-4 text-xl font-semibold text-cyan-300">
            Ember Falls
          </h3>
          <p className="mb-4 text-cyan-100">
            From 2010 to 2019, I was a founding member of the melodic metal band
            Ember Falls, where I served as a keyboardist, bassist, songwriter,
            and producer. The band signed a worldwide record deal with Universal
            Music / Spinefarm Records in 2015.
          </p>
          <p className="mb-6 text-cyan-100">
            Ember Falls songs have been streamed over 15 million times across
            various platforms.
          </p>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <YouTubeEmbed
              videoId="uzSJiXVyCZs"
              title="Ember Falls Music Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
