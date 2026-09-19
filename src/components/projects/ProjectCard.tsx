import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/types';
import { GithubIcon } from '../ui/Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/* Color mapping for projects */
const PROJECT_CONFIG: Record<string, {
  accent: string;
  borderHover: string;
  badge: string;
  previewBg: string;
  btnGradient: string;
  dotColor: string;
}> = {
  'fintrack-ai': {
    accent: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500',
    borderHover: 'hover:border-cyan-400/70 hover:shadow-cyan-500/20',
    badge: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40 shadow-sm shadow-cyan-500/20',
    previewBg: 'cyan',
    btnGradient: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/30',
    dotColor: 'bg-cyan-400',
  },
  'frosted-fine-cakes': {
    accent: 'bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500',
    borderHover: 'hover:border-amber-400/70 hover:shadow-amber-500/20',
    badge: 'bg-amber-500/20 text-amber-200 border-amber-400/40 shadow-sm shadow-amber-500/20',
    previewBg: 'amber',
    btnGradient: 'bg-gradient-to-r from-amber-500 via-orange-500 to-pink-600 hover:from-amber-400 hover:to-pink-500 shadow-amber-500/30',
    dotColor: 'bg-amber-400',
  },
  'careeros': {
    accent: 'bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500',
    borderHover: 'hover:border-purple-400/70 hover:shadow-purple-500/20',
    badge: 'bg-purple-500/20 text-purple-200 border-purple-400/40 shadow-sm shadow-purple-500/20',
    previewBg: 'brand',
    btnGradient: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-purple-500/30',
    dotColor: 'bg-purple-400',
  },
  'scorepulse': {
    accent: 'bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500',
    borderHover: 'hover:border-emerald-400/70 hover:shadow-emerald-500/20',
    badge: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40 shadow-sm shadow-emerald-500/20',
    previewBg: 'cyan',
    btnGradient: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/30',
    dotColor: 'bg-emerald-400',
  },
};

