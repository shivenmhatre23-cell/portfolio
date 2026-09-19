import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { DeveloperVisual } from './DeveloperVisual';

interface HeroProps {
  onResumeClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick: _onResumeClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden scroll-mt-24"
    >
      {/* Dynamic ambient color glows */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[450px] bg-pink-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/6 w-[550px] h-[350px] bg-cyan-400/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── Left: Copy ── */}
          <div className="lg:col-span-6 space-y-6">
            {/* Lively Status badge */}
            <div
              className="hero-anim inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-xs font-mono font-medium tracking-wider text-pink-300 shadow-lg shadow-pink-500/10 backdrop-blur-md"
              style={{ animationDelay: '0ms' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="uppercase text-[11px]">Open to Learning • Building • Hackathons</span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            </div>

            {/* Heading */}
            <div className="hero-anim" style={{ animationDelay: '80ms' }}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] font-heading">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-400 to-purple-400 font-extrabold">{PERSONAL_INFO.name}.</span>
              </h1>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] font-heading">
                <span className="text-gradient-brand">I build things with code.</span>
              </h2>
            </div>

            {/* Supporting text */}
            <p
              className="hero-anim max-w-lg text-sm sm:text-base text-slate-300 leading-relaxed font-sans"
              style={{ animationDelay: '160ms' }}
            >
              1st-year CSE student at <strong className="text-cyan-300 font-medium">IIIT Bhubaneswar</strong> exploring software engineering, AI/ML, and turning ideas into real-world products.
            </p>

            {/* CTAs with crazy vibrant buttons */}
            <div
              className="hero-anim flex flex-wrap items-center gap-3.5 pt-1"
              style={{ animationDelay: '240ms' }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const targetEl = document.getElementById('projects');
                  if (targetEl) {
                    const navOffset = 76;
                    const elementPosition = targetEl.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    window.history.pushState(null, '', '#projects');
                  }
                }}
                className="btn-hero-primary group cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-secondary group"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-cyan-300 group-hover:text-white transition-colors duration-200" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Currently learning line with lively colorful chips */}
            <div
              className="hero-anim flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 pt-3"
              style={{ animationDelay: '340ms' }}
            >
              <span className="text-purple-300 font-semibold flex items-center gap-1">
                <span>⚡ Focus</span>
                <span>→</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-200 border border-cyan-400/30">C++</span>
              <span className="px-2.5 py-0.5 rounded-md bg-purple-500/15 text-purple-200 border border-purple-400/30">DSA</span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-200 border border-emerald-400/30">FastAPI</span>
              <span className="px-2.5 py-0.5 rounded-md bg-pink-500/15 text-pink-200 border border-pink-400/30">AI/ML</span>
            </div>
          </div>

          {/* ── Right: Visual ── */}
          <div className="lg:col-span-6 hero-anim" style={{ animationDelay: '200ms' }}>
            <DeveloperVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
