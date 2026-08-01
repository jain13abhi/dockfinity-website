"use client";

import { useRef, useEffect, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── prefers-reduced-motion, subscribed via the browser's own store ─── */
function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function useReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
}

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
}: {
  radius: number;
  speed: number;
  offset: number;
  tilt: number;
  color: string;
  size: number;
  reduced: boolean;
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
        emissiveIntensity={0.6}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

/* ─── Central core ────────────────────────────────────────
   A torus knot — the infinite loop the brand name gestures
   at — rendered as a faceted amber wireframe-over-glass form.
──────────────────────────────────────────────────────────── */
function Core({ reduced }: { reduced: boolean }) {
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
          color="#0a0e1a"
          emissive="#d97706"
          emissiveIntensity={0.15}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
      <mesh scale={1.001}>
        <torusKnotGeometry args={[1.15, 0.34, 220, 32, 2, 3]} />
        <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

/* ─── Ambient particle field ─────────────────────────────── */
function Particles() {
  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[PARTICLE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#f59e0b" size={0.02} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

/* ─── Mouse-parallax rig ─────────────────────────────────── */
function Rig({ children, reduced }: { children: React.ReactNode; reduced: boolean }) {
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

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.current.x * 0.25, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, target.current.y * 0.15, 0.04);
  });

  return <group ref={group}>{children}</group>;
}

function Scene({ reduced }: { reduced: boolean }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={40} color="#f59e0b" />
      <pointLight position={[-4, -2, -3]} intensity={15} color="#3b82f6" />

      <Rig reduced={reduced}>
        <Core reduced={reduced} />
        <OrbitNode radius={2.3} speed={0.35} offset={0} tilt={0.5} color="#3b82f6" size={0.16} reduced={reduced} />
        <OrbitNode radius={2.6} speed={0.27} offset={2.1} tilt={-0.3} color="#10b981" size={0.14} reduced={reduced} />
        <OrbitNode radius={2.1} speed={0.42} offset={4.2} tilt={0.15} color="#f59e0b" size={0.15} reduced={reduced} />
        <Particles />
      </Rig>
    </>
  );
}

export function HeroScene() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      performance={{ min: 0.4 }}
      className="!absolute inset-0"
    >
      <Scene reduced={reduced} />
    </Canvas>
  );
}
