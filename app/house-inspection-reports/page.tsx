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
  title: 'House & Building Inspection Reports Software | Sample Templates',
  description:
    'Generate house, building, and property inspection reports in minutes. Branded PDF reports with photo evidence, e-signatures, and AI defect detection — all from your phone.',
  keywords: [
    'house inspection reports',
    'building inspection reports',
    'property inspection reports',
    'property condition reports',
    'dilapidation reports',
    'building reports',
    'inspection report software',
    'inspection report templates',
    'inspection report samples',
    'sample inspection report',
    'free inspection report template',
    'building condition report',
    'building condition assessment',
    'building condition survey',
    'property condition inspection',
    'house inspection report sample',
    'home inspection report sample',
    'inspection report pdf',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/house-inspection-reports',
  },
  openGraph: {
    type: 'website',
    title: 'House & Building Inspection Reports | SpaceCapture',
    description:
      'Generate house, building, and property inspection reports in minutes. Branded PDF reports with photo evidence, e-signatures, and AI defect detection.',
    url: 'https://spacecapture.ai/house-inspection-reports',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is an inspection report?',
    answer:
      'An inspection report is a written record of the condition of a property, building, or system. It includes findings, photos, and recommendations. Inspection reports are used by home buyers, sellers, real estate agents, property managers, lenders, insurers, and regulators.',
  },
  {
    question: 'How fast can SpaceCapture generate a report?',
    answer:
      'Most reports are generated in under 60 seconds from the mobile app, complete with photos, condition ratings, recommendations, and a branded cover page.',
  },
  {
    question: 'Are the reports court-defensible?',
    answer:
      'Yes. Every report is timestamped, geo-tagged, and signed digitally. Photos are embedded with EXIF metadata intact. Reports are tamper-evident.',
  },
  {
    question: 'Can I customize the report template?',
    answer:
      'Yes. Add your logo, choose from a library of sections, and configure the cover page, terms, and disclaimers. Use a different template per inspection type.',
  },
  {
    question: 'Do you have free sample reports?',
    answer:
      'Yes. We provide free sample inspection reports on our sample inspection reports page. Use them as a starting point for your own template.',
  },
  {
    question: 'Can clients sign reports remotely?',
    answer:
      'Yes. Send a portal link to the client; they sign on their phone or laptop. Signed reports are stored in the cloud and a copy is auto-emailed.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Inspection Report Software',
  description:
    'Generate house, building, and property inspection reports in minutes. Branded PDF reports with photo evidence, e-signatures, and AI defect detection.',
  url: 'https://spacecapture.ai/house-inspection-reports',
  serviceType: 'Inspection Report Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/house-inspection-reports')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="House & Building Inspection Reports in Minutes"
      subtitle="Generate branded inspection reports with photo evidence, AI defect detection, and e-signatures. From site walk to delivered PDF in under 60 seconds."
    >
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is an Inspection Report?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          An inspection report is a written record of the condition of a
          property, building, or system. It includes findings, photos,
          condition ratings, and recommendations. Inspection reports are
          used by home buyers, sellers, real estate agents, property
          managers, lenders, insurers, and regulators.
        </p>
      </div>

      <h2>What Can You Generate With SpaceCapture?</h2>
      <ul className="grid md:grid-cols-2 gap-4 my-8">
        {[
          'Home inspection reports (pre-purchase / pre-listing)',
          'Building condition reports (commercial, multi-family)',
          'Property condition reports (rental move-in / move-out)',
          'Dilapidation reports (pre- and post-construction)',
          'Fire safety inspection reports',
          'Structural survey reports',
          'Roof and waterproofing reports',
          'HVAC and mechanical reports',
          'Insurance claim reports',
          'Safety inspection reports',
          'Quality control / punch list reports',
          'Owner and tenant handover reports',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-slate-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <h2>How a Report Comes Together</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Run the inspection:</strong> Use the mobile app to walk the
          site, capture photos, and select condition ratings per item.
        </li>
        <li className="pl-2">
          <strong>AI pre-fill:</strong> SpaceCapture's AI suggests
          descriptions and severity ratings based on your photos.
        </li>
        <li className="pl-2">
          <strong>Review:</strong> The inspector reviews and adjusts the
          AI-suggested text in seconds.
        </li>
        <li className="pl-2">
          <strong>Generate:</strong> One tap produces a branded PDF
          report with embedded photos, charts, and signatures.
        </li>
        <li className="pl-2">
          <strong>Deliver:</strong> Send via the client portal, email, or
          API to your CRM/accounting system.
        </li>
      </ol>

      <ComparisonTable
        title="SpaceCapture vs Manual Report Writing"
        features={[
          {
            feature: 'Report time',
            spaceCapture: '60 seconds',
            competitors: '2–4 hours',
          },
          {
            feature: 'Photo embedding',
            spaceCapture: 'Automatic, annotated',
            competitors: 'Manual drag-and-drop',
          },
          {
            feature: 'Signature',
            spaceCapture: 'Digital, on-device',
            competitors: 'Print, sign, scan',
          },
          {
            feature: 'Defensibility',
            spaceCapture: 'Tamper-evident',
            competitors: 'Editable Word docs',
          },
        ]}
      />

      <div className="mb-12 mt-12">
        <h2>Free Sample Reports</h2>
        <p>
          See our{' '}
          <a
            href="/sample-inspection-reports"
            className="text-indigo-600 underline"
          >
            sample inspection reports page
          </a>{' '}
          for free downloadable examples of home, building, and property
          inspection reports. Use them as a starting point for your own
          template.
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
