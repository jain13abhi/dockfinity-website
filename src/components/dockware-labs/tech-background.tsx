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

    // Mouse coordinates with smooth lerp
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

    // Precision Architectural Grid Config
    const gridSize = 72;
    const gridCols = Math.ceil(width / gridSize) + 1;
    const gridRows = Math.ceil(height / gridSize) + 1;

    // Structured Data Packets moving strictly on Orthogonal Axes
    const packetCount = 14;
    const packets = Array.from({ length: packetCount }, () => ({
      col: Math.floor(Math.random() * gridCols),
      row: Math.floor(Math.random() * gridRows),
      axis: Math.random() > 0.5 ? "X" : "Y",
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.006,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;

      mouseX += (targetMouseX - mouseX) * 0.07;
      mouseY += (targetMouseY - mouseY) * 0.07;

      ctx.clearRect(0, 0, width, height);

      // --- 1. AMBIENT BACKGROUND SUBTLE GRADIENT ---
      if (isDark) {
        const bgGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, Math.max(width, height) * 0.5);
        bgGrad.addColorStop(0, "rgba(37, 99, 235, 0.09)");
        bgGrad.addColorStop(0.6, "rgba(15, 23, 42, 0.04)");
        bgGrad.addColorStop(1, "rgba(9, 13, 20, 0)");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      } else {
        const bgGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, Math.max(width, height) * 0.4);
        bgGrad.addColorStop(0, "rgba(37, 99, 235, 0.05)");
        bgGrad.addColorStop(0.7, "rgba(248, 250, 252, 0)");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // --- 2. ORTHOGONAL SYSTEM GRID LINES ---
      const baseLineColor = isDark
        ? "rgba(148, 163, 184, 0.07)"
        : "rgba(71, 85, 105, 0.06)";
      const highlightLineColor = isDark
        ? "rgba(59, 130, 246, 0.28)"
        : "rgba(37, 99, 235, 0.22)";

      ctx.lineWidth = 1;

      // Vertical Grid Lines
      for (let c = 0; c <= gridCols; c++) {
        const x = c * gridSize;
        ctx.beginPath();
        ctx.strokeStyle = baseLineColor;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal Grid Lines
      for (let r = 0; r <= gridRows; r++) {
        const y = r * gridSize;
        ctx.beginPath();
        ctx.strokeStyle = baseLineColor;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // --- 3. PRECISION CROSSHAIRS (+) AT INTERSECTIONS & MOUSE HIGHLIGHT ---
      const crossSize = 3.5;
      const crossColor = isDark
        ? "rgba(148, 163, 184, 0.22)"
        : "rgba(100, 116, 139, 0.25)";

      for (let c = 0; c <= gridCols; c++) {
        for (let r = 0; r <= gridRows; r++) {
          const x = c * gridSize;
          const y = r * gridSize;

          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const activeRadius = 180;

          const isNearMouse = dist < activeRadius && mouseActive;

          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = isNearMouse ? highlightLineColor : crossColor;
          ctx.lineWidth = isNearMouse ? 1.5 : 0.8;

          // Horizontal bar of +
          ctx.moveTo(x - crossSize, y);
          ctx.lineTo(x + crossSize, y);
          // Vertical bar of +
          ctx.moveTo(x, y - crossSize);
          ctx.lineTo(x, y + crossSize);
          ctx.stroke();
          ctx.restore();
        }
      }

      // --- 4. MOUSE CURSOR TARGET ALIGNMENT FRAME ---
      if (mouseActive) {
        ctx.save();
        // Mouse coordinate crosshair
        const snapX = Math.round(mouseX / gridSize) * gridSize;
        const snapY = Math.round(mouseY / gridSize) * gridSize;

        // Snapped grid target square
        ctx.strokeStyle = isDark ? "rgba(59, 130, 246, 0.35)" : "rgba(37, 99, 235, 0.25)";
        ctx.lineWidth = 1;
        ctx.strokeRect(snapX - gridSize / 2, snapY - gridSize / 2, gridSize, gridSize);

        // Center reticle
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
        ctx.shadowColor = isDark ? "#3b82f6" : "#2563eb";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // --- 5. CARD HOVER LAYER HIGHLIGHT ---
      if (activePillarIndex !== undefined && activePillarIndex !== null) {
        const pillarYRatio = 0.35 + activePillarIndex * 0.12;
        const targetY = height * pillarYRatio;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, targetY);
        ctx.lineTo(width, targetY);
        ctx.strokeStyle = isDark ? "rgba(96, 165, 250, 0.4)" : "rgba(37, 99, 235, 0.3)";
        ctx.lineWidth = 1;
        ctx.setLineDash([8, 8]);
        ctx.stroke();

        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
        ctx.fillText(`SYSTEM PILLAR 0${activePillarIndex + 1} // ACTIVE STATE`, 32, targetY - 6);
        ctx.restore();
      }

      // --- 6. STRUCTURED DATA PACKETS ON AXES ---
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.col = Math.floor(Math.random() * gridCols);
          p.row = Math.floor(Math.random() * gridRows);
          p.axis = Math.random() > 0.5 ? "X" : "Y";
        }

        ctx.save();
        ctx.beginPath();

        let px = 0;
        let py = 0;

        if (p.axis === "X") {
          px = (p.col + p.progress) * gridSize;
          py = p.row * gridSize;
          ctx.rect(px - 4, py - 1.5, 8, 3);
        } else {
          px = p.col * gridSize;
          py = (p.row + p.progress) * gridSize;
          ctx.rect(px - 1.5, py - 4, 3, 8);
        }

        ctx.fillStyle = isDark ? "rgba(96, 165, 250, 0.85)" : "rgba(37, 99, 235, 0.85)";
        ctx.shadowColor = isDark ? "#3b82f6" : "#2563eb";
        ctx.shadowBlur = 6;
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
