import React from 'react';
import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/seo/SeoLandingPage';
import { ComparisonTable } from '@/components/seo/ComparisonTable';
import { FaqSection } from '@/components/seo/FaqSection';

export const metadata: Metadata = {
  title: 'Construction Inspection Software | Digital QA/QC Checklists',
  description: 'Digitize your quality control with our construction inspection software. Create custom checklists, capture photos, and automate punch lists.',
  keywords: ['construction inspection software', 'qa/qc software', 'inspection checklists', 'punch list app', 'digital inspections'],
};

export default function Page() {
  const faqs = [
    {
      question: "What differentiates inspection software from generic forms?",
      answer: "Unlike generic form builders, construction inspection software links data to project plans, supports specialized workflows like punch lists and commissioning, and works offline in remote areas."
    },
    {
      question: "Can I customize the checklists?",
      answer: "Yes, our Visual Form Builder allows you to create custom inspection templates with mandatory fields, photo requirements, and conditional logic to match your company's standards."
    },
    {
      question: "How are punch lists handled?",
      answer: "Failed inspection items automatically generate a punch list entry. You can assign these directly to a trade partner with a due date and require photo proof of the fix."
    },
    {
      question: "Is there an approval workflow?",
      answer: "Yes, you can set up multi-stage approval workflows requiring digital signatures from the subcontractor, GC, and owner/architect before an item is closed."
    },
    {
      question: "Does it support location tagging?",
      answer: "Yes, inspections and defects can be pinned to specific locations on 2D floor plans or 3D BIM models for precise context."
    }
  ];

  return (
    <SeoLandingPage
      title="Streamline QA/QC with Construction Inspection Software"
      subtitle="Say goodbye to lost paperwork. Digitize your entire inspection process—from pre-pour checks to final walkthroughs—with our powerful mobile platform."
    >
      {/* Definition Block */}
      <div className="mb-8 rounded-xl bg-indigo-50 p-6 border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900 mb-2">What is Construction Inspection Software?</h2>
        <p className="text-indigo-800 font-medium leading-relaxed">
          Construction inspection software is a specialized tool used to verify that work meets quality and safety standards. It facilitates digital checklists, photo documentation, and issue tracking, ensuring that every phase of a build complies with plans and specifications before proceeding.
        </p>
      </div>

       {/* Bullet Summary */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Inspection Benefits</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Standardized processes across all projects",
            "Visual punch lists pinned to floor plans",
            "Digital signatures for instant sign-off",
            "Analytics to identify recurring defects"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>How to Digitize Your Inspections</h2>
      <ol className="list-decimal pl-6 space-y-4 mb-12 marker:text-indigo-600 marker:font-bold">
        <li className="pl-2">
          <strong>Create Templates:</strong> Convert your PDF or Excel checklists into smart digital forms using our drag-and-drop builder.
        </li>
        <li className="pl-2">
          <strong>Conduct Inspection:</strong> Field staff complete the forms on tablets or phones, attaching photos to verify compliance.
        </li>
        <li className="pl-2">
          <strong>Automate Issues:</strong> Any 'Failed' item instantly triggers a corrective action request assigned to the responsible party.
        </li>
        <li className="pl-2">
          <strong>Track & Close:</strong> Monitor progress via the dashboard and approve fixes remotely based on uploaded photo evidence.
        </li>
      </ol>

      <ComparisonTable 
        title="Digital vs Analog QA/QC"
        features={[
          { feature: "Standardization", spaceCapture: "Enforced Templates", competitors: "Loose / Ad-hoc" },
          { feature: "Evidence", spaceCapture: "Mandatory Photos", competitors: "Often Missing" },
          { feature: "Sign-offs", spaceCapture: "Digital / Instant", competitors: "Scanning / Slow" },
          { feature: "Trending", spaceCapture: "Auto Analytics", competitors: "Manual Spreadsheets" },
        ]}
      />

       <div className="mb-12">
        <h3>Standardize Your Quality Control</h3>
         <p>
        Consistent quality is key to reputation and profitability. 
        <strong>SpaceCapture</strong> allows you to standardize inspection workflows across all your projects. 
        </p>
      </div>

      <FaqSection items={faqs} />
    </SeoLandingPage>
  );
}
