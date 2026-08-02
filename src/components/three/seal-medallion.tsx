"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { useReducedMotion } from "./use-reduced-motion";

/* A slowly spinning coin — the certification medallion. Faceted rim,
   metallic material, tilted so the spin reads clearly. The compliance
   band this sits in inverts relative to the page (bg-foreground /
   text-background), so "bandIsDark" is the opposite of the page's own
   resolvedTheme — see SealMedallionLoader. */
function Coin({ reduced, bandIsDark }: { reduced: boolean; bandIsDark: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.y += delta * 0.6;
  });

  const rimColor = bandIsDark ? "#f59e0b" : "#78350f";

  return (
    <group ref={group} rotation={[0.25, 0, 0]}>
      <mesh>
        <cylinderGeometry args={[1, 1, 0.16, 48]} />
        <meshStandardMaterial
          color={bandIsDark ? "#78350f" : "#d97706"}
          emissive={bandIsDark ? "#d97706" : "#78350f"}
          emissiveIntensity={bandIsDark ? 0.25 : 0.05}
          roughness={bandIsDark ? 0.25 : 0.3}
          metalness={0.9}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.84, 0.05, 16, 48]} />
        <meshStandardMaterial color={rimColor} emissive={rimColor} emissiveIntensity={bandIsDark ? 0.5 : 0.1} roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[0, 0.081, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.02, 12, 48]} />
        <meshStandardMaterial color={rimColor} emissive={rimColor} emissiveIntensity={bandIsDark ? 0.6 : 0.15} roughness={0.15} metalness={0.9} />
      </mesh>
    </group>
  );
}

export function SealMedallion() {
  // Client-only (ssr:false via next/dynamic) — safe to read theme here.
  const { resolvedTheme } = useTheme();
  const reduced = useReducedMotion();
  const bandIsDark = resolvedTheme === "light";

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.2], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      performance={{ min: 0.4 }}
    >
      <ambientLight intensity={bandIsDark ? 0.6 : 1} />
      <pointLight position={[3, 2, 3]} intensity={bandIsDark ? 35 : 22} color="#f59e0b" />
      <pointLight position={[-3, -1, -2]} intensity={bandIsDark ? 12 : 8} color="#ffffff" />
      <Coin reduced={reduced} bandIsDark={bandIsDark} />
    </Canvas>
  );
}
