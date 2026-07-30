interface SoftwareSchemaInput {
  name?: string;
  description?: string;
  url?: string;
  applicationCategory?: string;
  featureList?: string[];
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export const getSoftwareSchema = (input?: SoftwareSchemaInput) => ({
  "@type": "SoftwareApplication",
  "name": input?.name ?? "SpaceCapture",
  "headline":
    "AI-Powered Field Inspection Software & Construction Management",
  "image": "https://spacecapture.ai/logo.png",
  "url": input?.url ?? "https://spacecapture.ai/",
  "operatingSystem": "Cloud-based, iOS, Android, Web Browser",
  "applicationCategory": input?.applicationCategory ?? "BusinessApplication",
  "description":
    input?.description ??
    "SpaceCapture is an AI-powered mobile command center for field operations, construction management, and site inspections. Features include AI-powered defect detection (cracks, corrosion), real-time field-to-office sync, digital signature capture, and automated safety compliance workflows.",
  "featureList": input?.featureList ?? [
    "AI Defect Detection API (Cracks & Corrosion)",
    "Real-Time Field Operations Dashboard",
    "Digital Task Management & Inspection Logs",
    "Automated Safety & Compliance Checklists",
    "Visual JSON Output for Developers"
  ],
  "offers": {
    "@type": "Offer",
    "name": "Start Free Trial",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/OnlineOnly",
    "url": "https://spacecapture.ai/pricing"
  },
  ...(input?.aggregateRating
    ? {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": input.aggregateRating.ratingValue,
          "reviewCount": input.aggregateRating.reviewCount
        }
      }
    : {}),
  "author": {
    "@id": "https://spacecapture.ai/#organization"
  },
  "publisher": {
    "@id": "https://spacecapture.ai/#organization"
  }
});
