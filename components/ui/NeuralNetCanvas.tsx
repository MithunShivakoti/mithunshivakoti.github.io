"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const LAYERS = [4, 6, 6, 5, 2];

type Node = { x: number; y: number; layer: number };
type Pulse = {
  x1: number; y1: number;
  x2: number; y2: number;
  t: number;
  speed: number;
};

function buildNodes(w: number, h: number): Node[] {
  const marginX = w * 0.08;
  const availW = w * 0.84;
  return LAYERS.flatMap((count, li) => {
    const x = marginX + (li / (LAYERS.length - 1)) * availW;
    return Array.from({ length: count }, (_, ni) => ({
      x,
      y: h * 0.12 + ((ni + 1) / (count + 1)) * (h * 0.76),
      layer: li,
    }));
  });
}

export default function NeuralNetCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];
    const pulses: Pulse[] = [];
    let raf: number;
    let lastSpawn = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodes = buildNodes(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnPulse = () => {
      const li = Math.floor(Math.random() * (LAYERS.length - 1));
      const from = nodes.filter((n) => n.layer === li);
      const to = nodes.filter((n) => n.layer === li + 1);
      if (!from.length || !to.length) return;
      const f = from[Math.floor(Math.random() * from.length)];
      const t = to[Math.floor(Math.random() * to.length)];
      pulses.push({
        x1: f.x, y1: f.y,
        x2: t.x, y2: t.y,
        t: 0,
        speed: 0.004 + Math.random() * 0.006,
      });
    };

    const draw = (ts: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between adjacent layers
      for (let li = 0; li < LAYERS.length - 1; li++) {
        const from = nodes.filter((n) => n.layer === li);
        const to = nodes.filter((n) => n.layer === li + 1);
        from.forEach((f) =>
          to.forEach((t) => {
            ctx.beginPath();
            ctx.moveTo(f.x, f.y);
            ctx.lineTo(t.x, t.y);
            ctx.strokeStyle = "rgba(99,102,241,0.07)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          })
        );
      }

      // Draw nodes
      nodes.forEach((n) => {
        // Outer ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, 5.5, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(99,102,241,0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();
        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(129,140,248,0.4)";
        ctx.fill();
      });

      // Spawn new pulses
      if (ts - lastSpawn > 150 && pulses.length < 20) {
        spawnPulse();
        lastSpawn = ts;
      }

      // Animate pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }

        const x = p.x1 + (p.x2 - p.x1) * p.t;
        const y = p.y1 + (p.y2 - p.y1) * p.t;
        const alpha = Math.sin(p.t * Math.PI); // fade in then out

        // Glow halo
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 14);
        grd.addColorStop(0, `rgba(129,140,248,${alpha * 0.65})`);
        grd.addColorStop(1, "rgba(129,140,248,0)");
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Bright core dot
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199,210,254,${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.45 }}
    />
  );
}
