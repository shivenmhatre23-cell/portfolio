import React, { useRef, useState, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  className = '',
  padding = 60,
  disabled = false,
  magnetStrength = 0.28,
}) => {
  const magnetRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !magnetRef.current) return;

      const rect = magnetRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const distance = Math.hypot(distanceX, distanceY);
      const maxDistance = Math.max(rect.width, rect.height) + padding;

      if (distance < maxDistance) {
        setPosition({
          x: distanceX * magnetStrength,
          y: distanceY * magnetStrength,
        });
      }
    },
    [disabled, padding, magnetStrength]
  );

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
