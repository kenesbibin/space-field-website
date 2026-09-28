import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { ALTERNATIVES_DATA } from "@/lib/alternatives-data";
import { GLOSSARY_TERMS } from "@/lib/glossary-data";
import { LOCATION_DATA } from "@/lib/location-data";
import { INDEXED_LOCATIONS } from "@/lib/indexed-locations";
import { CAREERS_ROLES } from "@/lib/careers-data";

const BASE_URL = "https://spacecapture.ai";

const APP_DIR = path.join(process.cwd(), "app");

// Segments that should never appear in the public sitemap.
const EXCLUDED_SEGMENTS = ["lab", "_not-found", "_global-error", "api", "sitemaps"];

// True dynamic route folders in the app directory. These are expanded
// manually from their data sources so the sitemap lists real URLs only.
const DYNAMIC_SLUG_FOLDER = /\[[^\]]+\]/;

/**
 * Walk the app directory and collect static routes from page.tsx files.
 * Dynamic slug folders like [slug] are skipped here and expanded separately.
 */
function getStaticRoutes(): string[] {
	const routes: string[] = [];

	function walk(dir: string, prefix: string = "") {
		const entries = fs.readdirSync(dir, { withFileTypes: true });

		for (const entry of entries) {
			const segment = entry.name;
			const fullPath = path.join(dir, segment);

			// Skip route groups (e.g. (marketing)), private folders, and excluded segments.
			if (segment.startsWith("(") || segment.startsWith("_") || EXCLUDED_SEGMENTS.includes(segment)) {
				continue;
			}

			if (entry.isDirectory()) {
				// Skip dynamic slug folders; they are expanded from data sources.
				if (DYNAMIC_SLUG_FOLDER.test(segment)) {
					continue;
				}
				walk(fullPath, path.join(prefix, segment));
			} else if (entry.isFile() && segment === "page.tsx") {
				const normalized = prefix.replace(/\\/g, "/");
				routes.push(normalized === "" ? "/" : `/${normalized}`);
			}
		}
	}

	walk(APP_DIR);
	return routes;
}

/**
 * Expand known dynamic routes using their data sources. This matches the
 * generateStaticParams() behavior of each [slug] route.
 */
function getDynamicRoutes(): string[] {
	const routes: string[] = [];

	for (const slug of Object.keys(ALTERNATIVES_DATA)) {
		routes.push(`/alternatives/${slug}`);
	}

	for (const role of CAREERS_ROLES) {
		routes.push(`/careers/${role.slug}`);
	}

	for (const term of GLOSSARY_TERMS) {
		routes.push(`/glossary/${term.slug}`);
	}

	for (const slug of Object.keys(LOCATION_DATA)) {
		// Only include locations that are allowed to be indexed. The rest are
		// noindex'd to preserve crawl budget.
		if (INDEXED_LOCATIONS.has(slug)) {
			routes.push(`/locations/${slug}`);
		}
	}

	return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes = getStaticRoutes();
	const dynamicRoutes = getDynamicRoutes();

	const allRoutes = Array.from(new Set([...staticRoutes, ...dynamicRoutes]))
		.filter((route) => !EXCLUDED_SEGMENTS.some((seg) => route === `/${seg}` || route.startsWith(`/${seg}/`)))
		.sort();

	const lastModified = new Date().toISOString();

	return allRoutes.map((route) => ({
		url: `${BASE_URL}${route}`,
		lastModified,
	}));
}
