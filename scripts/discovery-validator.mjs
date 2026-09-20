export function getDiscoveryValidator(module) {
  const validator =
    module?.validateDiscoveryBrief ?? module?.default?.validateDiscoveryBrief;
  if (typeof validator !== "function") {
    throw new Error("Could not load validateDiscoveryBrief from src/lib/discovery.ts.");
  }
  return validator;
}

export async function loadDiscoveryValidator() {
  return getDiscoveryValidator(await import("../src/lib/discovery.ts"));
}
