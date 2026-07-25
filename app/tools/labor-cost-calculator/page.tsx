import React from 'react';
import type { Metadata } from 'next';
import LaborCostCalculator from '@/components/tools/LaborCostCalculator';
import CallToAction from '@/components/CallToAction';
import RelatedTools from '@/components/tools/RelatedTools';

export const metadata: Metadata = {
  title: 'Free Labor Cost Calculator | Construction Labor Burden Estimator',
  description: 'Calculate total construction labor costs including burden, overhead, markup, and expenses. Estimate project labor accurately with our free tool.',
  keywords: ['labor cost calculator', 'construction labor estimator', 'labor burden calculator', 'contractor labor rates', 'project labor cost'],
  alternates: {
    canonical: 'https://spacecapture.ai/tools/labor-cost-calculator',
  },
};

export default function LaborCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Calculate Construction Labor Costs",
    "description": "A guide to estimating labor burden, markup, and total project labor costs for contractors.",
    "author": {
      "@type": "Organization",
      "name": "SpaceCapture"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://spacecapture.ai/tools/labor-cost-calculator"
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
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold tracking-wider uppercase text-xs mb-4">
              Free Tool
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Labor Cost Calculator
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Account for every hour and every dollar. Determine your true labor burden and profitability with precision.
            </p>
          </div>
        </section>

        {/* Calculator Tool Section */}
        <section className="py-12 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <LaborCostCalculator />
          </div>
        </section>

        {/* SEO Content Article */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <article className="prose prose-lg prose-slate mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Understanding Labor Cost Estimation</h2>
              <p>
                Labor is often the most volatile variable in any construction project. Unlike materials, which have fixed prices, labor costs fluctuate based on productivity, skill level, and unforeseen delays. Accurately estimating these costs is the difference between a profitable job and a loss.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">What is Labor Burden?</h3>
              <p>
                The true cost of an employee is much higher than their hourly wage. Labor burden includes payroll taxes, workers' compensation insurance, health benefits, and tool allowances.
              </p>

              <div className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Mandatory Taxes:</strong> FICA, FUTA, and SUTA contributions.</li>
                  <li><strong>Insurance Premiums:</strong> General liability and health insurance.</li>
                  <li><strong>Operational Markup:</strong> Overhead for management, software, and tools.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Improving Workforce Productivity</h3>
              <p>
                Estimating is just the first step. To keep labor costs under control during execution, you need real-time visibility. **SpaceCapture** helps you track actual hours against your budget, monitor productivity, and adjust schedules on the fly to prevent overruns.
              </p>
            </article>
          </div>
        </section>

        <RelatedTools currentToolName="Labor Cost Calculator" />
        <CallToAction />
      </main>
    </div>
  );
}
