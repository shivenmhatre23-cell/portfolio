import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  hue: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface ParticleHaloProps {
  density?: number;
  connectionDistance?: number;
}

export const ParticleHalo: React.FC<ParticleHaloProps> = ({
  density = 22000,
  connectionDistance = 135,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Skip on reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let animFrame: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let mouse = { x: -9999, y: -9999 };
    let time = 0;

    const onMouseMove = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; };
    const onMouseLeave = () => { mouse = { x: -9999, y: -9999 }; };
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    // Lively color palette hues: Pink, Purple, Cyan, Emerald, Amber
    const VIBRANT_HUES = [330, 275, 185, 150, 42];

    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((w * h) / density), 65);
      for (let i = 0; i < count; i++) {
        const hue = VIBRANT_HUES[Math.floor(Math.random() * VIBRANT_HUES.length)] + (Math.random() * 15 - 7);
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.45 + 0.25,
          hue,
          pulseSpeed: 0.005 + Math.random() * 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };
    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      time += 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse repel with energetic responsiveness
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160 && dist > 0) {
          const force = (160 - dist) / 160;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.35 + 0.65;
        const finalAlpha = p.alpha * pulse;

        // Glowing outer halo
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 6);
        gradient.addColorStop(0, `hsla(${p.hue}, 85%, 65%, ${finalAlpha * 0.7})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 85%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Vivid core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${finalAlpha})`;
        ctx.fill();

        // Dynamic multi-color connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < connectionDistance) {
            const lineAlpha = (1 - d / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${(p.hue + p2.hue) / 2}, 80%, 65%, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animFrame);
    };
  }, [density, connectionDistance]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
