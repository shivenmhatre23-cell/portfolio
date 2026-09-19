import React from 'react';
import { Code2, Database, Cpu, GitBranch, Braces, Terminal } from 'lucide-react';

/* ──────────────
   Tiny code block
   ────────────── */
const CodeSnippet: React.FC<{
  lines: React.ReactNode[];
  className?: string;
}> = ({ lines, className = '' }) => (
  <div
    className={`rounded-xl bg-surface-900/90 border border-purple-500/30 px-4 py-3.5 font-mono text-[11px] leading-[1.7] text-slate-200 overflow-hidden shadow-inner ${className}`}
  >
    {lines.map((line, i) => (
      <div key={i} className="whitespace-nowrap flex">
        <span className="text-purple-400/50 mr-3.5 select-none w-4 text-right shrink-0 font-semibold">{i + 1}</span>
        <span>{line}</span>
      </div>
    ))}
  </div>
);

/* ──────────────
   Floating badge
   ────────────── */
const FloatingBadge: React.FC<{
  icon: React.ReactNode;
  label: string;
  className?: string;
  animClass?: string;
  delay?: string;
  badgeStyle?: string;
}> = ({ icon, label, className = '', animClass = 'hero-float', delay = '0ms', badgeStyle = '' }) => (
  <div
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border backdrop-blur-md text-[11px] font-mono font-medium shadow-xl transition-transform hover:scale-110 cursor-default ${animClass} ${badgeStyle} ${className}`}
    style={{ animationDelay: delay }}
  >
    {icon}
    <span>{label}</span>
  </div>
);

/* ═══════════════
   DeveloperVisual
   ═══════════════ */
export const DeveloperVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none select-none">
      {/* Background colorful grid */}
      <div className="absolute inset-0 hero-visual-grid opacity-[0.08] rounded-2xl pointer-events-none" />

      {/* Multi-color ambient glow aura */}
      <div className="absolute -inset-6 bg-gradient-to-r from-pink-500/25 via-purple-600/30 to-cyan-500/25 rounded-3xl blur-[70px] pointer-events-none" />

      {/* Main card with colorful gradient border */}
      <div className="relative rounded-2xl border border-pink-500/40 bg-surface-950/80 backdrop-blur-xl p-5 sm:p-6 space-y-4 overflow-hidden transition-all duration-300 hover:border-cyan-400/60 shadow-[0_12px_45px_-10px_rgba(236,72,153,0.35),0_0_30px_-5px_rgba(6,182,212,0.3)]">
        {/* Editor chrome with colorful mac buttons */}
        <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
            <span className="ml-2.5 text-[11px] font-mono text-cyan-300 font-medium">developer.ts</span>
          </div>
          <span className="text-[10px] font-mono text-pink-400/80 uppercase tracking-wider font-semibold">Active Session</span>
        </div>

        {/* Code snippet with crazy lively syntax highlighting */}
        <CodeSnippet
          lines={[
            <span key="1">
              <span className="text-pink-400 font-semibold">const</span>{' '}
              <span className="text-cyan-300 font-semibold">shiven</span>{' '}
              <span className="text-yellow-400">=</span>{' '}
              <span className="text-purple-300">{'{'}</span>
            </span>,
            <span key="2">
              {'  '}<span className="text-slate-400">role:</span>{' '}
              <span className="text-emerald-300 font-medium">"CSE Student & Builder"</span>,
            </span>,
            <span key="3">
              {'  '}<span className="text-slate-400">stack:</span>{' '}
              <span className="text-purple-300">[</span>
              <span className="text-cyan-300">"C++"</span>,{' '}
              <span className="text-amber-300">"Python"</span>,{' '}
              <span className="text-blue-300">"React"</span>,{' '}
              <span className="text-emerald-300">"FastAPI"</span>
              <span className="text-purple-300">]</span>,
            </span>,
            <span key="4">
              {'  '}<span className="text-slate-400">focus:</span>{' '}
              <span className="text-pink-300 font-medium">"DSA · Backend · AI/ML"</span>,
            </span>,
            <span key="5">
              {'  '}<span className="text-slate-400">status:</span>{' '}
              <span className="text-yellow-300 font-medium">"building real products"</span>
            </span>,
            <span key="6" className="text-purple-300">{'};'}</span>,
          ]}
        />

        {/* Floating vibrant badges */}
        <div className="relative h-24 sm:h-28">
          <FloatingBadge
            icon={<Code2 className="w-3.5 h-3.5 text-cyan-300" />}
            label="C++"
            className="absolute top-1 left-2"
            badgeStyle="bg-cyan-500/15 text-cyan-200 border-cyan-400/40 shadow-cyan-500/20"
            delay="0ms"
          />
          <FloatingBadge
            icon={<Database className="w-3.5 h-3.5 text-blue-400" />}
            label="PostgreSQL"
            className="absolute top-4 right-4 hero-float-reverse"
            badgeStyle="bg-blue-500/15 text-blue-200 border-blue-400/40 shadow-blue-500/20"
            delay="600ms"
          />
          <FloatingBadge
            icon={<Cpu className="w-3.5 h-3.5 text-pink-400" />}
            label="AI / ML"
            className="absolute bottom-1 left-6"
            badgeStyle="bg-pink-500/15 text-pink-200 border-pink-400/40 shadow-pink-500/20"
            delay="1200ms"
          />
          <FloatingBadge
            icon={<Braces className="w-3.5 h-3.5 text-purple-400" />}
            label="React"
            className="absolute bottom-3 right-3 hero-float-reverse"
            badgeStyle="bg-purple-500/15 text-purple-200 border-purple-400/40 shadow-purple-500/20"
            delay="300ms"
          />
          <FloatingBadge
            icon={<GitBranch className="w-3.5 h-3.5 text-emerald-400" />}
            label="FastAPI"
            className="absolute top-12 left-1/2 -translate-x-1/2"
            badgeStyle="bg-emerald-500/15 text-emerald-200 border-emerald-400/40 shadow-emerald-500/20"
            delay="900ms"
          />
        </div>

        {/* Status line with colorful prompt */}
        <div className="flex items-center gap-2 text-[11px] font-mono pt-2 border-t border-purple-500/20">
          <Terminal className="w-3.5 h-3.5 text-pink-400" />
          <span className="text-cyan-300 font-medium">~/iiit-bhubaneswar</span>
          <span className="text-emerald-400 ml-auto font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            online & building
          </span>
        </div>
      </div>
    </div>
  );
};
