export const getOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://spacecapture.ai/#organization",
  "name": "Space AI Inc.",
  "url": "https://spacecapture.ai/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://spacecapture.ai/logo.png"
  },
  "sameAs": [
    "https://www.linkedin.com/company/spaceaiapp.com/",
    "https://www.youtube.com/@spaceai-7",
    "https://www.instagram.com/space_ai77/",
    "https://x.com/pmspace0707"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2500 Marconi Ave, Ste 101",
    "addressLocality": "Sacramento",
    "addressRegion": "CA",
    "postalCode": "95821",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-419-820-1487",
    "contactType": "sales",
    "areaServed": "US",
    "availableLanguage": "English"
  }
});
