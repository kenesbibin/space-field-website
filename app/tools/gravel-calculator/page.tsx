import React from 'react';
import type { Metadata } from 'next';
import GravelCalculator from '@/components/tools/GravelCalculator';
import CallToAction from '@/components/CallToAction';
import RelatedTools from '@/components/tools/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Gravel Calculator | Cubic Yards & Tons',
    description: 'Calculate how much gravel, stone, sand, topsoil, or mulch you need in cubic yards and tons from length, width, and depth.',
    keywords: ['gravel calculator', 'cubic yards calculator', 'tonnage calculator', 'aggregate calculator', 'crushed stone calculator', 'how much gravel do i need'],
    alternates: {
        canonical: 'https://spacecapture.ai/tools/gravel-calculator',
    },
};

export default function GravelCalculatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Gravel Calculator",
        "applicationCategory": "ConstructionApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "A free tool to estimate gravel and aggregate needs in cubic feet, cubic yards, and tons.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://spacecapture.ai/tools/gravel-calculator"
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
                            Free Estimation Tool
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Gravel Calculator
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Estimate cubic yards and tons of gravel, stone, sand, topsoil, or mulch for driveways, bases, and landscape beds.
                        </p>
                    </div>
                </section>

                {/* Calculator Tool Section */}
                <section className="py-12 md:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <GravelCalculator />
                    </div>
                </section>

                {/* SEO Content Article */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <article className="prose prose-lg prose-slate mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Calculate Gravel for a Project</h2>
                            <p>
                                Gravel is sold by the ton and placed by the cubic yard — and the two never match one-to-one. The bridge
                                between them is <strong>density</strong>, which changes with the product. Crushed stone runs about
                                105 lb/ft³, topsoil about 78 lb/ft³, and mulch only about 30 lb/ft³.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Math Behind the Load</h3>
                            <div className="bg-slate-100 p-6 rounded-xl font-mono text-sm mb-6 border border-slate-200">
                                Cubic feet = Length × Width × (Depth ÷ 12)<br />
                                Cubic yards = Cubic feet ÷ 27<br />
                                Tons = (Cubic feet × Density lb/ft³) ÷ 2,000
                            </div>
                            <p>
                                For a 4-inch base, one cubic yard covers about 81 ft². Round up your order — trucks deliver in whole
                                tons, and an uneven subgrade quietly soaks up 5–10% more material than a flat area.
                            </p>

                            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-10">
                                <strong>Field Note:</strong> Compaction matters. A loose yard of base compacted to 95% density covers
                                less area than the same yard uncompacted — for structural bases, ask your supplier for the compacted
                                yield before you order.
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Track Material Receipts in One Place</h3>
                            <p>
                                Delivery tickets, submittals, and stockpile photos are easy to lose in a truck cab. <strong>SpaceCapture</strong>
                                turns them into timestamped records tied to the right location — so quantity disputes and pay applications
                                are settled with evidence, not memory.
                            </p>
                        </article>
                    </div>
                </section>

                <RelatedTools currentToolName="Gravel Calculator" />
                <CallToAction />
            </main>
        </div>
    );
}
