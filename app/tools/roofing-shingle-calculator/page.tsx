import React from 'react';
import type { Metadata } from 'next';
import RoofingCalculator from '@/components/tools/RoofingCalculator';
import CallToAction from '@/components/CallToAction';
import RelatedTools from '@/components/tools/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Roofing Shingle Calculator | Squares & Bundles',
    description: 'Calculate roofing shingles from roof footprint and pitch: roof area, squares, and bundles with a waste factor included.',
    keywords: ['shingle calculator', 'roofing calculator', 'roof squares calculator', 'how many bundles of shingles', 'roof pitch calculator', 'asphalt shingle estimator'],
    alternates: {
        canonical: 'https://spacecapture.ai/tools/roofing-shingle-calculator',
    },
};

export default function RoofingCalculatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Roofing Shingle Calculator",
        "applicationCategory": "ConstructionApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "A free tool to convert roof footprint and pitch into squares, shingle bundles, and estimated cost.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://spacecapture.ai/tools/roofing-shingle-calculator"
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
                            Roofing Shingle Calculator
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Turn a roof footprint and pitch into squares, bundles, and cost — with waste built in.
                        </p>
                    </div>
                </section>

                {/* Calculator Tool Section */}
                <section className="py-12 md:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <RoofingCalculator />
                    </div>
                </section>

                {/* SEO Content Article */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <article className="prose prose-lg prose-slate mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">How Many Shingles Do You Need?</h2>
                            <p>
                                Roofing is sold by the <strong>square</strong> — 100 square feet of roof surface — and most asphalt
                                shingles come 3 bundles to a square. The catch: the roof surface is bigger than the footprint of the
                                house, because pitch stretches it.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Math Behind the Roof</h3>
                            <div className="bg-slate-100 p-6 rounded-xl font-mono text-sm mb-6 border border-slate-200">
                                Slope factor = √(12² + rise²) ÷ 12<br />
                                Roof area = Footprint × Slope factor<br />
                                Bundles = ⌈Squares × 3 × (1 + waste)⌉
                            </div>
                            <p>
                                A 4/12 pitch adds about 5.4% over the footprint; a 9/12 pitch adds 25%. Waste starts at 10% for simple
                                gable roofs and should climb to 15–20% for hips, valleys, and dormers where every cut scraps a piece.
                            </p>

                            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-10">
                                <strong>Field Note:</strong> Bundles cover shingles only. Ridge cap, starter strips, underlayment,
                                ice-and-water membrane, and flashing are counted separately — budget them before the truck arrives.
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Inspect the Roof Without the Ladder</h3>
                            <p>
                                Roof work is where defects hide longest. <strong>SpaceCapture</strong> documents roofing stages with
                                dated, geo-tagged photos before they&apos;re covered up — underlayment, flashing, and fastening patterns
                                stay on record for warranty claims and final inspection.
                            </p>
                        </article>
                    </div>
                </section>

                <RelatedTools currentToolName="Roofing Shingle Calculator" />
                <CallToAction />
            </main>
        </div>
    );
}
