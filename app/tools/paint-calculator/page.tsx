import React from 'react';
import type { Metadata } from 'next';
import PaintCalculator from '@/components/tools/PaintCalculator';
import CallToAction from '@/components/CallToAction';
import RelatedTools from '@/components/tools/RelatedTools';

export const metadata: Metadata = {
  title: 'Free Paint Calculator | Room Painting Estimator',
  description: 'Calculate how many gallons of paint and primer you need for your room. accurate paint estimator for walls and ceilings.',
  keywords: ['paint calculator', 'room painting estimator', 'interior painting calculator', 'how much paint do I need', 'wall paint calculator'],
  alternates: {
    canonical: 'https://spacecapture.ai/tools/paint-calculator',
  },
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
    "description": "A free tool to estimate paint gallons required for interior rooms, accounting for windows and doors.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://spacecapture.ai/tools/paint-calculator"
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
            <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-600 font-bold tracking-wider uppercase text-xs mb-4">
              Free Painting Tool
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
              <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">How to Estimate Paint for Your Interior Project</h2>
              <p>
                A fresh coat of paint is the most cost-effective way to transform a space. But estimating the right amount can be tricky—buy too little and you're scrambling to match batches; buy too much and you're storing cans forever.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Professional Method</h3>
              <p>
                To calculate the paintable area of a room, use this method:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 border-l-4 border-rose-500 pl-8 ml-2">
                <li><strong>Measure Perimeter:</strong> Add the lengths of all walls together.</li>
                <li><strong>Calculate Wall Area:</strong> Multiply the perimeter by the ceiling height.</li>
                <li><strong>Subtract Openings:</strong> Deduct area for doors (21 sq ft) and windows (15 sq ft).</li>
              </ul>

              <p>
                A standard gallon typically covers <strong>350 to 400 square feet</strong>. For a professional finish, two coats are recommended.
              </p>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Quality Control & Reporting</h4>
                <p className="text-slate-600">
                  For large-scale developments, paint sub-contractors use **Space Capture** to document room readiness, verify color specifications, and log completion for faster progress payments.
                </p>
              </div>
            </article>
          </div>
        </section>

        <RelatedTools currentToolName="Paint Calculator" />
        <CallToAction />
      </main>
    </div>
  );
}
