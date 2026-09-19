import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <ScrollReveal
      variant="spring-up"
      duration={900}
      className={`mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 rounded-full bg-surface-900 border border-brand-500/20 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-brand-400 uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#f5f5f5] font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
};
