"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface TechBackgroundProps {
  activePillarIndex?: number | null;
}

export function TechBackground({ activePillarIndex }: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates with spring physics
    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = width / 2;
    let targetMouseY = height / 3;
    let mouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Grid config
    const gridSize = 64;
    const gridCols = Math.ceil(width / gridSize) + 2;
    const gridRows = Math.ceil(height / gridSize) + 2;

    // Ambient floating structural nodes
    const nodeCount = 35;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 1.5 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.5,
    }));

    // Data pulse waves along grid
    const pulseCount = 12;
    const pulses = Array.from({ length: pulseCount }, () => ({
      col: Math.floor(Math.random() * gridCols),
      row: Math.floor(Math.random() * gridRows),
      dir: Math.random() > 0.5 ? "horizontal" : "vertical",
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;

      // Mouse smooth lerp
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // --- 1. AMBIENT VIEWPORT RADIAL GLOW ---
      if (isDark) {
        // Dark Mode: Deep Midnight ambient aura
        const primaryGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, Math.max(width, height) * 0.5);
        primaryGlow.addColorStop(0, "rgba(37, 99, 235, 0.12)");
        primaryGlow.addColorStop(0.5, "rgba(15, 23, 42, 0.05)");
        primaryGlow.addColorStop(1, "rgba(9, 13, 20, 0)");
        ctx.fillStyle = primaryGlow;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Light Mode: Clean Titanium Slate glow with subtle cobalt aura around mouse
        const lightGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, Math.max(width, height) * 0.45);
        lightGlow.addColorStop(0, "rgba(37, 99, 235, 0.06)");
        lightGlow.addColorStop(0.6, "rgba(241, 245, 249, 0.02)");
        lightGlow.addColorStop(1, "rgba(248, 250, 252, 0)");
        ctx.fillStyle = lightGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // --- 2. FULL-PAGE SYSTEM GRID ARCHITECTURE ---
      const gridStroke = isDark
        ? "rgba(148, 163, 184, 0.07)"
        : "rgba(71, 85, 105, 0.06)";
      const highlightGridStroke = isDark
        ? "rgba(59, 130, 246, 0.35)"
        : "rgba(37, 99, 235, 0.25)";

      ctx.lineWidth = 1;

      // Draw Grid Verticals
      for (let c = 0; c <= gridCols; c++) {
        const gx = c * gridSize;
        ctx.beginPath();
        ctx.strokeStyle = gridStroke;

        for (let r = 0; r <= gridRows; r++) {
          const gy = r * gridSize;

          // Warp grid point near mouse
          const dx = gx - mouseX;
          const dy = gy - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const warpRadius = 220;

          let finalX = gx;
          let finalY = gy;

          if (dist < warpRadius && mouseActive) {
            const factor = (1 - dist / warpRadius) * 12;
            finalX += (dx / dist) * factor;
            finalY += (dy / dist) * factor;
          }

          if (r === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
          }
        }
        ctx.stroke();
      }

      // Draw Grid Horizontals
      for (let r = 0; r <= gridRows; r++) {
        const gy = r * gridSize;
        ctx.beginPath();
        ctx.strokeStyle = gridStroke;

        for (let c = 0; c <= gridCols; c++) {
          const gx = c * gridSize;

          const dx = gx - mouseX;
          const dy = gy - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const warpRadius = 220;

          let finalX = gx;
          let finalY = gy;

          if (dist < warpRadius && mouseActive) {
            const factor = (1 - dist / warpRadius) * 12;
            finalX += (dx / dist) * factor;
            finalY += (dy / dist) * factor;
          }

          if (c === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
          }
        }
        ctx.stroke();
      }

      // --- 3. CURSOR REACTION RINGS & MOUSE GLOW ---
      if (mouseActive) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 160, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? "rgba(59, 130, 246, 0.18)" : "rgba(37, 99, 235, 0.12)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 6]);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
        ctx.shadowColor = isDark ? "#3b82f6" : "#2563eb";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // --- 4. PILLAR CARD HOVER HIGHLIGHT ENGINES ---
      if (activePillarIndex !== undefined && activePillarIndex !== null) {
        const pillarYRatio = 0.35 + activePillarIndex * 0.12;
        const targetY = height * pillarYRatio;

        ctx.save();
        const pillarGlow = ctx.createRadialGradient(width / 2, targetY, 0, width / 2, targetY, 450);
        if (isDark) {
          pillarGlow.addColorStop(0, "rgba(59, 130, 246, 0.18)");
          pillarGlow.addColorStop(1, "rgba(9, 13, 20, 0)");
        } else {
          pillarGlow.addColorStop(0, "rgba(37, 99, 235, 0.08)");
          pillarGlow.addColorStop(1, "rgba(248, 250, 252, 0)");
        }
        ctx.fillStyle = pillarGlow;
        ctx.fillRect(0, 0, width, height);

        // Horizontal scan line across hovered pillar height
        ctx.beginPath();
        ctx.moveTo(0, targetY);
        ctx.lineTo(width, targetY);
        ctx.strokeStyle = isDark ? "rgba(96, 165, 250, 0.4)" : "rgba(37, 99, 235, 0.3)";
        ctx.lineWidth = 1;
        ctx.setLineDash([8, 8]);
        ctx.stroke();
        ctx.restore();
      }

      // --- 5. CONTINUOUS DATA PULSE STREAMS ALONG GRID ---
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.col = Math.floor(Math.random() * gridCols);
          p.row = Math.floor(Math.random() * gridRows);
        }

        ctx.save();
        ctx.beginPath();
        if (p.dir === "horizontal") {
          const px = (p.col + p.progress) * gridSize;
          const py = p.row * gridSize;
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        } else {
          const px = p.col * gridSize;
          const py = (p.row + p.progress) * gridSize;
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        }

        ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
        ctx.shadowColor = isDark ? "#3b82f6" : "#2563eb";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // --- 6. FLOATING AMBIENT STRUCTURAL NODES ---
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(148, 163, 184, ${n.alpha * 0.4})`
          : `rgba(71, 85, 105, ${n.alpha * 0.3})`;
        ctx.fill();
        ctx.restore();
      });

      if (!mediaQuery.matches) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [activePillarIndex, isDark]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
