import React, { useEffect, useRef, useState } from 'react';

export const MagneticCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouch(true);
      }
    };
    checkTouch();

    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive =
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList?.contains('magnetic-target');
      setIsHovering(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    let raf: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      if (ringRef.current) {
        const size = isHovering ? 48 : isClicking ? 32 : 40;
        ringRef.current.style.transform = `translate(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px) scale(${isClicking ? 0.85 : 1})`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${target.current.x - 3}px, ${target.current.y - 3}px) scale(${isClicking ? 0.5 : 1})`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 60}px, ${pos.current.y - 60}px)`;
      }

      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(raf);
    };
  }, [isHovering, isClicking]);

  // Don't render on touch devices
  if (isTouch) return null;

  return (
    <>
      {/* Soft glow trail */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: isHovering
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
          transition: 'background 0.3s ease',
          willChange: 'transform',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'rgba(124, 58, 237, 0.6)' : 'rgba(255, 255, 255, 0.2)'}`,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.3s ease',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: isHovering ? '#a78bfa' : '#f5f5f5',
          transition: 'background 0.2s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
};
