'use client';

import { useRef, useState } from 'react';
import { Code2, Activity, Info, ChevronDown } from 'lucide-react';
import { ITimelineItem, timelineItems } from '@/lib/data/timelineData';
import { ScrollReveal } from './animations/ScrollReveal';
import { PulseScale } from './animations/PulseScale';
//import { useInView } from 'framer-motion';

export default function Timeline() {
  return (
    <section id="experience" className="relative min-h-screen">
      <div className="relative mb-8">
        <h2 className="text-2xl font-semibold text-cyan-300">
          Professional Experience
        </h2>
        <div className="absolute right-0 top-10 flex items-center text-[10px] italic text-cyan-400/60">
          <Info className="mr-1 w-2.5" />
          <span>
            All disclosed companies and projects are listed with permission
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1 top-[88px] w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500" />
      {timelineItems.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          index={index}
          isFirst={index === 0}
        />
      ))}
    </section>
  );
}

function TimelineItem({
  item,
  index,
  isFirst,
}: {
  item: ITimelineItem;
  index: number;
  isFirst: boolean;
}) {
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const projectsToShow = item.projects
    ? isExpanded
      ? item.projects
      : item.projects.slice(0, 2)
    : [];
  const hasMoreProjects = item.projects && item.projects.length > 2;

  return (
    <div className="relative mb-12 ml-6" ref={ref}>
      <div className="absolute -left-[27px] top-2 z-10 h-4 w-4 rounded-full border-2 border-cyan-400 bg-gray-900">
        <PulseScale className="absolute h-full w-full">
          <div className="h-full w-full rounded-full bg-cyan-400" />
        </PulseScale>
      </div>
      <ScrollReveal
        delay={index * 0.1}
        threshold={0.1}
        className="rounded-lg border border-cyan-800 bg-gradient-to-r from-gray-900 to-gray-800 p-5 shadow-xl"
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-cyan-300">
              {item.position}
            </h3>
            <p className="text-cyan-400">{item.company}</p>
            <p className="text-sm text-cyan-500">{item.period}</p>
          </div>
          {item.isActive && (
            <PulseScale
              scale={1.05}
              className="flex items-center rounded-full bg-cyan-500 px-2 py-1 text-xs font-semibold text-gray-900"
            >
              <div className="flex items-center">
                <Activity className="mr-1 h-3 w-3" />
                Active
              </div>
            </PulseScale>
          )}
        </div>
        <p className="mb-4 text-cyan-100">{item.description}</p>
        {item.technologies && (
          <div className="mb-4 flex flex-wrap gap-2">
            {item.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-flex items-center rounded-full bg-cyan-900 px-2.5 py-0.5 text-xs font-medium text-cyan-300"
              >
                <Code2 className="mr-1 h-3 w-3" />
                {tech}
              </span>
            ))}
          </div>
        )}
        {item.projects && (
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-cyan-200">Key Projects:</h4>
            <div
              className={`space-y-4 transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-100'}`}
            >
              {projectsToShow.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="rounded-lg bg-gray-800 bg-opacity-50 p-4"
                >
                  <h5 className="text-md mb-2 font-medium text-cyan-200">
                    {project.name}
                  </h5>
                  <p className="mb-2 text-sm text-cyan-500">{project.period}</p>
                  <p className="mb-3 text-cyan-100">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center rounded-full bg-cyan-900 px-2.5 py-0.5 text-xs font-medium text-cyan-300"
                        >
                          <Code2 className="mr-1 h-3 w-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {hasMoreProjects && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-cyan-900/30 py-2 text-sm text-cyan-300 transition-all hover:bg-cyan-900/50"
              >
                <span>{isExpanded ? 'Show Less' : 'See More'}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            )}
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}
