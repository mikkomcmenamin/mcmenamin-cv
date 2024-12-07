'use client';

import {Award, GraduationCap} from 'lucide-react';
import { certifications, educationItems } from '@/lib/data/educationData';
import { FadeIn } from './animations/FadeIn';
import { ScaleIn } from './animations/ScaleIn';

export default function Education() {
  return (
    <section>
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 flex items-center text-xl font-semibold text-cyan-200">
            <GraduationCap className="mr-2" />
            Education
          </h3>
          {educationItems.map((item, index) => (
            <FadeIn
              key={index}
              delay={index * 0.2}
              className="mb-6 rounded-lg border border-cyan-800 bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-xl"
            >
              <h4 className="text-lg font-semibold text-cyan-300">
                {item.degree}
              </h4>
              <p className="text-cyan-400">{item.school}</p>
              <p className="text-sm text-cyan-500">{item.year}</p>
            </FadeIn>
          ))}
        </div>
        <div>
          <h3 className="mb-4 flex items-center text-xl font-semibold text-cyan-200">
            <Award className="mr-2" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <ScaleIn
                key={index}
                delay={index * 0.1}
                className="rounded-lg border border-cyan-800 bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-xl transition-colors duration-300 hover:border-cyan-600"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cyan-300">{cert}</span>
                  <Award className="text-cyan-500" size={20} />
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
