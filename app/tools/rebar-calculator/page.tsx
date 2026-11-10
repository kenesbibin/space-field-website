import React from 'react';
import type { Metadata } from 'next';
import RebarCalculator from '@/components/tools/RebarCalculator';
import CallToAction from '@/components/CallToAction';
import RelatedTools from '@/components/tools/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Rebar Calculator | Bar Count, Length & Weight',
    description: 'Calculate rebar needed for a slab: bar count each way, total cut length, and steel weight from bar size, spacing, and edge cover.',
    keywords: ['rebar calculator', 'rebar weight calculator', 'rebar count calculator', 'steel bar calculator', 'slab reinforcement calculator', 'rebar estimating'],
    alternates: {
        canonical: 'https://spacecapture.ai/tools/rebar-calculator',
    },
};

export default function RebarCalculatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Rebar Calculator",
        "applicationCategory": "ConstructionApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "A free tool to calculate rebar count, total length, and steel weight for two-way slab mats.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://spacecapture.ai/tools/rebar-calculator"
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
                            Rebar Calculator
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Get bar counts, total cut length, and steel weight for a two-way mat — from bar size, spacing, and edge cover.
                        </p>
                    </div>
                </section>

                {/* Calculator Tool Section */}
                <section className="py-12 md:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <RebarCalculator />
                    </div>
                </section>

                {/* SEO Content Article */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <article className="prose prose-lg prose-slate mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Estimate Rebar for a Slab</h2>
                            <p>
                                Ordering the right reinforcement is a balance: too little risks failing inspection, too much is money
                                buried in the concrete. This calculator sizes a standard <strong>two-way mat</strong> — bars running in
                                both directions — and converts it into pounds of steel you can order.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Math Behind the Mat</h3>
                            <p>First find the usable area inside the edge cover, then count bars at your spacing:</p>
                            <div className="bg-slate-100 p-6 rounded-xl font-mono text-sm mb-6 border border-slate-200">
                                Usable length = Slab length − 2 × Cover<br />
                                Bars each way = ⌊Usable dimension ÷ Spacing⌋ + 1<br />
                                Weight = Total bar length × Weight per foot
                            </div>
                            <p>
                                Bar weight per foot is fixed by ASTM A615: a #4 bar weighs 0.668 lb/ft, a #5 weighs 1.043 lb/ft, and a
                                #6 weighs 1.502 lb/ft. Add a waste allowance — typically 5–10% — to cover laps, chairs, and cuts.
                            </p>

                            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-10">
                                <strong>Field Note:</strong> This estimate covers the mat only. Dowels, edge bars, openers, and corner
                                reinforcement shown on structural drawings are additional — always reconcile with the engineer&apos;s schedule.
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">From Takeoff to Inspection-Ready Pour</h3>
                            <p>
                                Steel is only as good as the inspection that follows it. <strong>SpaceCapture</strong> logs rebar and
                                embed inspections with dated photos, captures sign-offs on your phone, and keeps the record ready for the
                                engineer — so a passed check never turns into a callback.
                            </p>
                        </article>
                    </div>
                </section>

                <RelatedTools currentToolName="Rebar Calculator" />
                <CallToAction />
            </main>
        </div>
    );
}
