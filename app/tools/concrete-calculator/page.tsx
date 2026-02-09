import React from 'react';
import type { Metadata } from 'next';
import ConcreteCalculator from '@/components/tools/ConcreteCalculator';
import CallToAction from '@/components/CallToAction';

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
    "description": "A free tool to calculate concrete volume and bag counts for slabs, footings, and columns."
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Calculate Concrete Volume</h2>
                    <p>
                        Whether you are pouring a driveway, a patio, or a foundation, buying the right amount of concrete is crucial. Too little disrupts the pour; too much wastes money.
                    </p>
                    <p>
                        The standard unit of measure for concrete is the **Cubic Yard**. One cubic yard equals 27 cubic feet.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Math Behind the Mix</h3>
                    <p>
                        To find your volume, use the formula:
                    </p>
                    <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
                        Length (ft) × Width (ft) × Depth (ft) = Cubic Feet
                    </div>
                    <p>
                        Then divide by 27 to get Cubic Yards.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">How Many Bags Do I Need?</h3>
                    <p>
                        If you are using pre-mixed concrete (like Quikrete or Sakrete) for smaller jobs, you need to know how many bags to buy. Typical yields are:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li><strong>80lb Bag:</strong> Yields approximately 0.60 cubic feet.</li>
                        <li><strong>60lb Bag:</strong> Yields approximately 0.45 cubic feet.</li>
                    </ul>
                    <p>
                        <em>Pro Tip:</em> Always add 5-10% to your order to account for spillage, uneven subgrades, and waste.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Streamline Your Field Operations</h3>
                    <p>
                         Calculating materials is just one part of the job. **Space Capture** helps construction teams manage the entire lifecycle of a project—from field data collection to quality inspections and punch lists.
                    </p>
                </article>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
}
