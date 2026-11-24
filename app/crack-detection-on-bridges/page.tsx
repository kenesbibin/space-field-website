import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';
import StructuredData from '@/components/seo/StructuredData';
import { getServiceSchema } from '@/components/seo/ServiceSchema';
import { getFaqSchema } from '@/components/seo/FaqSchema';
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from '@/components/seo/BreadcrumbListSchema';

export const metadata: Metadata = {
  title: 'Crack Detection on Bridges | AI Structural Inspection',
  description:
    'AI-powered crack detection for bridges. Capture photos in the field, let computer vision identify and tag crack severity, and generate inspection reports instantly.',
  keywords: [
    'crack detection on bridges',
    'bridge crack detection AI',
    'concrete crack detection software',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/crack-detection-on-bridges',
  },
};

const faqs = [
  {
    question: 'How does AI crack detection on bridges work?',
    answer:
      "SpaceCapture's AI analyzes photos of bridge components to automatically identify cracks, corrosion, spalling, and other structural defects. It tags each finding with location data, severity levels, and historical comparison for trend analysis.",
  },
  {
    question: 'What bridge elements can be inspected for cracks?',
    answer:
      'Inspection teams capture photos of decks, superstructures, substructures, and culverts. The AI reviews the images for surface and structural cracking while offline checklists keep the workflow moving in remote locations.',
  },
  {
    question: 'Does crack detection work offline on remote sites?',
    answer:
      'Yes. SpaceCapture works fully offline. You can capture photos and complete inspection checklists without internet connectivity, and all data automatically syncs to the cloud once you regain connection.',
  },
  {
    question: 'Can crack findings be exported into inspection reports?',
    answer:
      'Yes. Findings feed directly into instant PDF reports with customizable templates that match National Bridge Inventory (NBI) coding standards, so stakeholders receive consistent documentation from the field.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Crack Detection on Bridges',
  description:
    'AI-powered crack detection for bridges. Capture photos in the field, let computer vision identify and tag crack severity, and generate inspection reports instantly.',
  url: 'https://spacecapture.ai/crack-detection-on-bridges',
  serviceType: 'AI Crack Detection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/crack-detection-on-bridges')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Crack Detection on Bridges with AI-Powered Inspection"
      subtitle="Replace manual surveys with computer vision. SpaceCapture analyzes field photos to identify, tag, and track structural cracks — then generates inspection reports straight from the site."
    >
      {/* Definition Block - AEO Optimized */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is AI Crack Detection on Bridges?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          AI crack detection on bridges uses computer vision to analyze site
          photos and automatically identify cracking in concrete and structural
          elements. SpaceCapture turns a phone or tablet camera into a first-pass
          crack survey tool — tagging every finding with location, severity, and
          history so inspectors verify issues instead of hunting for them.
        </p>
      </div>

      {/* Pain Points Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Common Challenges in Bridge Crack Surveys
        </h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">
              Manual Crack Surveys
            </div>
            <p className="text-sm text-red-700">
              Measuring and logging cracks by hand is slow, and paper records
              make it hard to compare today&apos;s findings against previous
              inspections.
            </p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">
              Hard-to-Reach Elements
            </div>
            <p className="text-sm text-red-700">
              Decks, piers, and superstructures are difficult and hazardous to
              access for close-up manual inspection, often requiring lane
              closures or special equipment.
            </p>
          </li>
          <li className="p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="font-semibold text-red-800 mb-2">
              Lost Historical Context
            </div>
            <p className="text-sm text-red-700">
              Photos scattered across devices and inspectors make it difficult
              to track how cracking has grown between inspection cycles.
            </p>
          </li>
        </ul>
      </div>

      {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Key Benefits
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'AI-identified cracks, corrosion, and spalling from photos',
            'Location and severity tagging on every finding',
            'Fully offline capture for remote infrastructure',
            'Instant PDF reports with NBI-compliant templates',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How AI Crack Detection on Bridges Works</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Capture Photos:</strong> Field staff photograph bridge
          elements on any mobile device — decks, superstructures, substructures,
          or culverts.
        </li>
        <li className="pl-2">
          <strong>AI Analysis:</strong> Computer vision scans each image for
          cracks, corrosion, and spalling, tagging findings with location and
          severity.
        </li>
        <li className="pl-2">
          <strong>Review &amp; Annotate:</strong> Inspectors confirm AI findings
          and add notes or annotations directly on the images.
        </li>
        <li className="pl-2">
          <strong>Generate Reports:</strong> Export NBI-coded PDF reports for
          stakeholders in a single click, directly from the field.
        </li>
      </ol>

      <ComparisonTable
        title="AI Crack Detection vs Manual Surveys"
        features={[
          { feature: 'Crack Identification', spaceCapture: 'AI-Assisted', competitors: 'Manual Visual' },
          { feature: 'Severity Tagging', spaceCapture: 'Automatic', competitors: 'Manual Entry' },
          { feature: 'Photo Organization', spaceCapture: 'Automatic', competitors: 'Manual' },
          { feature: 'Historical Trending', spaceCapture: 'Automated Analytics', competitors: 'Manual Spreadsheets' },
          { feature: 'Offline Access', spaceCapture: true, competitors: 'Limited' },
        ]}
      />

      <div className="mb-12">
        <h3>Modernize Your Bridge Inspections</h3>
        <p>
          Traditional crack surveys rely on manual measurement, paper forms, and
          delayed reporting. Inconsistent documentation and difficulty tracking
          deterioration create maintenance backlogs and safety concerns.
          <strong> SpaceCapture</strong> transforms this process with an AI
          first pass that works on any mobile device.
        </p>

        <p>
          By consolidating photo capture, crack tracking, and reporting into a
          single app, inspection teams spend their expertise on structural
          safety instead of administrative tasks — and every inspection cycle
          builds on the last.
        </p>
      </div>

      <FaqSection items={faqs} />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
        }}
      />
    </SeoLandingPage>
  );
}
