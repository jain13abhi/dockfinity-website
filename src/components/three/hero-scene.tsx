"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { useReducedMotion } from "./use-reduced-motion";

/* Distance (px) of scroll over which the hero fully recedes. Not tied to
   the hero section's actual height — just how much scroll it takes for
   the "dissolve away" motion to complete. */
const SCROLL_RECEDE_RANGE = 700;

/* ─── Particle field positions — pure, computed once at module load ─── */
const PARTICLE_POSITIONS = (() => {
  const count = 260;
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
})();

/* ─── Orbiting vertical node ─────────────────────────────
   Represents one of the three Dockfinity verticals, orbiting
   the central core on its own plane and speed.
──────────────────────────────────────────────────────────── */
function OrbitNode({
  radius,
  speed,
  offset,
  tilt,
  color,
  size,
  reduced,
  isDark,
}: {
  radius: number;
  speed: number;
  offset: number;
  tilt: number;
  color: string;
  size: number;
  reduced: boolean;
  isDark: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const angleRef = useRef(offset);

  useFrame((_, delta) => {
    if (!ref.current) return;
    if (!reduced) angleRef.current += delta * speed;
    const a = angleRef.current;
    ref.current.position.set(
      Math.cos(a) * radius,
      Math.sin(a) * radius * Math.sin(tilt),
      Math.sin(a) * radius * Math.cos(tilt)
    );
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isDark ? 0.6 : 0.3}
        roughness={isDark ? 0.3 : 0.35}
        metalness={0.4}
      />
    </mesh>
  );
}

/* ─── Central core ────────────────────────────────────────
   A torus knot — the infinite loop the brand name gestures at.
   Dark mode: a faceted amber-glow form against near-black.
   Light mode: a polished bronze sculpture with dark ink linework —
   metal-and-glow reads as premium on black but muddy on white, so
   the material swaps rather than the whole scene disappearing.
──────────────────────────────────────────────────────────── */
function Core({ reduced, isDark }: { reduced: boolean; isDark: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x += delta * 0.04;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[1.15, 0.34, 220, 32, 2, 3]} />
        <meshStandardMaterial
          color={isDark ? "#0a0e1a" : "#b45309"}
          emissive={isDark ? "#d97706" : "#78350f"}
          emissiveIntensity={isDark ? 0.15 : 0.05}
          roughness={isDark ? 0.15 : 0.28}
          metalness={isDark ? 0.85 : 0.75}
        />
      </mesh>
      <mesh scale={1.001}>
        <torusKnotGeometry args={[1.15, 0.34, 220, 32, 2, 3]} />
        <meshBasicMaterial
          color={isDark ? "#f59e0b" : "#1c1917"}
          wireframe
          transparent
          opacity={isDark ? 0.08 : 0.12}
        />
      </mesh>
    </group>
  );
}

/* ─── Ambient particle field ─────────────────────────────── */
function Particles({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[PARTICLE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={isDark ? "#f59e0b" : "#57534e"}
        size={0.02}
        transparent
        opacity={isDark ? 0.35 : 0.25}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Mouse-parallax + scroll-recede rig ─────────────────────
   scrollRef holds a 0→1 progress value, mutated directly by a
   plain scroll listener (see HeroScene) rather than React state,
   so scrolling never triggers a re-render — only the animation
   frame reads it.
──────────────────────────────────────────────────────────── */
function Rig({
  children,
  reduced,
  scrollRef,
}: {
  children: React.ReactNode;
  reduced: boolean;
  scrollRef: React.RefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  useFrame((_, delta) => {
    if (!group.current) return;
    const s = scrollRef.current;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.current.x * 0.25, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, target.current.y * 0.15, 0.04);
    if (!reduced) group.current.rotation.z += delta * s * 0.6;
    const scale = 1 - s * 0.45;
    group.current.scale.setScalar(scale);
  });

  return <group ref={group}>{children}</group>;
}

function Scene({
  reduced,
  scrollRef,
  isDark,
}: {
  reduced: boolean;
  scrollRef: React.RefObject<number>;
  isDark: boolean;
}) {
  return (
    <>
      <ambientLight intensity={isDark ? 0.5 : 0.95} />
      <pointLight position={[4, 3, 5]} intensity={isDark ? 40 : 24} color="#f59e0b" />
      <pointLight position={[-4, -2, -3]} intensity={isDark ? 15 : 10} color="#3b82f6" />

      <Rig reduced={reduced} scrollRef={scrollRef}>
        <Core reduced={reduced} isDark={isDark} />
        <OrbitNode radius={2.3} speed={0.35} offset={0} tilt={0.5} color="#3b82f6" size={0.16} reduced={reduced} isDark={isDark} />
        <OrbitNode radius={2.6} speed={0.27} offset={2.1} tilt={-0.3} color="#10b981" size={0.14} reduced={reduced} isDark={isDark} />
        <OrbitNode radius={2.1} speed={0.42} offset={4.2} tilt={0.15} color="#f59e0b" size={0.15} reduced={reduced} isDark={isDark} />
        <Particles isDark={isDark} />
      </Rig>
    </>
  );
}

export function HeroScene() {
  // This component only ever renders client-side (loaded via next/dynamic
  // with ssr:false), so resolvedTheme here can never disagree with
  // server-rendered HTML — there isn't any to disagree with.
  const { resolvedTheme } = useTheme();
  const reduced = useReducedMotion();
  const scrollRef = useRef(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Before next-themes resolves (first tick on the client), default to
  // the dark treatment rather than rendering nothing.
  const isDark = resolvedTheme !== "light";

  // In light mode the shape sits directly behind the headline, and even
  // the brightened material reads as too dominant at full strength —
  // dialed back to a watermark-like presence so the text stays legible.
  const baseOpacity = isDark ? 1 : 0.4;

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(Math.max(window.scrollY / SCROLL_RECEDE_RANGE, 0), 1);
      scrollRef.current = progress;
      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = String(baseOpacity * (1 - progress * 0.85));
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [baseOpacity]);

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        performance={{ min: 0.4 }}
        className="!absolute inset-0"
      >
        <Scene reduced={reduced} scrollRef={scrollRef} isDark={isDark} />
      </Canvas>
    </div>
  );
}
