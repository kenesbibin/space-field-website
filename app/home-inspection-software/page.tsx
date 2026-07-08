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
  title: 'Home Inspection Software & App | House Inspection Tools',
  description:
    'The #1 home inspection software for residential inspectors. Run faster home and house inspections, generate digital reports, and manage client deliverables from your phone or tablet.',
  keywords: [
    'home inspection software',
    'home inspection',
    'house inspection',
    'home inspection services',
    'house inspection service',
    'house inspection service software',
    'residential home inspection',
    'residential property inspection',
    'real estate inspection',
    'real estate inspector',
    'real estate home inspector',
    'home inspection app',
    'home inspection reports',
    'house inspection reports',
    'building inspection reports',
    'property inspection reports',
    'property field inspections',
    'pre listing inspection',
    'pre purchase inspection',
    'snagging inspection',
    'home inspection checklist',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/home-inspection-software',
  },
  openGraph: {
    type: 'website',
    title: 'Home Inspection Software & App | SpaceCapture',
    description:
      'The #1 home inspection software. Run faster home and house inspections, generate digital reports, and manage client deliverables from your phone.',
    url: 'https://spacecapture.ai/home-inspection-software',
    siteName: 'SpaceCapture',
  },
};

const faqs = [
  {
    question: 'What is home inspection software?',
    answer:
      'Home inspection software is a mobile-first platform that helps residential inspectors capture findings, attach photos, run safety and structural checklists, and generate branded PDF reports for buyers, sellers, and real estate agents. It replaces paper forms and eliminates hours of manual report writing.',
  },
  {
    question: 'How is home inspection software different from a generic form builder?',
    answer:
      'Unlike generic form tools, home inspection software is built around industry-specific workflows: pre-listing inspections, pre-purchase inspections, 4-point inspections, wind mitigation, radon, mold, and standardized reporting formats (InterNACHI, ASHI, state-specific templates). It also includes offline capture, photo annotation, and client-portal delivery.',
  },
  {
    question: 'Can I run the app offline at the property?',
    answer:
      'Yes. SpaceCapture works fully offline. All inspection data, photos, and signatures are captured on-site without internet and synchronized to the cloud once you reconnect — essential for rural properties, basements, and new construction with no Wi-Fi.',
  },
  {
    question: 'How fast can I deliver the report to my client?',
    answer:
      'Most inspectors using SpaceCapture deliver a fully branded, photo-annotated PDF report within 1 hour of leaving the property. The system auto-populates client details, system summaries, and recommendations from your checklist answers.',
  },
  {
    question: 'Does it support multi-inspector teams?',
    answer:
      'Yes. Assign inspections to team members, track productivity, centralize templates, and manage a shared library of inspection comments and photos across your entire residential inspection business.',
  },
  {
    question: 'Can my clients sign the report digitally?',
    answer:
      'Yes. Buyers, sellers, and agents can sign off directly on the tablet or phone. Signed reports are time-stamped, geo-tagged, and stored for compliance and audit purposes.',
  },
  {
    question: 'Is it suitable for new construction phase inspections (pre-drywall, final walkthrough)?',
    answer:
      'Absolutely. Use SpaceCapture for pre-pour, pre-drywall, mechanical-electrical-plumbing, and final walkthrough inspections on new builds. The same platform scales from single-family homes to multi-unit developments.',
  },
];

