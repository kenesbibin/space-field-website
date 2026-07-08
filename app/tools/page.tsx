import React from 'react';
import type { Metadata } from 'next';
import ToolsClient from './ToolsClient';

const TOOLS = [
    { name: "Asphalt Calculator", description: "Estimate tonnage and volume for paving projects with compaction factors." },
    { name: "Concrete Calculator", description: "Calculate cubic yards and bag counts for slabs, footings, and columns." },
    { name: "Construction Cost Calculator", description: "Create detailed building estimates with line items for materials and labor." },
    { name: "Free Online CAD Viewer", description: "View and share DWG/DXF files instantly in your browser without software." },
    { name: "Labor Cost Calculator", description: "Determine true labor burden, overhead, and markup for your workforce." },
    { name: "Paint Calculator", description: "Estimate gallons of paint needed based on wall area and coverage rates." },
    { name: "Switching Calculator", description: "Utility tool for calculating electrical switching and load distributions." }
];

export const metadata: Metadata = {
    title: 'Free Construction Tools & Project Automation Calculators | Space Capture',
    description: 'Access our suite of free construction tools and project automation calculators: asphalt and concrete estimators, labor burden tools, CAD viewers, and more. Built for field engineers to automate workflows.',
    keywords: [
        'construction tools',
        'construction calculators',
        'free construction software',
        'project automation',
        'asphalt estimator',
        'concrete calculator',
        'labor cost tool',
        'field engineering tools',
        'automated construction workflows'
    ],
    alternates: {
        canonical: 'https://spacecapture.ai/tools',
    },
};

export default function ToolsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Free Construction Tools & Project Automation Calculators",
        "description": "A comprehensive collection of free web-based tools and project automation calculators designed for construction professionals and field engineers to streamline site operations.",
        "publisher": {
            "@type": "Organization",
            "name": "Space Capture",
            "url": "https://spacecapture.ai"
        },
        "mainEntity": TOOLS.map(tool => ({
            "@type": "SoftwareApplication",
            "name": tool.name,
            "description": tool.description,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ToolsClient />
        </>
    );
}
