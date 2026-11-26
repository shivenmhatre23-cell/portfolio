import React, { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

interface ClickSparkProps {
  sparkColors?: string[];
  sparkSize?: number;
  sparkCount?: number;
  children?: React.ReactNode;
}

const NEON_COLORS = ['#ec4899', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#f43f5e'];

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColors = NEON_COLORS,
  sparkSize = 3,
  sparkCount = 18,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleClick = (e: MouseEvent) => {
      // Don't fire if user is selecting text
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) return;

      const clickX = e.clientX;
      const clickY = e.clientY;

      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 4 + 2;
        const color = sparkColors[Math.floor(Math.random() * sparkColors.length)];
        sparksRef.current.push({
          x: clickX,
          y: clickY,
          angle,
          speed,
          size: Math.random() * sparkSize + 1.5,
          color,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.02,
        });
      }
    };

    window.addEventListener('click', handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = sparksRef.current.length - 1; i >= 0; i--) {
        const spark = sparksRef.current[i];
        spark.x += Math.cos(spark.angle) * spark.speed;
        spark.y += Math.sin(spark.angle) * spark.speed;
        spark.speed *= 0.94; // friction
        spark.alpha -= spark.decay;

        if (spark.alpha <= 0) {
          sparksRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = spark.alpha;
        ctx.fillStyle = spark.color;
        ctx.shadowColor = spark.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, [sparkColors, sparkSize, sparkCount]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
      />
      {children}
    </>
  );
};
