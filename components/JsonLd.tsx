export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://spacecapture.ai/#organization",
        "name": "Space Capture",
        "url": "https://spacecapture.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://spacecapture.ai/images/logo.jpg",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://x.com/SpaceCapture7",
          "https://www.instagram.com/spacecapture77/",
          "https://www.youtube.com/@SpaceCapture_AI",
          "https://www.linkedin.com/company/spaceai-capture/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+14198201487",
          "contactType": "customer support",
          "areaServed": ["US", "SG", "DU", "IN", "KW"],
          "availableLanguage": "English"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Space Capture",
        "applicationCategory": "ConstructionManagement, BusinessApplication",
        "operatingSystem": "Android, iOS",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "The ultimate mobile command center for field operations. Streamline tasks, automate reporting, and sync your workforce in real-time with AI-powered tools.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "120"
        },
        "author": {
          "@type": "Organization",
          "name": "Space Capture"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Space Capture",
        "image": "https://spacecapture.ai/images/logo.jpg",
        "telephone": "+14198201487",
        "email": "support@spacecapture.ai",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2500 Marconi Ave, Ste 101",
          "addressLocality": "Sacramento",
          "addressRegion": "CA",
          "postalCode": "95821",
          "addressCountry": "US"
        },
        "url": "https://spacecapture.ai"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
