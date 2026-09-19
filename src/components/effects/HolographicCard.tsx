import React, { useRef, useState } from 'react';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  holographic?: boolean;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(124, 58, 237, 0.1)',
  holographic = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -4, y: (x - 0.5) * 4 });
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
        }}
      />

      {/* Holographic shimmer — only if enabled */}
      {holographic && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-40"
          style={{
            background: `linear-gradient(
              ${105 + tilt.y * 3}deg,
              rgba(124, 58, 237, 0.04) 0%,
              rgba(34, 211, 238, 0.04) 50%,
              rgba(167, 139, 250, 0.04) 100%
            )`,
          }}
        />
      )}

      {children}
    </div>
  );
};
