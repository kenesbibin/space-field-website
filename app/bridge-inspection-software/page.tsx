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
    absolute: 'pmspace.ai | 3D Bridge Inspection & Evidence Management',
  },
  description:
    'Explore bridge survey models, review inspection photos, record observations, and turn accepted findings into reports with the pmspace.ai inspection prototype.',
  keywords: [
    'bridge inspection software',
    '3D bridge inspection',
    'bridge inspection evidence management',
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/bridge-inspection-software',
  },
};

const faqs = [
  {
    question: 'Is this a production-ready inspection platform?',
    answer:
      'The current application is a working single-company proof of concept. It demonstrates the core inspection workflow and selected import capabilities. Production deployment requires further operational, security, and workflow validation.',
  },
  {
    question: 'Does it process drone photographs?',
    answer:
      'The application can submit photographs to a configured WebODM service, track processing, and retrieve outputs. The demonstration also uses previously reconstructed survey assets; opening the demo does not perform a new reconstruction.',
  },
  {
    question: 'Can I use an existing point cloud?',
    answer:
      'Yes. The application supports a bounded import workflow for LAS, LAZ, E57, PLY, PCD, XYZ, and PTS files. File limits and format-specific requirements apply. Native RCP/RCS files require export to a supported exchange format first.',
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
  {
    question: 'Does importing a BIM model align it with the scan?',
    answer:
      'No. Synthetic BIM point generation is not automatic registration, certified georeferencing, or verification of as-built conditions.',
  },
];

const serviceSchema = getServiceSchema({
  name: 'pmspace.ai 3D Bridge Inspection & Evidence Management',
  description:
    'Explore bridge survey models, review inspection photos, record observations, and turn accepted findings into reports with the pmspace.ai inspection prototype.',
  url: 'https://spacecapture.ai/bridge-inspection-software',
  serviceType: 'Bridge Inspection Prototype',
  areaServed: 'Worldwide',
});
const breadcrumbSchema = getBreadcrumbListSchema(
  buildBreadcrumbsFromPath('/bridge-inspection-software')
);

export default function Page() {
  return (
    <PmspaceLandingPage
      eyebrow="Connected evidence for infrastructure inspection"
      title="Bring your bridge inspections into focus."
      subtitle="Connect drone survey outputs, 3D views, source photographs, and inspection findings in one workspace. pmspace.ai helps inspectors document what they see, reviewers assess the evidence, and project teams create reports from accepted observations."
      featureStrip="3D context · Photo observations · Human review · Report snapshots"
      statusLabel="Working prototype — available for demonstration and pilot discussion."
    >
      {/* In-page navigation */}
      <nav className="not-prose mb-10 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
        {[
          { label: 'Overview', href: '#overview' },
          { label: 'Features', href: '#features' },
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Use Cases', href: '#use-cases' },
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
        <h2 id="challenge">
          Your inspection evidence should not live in separate silos.
        </h2>
        <p>
          Survey models, photographs, spreadsheets, and reports often tell
          different parts of the same story. Moving between them makes it harder
          to locate evidence, understand the surrounding structure, and track
          which findings have been reviewed.
        </p>
        <p>
          pmspace.ai brings these materials into a shared project workspace,
          connecting visual context with a clear observation and review process.
        </p>
      </div>

      {/* Platform Overview */}
      <div className="mb-12">
        <h2 id="overview">From survey context to reviewed findings.</h2>
        <p>
          Explore a reconstructed bridge, inspect the available source imagery,
          and document observations without losing the wider project context.
          Findings move through an explicit review process before they appear in
          an issued report.
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

        <h3>Explore your structure in 3D</h3>
        <p>
          Navigate textured survey models and view available orthophotos to
          understand the site before examining individual observations. Use
          visual context to orient your inspection and communicate where
          attention is needed.
        </p>

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

        <h3>Bring existing point clouds into the workspace</h3>
        <p>
          Import supported LAS, LAZ, E57, PLY, PCD, XYZ, and PTS files
          independently of a drone reconstruction. View prepared point clouds in
          the browser alongside available source metadata, while retaining the
          original uploaded file.
        </p>

        <h3>Control project access</h3>
        <p>
          Use inspector and reviewer permissions, project membership,
          authenticated downloads, and recorded event history to support a more
          structured inspection process.
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

      {/* Who It Is For */}
      <div className="mb-12">
        <h2 id="use-cases">Who it is for</h2>

        <h3>Bridge inspectors</h3>
        <p>
          Record visual observations with source-photo evidence and review
          project context in one workspace.
        </p>

        <h3>Reviewers and engineering teams</h3>
        <p>
          Assess submitted findings, document review decisions, and prepare
          evidence-led inspection reports. Engineering interpretation and safety
          decisions remain with qualified professionals.
        </p>

        <h3>Infrastructure owners and project managers</h3>
        <p>
          Bring project records, visual survey assets, and reviewed findings
          together for clearer communication across the inspection team.
        </p>

        <h3>Survey and BIM teams</h3>
        <p>
          Explore how existing photogrammetry outputs, supported point clouds,
          and experimental BIM-derived previews can contribute to inspection
          workflows.
        </p>
      </div>

      {/* Demonstration Showcase */}
      <div className="mb-12 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2>Explore the Rivaz bridge demonstration.</h2>
        <p>
          See the inspection workflow using an imported bridge survey dataset.
          Explore the textured model and orthophoto, open source imagery, record
          an observation, review it, and create a report snapshot.
        </p>
        <p className="not-prose mt-4">
          <Link
            href="/request-a-demo"
            className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-base font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:scale-105"
          >
            Book a Guided Walkthrough
          </Link>
        </p>
      </div>

      {/* Experimental Capabilities and Roadmap */}
      <div className="mb-12">
        <h2 id="innovation">
          Exploring the next layer of inspection intelligence.
        </h2>
        <p>
          We are evaluating additional tools to help teams interpret imagery and
          geometry. These capabilities are separate from the core manual
          inspection workflow and are not presented as validated structural
          assessment tools.
        </p>

        <h3>AI-assisted crack proposals — experimental</h3>
        <p>
          Evaluate candidate crack regions in supported imagery for human review.
          Availability depends on model configuration, licensing, and evaluation
          results. A proposal is not a confirmed defect, and reliable detection
          depends on the source image quality and capture conditions.
        </p>

        <h3>Building-element recognition — experimental</h3>
        <p>
          Evaluate candidate structural-element labels from point-cloud data.
          These predictions are not verified BIM classifications and require
          further accuracy assessment before operational reliance.
        </p>

        <h3>BIM exploration — limited and experimental</h3>
        <p>
          Explore supported IFC geometry as clearly labelled synthetic
          BIM-derived points, with element information where available. These
          points are generated from a model, not measured by a scanner. Native
          Revit conversion is experimental and may produce incomplete,
          unverified geometry; author-exported IFC is preferred for model
          exchange.
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
