import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PmspaceLandingPage } from '@/components/seo/PmspaceLandingPage';
import { FaqSection } from '@/components/seo/FaqSection';
import StructuredData from '@/components/seo/StructuredData';
import { getServiceSchema } from '@/components/seo/ServiceSchema';
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from '@/components/seo/BreadcrumbListSchema';

export const metadata: Metadata = {
  title: {
    absolute: 'Crack Detection on Bridges | pmspace.ai Inspection Prototype',
  },
  description:
    'Mark crack regions in source photographs, describe the visible evidence, and move every finding through human review with the pmspace.ai bridge inspection prototype.',
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
    question: 'Is this a production-ready inspection platform?',
    answer:
      'The current application is a working single-company proof of concept. It demonstrates the core inspection workflow and selected import capabilities. Production deployment requires further operational, security, and workflow validation.',
  },
  {
    question: 'Does it automatically detect every crack?',
    answer:
      'No. The core workflow is manual-first. Experimental crack proposals depend on configured models, suitable imagery, and licensing conditions. They are not a guarantee of defect detection or completeness.',
  },
  {
    question: 'Can it measure crack widths accurately?',
    answer:
      'Validated crack-width measurement is not a current product claim. Meaningful measurement requires suitable close-range imagery, calibration, and independent validation.',
  },
  {
    question: 'Can I export reports?',
    answer:
      'Yes. Accepted observations can be included in an issued HTML report snapshot. The report can be downloaded or printed to PDF through the browser.',
  },
];

