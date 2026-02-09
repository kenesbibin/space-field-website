import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import SpaceCaptureCopilot from "@/components/SpaceCaptureCopilot";

import EmailButton from "@/components/EmailButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";





export const metadata: Metadata = {
  metadataBase: new URL("https://spacecapture.ai"),
  title: {
    default: "Space Capture - Construction Field Inspection App & Site Audit Software",
    template: "%s | SpaceCapture"
  },
  description: "The #1 Field Management App for Construction Teams. Streamline inspections, automate AI defect detection, and generate instant daily reports.",
  keywords: [
    "Field Management App", "Construction Teams", "AI Defect Detection", 
    "Daily Construction Reports", "Safety Inspection Software", "Punch List App",
    "Site Audit Tool", "Construction Project Management"
  ],
  authors: [{ name: "Space Capture Team" }],
  creator: "Space Capture",
  publisher: "Space Capture",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Space Capture - Construction Field Inspection App & Site Audit Software",
    description: "Automate defect detection, daily reports, and safety compliance with our free mobile app.",
    url: "https://spacecapture.ai",
    siteName: "Space Capture",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this image exists or use a relevant existing one
        width: 1200,
        height: 630,
        alt: "Space Capture AI Platform"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Capture | AI Field Operations",
    description: "The #1 AI Field Inspection Software. Automate reports and safety compliance.",
    creator: "@SpaceCapture7",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "g7pWi8PWsp7s3Mq6eGjyKfJ1hrgqgfybkPOp-sXsNKY",
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
};

import Script from "next/script";
import CopilotKitWrapper from "@/components/CopilotKitWrapper";


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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQTNF8MF');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9CY0C607SQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9CY0C607SQ');
          `}
        </Script>
        <CopilotKitWrapper>
          <JsonLd />
          <Navbar />
          <Breadcrumbs />
          {children}
          <Footer />
          <EmailButton/>
          <WhatsAppButton />
          <SpaceCaptureCopilot />
        </CopilotKitWrapper>
      </body>
    </html>
  );
}