const faqSchema = getFaqSchema(faqs);
const serviceSchema = getServiceSchema({
  name: 'Home Inspection Software',
  description:
    'Mobile-first home inspection software for residential inspectors. Run faster, generate branded reports, and deliver to clients in under an hour.',
  url: 'https://spacecapture.ai/home-inspection-software',
  serviceType: 'Home Inspection Software',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/home-inspection-software')
);

export default function Page() {
  return (
    <SeoLandingPage
      title="Home Inspection Software Built for Residential Inspectors"
      subtitle="Run faster, more profitable home inspections. Capture findings, attach photos, generate branded reports, and deliver to clients in under an hour — all from your phone or tablet."
    >
      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">
          What is Home Inspection Software?
        </h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Home inspection software is a specialized digital tool that helps residential
          property inspectors conduct, document, and deliver property inspections.
          It replaces paper checklists with smart digital forms, automates report
          generation, and lets inspectors work offline at the property. The result
          is faster turnaround, fewer errors, and a more professional client
          experience.
        </p>
      </div>

      <h2>Why Residential Inspectors Choose SpaceCapture</h2>
      <p>
        Whether you run a solo home-inspection business or a multi-inspector team,
        SpaceCapture gives you the tools to inspect more homes per week, deliver
        reports the same day, and grow your reputation with consistent, branded
        deliverables. The platform works on iOS, Android, and any modern browser —
        no special hardware required.
      </p>

      <div className="mb-12 mt-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          What You Can Do With SpaceCapture
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            'Run pre-listing and pre-purchase inspections in a single visit',
            'Capture photos, voice notes, and annotations directly on the property',
            'Generate InterNACHI / ASHI / state-specific PDF reports automatically',
            'Send reports to clients and agents via a branded client portal',
            'Collect digital signatures on-site for instant sign-off',
            'Manage multiple inspectors with role-based access',
            'Track recurring issues across properties for trending reports',
            'Work fully offline in basements, attics, and rural properties',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How a Home Inspection Works in SpaceCapture</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Schedule the inspection:</strong> Book a job from the web dashboard
          or accept a request from a real estate agent. The system auto-fills
          client, property, and agent details.
        </li>
        <li className="pl-2">
          <strong>Arrive on-site:</strong> Open the inspection on your phone or
          tablet. The app works offline, so no Wi-Fi required. Walk the property
          following the structured checklist for your inspection type.
        </li>
        <li className="pl-2">
          <strong>Capture evidence:</strong> Snap photos, annotate defects, record
          voice notes, and select condition ratings. Each item is geo-tagged and
          time-stamped automatically.
        </li>
        <li className="pl-2">
          <strong>Generate the report:</strong> When the inspection is complete,
          SpaceCapture assembles a branded, photo-annotated PDF report in under
          60 seconds. No retyping required.
        </li>
        <li className="pl-2">
          <strong>Deliver and sign:</strong> Send the report to your client and
          agent via a secure portal link. Collect digital signatures on-site or
          remotely.
        </li>
      </ol>

      <ComparisonTable
        title="SpaceCapture vs Paper-Based Home Inspections"
        features={[
          {
            feature: 'Time per inspection',
            spaceCapture: '45–60 min on-site',
            competitors: '2–3 hours + 2 hours of report writing',
          },
          {
            feature: 'Report delivery',
            spaceCapture: 'Same day, branded PDF',
            competitors: '24–48 hours, manual typing',
          },
          {
            feature: 'Photo documentation',
            spaceCapture: 'Auto-annotated, geo-tagged',
            competitors: 'Disorganized, often missing',
          },
          {
            feature: 'Offline capability',
            spaceCapture: 'Full offline + sync',
            competitors: 'None',
          },
          {
            feature: 'Client signature',
            spaceCapture: 'Digital, on-site',
            competitors: 'Paper, scanned later',
          },
        ]}
      />

      <div className="mb-12 mt-12">
        <h2>Who Uses SpaceCapture for Home Inspections?</h2>
        <p>
          Solo home inspectors, multi-inspector firms, real estate inspection
          companies, and franchise networks. Whether you do 5 inspections a week
          or 50, SpaceCapture scales with your business.
        </p>
        <p className="mt-4">
          For inspectors who also work on new construction, see our{' '}
          <a href="/construction-inspection-software" className="text-indigo-600 underline">
            construction inspection software
          </a>{' '}
          page. For real estate teams, our{' '}
          <a href="/industries/real-estate" className="text-indigo-600 underline">
            real estate field management solution
          </a>{' '}
          covers portfolio-wide property turnovers.
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
