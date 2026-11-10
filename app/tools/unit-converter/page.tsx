import React from 'react';
import type { Metadata } from 'next';
import UnitConverter from '@/components/tools/UnitConverter';
import CallToAction from '@/components/CallToAction';
import RelatedTools from '@/components/tools/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Construction Unit Converter | Feet, Inches, Yards, Meters',
    description: 'Convert jobsite units instantly: length, area, volume, and weight between imperial and metric, plus a feet-and-inches helper.',
    keywords: ['unit converter construction', 'feet to meters converter', 'cubic yard converter', 'construction calculator conversions', 'jobsite unit converter', 'inches to cm'],
    alternates: {
        canonical: 'https://spacecapture.ai/tools/unit-converter',
    },
};

export default function UnitConverterPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Construction Unit Converter",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "A free tool to convert length, area, volume, and weight between imperial and metric units on the jobsite.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://spacecapture.ai/tools/unit-converter"
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-white text-center border-b border-slate-100">
                    <div className="container mx-auto px-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-bold tracking-wider uppercase text-xs mb-4">
                            Free Field Tool
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Construction Unit Converter
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Length, area, volume, and weight — imperial to metric and back, with a feet-and-inches helper for field math.
                        </p>
                    </div>
                </section>

                {/* Calculator Tool Section */}
                <section className="py-12 md:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <UnitConverter />
                    </div>
                </section>

                {/* SEO Content Article */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <article className="prose prose-lg prose-slate mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Every Conversion the Jobsite Throws at You</h2>
                            <p>
                                Drawings arrive in metric, suppliers quote in imperial, and the tape measure reads both. This converter
                                covers the four quantities that show up daily on site — <strong>length, area, volume, and weight</strong> —
                                plus the feet-plus-inches math that never fits neatly in a calculator.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Conversions Worth Memorizing</h3>
                            <div className="bg-slate-100 p-6 rounded-xl font-mono text-sm mb-6 border border-slate-200">
                                1 in = 2.54 cm &nbsp;|&nbsp; 1 ft = 0.3048 m<br />
                                1 yd³ = 27 ft³ &nbsp;|&nbsp; 1 gal (US) = 3.785 L<br />
                                1 lb = 0.4536 kg &nbsp;|&nbsp; 1 ton (US) = 907.18 kg
                            </div>
                            <p>
                                For area and volume, the shortcuts compound: one square foot is 0.0929 m², and one cubic yard is
                                0.7646 m³. When a supplier quotes per cubic meter, multiply by 1.307 to get cubic yards.
                            </p>

                            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-10">
                                <strong>Field Note:</strong> Decimal feet is the surveyor&apos;s language — 10 ft 6 in is 10.5 ft.
                                Dimension strings on plan sets often read in decimal feet, so converting before layout prevents
                                cumulative errors across a building line.
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Consistent Units, Consistent Records</h3>
                            <p>
                                Unit mix-ups are a quiet source of RFIs and rework. <strong>SpaceCapture</strong> keeps forms, measurements,
                                and reports in one structured record — so the number captured in the field is the number that shows up
                                in the report, the RFI, and the closeout package.
                            </p>
                        </article>
                    </div>
                </section>

                <RelatedTools currentToolName="Construction Unit Converter" />
                <CallToAction />
            </main>
        </div>
    );
}
