import { getOrganizationSchema } from "@/components/seo/OrganaizationSchema";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...getOrganizationSchema(),
      },
      {
        "@type": "SoftwareApplication",
        "name": "SpaceCapture",
        "url": "https://spacecapture.ai",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Android, iOS",
        "featureList": [
          "AI-powered field inspection",
          "AI search with source attribution",
          "Knowledge graph reasoning over captured site data"
        ],
        "isBasedOn": {
          "@type": "SoftwareSourceCode",
          "name": "VeritasGraph",
          "codeRepository": "https://github.com/bibinprathap/VeritasGraph",
          "url": "https://bibinprathap.github.io/VeritasGraph/index.html",
          "author": {
            "@type": "Person",
            "name": "Bibin Prathap"
          }
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "An AI-powered mobile command center for field operations. Streamline tasks, automate reporting, and sync your workforce in real-time with AI-powered tools.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "120"
        },
        "author": {
          "@type": "Organization",
          "name": "SpaceCapture"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://spacecapture.ai/#website",
        "name": "SpaceCapture",
        "url": "https://spacecapture.ai",
        "publisher": { "@id": "https://spacecapture.ai/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://spacecapture.ai/#bibin-prathap",
        "name": "Bibin Prathap",
        "url": "https://spacecapture.ai/about-us",
        "sameAs": ["https://www.linkedin.com/in/bibin-prathap-4a34a489/"],
        "worksFor": { "@id": "https://spacecapture.ai/#organization" }
      },
      {
        "@type": "Service",
        "name": "Field Inspection Software",
        "serviceType": "AI-powered field inspection software",
        "description":
          "AI-powered field inspection software for construction, utilities, oil & gas, and telecom teams. Run mobile field inspections offline, capture photo evidence, and generate instant reports from any device.",
        "url": "https://spacecapture.ai/field-inspection-software",
        "provider": { "@id": "https://spacecapture.ai/#organization" },
        "areaServed": ["US", "SG", "DU", "IN", "KW"]
      },
      {
        "@type": "Service",
        "name": "AI Defect Detection",
        "serviceType": "AI defect detection software",
        "description":
          "Use computer vision to spot construction defects automatically. Our AI Defect Detection software reduces risk and improves quality control efficiency.",
        "url": "https://spacecapture.ai/ai-defect-detection",
        "provider": { "@id": "https://spacecapture.ai/#organization" },
        "areaServed": ["US", "SG", "DU", "IN", "KW"]
      },
      {
        "@type": "Service",
        "name": "Construction Software",
        "serviceType": "Construction management software",
        "description":
          "The complete construction software platform for residential, commercial, civil, and industrial projects. Field inspections, project management, daily reports, and AI defect detection in one mobile-first app.",
        "url": "https://spacecapture.ai/construction-software",
        "provider": { "@id": "https://spacecapture.ai/#organization" },
        "areaServed": ["US", "SG", "DU", "IN", "KW"]
      },
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
