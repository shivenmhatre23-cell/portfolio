import React, { useEffect, useRef, useState } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 35,
  className = '',
  animateBy = 'words',
  direction = 'bottom',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement | HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {elements.map((segment, index) => {
        const offset = direction === 'top' ? -18 : 18;
        return (
          <span
            key={index}
            className="inline-block transition-all ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              filter: isVisible ? 'blur(0px)' : 'blur(10px)',
              transform: isVisible ? 'translateY(0)' : `translateY(${offset}px)`,
              transitionDuration: '0.65s',
              transitionDelay: `${index * delay}ms`,
              marginRight: animateBy === 'words' ? '0.3em' : '0em',
            }}
          >
            {segment}
          </span>
        );
      })}
    </span>
  );
};
