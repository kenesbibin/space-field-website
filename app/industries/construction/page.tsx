import React from "react";
import type { Metadata } from "next";
import ConstructionPageContent from "@/components/ConstructionPageContent";

export const metadata: Metadata = {
  title: "Automated Construction Punch Lists | SpaceCapture",
  description: "Close out projects faster. Turn site walks into automated punch lists using video capture. Reduce rework and subcontractor disputes.",
  keywords: ['construction software', 'field management', 'daily logs', 'safety inspections', 'construction app', 'Space Field'],
  alternates: {
    canonical: 'https://spacecapture.ai/industries/construction',
  },
  openGraph: {
    title: 'Automated Construction Punch Lists | SpaceCapture',
    description: 'Close out projects faster. Turn site walks into automated punch lists using video capture. Reduce rework and subcontractor disputes.',
    url: 'https://spacecapture.ai/industries/construction',
    siteName: 'Space Field',
    images: [
      {
        url: '/images/construction.jpg',
        width: 1200,
        height: 630,
        alt: 'Space Field Construction Management',
      },
    ],
    type: 'website',
  },
};

const ConstructionPage = () => {
  return <ConstructionPageContent />;
};

export default ConstructionPage;