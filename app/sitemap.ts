import type { MetadataRoute } from "next";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacecapture.ai").replace(/\/$/, "");

const ROUTES: string[] = [
	"/",
	"/about-us",
	"/request-a-demo",
	"/core-functions",
	"/visual-form-builder",
	"/ai-detection",
	"/engagement-flows",
	"/access-control",
	"/reports",
	"/industries/facility-management",
	"/solutions/azure-sso",
	"/solutions/inspection-software",
	"/solutions/fleet-maintenance",
	"/solutions/time-tracking",
	"/solutions/data-collection",
	"/resources/templates",
	"/compare/fulcrum",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date().toISOString();

	return ROUTES.map((path) => ({
		url: `${BASE_URL}${path === "/" ? "" : path}`,
		lastModified,
	}));
}
