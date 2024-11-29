'use client';

import { ISkill, skills } from '@/lib/data/skillsData';
import { ScrollReveal } from './animations/ScrollReveal';
import { ProgressBar } from './animations/ProgressBar';
import { PulsingDot } from './animations/PulsingDot';

export default function Skills() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-cyan-300">Tech Skills</h2>
      <div className="grid grid-cols-2 gap-2 gap-x-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: ISkill; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1} className="relative">
      <div className="mb-1">
        <span className="block text-xs font-medium text-cyan-300 sm:text-sm">
          {skill.name}
        </span>
      </div>
      <div className="relative">
        <ProgressBar
          progress={skill.level}
          delay={index * 0.1}
          className="mb-2 sm:mb-4"
        />
        <PulsingDot
          position={`${skill.level}%`}
          className="top-[calc(100%-6px)] sm:top-[calc(100%-10px)]"
          size="6px"
        />
      </div>
    </ScrollReveal>
  );
}
