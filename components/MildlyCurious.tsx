'use client'

import { Music } from 'lucide-react'

export default function MildlyCurious() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-cyan-300 flex items-center gap-2">
        <Music className="w-6 h-6" />
        Ember Falls
      </h2>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl border border-cyan-800">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">Ember Falls</h3>
          <p className="text-cyan-100 mb-4">
            From 2010 to 2019, I was a founding member of the melodic metal band Ember Falls, where I served as a keyboardist, bassist, songwriter, and producer. The band signed a worldwide record deal with Universal Music / Spinefarm Records in 2015.
          </p>
          <p className="text-cyan-100 mb-6">
            Ember Falls songs have been streamed over 15 million times across various platforms.
          </p>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/uzSJiXVyCZs"
              title="Ember Falls Music Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

