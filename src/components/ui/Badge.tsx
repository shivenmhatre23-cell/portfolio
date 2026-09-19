import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'slate' | 'outline' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1.5';

  const variantClasses = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    slate: 'bg-white/[0.04] text-slate-300 border border-white/[0.08]',
    outline: 'bg-transparent text-slate-400 border border-white/10',
    neutral: 'bg-dark-800 text-slate-300 border border-white/5',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-mono font-medium transition-colors ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
