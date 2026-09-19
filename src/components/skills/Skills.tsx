import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';

const SKILL_GROUPS = [
  {
    number: '01',
    title: 'Programming Languages',
    dotColor: 'bg-pink-500 shadow-pink-500/50 shadow-sm',
    accentBorder: 'border-pink-500/30 hover:border-pink-400/60',
    numberColor: 'text-pink-400',
    pillColor: 'hover:border-pink-400 hover:text-pink-200 hover:bg-pink-500/20',
    skills: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Web & UI Architecture',
    dotColor: 'bg-cyan-400 shadow-cyan-400/50 shadow-sm',
    accentBorder: 'border-cyan-500/30 hover:border-cyan-400/60',
    numberColor: 'text-cyan-400',
    pillColor: 'hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-500/20',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '03',
    title: 'Backend, Systems & Data',
    dotColor: 'bg-emerald-400 shadow-emerald-400/50 shadow-sm',
    accentBorder: 'border-emerald-500/30 hover:border-emerald-400/60',
    numberColor: 'text-emerald-400',
    pillColor: 'hover:border-emerald-400 hover:text-emerald-200 hover:bg-emerald-500/20',
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Alembic'],
  },
  {
    number: '04',
    title: 'Tools & Domains of Interest',
    dotColor: 'bg-amber-400 shadow-amber-400/50 shadow-sm',
    accentBorder: 'border-amber-500/30 hover:border-amber-400/60',
    numberColor: 'text-amber-400',
    pillColor: 'hover:border-amber-400 hover:text-amber-200 hover:bg-amber-500/20',
    skills: ['Git', 'GitHub', 'VS Code', 'Artificial Intelligence', 'Machine Learning', 'Data Structures & Algorithms', 'Competitive Programming'],
  },
] as const;

const SkillGroup: React.FC<{
  number: string;
  title: string;
  dotColor: string;
  accentBorder: string;
  numberColor: string;
  pillColor: string;
  skills: readonly string[];
}> = ({ number, title, dotColor, accentBorder, numberColor, pillColor, skills }) => (
  <div className={`rounded-2xl border ${accentBorder} glass-card p-6 transition-all duration-300 group hover:-translate-y-1 shadow-lg`}>
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-2.5 h-2.5 rounded-full ${dotColor} shrink-0 animate-pulse`} />
      <span className={`text-xs font-mono font-bold tracking-wider ${numberColor}`}>
        {number}
      </span>
      <span className="text-[11px] font-mono text-purple-400/40">—</span>
      <h3 className="text-base font-bold text-white tracking-tight font-heading">
        {title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill) => (
        <span key={skill} className={`skill-pill ${pillColor}`}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="spring-up" duration={800}>
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-surface-900 border border-cyan-500/30 shadow-md shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
                Technical Skills
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
              Tooling & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">Technical Foundations</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <ScrollReveal
              key={group.number}
              variant="spring-up"
              duration={800}
              delay={idx * 100}
            >
              <SkillGroup
                number={group.number}
                title={group.title}
                dotColor={group.dotColor}
                accentBorder={group.accentBorder}
                numberColor={group.numberColor}
                pillColor={group.pillColor}
                skills={group.skills}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="spring-up" duration={800} delay={400}>
          <div className="mt-10 text-center">
            <span className="text-xs font-mono text-purple-300/80 tracking-wider px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 inline-block">
              ✨ Always learning • Continually shipping • Deepening fundamentals
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
