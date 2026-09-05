import type { MetadataRoute } from "next";

const BASE_URL = "https://dockwarelabs.dockfinity.com";

const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
