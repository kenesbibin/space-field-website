import type { MetadataRoute } from "next";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacecapture.ai").replace(/\/$/, "");

const ROUTES: string[] = ["/", "/about-us", "/request-a-demo"];

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date().toISOString();

	return ROUTES.map((path) => ({
		url: `${BASE_URL}${path === "/" ? "" : path}`,
		lastModified,
	}));
}
