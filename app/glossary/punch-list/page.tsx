// import React from "react";
// import type { Metadata as MetadataSite } from "next";
// import Link from "next/link";

// export const metadataSite: MetadataSite = {
//   title: "What Is Site Inspection? | SpaceCapture Glossary",
//   description:
//     "Site inspection is the process of examining construction work to ensure compliance with plans, safety standards, and quality requirements.",
//   keywords: [
//     "site inspection meaning",
//     "construction inspection",
//     "field inspection definition",
//     "AI site inspection software",
//   ],
// };

// export function SiteInspectionPage() {
//   return (
//     <main className="bg-white min-h-screen py-16">
//       <div className="max-w-4xl mx-auto px-6 prose prose-lg">
//         <h1>Site Inspection</h1>
//         <p>
//           <strong>Site inspection</strong> is the process of examining
//           construction activities to verify that work is performed according to
//           approved plans, safety regulations, and quality standards.
//         </p>

//         <h2>Purpose of Site Inspections</h2>
//         <ul>
//           <li>Ensure safety compliance</li>
//           <li>Identify defects early</li>
//           <li>Track project progress</li>
//         </ul>

//         <h2>AI in Site Inspections</h2>
//         <p>
//           AI inspection tools like SpaceCapture enable engineers to capture
//           photos, detect defects automatically, and generate reports instantly.
//         </p>

//         <Link href="/features/inspection" className="text-blue-600">
//           Explore inspection software →
//         </Link>
//       </div>
//     </main>
//   );
// }
import React from "react";
import type { Metadata as MetadataPunch } from "next";
import Link from "next/link";

export const metadataPunch: MetadataPunch = {
  title: "What Is a Punch List in Construction? | SpaceCapture Glossary",
  description:
    "A punch list is a document listing incomplete or defective construction work that must be corrected before project completion.",
  keywords: [
    "punch list construction",
    "snag list meaning",
    "construction punch list definition",
    "AI punch list software",
  ],
};

export function PunchListPage() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-lg">
        <h1>Punch List</h1>
        <p>
          A <strong>punch list</strong> is a document used in construction to
          identify incomplete, incorrect, or defective work that must be fixed
          before project handover. It ensures that all quality standards are met
          before final approval.
        </p>

        <h2>Why Punch Lists Are Important</h2>
        <p>
          Punch lists help contractors and engineers track remaining tasks,
          reduce rework, and ensure project completion without delays.
        </p>

        <h2>Modern AI Punch Lists</h2>
        <p>
          AI-powered tools like SpaceCapture automate punch list creation by
          detecting defects directly from site images and generating reports.
        </p>

        <Link href="/features/defect-detection" className="text-blue-600">
          Learn about AI defect detection →
        </Link>
      </div>
    </main>
  );
}