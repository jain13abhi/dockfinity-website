import type { MetadataRoute } from "next";
import { getAllDates } from "@/lib/discovery";

const BASE_URL = "https://dockfinity.com";

const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/verticals", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/discovery", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/digital-services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/verticals/trading-dock", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/verticals/impressio-dock", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/refund-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/shipping-policy", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const staticRoutes = routes.map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    // Every published discovery brief gets its own indexed permalink.
    const briefRoutes = getAllDates().map((date) => ({
        url: `${BASE_URL}/discovery/${date}`,
        lastModified: new Date(`${date}T00:00:00Z`),
        changeFrequency: "yearly" as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...briefRoutes];
}
