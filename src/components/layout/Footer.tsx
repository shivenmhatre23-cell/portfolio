import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Learning', href: '#learning' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-500/25 bg-surface-950/90 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-pink-500/10 via-purple-500/15 to-cyan-500/10 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-white text-base tracking-tight font-heading">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <span className="text-xs text-cyan-300/80 font-mono block">
              CSE Student • Developer • Builder • IIIT Bhubaneswar
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-pink-300 transition-colors duration-200 link-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-surface-900 border border-purple-500/30 hover:border-pink-400 hover:bg-pink-500/10 transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-surface-900 border border-purple-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-surface-900 border border-purple-500/30 hover:border-pink-400 hover:bg-pink-500/10 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-pink-400" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-surface-900 border border-purple-500/30 hover:border-pink-400 hover:bg-pink-500/10 transition-all duration-200 shadow-md group"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="pt-6 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <span>© 2026 {PERSONAL_INFO.name}. All rights reserved.</span>
          <span className="flex items-center gap-1.5 text-purple-300/80">
            <span>Crafted with passion & curiosity</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
