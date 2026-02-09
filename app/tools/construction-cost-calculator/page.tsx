import React from 'react';
import type { Metadata } from 'next';
import ConstructionCostCalculator from '@/components/tools/ConstructionCostCalculator';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Free Construction Cost Calculator | Building Estimate Tool',
  description: 'Estimate your construction project costs instantly. Calculate materials, labor, and permits with our free building cost estimator tool.',
  keywords: ['construction cost calculator', 'building cost estimator', 'project budgeting', 'residential construction estimate', 'construction quote tool'],
};

export default function ConstructionCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I calculate cost per square foot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate cost per square foot, divide your total project cost by the total square footage of the building. For example, if a 2,000 sq ft home costs $300,000 to build, the cost is $150 per sq ft."
        }
      },
      {
        "@type": "Question",
        "name": "What are soft costs in construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Soft costs are expenses not directly related to physical construction, such as architectural fees, permits, inspections, legal fees, and financing costs. They typically make up 20-30% of a project's total budget."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are online construction cost calculators?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online calculators provide a rough estimate for budgeting purposes. Actual costs vary significantly based on location, material quality, labor rates, and site conditions. Always get professional quotes for a final budget."
        }
      }
    ]
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
                    Construction Cost Calculator
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Plan your project budget with confidence. Creates accurate estimates for materials, labor, and site expenses in seconds.
                </p>
            </div>
        </section>

        {/* Calculator Tool Section */}
        <section className="py-12 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <ConstructionCostCalculator />
            </div>
        </section>

        {/* SEO Content Article */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <article className="prose prose-lg prose-slate mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Use This Construction Cost Calculator</h2>
                    <p>
                        Effective project budgeting is the cornerstone of any successful construction job. Whether you're a general contractor, a homeowner planning a renovation, or a project manager, knowing your numbers early can save thousands in the long run.
                    </p>
                    <p>
                        Our <strong>building cost estimator</strong> is designed to be simple yet powerful:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-8">
                        <li><strong>Add Line Items:</strong> Click "Add Item" to create new rows for different expenses like concrete, lumber, or plumbing.</li>
                        <li><strong>Categorize:</strong> Assign categories (Materials, Labor, etc.) to keep your budget organized.</li>
                        <li><strong>Enter Costs:</strong> Input your Unit Cost and Quantity. The tool performs <em>real-time math</em> to show you line totals instantly.</li>
                        <li><strong>Get Your Estimate:</strong> Click "Email Me This Estimate" to save your work and connect with our team for a professional consultation.</li>
                    </ol>

                    <h2 className="text-3xl font-bold text-slate-900 mb-8 mt-12">Breakdown of Construction Costs</h2>
                    <p>
                        Understanding where your money goes is critical. A comprehensive <strong>residential construction estimate</strong> typically falls into three buckets:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Hard Costs</h3>
                            <p className="text-sm text-slate-600">Physical changes to the site. Includes materials (wood, steel, concrete) and labor.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Soft Costs</h3>
                            <p className="text-sm text-slate-600">Invisible expenses. Permits, architectural designs, engineering fees, and inspections.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Accurate Estimating Matters</h3>
                    <p>
                         Underestimating a project by even 10% can wipe out your profit margin. Using a digital <strong>project budgeting</strong> tool helps you visualize the scope, catch missing items (like site prep or waste removal), and communicate clearly with stakeholders.
                    </p>
                    <p>
                        Professional teams use platforms like <strong>Space Capture</strong> to go beyond simple estimates. We integrate field data, real-time tracking, and automated reporting to ensure the budget you set is the budget you allow.
                    </p>
                </article>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
}
