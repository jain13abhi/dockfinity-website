"use client";

import { useEffect, useRef } from "react";

interface TechBackgroundProps {
  activePillarIndex?: number | null;
}

export function TechBackground({ activePillarIndex }: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // Mouse movement parallax matrix
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 30;
      targetY = y * 20;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Isometric system layer coordinates
    const numLayers = 4;
    const layerNames = ["INFRASTRUCTURE & CLOUD", "DATA & CORE LOGIC", "SERVICES & AI AGENTS", "APPLICATIONS & INTERFACES"];
    
    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouseX;
      const centerY = height / 2.2 + mouseY;

      const isoWidth = Math.min(width * 0.7, 560);
      const isoHeight = isoWidth * 0.45;
      const layerGap = Math.min(height * 0.1, 65);

      // Render architectural planes from bottom (0) to top (3)
      for (let i = 0; i < numLayers; i++) {
        const isHighlighted =
          activePillarIndex !== undefined &&
          activePillarIndex !== null &&
          (activePillarIndex === i || (activePillarIndex === 4 && i === 3)); // Digital Presence maps to Top App layer

        const yOffset = centerY + (i - (numLayers - 1) / 2) * layerGap;

        ctx.save();
        ctx.translate(centerX, yOffset);

        // Plane border & fill
        ctx.beginPath();
        ctx.moveTo(0, -isoHeight / 2);
        ctx.lineTo(isoWidth / 2, 0);
        ctx.lineTo(0, isoHeight / 2);
        ctx.lineTo(-isoWidth / 2, 0);
        ctx.closePath();

        // Subtle gradient fill per plane
        const fillGrad = ctx.createLinearGradient(-isoWidth / 2, 0, isoWidth / 2, 0);
        if (isHighlighted) {
          fillGrad.addColorStop(0, "rgba(59, 130, 246, 0.18)");
          fillGrad.addColorStop(0.5, "rgba(37, 99, 235, 0.28)");
          fillGrad.addColorStop(1, "rgba(29, 78, 216, 0.15)");
        } else {
          fillGrad.addColorStop(0, "rgba(30, 41, 59, 0.08)");
          fillGrad.addColorStop(0.5, "rgba(51, 65, 85, 0.12)");
          fillGrad.addColorStop(1, "rgba(15, 23, 42, 0.08)");
        }

        ctx.fillStyle = fillGrad;
        ctx.fill();

        // Outline grid
        ctx.lineWidth = isHighlighted ? 2 : 1;
        ctx.strokeStyle = isHighlighted ? "rgba(59, 130, 246, 0.8)" : "rgba(148, 163, 184, 0.25)";
        ctx.stroke();

        // Grid subdivisons inside plane
        const gridSub = 4;
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = isHighlighted ? "rgba(96, 165, 250, 0.35)" : "rgba(148, 163, 184, 0.12)";

        for (let g = 1; g < gridSub; g++) {
          const ratio = g / gridSub;
          // Line along X
          const xStartPos = -isoWidth / 2 + isoWidth * ratio;
          const yStartPos = (ratio < 0.5 ? ratio : 1 - ratio) * isoHeight - isoHeight / 2;

          ctx.beginPath();
          ctx.moveTo(-isoWidth / 2 + (isoWidth / 2) * ratio, -isoHeight / 2 + (isoHeight / 2) * ratio);
          ctx.lineTo((isoWidth / 2) * ratio, isoHeight / 2 - (isoHeight / 2) * (1 - ratio));
          ctx.stroke();
        }

        // Animated pulse beam along current layer
        if (isHighlighted) {
          const pulsePos = (Math.sin(time * 2) + 1) / 2;
          const px = -isoWidth / 2 + isoWidth * pulsePos;
          const py = (pulsePos <= 0.5 ? pulsePos * 2 - 1 : 1 - (pulsePos - 0.5) * 2) * (isoHeight / 2);

          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#60a5fa";
          ctx.shadowColor = "#3b82f6";
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Layer Label (Left corner)
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.fillStyle = isHighlighted ? "#60a5fa" : "rgba(148, 163, 184, 0.6)";
        ctx.fillText(`L${i + 1} // ${layerNames[i]}`, -isoWidth / 2 + 10, 0);

        ctx.restore();
      }

      // Vertical architectural structural pillar connectors between layers
      const topY = centerY + (0 - (numLayers - 1) / 2) * layerGap;
      const botY = centerY + (numLayers - 1 - (numLayers - 1) / 2) * layerGap;

      ctx.save();
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.25)";

      // Draw 4 corner vertical columns
      const corners = [
        { x: centerX, y: -isoHeight / 2 },
        { x: centerX + isoWidth / 2, y: 0 },
        { x: centerX, y: isoHeight / 2 },
        { x: centerX - isoWidth / 2, y: 0 },
      ];

      corners.forEach((c) => {
        ctx.beginPath();
        ctx.moveTo(c.x, topY + c.y);
        ctx.lineTo(c.x, botY + c.y);
        ctx.stroke();
      });

      ctx.restore();

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
  }, [activePillarIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#090d14] opacity-95" />
      {/* Subtle Structural Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <canvas ref={canvasRef} className="w-full h-full block relative z-10 opacity-85" />
    </div>
  );
}
