import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

import EmailButton from "@/components/EmailButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import ClientProviders from "@/components/ClientProviders";



export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://spacecapture.ai"),
  title: {
    default: "SpaceCapture — AI Construction & Field Inspection Software",
    template: "%s | SpaceCapture"
  },
  description: "AI-powered construction & field inspection software. Automate inspections, defect detection, daily reports, and safety compliance for construction, real estate, oil & gas, and facility teams.",
  keywords: [
    "inspections",
    "construction",
    "building construction",
    "construction inspections",
    "construction & field inspections",
    "field inspections",
    "field inspection software",
    "field inspection app",
    "home inspection",
    "house inspection",
    "home inspection services",
    "house inspection service",
    "property inspection",
    "property inspections",
    "property field inspections",
    "building inspection",
    "building checks",
    "building inspection services",
    "inspection company",
    "inspection services company",
    "home inspection software",
    "construction management software",
    "construction software",
    "construction field software",
    "construction field management",
    "construction field service",
    "construction field reporting",
    "construction site inspections",
    "site inspections",
    "construction project management",
    "construction project manager",
    "construction project planning",
    "construction project scheduling",
    "construction cost",
    "construction estimating",
    "construction cost estimator",
    "construction services",
    "construction industry",
    "construction business",
    "construction companies",
    "construction contractors",
    "construction management",
    "construction management software for small business",
    "construction field",
    "construction and building",
    "construction & building",
    "house construction",
    "home construction",
    "home construction cost",
    "building construction contractors",
    "buildings contractors",
    "constructions contractors",
    "contractors building",
    "home building contractor",
    "building contractor",
    "general contractors",
    "general construction contractors",
    "general construction companies",
    "general contractor software",
    "residential construction",
    "residential construction software",
    "residential general construction",
    "residential constructions",
    "civil construction",
    "civil construction software",
    "civils contractors",
    "civil construction contractor",
    "home renovation contractors",
    "house renovation contractors",
    "home remodel contractors",
    "home reno contractors",
    "contractors for home renovations",
    "home renovation software",
    "home renovation builder",
    "home renovations contractors",
    "home renovation experts",
    "home improvement",
    "home improvement contractors",
    "home remodeling contractors",
    "building renovation",
    "building renovations",
    "building renovation contractors",
    "renovation construction",
    "renovate building",
    "construction and renovation",
    "interior design and construction",
    "modular construction",
    "modular construction software",
    "modular buildings",
    "modular building construction",
    "modular housing construction",
    "prefab",
    "prefab building",
    "prefab construction",
    "prefab building construction",
    "prefabricated building",
    "prefabricated construction",
    "prefabricated structures",
    "pre engineered building",
    "prefab building cost",
    "bim",
    "bim construction",
    "bim building",
    "building bim",
    "bim in construction industry",
    "bim 4d",
    "4d bim",
    "sustainable construction",
    "sustainability in the construction industry",
    "construction and sustainability",
    "eco friendly construction",
    "eco friendly buildings",
    "eco friendly builders",
    "eco friendly home builders",
    "sustainable construction companies",
    "green building contractors",
    "construction robot",
    "robotics in building construction",
    "robotics in construction",
    "robotics in construction industry",
    "new construction technologies",
    "construction technology",
    "construction innovation",
    "innovation in construction",
    "cladding in construction",
    "cladding for buildings",
    "cladding inspection",
    "cladding inspections",
    "AI Defect Detection",
    "AI defect detection software",
    "computer vision construction",
    "punch list app",
    "punch list software",
    "site audit tool",
    "site audit software",
    "site inspection software",
    "site inspection app",
    "construction site management",
    "site safety software",
    "safety inspection software",
    "safety compliance software",
    "incident reporting software",
    "field service management software",
    "field service software",
    "field service app",
    "field workforce management",
    "field workforce management software",
    "field management software",
    "field data capture",
    "field data capture software",
    "field operations software",
    "field operations app",
    "mobile field service apps",
    "daily construction reports",
    "daily report software",
    "construction project management software",
    "construction project planning and scheduling",
    "construction project planning",
    "construction project scheduling",
    "pre construction inspection",
    "pre building inspection",
    "pre construction services",
    "construction contracts",
    "construction contract",
    "building contract",
    "construction bid",
    "contractor bids",
    "construction bids",
    "house inspection reports",
    "building inspection reports",
    "property inspection reports",
    "dilapidation reports",
    "property condition reports",
    "construction project planning steps",
    "real estate inspections",
    "real estate inspection services",
    "real estate inspector",
    "real estate property inspector",
    "real estate home inspector",
    "facility management software",
    "facility inspection software",
    "hvac inspection software",
    "telecom tower audit",
    "oil and gas inspection software",
    "solar panel inspection",
    "warehouse inspection software",
    "utility inspection software",
    "insurance inspection software",
    "manufacturing inspection software",
    "logistics inspection software",
    "automated construction",
    "automated field inspections",
    "remote inspection software",
    "offline inspection app",
    "offline field inspection app"
  ],
  authors: [{ name: "Bibin Prathap" }],
  creator: "SpaceCapture",
  publisher: "SpaceCapture",
  applicationName: "SpaceCapture",
  category: "Construction & Field Inspection Software",
  openGraph: {
    type: "website",
    title: "SpaceCapture — AI Construction & Field Inspection Software",
    description: "Automate defect detection, daily reports, and safety compliance with our AI-powered mobile platform built for construction, real estate, and facility teams.",
    url: "https://spacecapture.ai",
    siteName: "SpaceCapture",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SpaceCapture AI Platform — Construction & Field Inspection Software",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceCapture | AI Construction & Field Inspection",
    description: "AI-powered Field Inspection Software for construction. Automate defect detection, daily reports, and safety compliance.",
    creator: "@SpaceCapture7",
    site: "@SpaceCapture7",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "m1pAaoOYPZ9L2WWplLKu3zEJnh1d5uY1dV09C6kJfZc",
    other: {
      "msvalidate.01": "",
      "yandex-verification": "",
      "p:domain_verify": "",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "color-scheme": "light",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQTNF8MF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQTNF8MF');
          `}
        </Script>

        <AnalyticsProvider>
          <ClientProviders>
            <JsonLd />
            <Navbar />
            <Breadcrumbs />
            {children}
            <Footer />
            <EmailButton/>
            <WhatsAppButton />
          </ClientProviders>
        </AnalyticsProvider>
      </body>
    </html>
  );
}


