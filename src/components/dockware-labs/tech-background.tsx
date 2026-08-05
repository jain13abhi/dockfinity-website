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
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Smooth Mouse 3D Tilt Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 60;
      targetY = y * 40;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // System Layers Config
    const numLayers = 4;
    const layerTitles = [
      "01 // INFRASTRUCTURE & CLOUD",
      "02 // DATA & STATE CORE",
      "03 // MICROSERVICES & AI AGENTS",
      "04 // APPLICATIONS & INTERFACES",
    ];

    // Data particles traveling vertically along structural columns
    const particles = Array.from({ length: 24 }, () => ({
      columnIdx: Math.floor(Math.random() * 4),
      progress: Math.random(), // 0 to 1
      speed: 0.005 + Math.random() * 0.008,
      size: 3 + Math.random() * 3,
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouseX;
      const centerY = height / 2.1 + mouseY;

      const isoWidth = Math.min(width * 0.72, 620);
      const isoHeight = isoWidth * 0.42;
      const baseGap = Math.min(height * 0.12, 75);

      // Corner coordinates for vertical columns
      const getLayerCorners = (layerIdx: number) => {
        // Elevation shift on hover
        const isHovered =
          activePillarIndex !== undefined &&
          activePillarIndex !== null &&
          (activePillarIndex === layerIdx || (activePillarIndex === 4 && layerIdx === 3));

        const elevationOffset = isHovered ? -22 : 0;
        const layerY = centerY + (layerIdx - (numLayers - 1) / 2) * baseGap + elevationOffset;

        return {
          y: layerY,
          isHovered,
          corners: [
            { x: centerX, y: layerY - isoHeight / 2 },
            { x: centerX + isoWidth / 2, y: layerY },
            { x: centerX, y: layerY + isoHeight / 2 },
            { x: centerX - isoWidth / 2, y: layerY },
          ],
        };
      };

      const layersData = Array.from({ length: numLayers }, (_, i) => getLayerCorners(i));

      // 1. Draw Vertical Structural Columns Connecting Planes
      for (let c = 0; c < 4; c++) {
        const topPoint = layersData[0].corners[c];
        const botPoint = layersData[numLayers - 1].corners[c];

        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = isDark ? "rgba(59, 130, 246, 0.4)" : "rgba(37, 99, 235, 0.35)";
        ctx.moveTo(topPoint.x, topPoint.y);
        ctx.lineTo(botPoint.x, botPoint.y);
        ctx.stroke();
        ctx.restore();
      }

      // 2. Draw Traveling Energy Pulses Between Layers
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const topP = layersData[0].corners[p.columnIdx];
        const botP = layersData[numLayers - 1].corners[p.columnIdx];

        const px = topP.x + (botP.x - topP.x) * p.progress;
        const py = topP.y + (botP.y - topP.y) * p.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
        ctx.shadowColor = isDark ? "#3b82f6" : "#1d4ed8";
        ctx.shadowBlur = isDark ? 15 : 8;
        ctx.fill();
        ctx.restore();
      });

      // 3. Draw 3D Isometric Architectural Planes (Bottom to Top)
      for (let i = 0; i < numLayers; i++) {
        const { y: layerY, isHovered, corners } = layersData[i];

        ctx.save();

        // Path for Plane
        ctx.beginPath();
        ctx.moveTo(corners[0].x, corners[0].y);
        ctx.lineTo(corners[1].x, corners[1].y);
        ctx.lineTo(corners[2].x, corners[2].y);
        ctx.lineTo(corners[3].x, corners[3].y);
        ctx.closePath();

        // Fill & Gradient
        const fillGrad = ctx.createLinearGradient(corners[3].x, corners[0].y, corners[1].x, corners[2].y);
        if (isDark) {
          if (isHovered) {
            fillGrad.addColorStop(0, "rgba(59, 130, 246, 0.35)");
            fillGrad.addColorStop(0.5, "rgba(37, 99, 235, 0.45)");
            fillGrad.addColorStop(1, "rgba(29, 78, 216, 0.3)");
          } else {
            fillGrad.addColorStop(0, "rgba(15, 23, 42, 0.65)");
            fillGrad.addColorStop(0.5, "rgba(30, 41, 59, 0.75)");
            fillGrad.addColorStop(1, "rgba(15, 23, 42, 0.65)");
          }
        } else {
          if (isHovered) {
            fillGrad.addColorStop(0, "rgba(219, 234, 254, 0.85)");
            fillGrad.addColorStop(0.5, "rgba(191, 219, 254, 0.95)");
            fillGrad.addColorStop(1, "rgba(219, 234, 254, 0.85)");
          } else {
            fillGrad.addColorStop(0, "rgba(241, 245, 249, 0.6)");
            fillGrad.addColorStop(0.5, "rgba(226, 232, 240, 0.75)");
            fillGrad.addColorStop(1, "rgba(241, 245, 249, 0.6)");
          }
        }

        ctx.fillStyle = fillGrad;
        if (isHovered && isDark) {
          ctx.shadowColor = "#3b82f6";
          ctx.shadowBlur = 25;
        }
        ctx.fill();

        // Stroke Perimeter
        ctx.lineWidth = isHovered ? 2.5 : 1.2;
        ctx.strokeStyle = isDark
          ? isHovered
            ? "#60a5fa"
            : "rgba(148, 163, 184, 0.45)"
          : isHovered
          ? "#2563eb"
          : "rgba(100, 116, 139, 0.35)";
        ctx.stroke();

        // Grid Lines Inside Plane
        const gridSub = 5;
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = isDark
          ? isHovered
            ? "rgba(96, 165, 250, 0.45)"
            : "rgba(148, 163, 184, 0.18)"
          : isHovered
          ? "rgba(37, 99, 235, 0.4)"
          : "rgba(148, 163, 184, 0.25)";

        for (let g = 1; g < gridSub; g++) {
          const ratio = g / gridSub;
          // Grid X
          const startX = corners[3].x + (corners[0].x - corners[3].x) * ratio;
          const startY = corners[3].y + (corners[0].y - corners[3].y) * ratio;
          const endX = corners[2].x + (corners[1].x - corners[2].x) * ratio;
          const endY = corners[2].y + (corners[1].y - corners[2].y) * ratio;

          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          // Grid Y
          const startY2_X = corners[0].x + (corners[1].x - corners[0].x) * ratio;
          const startY2_Y = corners[0].y + (corners[1].y - corners[0].y) * ratio;
          const endY2_X = corners[3].x + (corners[2].x - corners[3].x) * ratio;
          const endY2_Y = corners[3].y + (corners[2].y - corners[3].y) * ratio;

          ctx.beginPath();
          ctx.moveTo(startY2_X, startY2_Y);
          ctx.lineTo(endY2_X, endY2_Y);
          ctx.stroke();
        }

        // Active Pulse Light Sweep across current layer
        const sweepPos = (Math.sin(time * 1.8 + i * 0.8) + 1) / 2;
        const sweepX = corners[3].x + (corners[1].x - corners[3].x) * sweepPos;
        const sweepY = corners[0].y + (corners[2].y - corners[0].y) * (sweepPos <= 0.5 ? sweepPos * 2 : (1 - sweepPos) * 2);

        ctx.beginPath();
        ctx.arc(sweepX, sweepY, isHovered ? 6 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#60a5fa" : "#1d4ed8";
        ctx.shadowColor = isDark ? "#3b82f6" : "#2563eb";
        ctx.shadowBlur = isDark ? 16 : 8;
        ctx.fill();

        // 3D Corner Vertex Glowing Nodes
        corners.forEach((c) => {
          ctx.beginPath();
          ctx.arc(c.x, c.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? (isDark ? "#93c5fd" : "#1e40af") : isDark ? "#475569" : "#94a3b8";
          ctx.fill();
        });

        // Layer Monospace Label
        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.fillStyle = isHovered
          ? isDark
            ? "#93c5fd"
            : "#1e40af"
          : isDark
          ? "rgba(148, 163, 184, 0.7)"
          : "rgba(71, 85, 105, 0.8)";
        ctx.fillText(layerTitles[i], corners[3].x + 12, layerY + 4);

        ctx.restore();
      }

      if (!mediaQuery.matches) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [activePillarIndex, isDark]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-[140px]" />
      <canvas ref={canvasRef} className="w-full h-full block relative z-10 opacity-95" />
    </div>
  );
}
