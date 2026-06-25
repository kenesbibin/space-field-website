interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string | string[];
  provider?: string;
  image?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
    url?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const DEFAULT_PROVIDER = "SpaceCapture";

export const getServiceSchema = (input: ServiceSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: input.name,
  description: input.description,
  url: input.url,
  serviceType: input.serviceType,
  provider: {
    "@type": "Organization",
    name: input.provider ?? DEFAULT_PROVIDER,
    url: "https://spacecapture.ai",
  },
  areaServed: input.areaServed ?? "Worldwide",
  ...(input.image
    ? { image: input.image }
    : { image: "https://spacecapture.ai/images/og-image.jpg" }),
  ...(input.offers
    ? {
        offers: {
          "@type": "Offer",
          price: input.offers.price ?? "0",
          priceCurrency: input.offers.priceCurrency ?? "USD",
          availability:
            input.offers.availability ?? "https://schema.org/OnlineOnly",
          url: input.offers.url ?? "https://spacecapture.ai/pricing",
        },
      }
    : {}),
  ...(input.aggregateRating
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: input.aggregateRating.ratingValue,
          reviewCount: input.aggregateRating.reviewCount,
        },
      }
    : {}),
});

interface ProductSchemaInput {
  name: string;
  description: string;
  url: string;
  brand?: string;
  category?: string;
  image?: string;
  sku?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export const getProductSchema = (input: ProductSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: input.name,
  description: input.description,
  url: input.url,
  brand: {
    "@type": "Brand",
    name: input.brand ?? "SpaceCapture",
  },
  ...(input.category ? { category: input.category } : {}),
  ...(input.image
    ? { image: input.image }
    : { image: "https://spacecapture.ai/images/og-image.jpg" }),
  ...(input.sku ? { sku: input.sku } : {}),
  ...(input.aggregateRating
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: input.aggregateRating.ratingValue,
          reviewCount: input.aggregateRating.reviewCount,
        },
      }
    : {}),
});
