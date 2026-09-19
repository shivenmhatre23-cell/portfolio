import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { ScrollReveal } from '../effects/ScrollReveal';
import { ArrowUpRight, Sparkles, Mail, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const OPEN_TO = [
  { label: 'Hackathons', color: 'bg-pink-500' },
  { label: 'Coding competitions', color: 'bg-purple-500' },
  { label: 'Technical collaboration', color: 'bg-cyan-400' },
  { label: 'Interesting products', color: 'bg-emerald-400' },
  { label: 'Learning opportunities', color: 'bg-amber-400' },
  { label: 'Future engineering internships', color: 'bg-rose-400' },
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-gradient-to-tr from-pink-500/20 via-purple-600/20 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="spring-up" duration={800}>
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-surface-900 border border-pink-500/30 shadow-md shadow-pink-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-pink-300 uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300">Something Extraordinary.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
              I'm actively looking for opportunities to collaborate on projects, participate in hackathons, and learn from fellow engineers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 space-y-6">
            {/* Email Contact Card */}
            <ScrollReveal variant="spring-up" duration={800} delay={100}>
              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-pink-500/40 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 via-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/30 shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono font-semibold text-pink-300 uppercase tracking-wider">
                        Direct Email
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors font-mono block truncate"
                        title={PERSONAL_INFO.email}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-slate-200 hover:text-white bg-surface-900 hover:bg-surface-850 border border-purple-500/30 hover:border-pink-400 transition-all duration-200 active:scale-95 cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-300">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-cyan-300" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:from-pink-400 hover:to-cyan-400 transition-all duration-200 shadow-md shadow-pink-500/25 hover:scale-105 active:scale-95"
                    >
                      <span>Send Mail</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Opportunities Pill Box */}
            <ScrollReveal variant="spring-up" duration={800} delay={150}>
              <div className="glass-card p-6 rounded-2xl border border-purple-500/30 shadow-xl space-y-4">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-2">
                  Open to Opportunities Regarding:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {OPEN_TO.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <span className={`w-2 h-2 rounded-full ${item.color} shrink-0 animate-pulse`} />
                      <span className="font-sans font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Social Buttons */}
            <ScrollReveal variant="spring-up" duration={800} delay={200}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero-primary group"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero-secondary group"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal variant="spring-right" duration={900} delay={200}>
              <div className="glass-card rounded-2xl border border-pink-500/30 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-purple-500/20 bg-surface-900/90">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/40" />
                    <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400/40" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/40" />
                    <span className="ml-2.5 text-xs font-mono text-cyan-300 font-semibold">contact.sh</span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                </div>
                <div className="p-6 font-mono text-xs leading-relaxed space-y-4 bg-surface-950/80">
                  <div className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold shrink-0">$</span>
                    <span className="text-slate-200">
                      echo <span className="text-emerald-300 font-medium">"Let's build something crazy"</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold shrink-0">$</span>
                    <span className="text-slate-200">
                      curl <span className="text-cyan-300 font-medium">--connect</span> <span className="text-yellow-300 font-medium">https://linkedin.com/in/shiven-mhatre-212a63434/</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold shrink-0">$</span>
                    <span className="text-slate-200">
                      gh <span className="text-cyan-300 font-medium">repo list</span> <span className="text-purple-300">--public</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold shrink-0">$</span>
                    <span className="text-slate-200">
                      cat <span className="text-pink-300 font-medium">availability.json</span>
                    </span>
                  </div>
                  <div className="pl-4 border-l-2 border-pink-500/40 space-y-1.5 text-slate-300 py-1">
                    <div>
                      <span className="text-pink-400 font-semibold">status:</span> <span className="text-emerald-300">open to hackathons & internships</span>
                    </div>
                    <div>
                      <span className="text-cyan-300 font-semibold">focus:</span> <span className="text-yellow-200">C++, DSA, FastAPI, Full-Stack & AI</span>
                    </div>
                    <div>
                      <span className="text-pink-300 font-semibold">email:</span>{' '}
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-cyan-300 underline underline-offset-2 hover:text-white transition-colors"
                      >
                        "{PERSONAL_INFO.email}"
                      </a>
                    </div>
                    <div>
                      <span className="text-purple-300 font-semibold">response:</span> <span className="text-cyan-200">usually within 24 hours</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-pink-400">
                    <span className="font-bold">$</span>
                    <span className="w-2.5 h-4 bg-pink-400 cursor-blink" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
