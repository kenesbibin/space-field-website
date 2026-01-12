import type { MetadataRoute } from "next";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacecapture.ai").replace(/\/$/, "");

const ROUTES: string[] = [
  "/",
  "/about-us",
  "/request-a-demo",
  "/pricing",

  // Products / Features
  "/core-functions",
  "/visual-form-builder",
  "/ai-detection",
  "/engagement-flows",
  "/access-control",
  "/reports",
  "/hosting",
  "/integrations",
  "/tools/switching-calculator",

  // Solutions (New from dev)
  "/solutions/azure-sso",
  "/solutions/inspection-software",
  "/solutions/fleet-maintenance",
  "/solutions/time-tracking",
  "/solutions/data-collection",

  // Resources
  "/resources",
  "/resources/templates",
  "/knowledge-base",

  // Blog
  "/blog",
  "/blog/computer-vision-risk",
  "/blog/end-of-manual-punch-lists",
  "/blog/predictive-maintenance",
  "/blog/drone-defect-detection",
  "/blog/ai-in-construction",

  // Industries
  "/industries/construction",
  "/industries/oil-and-gas",
  "/industries/manufacturing",
  "/industries/real-estate",
  "/industries/insurance",
  "/industries/telecom",
  "/industries/utilities",
  "/industries/hvac",
  "/industries/logistics",
  "/industries/facility-management",

  // Comparisons
  "/compare/raken",
  "/compare/fulcrum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
  }));
}
