import React from 'react';
import type { Metadata } from 'next';
import AsphaltCalculator from '@/components/tools/AsphaltCalculator';
import CallToAction from '@/components/CallToAction';

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
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How to Estimate Asphalt</h2>
                    <p>
                        For any paving project, accurately estimating the amount of asphalt required is critical to ensure that projects are completed on time, within budget, and with minimal wastage. Given the costs associated with procuring materials, transport, and labor, miscalculations can lead to significant financial setbacks. Here's a step-by-step guide, complementing our new web calculator, to help contractors measure the space to be paved and account for various factors influencing the material requirements.
                    </p>

                    <h3>1. Evaluate the base.</h3>
                    <p>
                        If you're laying asphalt over an existing surface, evaluate its condition. A damaged or uneven base might require more asphalt for a smooth finish.
                    </p>
                    <p>
                        A gravel base will often need a thicker layer of asphalt than a solid concrete base, as it can shift or settle over time.
                    </p>

                    <h3>2. Measure the area.</h3>
                    <p>
                        Begin by measuring the length and width of the area. This is straightforward for rectangular spaces: Measure end to end and multiply the length by the width to get the area. For irregular shapes, consider breaking down the space into smaller rectangles or squares and summing up the areas of each.
                    </p>
                    <p>
                        Depth is crucial because asphalt is usually applied in layers. Typical depth ranges from 2 to 4 inches, depending on the traffic load the paved area will handle. High-traffic surfaces like parking lots may require a 6 to 8-inch pour. Note that depth also affects the compaction rate, as thicker layers compact more.
                    </p>

                    <h3>3. Calculate the volume.</h3>
                    <p>
                        Once you have the area (in square feet) and the depth (in inches), multiply these to obtain the volume in cubic feet. Convert the cubic feet to cubic yards by dividing by 27 (the number of cubic feet in a cubic yard).
                    </p>
                    <div className="bg-amber-50 p-4 border-l-4 border-amber-500 italic my-4">
                        For example, an area of 1,000 sq. ft. with a depth of 3 inches requires a volume of 2,500 cubic feet. This equates to about 92.59 cubic yards.
                    </div>

                    <h3>4. Account for compaction.</h3>
                    <p>
                        Asphalt compacted during the paving process often results in a reduction in volume. Generally, a compaction factor of about 10% is sufficient, but this can vary based on the specifics of the job and equipment used. Thus, it's essential to add this percentage to your initial calculation to ensure you order enough material.
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 mb-8 mt-12">Factors That Affect Asphalt Quantity</h2>
                    
                    <h4 className="font-bold text-slate-900">Traffic Considerations</h4>
                    <p>
                        The type and volume of traffic the paved area will handle can affect the depth and type of asphalt mix you need. Heavy vehicular traffic will necessitate a thicker layer and a more durable mix than areas that only experience foot traffic or light vehicles.
                    </p>

                    <h4 className="font-bold text-slate-900">Climate and Seasonal Factors</h4>
                    <p>
                        The region's climate can influence the type of asphalt mix best suited for the job. Some mixes are formulated to resist high temperatures, while others are tailored for colder climates. Additionally, consider the season during which you're paving. Asphalt laid during colder months might need different specifications or considerations than during warmer periods.
                    </p>

                    <h4 className="font-bold text-slate-900">Tack Coat and Other Materials</h4>
                    <p>
                        While primarily focused on asphalt, don't forget to account for the tack coat - a sticky adhesive applied between layers to ensure proper bonding. Depending on the project's specifics, you might also need other materials or modifiers to enhance the asphalt's performance.
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 mb-8 mt-12">Types of Asphalt Mixes</h2>
                    <p>
                        There are several different types or mixes of asphalt, depending on the intended use and application. The differences are found in the selection of added aggregates, as well as the temperature at which it is mixed.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Hot Mix Asphalt (HMA):</strong> This is the most common form of asphalt. It's made by heating the asphalt binder to decrease its viscosity and drying the aggregate to remove moisture from it before mixing the two together.</li>
                        <li><strong>Warm Mix Asphalt (WMA):</strong> It is similar to HMA but is produced at a slightly lower temperature. This leads to fewer emissions and reduced fuel consumption.</li>
                        <li><strong>Cold Mix Asphalt:</strong> Often used as a patching material to repair small potholes or cracks. This mixture is created without heating.</li>
                        <li><strong>Porous Asphalt:</strong> Designed for water drainage. It’s commonly used in parking lots to help manage stormwater runoff.</li>
                        <li><strong>Reclaimed Asphalt Pavement (RAP):</strong> Old asphalt pavements that have been removed can be crushed and recycled into this product, which can then be used to create new pavement.</li>
                        <li><strong>Asphalt Concrete:</strong> A combination of asphalt cement and aggregates. Often what people refer to when they say "blacktop."</li>
                    </ul>

                </article>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
}
