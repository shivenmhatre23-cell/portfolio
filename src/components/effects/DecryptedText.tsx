import React, { useEffect, useRef, useState, useCallback } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  characters?: string;
  animateOn?: 'view' | 'hover';
  className?: string;
  encryptedClassName?: string;
}

const DEFAULT_CHARS = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 45,
  maxIterations = 8,
  sequential = true,
  revealDirection = 'start',
  characters = DEFAULT_CHARS,
  animateOn = 'view',
  className = '',
  encryptedClassName = 'text-cyan-400 font-mono',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);

  const startDecryption = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsDecrypted(false);

    let iteration = 0;
    const textLength = text.length;

    intervalRef.current = window.setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';

            let isRevealed = false;
            if (sequential) {
              if (revealDirection === 'start') {
                isRevealed = index < Math.floor((iteration / maxIterations) * textLength);
              } else if (revealDirection === 'end') {
                isRevealed = index >= textLength - Math.floor((iteration / maxIterations) * textLength);
              } else {
                const mid = textLength / 2;
                const progress = (iteration / maxIterations) * mid;
                isRevealed = Math.abs(index - mid) <= progress;
              }
            } else {
              isRevealed = Math.random() < iteration / maxIterations;
            }

            if (isRevealed || iteration >= maxIterations) {
              return char;
            }

            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');
      });

      iteration++;

      if (iteration > maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsDecrypted(true);
      }
    }, speed);
  }, [characters, maxIterations, revealDirection, sequential, speed, text]);

  useEffect(() => {
    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startDecryption();
          }
        },
        { threshold: 0.1 }
      );

      const el = containerRef.current;
      if (el) observer.observe(el);
      return () => {
        if (el) observer.unobserve(el);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [animateOn, startDecryption]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      startDecryption();
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block transition-colors duration-200 ${className} ${!isDecrypted ? encryptedClassName : ''}`}
      aria-label={text}
    >
      {displayText}
    </span>
  );
};
