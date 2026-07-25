import type { MetadataRoute } from "next";

const BASE_URL = "https://spacecapture.ai";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/lab/", "/sitemaps"],
			},
			{
				userAgent: "GPTBot",
				allow: "/",
				disallow: ["/lab/"],
			},
			{
				userAgent: "Google-Extended",
				allow: "/",
				disallow: ["/lab/"],
			},
			{
				userAgent: "ClaudeBot",
				allow: "/",
				disallow: ["/lab/"],
			},
			{
				userAgent: "PerplexityBot",
				allow: "/",
				disallow: ["/lab/"],
			},
			{
				userAgent: "CCBot",
				disallow: "/",
			},
		],
		sitemap: `${BASE_URL}/sitemap.xml`,
		host: BASE_URL,
	};
}
