import type { MetadataRoute } from "next";

const BASE_URL = "https://spacecapture.ai";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/", "/lab/", "/sitemaps"],
		},
		sitemap: `${BASE_URL}/sitemap.xml`,
		host: BASE_URL,
	};
}
