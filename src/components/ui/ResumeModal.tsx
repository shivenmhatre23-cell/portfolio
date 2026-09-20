import React from 'react';
import { X, Download, ExternalLink, GraduationCap, Code2, Briefcase, Mail } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, FEATURED_PROJECTS, EDUCATION_DATA } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-surface-900 border border-[#262626] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-surface-850">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-400"></span>
            <h3 className="font-mono text-sm font-semibold text-[#a3a3a3]">
              shiven_mhatre_resume.pdf — Preview
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#a3a3a3] hover:text-[#f5f5f5] bg-surface-800 hover:bg-surface-750 border border-[#262626] rounded-md transition-colors"
              title="Print / Save as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#737373] hover:text-[#f5f5f5] hover:bg-white/10 rounded-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#a3a3a3] font-sans text-sm">
          {/* Header Info */}
          <div className="border-b border-[#262626] pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#f5f5f5] font-heading">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-brand-400 font-mono text-sm mt-1">
              {PERSONAL_INFO.roleHeadline}
            </p>
            <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs text-[#737373]">
              <span>{EDUCATION_DATA.institution} • {PERSONAL_INFO.location}</span>
              <span>•</span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#a3a3a3] hover:text-brand-400 underline underline-offset-2 flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#a3a3a3] hover:text-brand-400 underline underline-offset-2 flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#a3a3a3] hover:text-brand-400 underline underline-offset-2 flex items-center gap-1"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-[#f5f5f5] font-semibold text-base mb-3">
              <GraduationCap className="w-4 h-4 text-brand-400" />
              <span>Education</span>
            </div>
            <div className="bg-surface-850 p-4 rounded-lg border border-[#262626]/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <span className="font-semibold text-[#a3a3a3]">{EDUCATION_DATA.institution}</span>
                <span className="text-xs font-mono text-brand-400">{EDUCATION_DATA.period}</span>
              </div>
              <p className="text-xs text-[#737373] mt-1">{EDUCATION_DATA.degree} in {EDUCATION_DATA.field}</p>
              <ul className="mt-2.5 space-y-1 text-xs text-[#a3a3a3] list-disc list-inside">
                {EDUCATION_DATA.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 text-[#f5f5f5] font-semibold text-base mb-3">
              <Code2 className="w-4 h-4 text-brand-400" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="bg-surface-850 p-3 rounded-lg border border-[#262626]/60">
                  <span className="font-mono text-brand-400 block mb-1.5 font-medium">{cat.title}:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 bg-surface-800 rounded border border-[#262626]/60 text-[#a3a3a3]">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center gap-2 text-[#f5f5f5] font-semibold text-base mb-3">
              <Briefcase className="w-4 h-4 text-brand-400" />
              <span>Featured Projects</span>
            </div>
            <div className="space-y-3">
              {FEATURED_PROJECTS.map((p) => (
                <div key={p.id} className="bg-surface-850 p-4 rounded-lg border border-[#262626]/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#a3a3a3]">{p.title}</span>
                      {p.statusBadge && (
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          p.liveUrl
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                            : 'bg-amber-500/10 text-amber-300 border-amber-500/25'
                        }`}>
                          {p.statusBadge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-[#737373]">[{p.technologies.join(', ')}]</span>
                  </div>
                  <p className="text-xs text-[#737373] mt-1">{p.description}</p>
                  <ul className="mt-2 space-y-1 text-xs text-[#a3a3a3] list-disc list-inside">
                    {p.keyFeatures.slice(0, 2).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact note */}
          <div className="bg-brand-500/10 border border-brand-500/20 rounded-lg p-3 text-xs text-brand-300 flex items-center gap-2">
            <Mail className="w-4 h-4 shrink-0" />
            <span>Open to technical internships, hackathons, and software engineering collaborations.</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#262626] bg-surface-850 flex items-center justify-between text-xs text-[#737373]">
          <span>Student at IIIT Bhubaneswar</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 hover:bg-white/15 text-[#f5f5f5] rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
