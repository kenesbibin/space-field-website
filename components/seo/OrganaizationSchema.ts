export const getOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://spacecapture.ai/#organization",
  "legalName": "Space AI Inc.",
  "name": "SpaceCapture",
  "url": "https://spacecapture.ai/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://spacecapture.ai/images/space-capture-logo.jpg"
  },
  "sameAs": [
    "https://x.com/SpaceCapture7",
    "https://www.instagram.com/spacecapture77/",
    "https://www.youtube.com/@SpaceCapture_AI",
    "https://www.linkedin.com/company/spaceai-capture/"
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
    "email": "contact@spacecapture.ai",
    "contactType": "customer support",
    "availableLanguage": "English"
  }
});
