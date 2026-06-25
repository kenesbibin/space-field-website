import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { LOCATION_DATA } from "@/lib/location-data";

const BASE_URL = "https://spacecapture.ai";
const APP_DIR = path.join(process.cwd(), "app");

// Route groups, private folders, and dynamic-only folders that should not
// appear in the sitemap.
const EXCLUDED_SEGMENTS = new Set([
  "_", // Next.js private folders
  "api", // API routes
  "lab", // Internal R&D lab (noindex)
  "sitemaps", // Sitemap index page (link only)
]);

// Pages that should not be indexed.
const NOINDEX_PATHS = new Set([
  "/request-a-demo",
  "/lab",
  "/sitemaps",
  "/tools",
  "/tools/asphalt-calculator",
  "/tools/concrete-calculator",
  "/tools/labor-cost-calculator",
  "/tools/paint-calculator",
]);

/**
 * Walk the `app/` directory and return every static path that resolves to a
 * `page.tsx`. Dynamic segments (e.g. `[slug]`) are emitted as templates and
 * expanded below for known data sources.
 */
function collectStaticPages(dir: string, segments: string[] = []): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (EXCLUDED_SEGMENTS.has(entry.name)) continue;

    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(
        ...collectStaticPages(full, [...segments, entry.name])
      );
    } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
      // Skip route group prefixes like (group)
      const url = "/" + segments
        .filter((s) => !s.startsWith("("))
        .join("/");
      results.push(url === "" ? "/" : url);
    }
  }

  return results;
}

const staticPaths = collectStaticPages(APP_DIR);

const dynamicPaths: string[] = [
  ...Object.keys(LOCATION_DATA).map((slug) => `/locations/${slug}`),
];

const allPaths = Array.from(new Set([...staticPaths, ...dynamicPaths])).sort();

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allPaths.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: NOINDEX_PATHS.has(path)
      ? undefined
      : path === "/"
        ? "weekly"
        : path.startsWith("/blog") ||
            path.startsWith("/glossary") ||
            path.startsWith("/locations")
          ? "monthly"
          : "weekly",
    priority: NOINDEX_PATHS.has(path)
      ? undefined
      : path === "/"
        ? 1.0
        : path.startsWith("/blog") || path.startsWith("/locations")
          ? 0.6
          : path.startsWith("/industries") ||
              path.startsWith("/who-we-serve") ||
              path.startsWith("/compare") ||
              path.startsWith("/alternatives")
            ? 0.8
            : 0.7,
  }));
}