const serviceSchema = getServiceSchema({
  name: 'Crack Detection on Bridges',
  description:
    'Mark crack regions in source photographs, describe the visible evidence, and move every finding through human review with the pmspace.ai bridge inspection prototype.',
  url: 'https://spacecapture.ai/crack-detection-on-bridges',
  serviceType: 'Bridge Crack Documentation Workflow',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/crack-detection-on-bridges')
);

export default function Page() {
  return (
    <PmspaceLandingPage
      eyebrow="Connected evidence for crack findings"
      title="Bring crack findings into focus."
      subtitle="Mark crack regions in source photographs, describe what is visible, and move every observation through human review before it reaches a report. pmspace.ai keeps the image evidence connected to the finding."
      featureStrip="Photo observations · Source imagery · Human review · Report snapshots"
      statusLabel="Working prototype — available for demonstration and pilot discussion."
    >
      {/* In-page navigation */}
      <nav className="not-prose mb-10 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
        {[
          { label: 'Overview', href: '#overview' },
          { label: 'Workflow', href: '#how-it-works' },
          { label: 'Features', href: '#features' },
          { label: 'Innovation', href: '#innovation' },
          { label: 'FAQs', href: '#faqs' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-colors"
          >
            {item.label}
          </a>
        ))}
        <Link
          href="/request-a-demo"
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          Request a Demo
        </Link>
      </nav>

      {/* The Challenge */}
      <div className="mb-12">
        <h2>Your crack evidence should not live in separate silos.</h2>
        <p>
          Photographs, spreadsheets, and inspection reports often capture
          different parts of the same finding. Moving between them makes it
          harder to locate the source image, understand the surrounding
          structure, and track which observations have been reviewed.
        </p>
        <p>
          pmspace.ai connects the image evidence with a clear observation and
          review process, keeping every crack finding traceable from photograph
          to issued report.
        </p>
      </div>

      {/* Platform Overview */}
      <div className="mb-12">
        <h2 id="overview">From source photo to reviewed crack finding.</h2>
        <p>
          Open the source photograph, mark the region of interest, and record
          what is visible without losing the wider project context. Observations
          move through an explicit review process before they appear in an
          issued report.
        </p>
        <p>
          The platform builds on ODM/WebODM survey outputs and adds an
          inspection-focused application for project records, evidence review,
          and reporting.
        </p>
      </div>

      {/* Core Features */}
      <div className="mb-12" id="features">
        <h2>Core features</h2>

        <h3>Keep source imagery close to the finding</h3>
        <p>
          Open inspection photographs, mark a region of interest, and describe
          the visible evidence. Preserve the distinction between an observation
          in an image and a verified engineering diagnosis.
        </p>

        <h3>Give every finding a review path</h3>
        <p>
          Save draft observations, submit them for review, and capture
          acceptance or rejection with reviewer comments. Keep inspection work
          and review decisions connected to the project.
        </p>

        <h3>Create reports from accepted observations</h3>
        <p>
          Issue report snapshots after findings have been accepted. Download
          self-contained HTML reports or use the browser&apos;s print function to
          save a PDF for sharing and discussion.
        </p>

        <h3>Explore your structure in 3D</h3>
        <p>
          Navigate textured survey models and view available orthophotos to
          understand where a crack finding sits within the wider structure
          before examining individual observations.
        </p>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h2 id="how-it-works">
          A clear path from visual evidence to a reviewed report.
        </h2>

        <h3>Step 1 — Set up the project</h3>
        <p>
          Create the project record and add the available survey assets,
          inspection photographs, or supported point-cloud files. Where
          configured, submit photographs for WebODM processing and retrieve the
          resulting survey outputs.
        </p>

        <h3>Step 2 — Explore the evidence</h3>
        <p>
          Navigate the available model, orthophoto, and photographs. Establish
          the visual context and identify areas that need closer examination.
        </p>

        <h3>Step 3 — Record an observation</h3>
        <p>
          Mark the relevant area in a source photograph, describe what is
          visible, and save the observation as a draft. Submit it when it is
          ready for review.
        </p>

        <h3>Step 4 — Review the finding</h3>
        <p>
          A reviewer checks the evidence and accepts or rejects the observation
          with a comment. Human judgement remains central to the process.
        </p>

        <h3>Step 5 — Issue a report</h3>
        <p>
          Create a report snapshot containing accepted observations and their
          supporting evidence. Download the HTML report or print it to PDF.
        </p>
      </div>

      {/* Experimental Capabilities */}
      <div className="mb-12">
        <h2 id="innovation">
          Exploring the next layer of inspection intelligence.
        </h2>
        <p>
          We are evaluating additional tools to help teams interpret imagery.
          These capabilities are separate from the core manual inspection
          workflow and are not presented as validated structural assessment
          tools.
        </p>

        <h3>AI-assisted crack proposals — experimental</h3>
        <p>
          Evaluate candidate crack regions in supported imagery for human review.
          Availability depends on model configuration, licensing, and evaluation
          results. A proposal is not a confirmed defect, and reliable detection
          depends on the source image quality and capture conditions.
        </p>

        <h3>Future direction — planned</h3>
        <p>
          Areas for further development include validated defect measurements,
          dependable image-to-3D finding alignment, deeper BIM integration, and
          broader organization-management workflows. These are development
          goals, not commitments or currently guaranteed capabilities.
        </p>
      </div>

      {/* Responsible Use */}
      <div className="mb-12 rounded-xl bg-slate-50 p-6 border border-slate-200">
        <h2>Evidence first. Human judgement always.</h2>
        <p>
          pmspace.ai supports visual documentation and review. It does not
          replace a qualified structural inspection, engineering assessment, or
          applicable inspection standard.
        </p>
        <ul>
          <li>
            Image observations are not automatically verified structural
            diagnoses.
          </li>
          <li>
            Detection and measurement quality depend on resolution, capture
            distance, lighting, calibration, and visibility.
          </li>
          <li>
            No submillimetre crack-detection or calibrated crack-width accuracy
            is claimed.
          </li>
          <li>AI-generated candidates require human review.</li>
          <li>
            Synthetic BIM points must not be confused with measured survey data.
          </li>
          <li>
            Experimental conversions and recognition outputs may be incomplete
            or incorrect.
          </li>
        </ul>
      </div>

      <div id="faqs" className="not-prose">
        <FaqSection items={faqs} />
      </div>

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [serviceSchema, breadcrumbSchema],
        }}
      />
    </PmspaceLandingPage>
  );
}
