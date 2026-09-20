import React, { useState } from 'react';
import { Copy, Check, Terminal, Play, Sparkles } from 'lucide-react';

type TerminalTab = 'profile' | 'skills' | 'projects' | 'status';

export const TerminalCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TerminalTab>('profile');
  const [copied, setCopied] = useState(false);

  const tabContents: Record<TerminalTab, { filename: string; content: React.ReactNode; rawText: string }> = {
    profile: {
      filename: 'developer.ts',
      rawText: `const developer = {
  name: "Shiven Mhatre",
  college: "IIIT Bhubaneswar",
  degree: "B.Tech CSE (1st Year)",
  contact: "shiveniiitbbsr@gmail.com",
  focus: ["Algorithms", "FastAPI", "React", "AI/ML"],
  status: "Shipping real projects"
};`,
      content: (
        <div className="space-y-1">
          <div className="text-slate-500">// TypeScript Developer Profile</div>
          <div>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-cyan-300">developer</span> = &#123;
          </div>
          <div className="pl-4">
            <span className="text-slate-400">name:</span>{' '}
            <span className="text-emerald-300">"Shiven Mhatre"</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">institution:</span>{' '}
            <span className="text-emerald-300">"IIIT Bhubaneswar"</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">degree:</span>{' '}
            <span className="text-amber-200">"B.Tech CSE (1st Year)"</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">contact:</span>{' '}
            <span className="text-pink-300">"shiveniiitbbsr@gmail.com"</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">primaryStack:</span> [
            <span className="text-emerald-300">"C++"</span>,{' '}
            <span className="text-emerald-300">"Python"</span>,{' '}
            <span className="text-emerald-300">"FastAPI"</span>,{' '}
            <span className="text-emerald-300">"React"</span>
            ],
          </div>
          <div className="pl-4">
            <span className="text-slate-400">mission:</span>{' '}
            <span className="text-emerald-300">"Building practical software & exploring AI"</span>
          </div>
          <div>&#125;;</div>
        </div>
      ),
    },
    skills: {
      filename: 'skills.sh',
      rawText: `$ ./inspect-skills.sh
[Core]     C, C++, Python, JavaScript
[Frontend] React, Next.js, Tailwind CSS
[Backend]  FastAPI, PostgreSQL, Alembic, REST APIs
[Domains]  Data Structures, Algorithms, AI/ML`,
      content: (
        <div className="space-y-1.5">
          <div className="text-emerald-400 flex items-center gap-1.5">
            <span>➜</span>
            <span className="text-cyan-300">~</span>
            <span>./inspect-skills.sh</span>
          </div>
          <div className="text-slate-300 pl-2 border-l border-emerald-500/30 space-y-1">
            <div className="flex gap-2">
              <span className="text-purple-400 font-semibold">[Languages]</span>
              <span className="text-slate-300">C, C++, Python, JavaScript</span>
            </div>
            <div className="flex gap-2">
              <span className="text-cyan-400 font-semibold">[Web / UI]</span>
              <span className="text-slate-300">React, Next.js, Tailwind CSS, HTML/CSS</span>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400 font-semibold">[Backend]</span>
              <span className="text-slate-300">FastAPI, PostgreSQL, Alembic, REST APIs</span>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-400 font-semibold">[Focus]</span>
              <span className="text-slate-300">Data Structures & Algorithms, AI/ML</span>
            </div>
          </div>
        </div>
      ),
    },
    projects: {
      filename: 'projects.json',
      rawText: `{
  "featured": [
    { "name": "FinTrack AI", "tech": "React, TanStack Start, Tailwind", "live": "fintrack-ai.pages.dev" },
    { "name": "CareerOS", "tech": "FastAPI, PostgreSQL, Alembic" },
    { "name": "ScorePulse", "tech": "Next.js, React, TypeScript" },
    { "name": "Frosted & Fine Cakes", "tech": "HTML, CSS, JS", "live": "frosted-and-fine-cakes.netlify.app" }
  ]
}`,
      content: (
        <div className="space-y-1">
          <div className="text-slate-500">// Featured Repositories & Deployments</div>
          <div className="text-slate-400">&#123;</div>
          <div className="pl-4">
            <span className="text-purple-400">"FinTrack AI"</span>:{' '}
            <span className="text-emerald-300">"React + TanStack + AI Exploration [LIVE]"</span>,
          </div>
          <div className="pl-4">
            <span className="text-purple-400">"CareerOS"</span>:{' '}
            <span className="text-emerald-300">"FastAPI + PostgreSQL + Alembic"</span>,
          </div>
          <div className="pl-4">
            <span className="text-purple-400">"ScorePulse"</span>:{' '}
            <span className="text-emerald-300">"Next.js Provider Architecture"</span>,
          </div>
          <div className="pl-4">
            <span className="text-purple-400">"Frosted & Fine Cakes"</span>:{' '}
            <span className="text-emerald-300">"Responsive Bakery Website [LIVE]"</span>
          </div>
          <div className="text-slate-400">&#125;</div>
        </div>
      ),
    },
    status: {
      filename: 'status.log',
      rawText: `[BUILD]  status: OK (0 errors, 0 warnings)
[ACTIVE] solving DSA problems in C++
[TARGET] preparing for hackathons & internships
[BRANCH] main (git clean)`,
      content: (
        <div className="space-y-1.5 font-mono text-[11px]">
          <div className="text-slate-500">// Live System Health & Focus</div>
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>SYSTEM HEALTH: NOMINAL (Vite + React 19 + TypeScript)</span>
          </div>
          <div className="text-slate-300 pl-2 border-l border-emerald-500/20 space-y-1">
            <div><span className="text-cyan-400">ACTIVE:</span> Deepening C++ OOP & algorithmic problem solving</div>
            <div><span className="text-purple-400">BACKEND:</span> Asynchronous API modeling with FastAPI & PostgreSQL</div>
            <div><span className="text-amber-400">COLLAB:</span> Open for team hackathons & engineering internships</div>
          </div>
        </div>
      ),
    },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tabContents[activeTab].rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Floating interactive satellite badges with smooth floating animations */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-900/90 border border-emerald-500/30 backdrop-blur-md text-[11px] font-mono text-emerald-300 absolute -top-4 -right-4 z-20 shadow-xl shadow-emerald-500/10 animate-float">
        <Sparkles className="w-3 h-3 text-emerald-400" />
        <span>Live Interactive Shell</span>
      </div>

      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-900/90 border border-white/10 backdrop-blur-md text-[10px] font-mono text-cyan-300 absolute -bottom-3 -left-3 z-20 shadow-lg animate-float-reverse">
        <span>⚡ C++ & FastAPI</span>
      </div>

      {/* Laser Border Beam Wrapper */}
      <div className="border-beam-wrapper shadow-2xl shadow-emerald-500/10">
        <div className="border-beam-inner overflow-hidden font-mono text-xs">
          {/* Terminal Titlebar & Clickable Tabs */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-dark-900 border-b border-white/[0.08] select-none">
            {/* Window control dots */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {(['profile', 'skills', 'projects', 'status'] as TerminalTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-all flex items-center gap-1 ${
                    activeTab === tab
                      ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  <span>{tab}</span>
                </button>
              ))}
            </div>

            {/* Copy button */}
            <button
              onClick={copyToClipboard}
              className="p-1 text-slate-400 hover:text-slate-200 transition-colors rounded hover:bg-white/10"
              title="Copy snippet"
              aria-label="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Active Filename sub-bar */}
          <div className="px-4 py-1.5 bg-dark-950/90 border-b border-white/5 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
              <Play className="w-2.5 h-2.5 fill-emerald-400" />
              <span>~/{tabContents[activeTab].filename}</span>
            </span>
            <span className="text-[10px] text-slate-500">click tabs to switch views</span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-5 bg-dark-950/80 overflow-x-auto text-slate-300 leading-relaxed font-mono min-h-[175px]">
            {tabContents[activeTab].content}

            {/* Prompt Footer */}
            <div className="mt-4 pt-3 border-t border-white/5 text-slate-500 flex items-center gap-1.5 text-[11px]">
              <span className="text-emerald-400 font-semibold">shiven@iiit-bhubaneswar:~$</span>
              <span className="text-slate-300 animate-pulse">git status --short</span>
              <span className="text-emerald-400 ml-auto">[clean]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
