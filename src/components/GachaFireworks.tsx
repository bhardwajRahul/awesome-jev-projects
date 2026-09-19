import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
  trail: { x: number; y: number; alpha: number }[];
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  burstSize: number;
}

const PALETTES = [
  '#f59e0b', // gold
  '#fbbf24', // amber
  '#d7fa91', // lime neon
  '#10b981', // emerald
  '#38bdf8', // sky
  '#ec4899', // pink
  '#a855f7', // purple
  '#ffffff', // sparkle
];

export function GachaFireworks({ trigger }: { trigger: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (trigger <= 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = rect.width || 480;
    const height = rect.height || 600;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];

    // Schedule celebratory bursts across 1.4 seconds
    const burstConfigs = [
      { delay: 0, x: width * 0.5, targetY: height * 0.28, size: 70 },
      { delay: 220, x: width * 0.26, targetY: height * 0.22, size: 60 },
      { delay: 440, x: width * 0.74, targetY: height * 0.24, size: 60 },
      { delay: 720, x: width * 0.40, targetY: height * 0.16, size: 75 },
      { delay: 940, x: width * 0.62, targetY: height * 0.19, size: 70 },
    ];

    function createBurst(bx: number, by: number, count: number) {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 5.5 + 1.8;
        const color = PALETTES[Math.floor(Math.random() * PALETTES.length)];
        particles.push({
          x: bx,
          y: by,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          size: Math.random() * 2.6 + 1.2,
          decay: Math.random() * 0.016 + 0.012,
          trail: [],
        });
      }
    }

    const timers: number[] = [];
    burstConfigs.forEach((cfg) => {
      const t = window.setTimeout(() => {
        rockets.push({
          x: cfg.x,
          y: height,
          targetY: cfg.targetY,
          vy: -((height - cfg.targetY) / 16),
          color: PALETTES[Math.floor(Math.random() * PALETTES.length)],
          burstSize: cfg.size,
        });
      }, cfg.delay);
      timers.push(t);
    });

    let animationId: number;
    let running = true;

    function render() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update & draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y += r.vy;

        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x, r.y - r.vy * 1.6);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1.6;
        ctx.stroke();

        if (r.y <= r.targetY) {
          createBurst(r.x, r.y, r.burstSize);
          rockets.splice(i, 1);
        }
      }

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.trail.push({ x: p.x, y: p.y, alpha: p.alpha });
        if (p.trail.length > 5) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.09; // gravity
        p.vx *= 0.97; // air friction
        p.vy *= 0.97;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw trail
        for (let j = 0; j < p.trail.length; j++) {
          const pt = p.trail[j];
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, p.size * (j / p.trail.length), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = pt.alpha * 0.35;
          ctx.fill();
        }

        // Draw spark head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (rockets.length > 0 || particles.length > 0) {
        animationId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    animationId = requestAnimationFrame(render);

    return () => {
      running = false;
      timers.forEach(clearTimeout);
      cancelAnimationFrame(animationId);
      if (ctx) ctx.clearRect(0, 0, width, height);
    };
  }, [trigger]);

  return <canvas ref={canvasRef} className="gacha-fireworks-canvas" aria-hidden="true" />;
}
