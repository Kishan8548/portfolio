"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

interface Spark {
  p1: number;
  p2: number;
  progress: number;
  speed: number;
  color: string;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export function InteractiveHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      if (!container || !canvas) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 55;
    const connectionDist = isMobile ? 85 : 125;
    const connectionDistSq = connectionDist * connectionDist;
    const mouseRadius = isMobile ? 110 : 170;
    const mouseRadiusSq = mouseRadius * mouseRadius;

    const colors = [
      "rgba(220, 38, 38, ",  // Crimson
      "rgba(239, 68, 68, ",  // Bright red
      "rgba(249, 115, 22, ", // Warm Amber
    ];

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const color = colors[i % colors.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
        vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
        radius: Math.random() * 1.5 + 1.2,
        color: color,
        alpha: Math.random() * 0.4 + 0.4,
      });
    }

    const sparks: Spark[] = [];
    const maxSparks = isMobile ? 6 : 12;
    const shockwaves: Shockwave[] = [];

    // Mouse tracking via ref — ZERO React re-renders for 120fps smoothness
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 4,
        maxRadius: isMobile ? 160 : 240,
        alpha: 0.6,
      });

      // Quick pulse
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const distSq = dx * dx + dy * dy;
        if (distSq < 40000 && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (200 - dist) / 16;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    container.addEventListener("click", handleClick, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let time = 0;

    const render = () => {
      if (isVisible) {
        time += 0.015;
        ctx.clearRect(0, 0, width, height);

        // 1. Draw Shockwave Rings (if any)
        for (let s = shockwaves.length - 1; s >= 0; s--) {
          const sw = shockwaves[s];
          sw.radius += 5;
          sw.alpha *= 0.93;

          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(239, 68, 68, ${sw.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          if (sw.alpha < 0.02 || sw.radius > sw.maxRadius) {
            shockwaves.splice(s, 1);
          }
        }

        // 2. Update & Draw Particles (Fast dual-circle halo without expensive shadowBlur)
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.x += p.vx + Math.sin(time + i) * 0.18;
          p.y += p.vy + Math.cos(time + i) * 0.18;

          p.vx *= 0.985;
          p.vy *= 0.985;

          if (p.x < -8) p.x = width + 8;
          if (p.x > width + 8) p.x = -8;
          if (p.y < -8) p.y = height + 8;
          if (p.y > height + 8) p.y = -8;

          // Mouse repel physics
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < mouseRadiusSq && distSq > 0) {
              const dist = Math.sqrt(distSq);
              const force = (mouseRadius - dist) / mouseRadius;
              p.x += (dx / dist) * force * 3.5;
              p.y += (dy / dist) * force * 3.5;
            }
          }

          // Core node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();

          // Outer halo (instant GPU render, 0ms overhead)
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha * 0.25})`;
          ctx.fill();
        }

        // 3. Draw Inter-particle Connections using Distance-Squared Fast Path
        const activePairs: [number, number][] = [];
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < connectionDistSq) {
              activePairs.push([i, j]);
              const dist = Math.sqrt(distSq);
              const alpha = (1 - dist / connectionDist) * 0.22;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(220, 38, 38, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }

          // Cursor tethers
          if (mouse.active) {
            const dx = p1.x - mouse.x;
            const dy = p1.y - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < mouseRadiusSq) {
              const dist = Math.sqrt(distSq);
              const alpha = (1 - dist / mouseRadius) * 0.45;
              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(p1.x, p1.y);
              ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
              ctx.lineWidth = 1.1;
              ctx.stroke();
            }
          }
        }

        // 4. Animate Fast Data Sparks
        if (activePairs.length > 0 && sparks.length < maxSparks && Math.random() < 0.2) {
          const pair = activePairs[Math.floor(Math.random() * activePairs.length)];
          sparks.push({
            p1: pair[0],
            p2: pair[1],
            progress: 0,
            speed: Math.random() * 0.025 + 0.02,
            color: Math.random() > 0.5 ? "#f97316" : "#ef4444",
          });
        }

        for (let sp = sparks.length - 1; sp >= 0; sp--) {
          const spark = sparks[sp];
          spark.progress += spark.speed;

          const p1 = particles[spark.p1];
          const p2 = particles[spark.p2];

          if (p1 && p2 && spark.progress <= 1) {
            const sx = p1.x + (p2.x - p1.x) * spark.progress;
            const sy = p1.y + (p2.y - p1.y) * spark.progress;

            ctx.beginPath();
            ctx.arc(sx, sy, 2, 0, Math.PI * 2);
            ctx.fillStyle = spark.color;
            ctx.fill();
          } else {
            sparks.splice(sp, 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto cursor-crosshair will-change-transform"
      aria-hidden="true"
    >
      {/* 1. Hardware-accelerated Cyberpunk Geometric Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* 2. Deep Ruby & Warm Amber Ambient Glow Orbs (GPU accelerated CSS blur) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-accent/8 blur-[110px]" />
      </div>

      {/* 3. High-FPS Optimized Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none z-0"
      />

      {/* 4. Smooth bottom gradient blend to section below */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}


