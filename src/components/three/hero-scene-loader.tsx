"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});

/**
 * Always mounts the dynamic (ssr:false) component from a fixed position
 * in the tree, so the Suspense boundary next/dynamic creates is
 * structurally identical between server and client — nothing here is
 * conditioned on client-only state, which is what a hydration mismatch
 * needs to happen. The dark-mode gate lives inside HeroScene itself,
 * which never renders on the server at all (ssr:false), so whatever it
 * decides post-mount can't mismatch anything.
 */
export function HeroSceneLoader() {
  return <HeroScene />;
}
