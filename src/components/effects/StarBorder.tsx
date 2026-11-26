import React from 'react';

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
  onClick?: () => void;
  [key: string]: unknown;
}

export const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'div',
  className = '',
  color = '#ec4899',
  speed = '4s',
  children,
  onClick,
  ...props
}) => {
  return (
    <Component
      onClick={onClick}
      className={`relative inline-block overflow-hidden rounded-xl p-[1px] ${className}`}
      {...props}
    >
      {/* Animated gradient spinning border */}
      <div
        className="absolute inset-[-150%] animate-spin-slow opacity-80 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${color} 60deg, #06b6d4 120deg, transparent 180deg, #8b5cf6 240deg, ${color} 300deg, transparent 360deg)`,
          animationDuration: speed,
        }}
      />
      {/* Inner surface content */}
      <div className="relative z-10 w-full h-full rounded-[11px] bg-surface-950/90 backdrop-blur-xl">
        {children}
      </div>
      <style>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 4s linear infinite;
        }
      `}</style>
    </Component>
  );
};