/* Abstract UI Preview with rich colorful components */
const AbstractPreview: React.FC<{ projectId: string }> = ({ projectId }) => {
  const previews: Record<string, React.ReactNode> = {
    'frosted-fine-cakes': (
      <div className="w-full h-full p-4 flex flex-col gap-3 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 rounded-full bg-amber-400/40 border border-amber-400/60 shadow-sm shadow-amber-400/30" />
          <div className="h-2.5 w-24 rounded bg-amber-300/30" />
          <div className="ml-auto flex gap-1.5">
            <div className="h-2 w-10 rounded bg-pink-400/30" />
            <div className="h-2 w-10 rounded bg-amber-400/30" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-xl bg-amber-500/15 border border-amber-400/25 flex items-center justify-center p-2 shadow-inner">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-400/40 to-pink-500/30" />
            </div>
          ))}
        </div>
      </div>
    ),
    'careeros': (
      <div className="w-full h-full p-4 flex flex-col gap-3 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 rounded-lg bg-purple-400/40 border border-purple-400/60 flex items-center justify-center shadow-sm shadow-purple-400/30">
            <span className="text-[9px] font-mono text-purple-200 font-bold">{'{}'}</span>
          </div>
          <div className="h-2.5 w-20 rounded bg-purple-300/30" />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="w-1/3 rounded-xl bg-purple-500/15 border border-purple-400/25 p-2.5 space-y-2">
            <div className="h-2 w-full rounded bg-purple-300/30" />
            <div className="h-2 w-3/4 rounded bg-purple-300/30" />
            <div className="h-2 w-full rounded bg-pink-400/30" />
          </div>
          <div className="flex-1 rounded-xl bg-purple-500/15 border border-purple-400/25 p-2.5 space-y-2">
            <div className="h-2 w-1/2 rounded bg-cyan-300/30" />
            <div className="flex gap-2">
              <div className="h-10 flex-1 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/20" />
              <div className="h-10 flex-1 rounded-lg bg-gradient-to-br from-pink-500/30 to-purple-500/20" />
            </div>
          </div>
        </div>
      </div>
    ),
    'fintrack-ai': (
      <div className="w-full h-full p-4 flex flex-col gap-3 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 rounded-lg bg-cyan-400/40 border border-cyan-400/60 flex items-center justify-center shadow-sm shadow-cyan-400/30">
            <span className="text-[9px] font-mono text-cyan-100 font-bold">$</span>
          </div>
          <div className="h-2.5 w-24 rounded bg-cyan-300/30" />
        </div>
        <div className="flex-1 rounded-xl bg-cyan-500/15 border border-cyan-400/25 flex items-end px-3 pb-2.5 gap-1.5 shadow-inner">
          {[4, 7, 3, 9, 6, 11, 8, 12, 9, 14, 11, 15].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-cyan-400/50 to-blue-300/60 shadow-sm shadow-cyan-400/20"
              style={{ height: `${h * 2.5}px` }}
            />
          ))}
        </div>
      </div>
    ),
    'scorepulse': (
      <div className="w-full h-full p-4 flex flex-col gap-3 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 rounded-lg bg-emerald-400/40 border border-emerald-400/60 flex items-center justify-center shadow-sm shadow-emerald-400/30">
            <span className="text-[9px] font-mono text-emerald-100 font-bold">⚡</span>
          </div>
          <div className="h-2.5 w-20 rounded bg-emerald-300/30" />
        </div>
        <div className="space-y-2 flex-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-emerald-500/15 border border-emerald-400/25">
              <div className="h-5 w-5 rounded bg-emerald-400/40" />
              <div className="flex-1 space-y-1">
                <div className="h-2 w-3/4 rounded bg-emerald-300/30" />
              </div>
              <div className="text-[9px] font-mono text-cyan-300 font-semibold">vs</div>
              <div className="flex-1 space-y-1 text-right">
                <div className="h-2 w-3/4 rounded bg-teal-300/30 ml-auto" />
              </div>
              <div className="h-5 w-5 rounded bg-teal-400/40" />
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="w-full h-full rounded-2xl bg-surface-900/90 border border-white/10 overflow-hidden shadow-inner">
      {previews[projectId]}
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const hasLive = !!project.liveUrl;
  const hasGithub = !!project.githubUrl;
  const config = PROJECT_CONFIG[project.id] || PROJECT_CONFIG['careeros'];

  return (
    <div className={`project-card group rounded-2xl border border-purple-500/25 ${config.borderHover} overflow-hidden shadow-xl`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Preview with colored top accent */}
        <div className="lg:col-span-5 h-48 sm:h-56 lg:h-auto lg:min-h-[280px] relative overflow-hidden p-3.5">
          <div className={`absolute top-0 left-0 right-0 h-1.5 ${config.accent}`} />
          <AbstractPreview projectId={project.id} />
          <div className="absolute top-6 left-6 text-xs font-mono font-bold text-white/40 tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            {/* Colorful category badge */}
            <span className={`inline-flex items-center text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${config.badge} mb-3.5`}>
              {project.category}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading mb-2.5 flex items-center gap-2">
              <span>{project.title}</span>
              {hasLive && (
                <span className="relative flex h-2.5 w-2.5 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
              )}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-5 font-sans">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-surface-900 text-slate-200 text-xs font-mono font-medium border border-purple-500/25 transition-all duration-200 hover:border-pink-400 hover:text-pink-200 hover:bg-pink-500/15 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              {project.keyFeatures.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-pink-400 font-mono font-bold mt-px shrink-0">›</span>
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-purple-500/20">
            {hasGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-200 hover:text-white bg-surface-900 hover:bg-surface-850 border border-purple-500/30 hover:border-pink-400 transition-all duration-200 hover:scale-105"
              >
                <GithubIcon className="w-4 h-4 text-cyan-300" />
                <span>Source</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-500 border border-purple-500/20">
                <GithubIcon className="w-3.5 h-3.5 opacity-40" />
                <span>Repo in progress</span>
              </span>
            )}
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white ${config.btnGradient} transition-all duration-200 shadow-md hover:scale-105 active:scale-95`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
