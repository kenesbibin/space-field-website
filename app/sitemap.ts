import type { MetadataRoute } from "next";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacecapture.ai").replace(/\/$/, "");

/* ── Priority tiers ──────────────────────────────────────────────────
 *  1.0  — Homepage
 *  0.9  — Core product / high-traffic pages
 *  0.8  — Features, solutions, key SEO pages
 *  0.7  — Blog posts, comparisons, industry pages
 *  0.6  — Tools, resources, personas, lab pages
 *  0.5  — Glossary, locations, sitemap page
 * ─────────────────────────────────────────────────────────────────── */

interface RouteConfig {
	path: string;
	priority: number;
	changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

const ROUTES: RouteConfig[] = [
	// ─── Core Pages (1.0 / 0.9) ───
	{ path: "/", priority: 1.0, changeFrequency: "daily" },
	{ path: "/about-us", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/request-a-demo", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/app-download", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/playstore-app-download", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/trust", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/trust/hallucination-free", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/customers", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/faq", priority: 0.8, changeFrequency: "weekly" },

	// ─── Products / Features (0.8) ───
	{ path: "/core-functions", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/visual-form-builder", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/ai-detection", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/engagement-flows", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/access-control", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/reports", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/hosting", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/integrations", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/real-time-construction-monitoring", priority: 0.9, changeFrequency: "weekly" },

	// ─── Solutions / SEO Landing Pages (0.8) ───
	{ path: "/site-inspection-software", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/ai-defect-detection", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/ai-defect-detection-construction", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/ai-construction-defect-detection", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/construction-field-software", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/construction-inspection-software", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/construction-site-management", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/defect-detection-ai", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/field-data-capture", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/field-data-capture-software", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/field-service-management-software", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/field-workforce-management", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/digitize-paper-forms", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/offline-field-inspection-app", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/oil-and-gas-inspection-software", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/hvac-inspection-software", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/solar-panel-inspection-ai", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/telecom-tower-audit-app", priority: 0.8, changeFrequency: "monthly" },

	// ─── Technology (0.7) ───
	{ path: "/technology/computer-vision", priority: 0.7, changeFrequency: "monthly" },

	// ─── Resources (0.7) ───
	{ path: "/resources", priority: 0.7, changeFrequency: "weekly" },
	{ path: "/resources/templates", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/resources/case-study-reactive-to-predictive", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/resources/iso-9001-guide", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/sample-inspection-reports", priority: 0.7, changeFrequency: "monthly" },

	// ─── Blog (0.7) ───
	{ path: "/blog", priority: 0.8, changeFrequency: "weekly" },
	{ path: "/blog/computer-vision-risk", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/end-of-manual-punch-lists", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/predictive-maintenance", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/drone-defect-detection", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/ai-in-construction", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/ai-insurance-claims", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/ai-vs-manual-inspections", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/bim-reality-comparison", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/digital-punch-list-workflow", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/end-of-digital-paper", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/field-service-automation-benefits", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/geofencing-construction-sites", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/mobile-field-service-apps", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/optimizing-material-usage", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/real-time-progress-tracking", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/reduce-rework-ai-case-study", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/reduce-rework-computer-vision", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/remote-inspections-360", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/remote-site-monitoring-guide", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/spacecapture-playstore-launch", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/spacecapture-vs-plangrid", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/subcontractor-accountability-tips", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog/subcontractor-safety-ai", priority: 0.7, changeFrequency: "monthly" },

	// ─── Industries (0.7) ───
	{ path: "/industries/construction", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/oil-and-gas", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/manufacturing", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/real-estate", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/insurance", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/telecom", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/utilities", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/hvac", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/logistics", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/industries/facility-management", priority: 0.7, changeFrequency: "monthly" },

	// ─── Comparisons (0.7) ───
	{ path: "/compare/raken", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/compare/openspace", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/compare/planradar", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/compare/safety-culture", priority: 0.7, changeFrequency: "monthly" },

	// ─── Alternatives (0.7) ───
	{ path: "/alternatives/procore", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/alternatives/safetyculture", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/alternatives/gocanvas", priority: 0.7, changeFrequency: "monthly" },

	// ─── Who We Serve / Personas (0.6) ───
	{ path: "/who-we-serve/general-contractors", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/who-we-serve/subcontractors", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/who-we-serve/facility-managers", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/who-we-serve/architects-engineers", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/who-we-serve/property-developers", priority: 0.6, changeFrequency: "monthly" },

	// ─── Tools (0.6) ───
	{ path: "/tools", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/tools/switching-calculator", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/tools/construction-cost-calculator", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/tools/concrete-calculator", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/tools/asphalt-calculator", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/tools/free-online-cad-viewer", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/tools/labor-cost-calculator", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/tools/paint-calculator", priority: 0.6, changeFrequency: "monthly" },

	// ─── Lab (0.6) ───
	{ path: "/lab/ai-tuning", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/lab/auto-align", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/lab/mobile-performance", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/lab/multi-camera", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/lab/offline-sync", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/lab/photogrammetry", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/lab/point-cloud", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/lab/time-lapse", priority: 0.6, changeFrequency: "monthly" },
	{ path: "/lab/voice-tag", priority: 0.6, changeFrequency: "monthly" },

	// ─── Glossary (0.5) ───
	{ path: "/glossary", priority: 0.5, changeFrequency: "monthly" },
	{ path: "/glossary/construction-defect", priority: 0.5, changeFrequency: "monthly" },
	{ path: "/glossary/punch-list", priority: 0.5, changeFrequency: "monthly" },
	{ path: "/glossary/site-inspection", priority: 0.5, changeFrequency: "monthly" },

	// ─── Locations (0.5) ───
	{ path: "/locations/construction-management-software-dubai", priority: 0.5, changeFrequency: "monthly" },
	{ path: "/locations/field-inspection-app-singapore", priority: 0.5, changeFrequency: "monthly" },
	{ path: "/locations/site-safety-software-texas", priority: 0.5, changeFrequency: "monthly" },

	// ─── Sitemap Page (0.5) ───
	{ path: "/sitemaps", priority: 0.5, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date().toISOString();

	return ROUTES.map((route) => ({
		url: `${BASE_URL}${route.path === "/" ? "" : route.path}`,
		lastModified,
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));
}
