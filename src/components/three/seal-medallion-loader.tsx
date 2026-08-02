"use client";

import dynamic from "next/dynamic";

const SealMedallion = dynamic(() => import("./seal-medallion").then((m) => m.SealMedallion), {
  ssr: false,
  loading: () => null,
});

/**
 * Always mounts the dynamic (ssr:false) component unconditionally — see
 * the matching comment in hero-scene-loader.tsx for why. The theme check
 * (and which material to use for it) lives inside SealMedallion itself.
 */
export function SealMedallionLoader() {
  return <SealMedallion />;
}
