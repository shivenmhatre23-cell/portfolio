import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';
import { MapPin, GraduationCap, Rocket, Lightbulb, Compass } from 'lucide-react';

const TimelineItem: React.FC<{
  year: string;
  text: React.ReactNode;
  icon: React.ReactNode;
  iconColor: string;
  isLast?: boolean;
}> = ({ year, text, icon, iconColor, isLast = false }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-full border border-white/10 ${iconColor} flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-lg`}>
        {icon}
      </div>
      {!isLast && (
        <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-500/40 via-cyan-500/30 to-transparent mt-2.5" />
      )}
    </div>
    <div className="pb-8">
      <span className="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-purple-200">
        {year}
      </span>
      <p className="text-sm text-slate-300 leading-relaxed mt-2 font-sans">
        {text}
      </p>
    </div>
  </div>
);

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="spring-up" duration={800}>
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-surface-900 border border-pink-500/30 shadow-md shadow-pink-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-pink-300 uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
              Curiosity Driven. <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300">Grounded in Code.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="spring-up" duration={800} delay={100}>
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-purple-500/30 space-y-4 text-slate-300 text-sm sm:text-[15px] leading-relaxed shadow-xl">
                <p>
                  I'm Shiven, a first-year Computer Science & Engineering student at{' '}
                  <span className="text-cyan-300 font-semibold underline decoration-cyan-400/40 underline-offset-4">IIIT Bhubaneswar</span>. I have a deep passion for understanding computational systems beneath the surface, building high-impact software, and experimenting with AI & developer APIs.
                </p>
                <p>
                  I believe in learning by shipping code—from crafting clean frontends and modular REST backends to implementing data structures from scratch. I am continuously improving my problem-solving fundamentals and exploring how intelligent systems can solve tangible problems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="spring-up" duration={800} delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-2xl border border-cyan-500/30 bg-surface-900/80 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider">
                      How I Learn
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    By building real things and solving edge cases. Every practical project teaches lessons lectures can't provide.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-pink-500/30 bg-surface-900/80 hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-pink-500/20 text-pink-300">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-pink-300 tracking-wider">
                      What Drives Me
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Curiosity about how systems work under the hood—from memory pointers and algorithms to scalable APIs and machine learning.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal variant="spring-right" duration={900} delay={200}>
              <div className="glass-card rounded-2xl border border-purple-500/30 p-6 shadow-2xl">
                <span className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 uppercase tracking-wider block mb-6">
                  My Journey & Milestones
                </span>
                <TimelineItem
                  year="2026"
                  text="Started B.Tech CSE at IIIT Bhubaneswar"
                  icon={<GraduationCap className="w-4 h-4 text-purple-200" />}
                  iconColor="bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/30"
                />
                <TimelineItem
                  year="2026"
                  text="Building full-stack projects & strengthening DSA fundamentals in C++"
                  icon={<MapPin className="w-4 h-4 text-cyan-200" />}
                  iconColor="bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/30"
                />
                <TimelineItem
                  year="Next"
                  text={<>Participating in hackathons, contributing to open-source & technical internships</>}
                  icon={<Rocket className="w-4 h-4 text-pink-200" />}
                  iconColor="bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/30"
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
