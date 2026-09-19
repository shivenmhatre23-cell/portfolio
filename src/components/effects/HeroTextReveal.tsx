import React, { useEffect, useRef, useState } from 'react';

interface HeroTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  glitchInterval?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const HeroTextReveal: React.FC<HeroTextRevealProps> = ({
  text,
  className = '',
  delay = 200,
  glitchInterval = 6000,
  as: Tag = 'h1',
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Periodic glitch burst
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, glitchInterval);
    return () => clearInterval(interval);
  }, [glitchInterval]);

  return (
    <span ref={ref} className={`inline-block relative ${className}`}>
      {/* Glitch clones */}
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              color: 'rgba(52, 211, 153, 0.7)',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translate(-3px, -1px)',
            }}
            aria-hidden
          >
            {text}
          </span>
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              color: 'rgba(236, 72, 153, 0.5)',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              transform: 'translate(3px, 1px)',
            }}
            aria-hidden
          >
            {text}
          </span>
        </>
      )}
      {/* Main text */}
      <Tag
        className={`relative inline-block ${isGlitching ? 'glitch-shake' : ''}`}
        style={{
          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transitionDelay: `${delay}ms`,
        }}
      >
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              opacity: isRevealed ? 1 : 0,
              transform: isRevealed
                ? 'translateY(0) rotateX(0deg)'
                : 'translateY(100%) rotateX(-80deg)',
              transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)`,
              transitionDelay: `${delay + i * 50}ms`,
              transformOrigin: 'bottom center',
              display: 'inline-block',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </Tag>
    </span>
  );
};
