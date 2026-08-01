"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const HeroScene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});

/**
 * Dark-mode only: the scene's emissive/metallic materials read as premium
 * on a near-black background but render as a muddy blob on white. Checked
 * against next-themes' resolved theme directly (not a Tailwind dark:
 * class) so it tracks the user's actual toggle, not just OS preference.
 * resolvedTheme is undefined until next-themes hydrates, which also
 * keeps this from rendering anything mismatched during SSR.
 */
export function HeroSceneLoader() {
  const { resolvedTheme } = useTheme();
  if (resolvedTheme !== "dark") return null;
  return <HeroScene />;
}
