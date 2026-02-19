import React from 'react';
import type { Metadata } from 'next';
import AsphaltCalculator from '@/components/tools/AsphaltCalculator';
import CallToAction from '@/components/CallToAction';
import RelatedTools from '@/components/tools/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Asphalt Calculator | Estimate Hot Mix Asphalt Tonnage',
    description: 'Calculate how much asphalt you need for your driveway or parking lot. Accurate estimates for tons and cubic yards including compaction factors.',
    keywords: ['asphalt calculator', 'blacktop calculator', 'paving estimator', 'asphalt tonnage calculator', 'hot mix asphalt calculator'],
};

export default function AsphaltCalculatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Estimate Asphalt for Paving",
        "description": "A comprehensive guide and calculator for estimating asphalt tonnage for paving projects.",
        "author": {
            "@type": "Organization",
            "name": "Space Capture"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://spacecapture.ai/tools/asphalt-calculator"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 font-bold tracking-wider uppercase text-xs mb-4">
                            Construction Tools
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Asphalt Calculator
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Accurately estimate the tonnage and volume of Hot Mix Asphalt needed for your paving project.
                        </p>
                    </div>
                </section>

                {/* Calculator Tool Section */}
                <section className="py-12 md:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <AsphaltCalculator />
                    </div>
                </section>

                {/* SEO Content Article */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <article className="prose prose-lg prose-slate mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">How to Estimate Asphalt for Professional Paving</h2>
                            <p>
                                For any paving project, accurately estimating the amount of asphalt required is critical to ensure that projects are completed on time, within budget, and with minimal wastage. Given the costs associated with procuring materials, transport, and labor, miscalculations can lead to significant financial setbacks.
                            </p>

                            <h3>1. Evaluate the base condition</h3>
                            <p>
                                If you're laying asphalt over an existing surface, evaluate its condition. A damaged or uneven base might require more asphalt for a smooth finish. A gravel base will often need a thicker layer of asphalt than a solid concrete base, as it can shift or settle over time.
                            </p>

                            <h3>2. Precision measurements</h3>
                            <p>
                                Begin by measuring the length and width of the area. This is straightforward for rectangular spaces: Measure end to end and multiply the length by the width to get the area. For irregular shapes, consider breaking down the space into smaller rectangles or squares.
                            </p>

                            <h3>3. Compaction and Density</h3>
                            <p>
                                Asphalt compacted during the paving process often results in a reduction in volume. Generally, a compaction factor of about 10% is sufficient, but this can vary based on the specifics of the job and equipment used.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Types of Asphalt Mixes</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Hot Mix Asphalt (HMA):</strong> The most common form of asphalt, made by heating the binder.</li>
                                <li><strong>Warm Mix Asphalt (WMA):</strong> Produced at lower temperatures, leading to fewer emissions.</li>
                                <li><strong>Cold Mix Asphalt:</strong> Used as a patching material for small repairs.</li>
                                <li><strong>Porous Asphalt:</strong> Designed for water drainage and stormwater management.</li>
                            </ul>

                            <div className="mt-12 p-8 bg-purple-50 rounded-2xl border border-purple-100 italic">
                                "Using digital tools for material estimation reduces administrative overhead by up to 15% and minimizes site waste."
                                <span className="block mt-2 font-bold not-italic">— Space Capture Engineering Team</span>
                            </div>
                        </article>
                    </div>
                </section>

                <RelatedTools currentToolName="Asphalt Calculator" />
                <CallToAction />
            </main>
        </div>
    );
}
