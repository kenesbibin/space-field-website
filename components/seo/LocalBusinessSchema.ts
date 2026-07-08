interface LocalBusinessInput {
  name: string;
  description: string;
  url: string;
  city: string;
  region?: string;
  country: string;
  countryCode?: string;
  latitude?: number;
  longitude?: number;
  areaServed?: string;
  serviceRadiusKm?: number;
  image?: string;
  telephone?: string;
  priceRange?: string;
  openingHours?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const DEFAULT_TELEPHONE = "+1-419-820-1487";
const DEFAULT_HOURS = ["Mo-Fr 09:00-18:00"];

export const getLocalBusinessSchema = (input: LocalBusinessInput) => {
  const {
    name,
    description,
    url,
    city,
    region,
    country,
    countryCode = "US",
    latitude,
    longitude,
    areaServed,
    serviceRadiusKm = 100,
    image = "https://spacecapture.ai/images/og-image.jpg",
    telephone = DEFAULT_TELEPHONE,
    priceRange = "$$",
    openingHours = DEFAULT_HOURS,
    aggregateRating,
  } = input;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name,
    description,
    url,
    image,
    telephone,
    priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      ...(region ? { addressRegion: region } : {}),
      addressCountry: countryCode,
      addressCountryName: country,
    },
    ...(typeof latitude === "number" && typeof longitude === "number"
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude,
            longitude,
          },
        }
      : {}),
    areaServed: {
      "@type": "AdministrativeArea",
      name: areaServed ?? city,
    },
    ...(serviceRadiusKm
      ? {
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint:
              typeof latitude === "number" && typeof longitude === "number"
                ? { "@type": "GeoCoordinates", latitude, longitude }
                : undefined,
            geoRadius: serviceRadiusKm * 1000,
          },
        }
      : {}),
    openingHoursSpecification: openingHours.map((h) => {
      const [days, hours] = h.split(" ");
      const [open, close] = hours.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.split("-"),
        opens: open,
        closes: close,
      };
    }),
    ...(aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            reviewCount: aggregateRating.reviewCount,
          },
        }
      : {}),
  };
};
