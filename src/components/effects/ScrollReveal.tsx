import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'spring-up' | 'spring-down' | 'spring-left' | 'spring-right' | 'flip-x' | 'flip-y' | 'scale-bounce' | 'blur-in' | 'text-reveal' | 'glitch-in' | 'morph';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'spring-up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) observer.unobserve(domRef.current);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const el = domRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold, once]);

  // Check for reduced motion
  const prefersReduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const getVariantStyles = (): React.CSSProperties => {
    const easing = isVisible
      ? 'cubic-bezier(0.16, 1, 0.3, 1)'
      : 'cubic-bezier(0.16, 1, 0.3, 1)';

    const base: React.CSSProperties = {
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: easing,
      transitionProperty: 'opacity, transform',
      willChange: 'transform, opacity',
    };

    if (!isVisible) {
      switch (variant) {
        case 'spring-up':
          return { ...base, opacity: 0, transform: 'translateY(32px)' };
        case 'spring-down':
          return { ...base, opacity: 0, transform: 'translateY(-24px)' };
        case 'spring-left':
          return { ...base, opacity: 0, transform: 'translateX(-40px)' };
        case 'spring-right':
          return { ...base, opacity: 0, transform: 'translateX(40px)' };
        case 'flip-x':
          return { ...base, opacity: 0, transform: 'perspective(800px) rotateX(12deg) translateY(20px)' };
        case 'flip-y':
          return { ...base, opacity: 0, transform: 'perspective(800px) rotateY(12deg) translateX(20px)' };
        case 'scale-bounce':
          return { ...base, opacity: 0, transform: 'scale(0.95)' };
        case 'blur-in':
          return { ...base, opacity: 0, filter: 'blur(8px)' };
        case 'text-reveal':
          return { ...base, opacity: 0, transform: 'translateY(100%)' };
        case 'glitch-in':
          return { ...base, opacity: 0, transform: 'translateX(-12px)', filter: 'blur(2px)' };
        case 'morph':
          return { ...base, opacity: 0, transform: 'scaleY(0.96) scaleX(0.98)', transformOrigin: 'bottom center' };
        default:
          return { ...base, opacity: 0, transform: 'translateY(24px)' };
      }
    }

    return { ...base, opacity: 1, transform: 'none', filter: 'none' };
  };

  return (
    <div ref={domRef} style={getVariantStyles()} className={className}>
      {children}
    </div>
  );
};
