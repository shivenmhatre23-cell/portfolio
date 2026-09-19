import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';
import { GraduationCap, Code2, Sparkles, BookOpen } from 'lucide-react';

const TimelineStep: React.FC<{
  year: string;
  text: React.ReactNode;
  icon: React.ReactNode;
  iconColor: string;
  isLast?: boolean;
}> = ({ year, text, icon, iconColor, isLast = false }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
      <div className={`w-9 h-9 rounded-full border border-white/15 ${iconColor} flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-lg`}>
        {icon}
      </div>
      {!isLast && (
        <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent mt-2.5" />
      )}
    </div>
    <div className="pb-6">
      <span className="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/20 border border-purple-400/40 text-purple-200">
        {year}
      </span>
      <p className="text-sm text-slate-300 leading-relaxed mt-2 font-sans">
        {text}
      </p>
    </div>
  </div>
);

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="spring-up" duration={800}>
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-surface-900 border border-amber-500/30 shadow-md shadow-amber-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-amber-300 uppercase">
                Education
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-purple-400">Foundations</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-5xl">
          <div className="lg:col-span-6">
            <ScrollReveal variant="spring-up" duration={800} delay={100}>
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-purple-500/30 space-y-4 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shrink-0 shadow-lg shadow-purple-500/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      IIIT Bhubaneswar
                    </h3>
                    <p className="text-sm font-mono text-cyan-300 font-medium mt-1">
                      B.Tech — Computer Science & Engineering
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-xs font-mono text-emerald-200 font-semibold shadow-sm">
                      <Sparkles className="w-3 h-3 text-emerald-300" />
                      2026 — Present
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-sans pt-2 border-t border-purple-500/20">
                  Building strong foundations in computer science theory, discrete mathematics, data structures, and computer architecture alongside campus tech community participation.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal variant="spring-right" duration={900} delay={200}>
              <div className="glass-card rounded-2xl border border-cyan-500/30 p-6 sm:p-7 shadow-xl">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-5">
                  Timeline & Growth
                </span>
                <TimelineStep
                  year="2026"
                  text="Enrolled in B.Tech Computer Science & Engineering at IIIT Bhubaneswar"
                  icon={<BookOpen className="w-4 h-4 text-purple-200" />}
                  iconColor="bg-gradient-to-br from-purple-600 to-indigo-600 shadow-purple-500/30"
                />
                <TimelineStep
                  year="Present"
                  text={<>Deepening C++ & DSA problem solving · Shipping web & AI applications</>}
                  icon={<Code2 className="w-4 h-4 text-cyan-200" />}
                  iconColor="bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/30"
                  isLast
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
