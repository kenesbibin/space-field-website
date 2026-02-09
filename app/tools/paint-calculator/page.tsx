import React from 'react';
import type { Metadata } from 'next';
import PaintCalculator from '@/components/tools/PaintCalculator';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Free Paint Calculator | Room Painting Estimator',
  description: 'Calculate how many gallons of paint and primer you need for your room. accurate paint estimator for walls and ceilings.',
  keywords: ['paint calculator', 'room painting estimator', 'interior painting calculator', 'how much paint do I need', 'wall paint calculator'],
};

export default function PaintCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Paint Calculator",
    "applicationCategory": "HomeImprovementApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A free tool to estimate paint gallons required for interior rooms, accounting for windows and doors."
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
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 font-bold tracking-wider uppercase text-xs mb-4">
                    Free Home Improvement Tool
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Paint Calculator
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Don't buy too much or too little. Estimate exactly how many gallons of paint and primer you need for any room.
                </p>
            </div>
        </section>

        {/* Calculator Tool Section */}
        <section className="py-12 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <PaintCalculator />
            </div>
        </section>

        {/* SEO Content Article */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <article className="prose prose-lg prose-slate mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Estimate Paint Needs</h2>
                    <p>
                        A fresh coat of paint is the most cost-effective way to transform a space. But estimating the right amount can be tricky—buy too little and you're scrambling to match batches; buy too much and you're storing cans forever.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Basic Formula</h3>
                    <p>
                        To calculate the paintable area of a room, use this method:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-8">
                        <li><strong>Measure Perimeter:</strong> Add the lengths of all walls together.</li>
                        <li><strong>Calculate Wall Area:</strong> Multiply the perimeter by the ceiling height.</li>
                        <li><strong>Subtract Openings:</strong> Deduct area for doors (approx. 21 sq ft) and windows (approx. 15 sq ft).</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Coverage Rates</h3>
                    <p>
                        A standard gallon of high-quality latex paint typically covers **350 to 400 square feet** with a single coat. However, for a professional finish, **two coats** are almost always recommended, which doubles your requirement.
                    </p>
                    <p>
                        Our tool automatically calculates for a 2-coat finish on walls and estimates primer needs for new drywall or drastic color changes.
                    </p>
                    
                     <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Don't Forget the Ceiling</h3>
                    <p>
                        Painting the ceiling bright white can make a room feel larger. Ceiling paint is often a different formulation (flat finish) than wall paint. Our calculator breaks this out separately so you can buy the right products.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Beyond DIY</h3>
                    <p>
                         For painting contractors managing multiple units or large commercial jobs, estimation errors add up fast. **Space Capture** helps you document site conditions, track material usage, and manage punch lists to ensure every job is profitable and perfect.
                    </p>
                </article>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
}
