import React from 'react';
import type { Metadata } from 'next';
import ConcreteCalculator from '@/components/tools/ConcreteCalculator';
import CallToAction from '@/components/CallToAction';
import RelatedTools from '@/components/tools/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Concrete Calculator | Slab, Footing & Bag Estimator',
    description: 'Calculate concrete volume in cubic yards and estimate the number of 80lb or 60lb premix bags needed for your project.',
    keywords: ['concrete calculator', 'cubic yards calculator', 'concrete bag estimator', 'cement calculator', 'slab calculator', 'quikrete calculator'],
};

export default function ConcreteCalculatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Concrete Calculator",
        "applicationCategory": "ConstructionApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "A free tool to calculate concrete volume and bag counts for slabs, footings, and columns.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://spacecapture.ai/tools/concrete-calculator"
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
                            Concrete Calculator
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Accurately estimate cubic yards and pre-mix bags for slabs, walkways, and footings.
                        </p>
                    </div>
                </section>

                {/* Calculator Tool Section */}
                <section className="py-12 md:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <ConcreteCalculator />
                    </div>
                </section>

                {/* SEO Content Article */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <article className="prose prose-lg prose-slate mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Calculate Concrete Volume for Construction Projects</h2>
                            <p>
                                Whether you are pouring a driveway, a patio, or a foundation, buying the right amount of concrete is crucial. Too little disrupts the pour; too much wastes money. The standard unit of measure for concrete is the **Cubic Yard**.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Math Behind the Mix</h3>
                            <p>
                                To find your volume, use the following formula for rectangular slabs:
                            </p>
                            <div className="bg-slate-100 p-6 rounded-xl font-mono text-sm mb-6 border border-slate-200">
                                Length (ft) × Width (ft) × Depth (ft) = Cubic Feet<br />
                                Total Cubic Feet / 27 = Total Cubic Yards
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Bag Count Estimation</h3>
                            <p>
                                For smaller residential jobs, you might use pre-mixed bags. Typical yields per bag are:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li><strong>80lb Bag:</strong> Yields 0.60 cubic feet (requires 45 bags per cubic yard).</li>
                                <li><strong>60lb Bag:</strong> Yields 0.45 cubic feet (requires 60 bags per cubic yard).</li>
                            </ul>

                            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-10">
                                <strong>Safety Buffer:</strong> Always add a 10% safety margin to your concrete order. Subgrades are rarely perfectly level, and some material is always lost during the pour.
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Streamline Site Compliance</h3>
                            <p>
                                Efficient material ordering is the foundation of site management. **Space Capture** goes beyond estimation, providing digital forms for concrete delivery tracking, slump tests, and curing logs to ensure full structural compliance.
                            </p>
                        </article>
                    </div>
                </section>

                <RelatedTools currentToolName="Concrete Calculator" />
                <CallToAction />
            </main>
        </div>
    );
}
