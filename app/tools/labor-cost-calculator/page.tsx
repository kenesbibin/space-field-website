import React from 'react';
import type { Metadata } from 'next';
import LaborCostCalculator from '@/components/tools/LaborCostCalculator';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Free Labor Cost Calculator | Construction Labor Burden Estimator',
  description: 'Calculate total construction labor costs including burden, overhead, markup, and expenses. Estimate project labor accurately with our free tool.',
  keywords: ['labor cost calculator', 'construction labor estimator', 'labor burden calculator', 'contractor labor rates', 'project labor cost'],
};

export default function LaborCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Calculate Construction Labor Costs",
    "description": "A guide to estimating labor burden, markup, and total project labor costs for contractors.",
    "author": {
      "@type": "Organization",
      "name": "Space Capture"
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
                    <p>
                        Our **labor burden estimator** goes beyond simple hourly rates to give you a complete picture of your workforce expenses.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">What is Labor Burden?</h3>
                    <p>
                        Many contractors make the mistake of calculating labor cost solely on the employee's hourly wage. However, the "true" cost—or labor burden—includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li><strong>Payroll Taxes:</strong> Social Security, Medicare, and unemployment taxes.</li>
                        <li><strong>Insurance:</strong> Workers' compensation and general liability.</li>
                        <li><strong>Benefits:</strong> Health insurance, retirement contributions, and paid time off.</li>
                        <li><strong>Overhead:</strong> Tools, vehicles, and uniform costs.</li>
                    </ul>
                    <p>
                        Use the "Markup / Burden" field in our calculator to add a percentage that covers these hidden costs, ensuring you don't underbid.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">How to Use This Tool</h3>
                    <ol className="list-decimal pl-6 space-y-2 mb-8">
                        <li><strong>Define Roles:</strong> List out the different trades or skill levels required (e.g., "Foreman", "Laborer").</li>
                        <li><strong>Set Rates & Hours:</strong> Input the base hourly rate and estimated hours for each role.</li>
                        <li><strong>Add Body Count:</strong> Specify how many workers of that type are needed.</li>
                        <li><strong>Apply Markup:</strong> Add your burden percentage (typically 20-40%) to cover overhead and profit.</li>
                        <li><strong>Include Expenses:</strong> Add any flat-fee labor expenses like per diems or travel stipends.</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Better Labor Management with Space Capture</h3>
                    <p>
                         Estimating is just the first step. To keep labor costs under control during execution, you need real-time visibility. **Space Capture** helps you track actual hours against your budget, monitor productivity, and adjust schedules on the fly to prevent overruns.
                    </p>
                </article>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
}
