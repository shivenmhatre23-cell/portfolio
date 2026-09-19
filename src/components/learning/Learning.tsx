import React, { useState } from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const TRACKS = [
  {
    number: '01',
    title: 'Programming Foundations',
    colorText: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    stages: [
      { name: 'C', status: 'Learning' as const, note: 'Foundational syntax and systems-level thinking' },
      { name: 'C++', status: 'Exploring' as const, note: 'OOP, memory management, and the Standard Template Library' },
      { name: 'Python', status: 'Exploring' as const, note: 'Scripting, backend APIs, and ML experimentation' },
    ],
  },
  {
    number: '02',
    title: 'Algorithmic Problem Solving',
    colorText: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    stages: [
      { name: 'Data Structures & Algorithms', status: 'Learning' as const, note: 'Building intuition through arrays, trees, recursion, and complexity analysis' },
      { name: 'Competitive Programming', status: 'Next' as const, note: 'Speed, precision, and edge-case handling under time pressure' },
    ],
  },
  {
    number: '03',
    title: 'Software & Backend Architecture',
    colorText: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    stages: [
      { name: 'Git & GitHub', status: 'Learning' as const, note: 'Version control, branching, and collaboration workflows' },
      { name: 'REST APIs', status: 'Exploring' as const, note: 'RESTful design, request lifecycles, and documentation' },
      { name: 'FastAPI Backend', status: 'Exploring' as const, note: 'Server architecture, middleware, and async patterns with FastAPI' },
      { name: 'Databases & Alembic', status: 'Next' as const, note: 'Relational design, PostgreSQL, and schema migrations' },
    ],
  },
  {
    number: '04',
    title: 'Artificial Intelligence & ML',
    colorText: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    stages: [
      { name: 'Python for AI', status: 'Learning' as const, note: 'Data handling, libraries, and numerical computing' },
      { name: 'Mathematics & Linear Algebra', status: 'Learning' as const, note: 'Linear algebra, probability, and optimization basics' },
      { name: 'Machine Learning Models', status: 'Next' as const, note: 'Supervised learning, model evaluation, and data preprocessing' },
      { name: 'LLM & AI APIs', status: 'Next' as const, note: 'LLM APIs, prompt engineering, and intelligent workflows' },
    ],
  },
] as const;

type Status = 'Learning' | 'Exploring' | 'Next';

const STATUS_STYLES: Record<Status, string> = {
  Learning: 'text-pink-200 bg-pink-500/20 border-pink-400/50 shadow-sm shadow-pink-500/20',
  Exploring: 'text-cyan-200 bg-cyan-500/20 border-cyan-400/50 shadow-sm shadow-cyan-500/20',
  Next: 'text-purple-200 bg-purple-500/15 border-purple-400/35',
};

const StagePill: React.FC<{
  name: string;
  status: Status;
  note: string;
}> = ({ name, status, note }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`
        inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl
        text-xs font-mono font-semibold border transition-all duration-300 cursor-default
        ${STATUS_STYLES[status]}
        hover:scale-105 hover:shadow-lg
      `}>
        <span className="w-2 h-2 rounded-full bg-current animate-pulse shrink-0" />
        <span className="whitespace-nowrap">{name}</span>
      </div>

      <div
        className={`
          absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5
          w-60 p-3 rounded-xl
          bg-surface-900/95 border border-purple-500/40 shadow-2xl shadow-black/60
          text-xs text-slate-200 leading-relaxed
          pointer-events-none transition-all duration-200 z-30 backdrop-blur-md
          ${hovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-95'}
        `}
      >
        <span className="text-cyan-300 font-bold block mb-1 font-mono">Current Focus:</span>
        {note}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-2.5 h-2.5 bg-surface-900 border-r border-b border-purple-500/40 rotate-45 -mt-1.5" />
      </div>
    </div>
  );
};

export const Learning: React.FC = () => {
  return (
    <section id="learning" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="spring-up" duration={800}>
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-surface-900 border border-emerald-500/30 shadow-md shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-emerald-300 uppercase">
                Learning Journey
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
              Currently Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-pink-400">My Engineering Core</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
              Focusing on mastering programming fundamentals, systems thinking, and continuously exploring advanced backend and AI workflows.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {TRACKS.map((track, tIdx) => (
            <ScrollReveal
              key={track.number}
              variant="spring-up"
              duration={800}
              delay={tIdx * 100}
            >
              <div className={`rounded-2xl border ${track.borderColor} glass-card p-6 transition-all duration-300 hover:border-purple-400/60 shadow-lg`}>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className={`text-xs font-mono font-bold ${track.colorText} tracking-wider`}>
                    {track.number}
                  </span>
                  <span className="text-[11px] font-mono text-purple-400/40">—</span>
                  <h3 className="text-base font-bold text-white tracking-tight font-heading">
                    {track.title}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-0 flex-wrap">
                  {track.stages.map((stage, sIdx) => (
                    <React.Fragment key={stage.name}>
                      <StagePill
                        name={stage.name}
                        status={stage.status}
                        note={stage.note}
                      />
                      {sIdx < track.stages.length - 1 && (
                        <ArrowRight className="hidden sm:block w-4 h-4 text-purple-400/50 mx-2.5 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="spring-up" duration={800} delay={500}>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-mono">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-200">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              Active Study & Code
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Exploring & Building Projects
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-200">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Upcoming Exploration
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
