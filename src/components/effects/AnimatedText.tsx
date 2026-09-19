import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: 'char-reveal' | 'glitch' | 'wave' | 'split-flip' | 'gradient-shift';
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  variant = 'char-reveal',
  delay = 0,
  stagger = 40,
  as: Tag = 'span',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  if (variant === 'glitch') {
    return (
      // @ts-expect-error Tag type mismatch is acceptable for polymorphic component
      <Tag ref={ref} className={`glitch-text ${isVisible ? 'glitch-active' : 'glitch-hidden'} ${className}`} data-text={text}>
        {text}
      </Tag>
    );
  }

  if (variant === 'gradient-shift') {
    return (
      // @ts-expect-error Tag type mismatch
      <Tag ref={ref} className={`animated-gradient-text ${isVisible ? 'gradient-active' : ''} ${className}`}>
        {text}
      </Tag>
    );
  }

  if (variant === 'wave') {
    return (
      // @ts-expect-error Tag type mismatch
      <Tag ref={ref} className={`inline-flex flex-wrap ${className}`}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              transitionDelay: `${delay + i * stagger}ms`,
              transitionDuration: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              transitionProperty: 'all',
              transform: isVisible ? 'translateY(0) rotate(0)' : 'translateY(40px) rotate(10deg)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </Tag>
    );
  }

  if (variant === 'split-flip') {
    return (
      // @ts-expect-error Tag type mismatch
      <Tag ref={ref} className={`inline-flex ${className}`}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
          >
            <span
              className="inline-block"
              style={{
                transitionDelay: `${delay + i * stagger}ms`,
                transitionDuration: '800ms',
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionProperty: 'all',
                transform: isVisible ? 'rotateX(0deg) translateY(0)' : 'rotateX(-90deg) translateY(100%)',
                opacity: isVisible ? 1 : 0,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  // Default: char-reveal
  return (
    // @ts-expect-error Tag type mismatch
    <Tag ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transitionDelay: `${delay + i * stagger}ms`,
            transitionDuration: '700ms',
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionProperty: 'all',
            transform: isVisible ? 'translateY(0) rotate(0) scale(1)' : 'translateY(60px) rotate(-8deg) scale(0.6)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
};
