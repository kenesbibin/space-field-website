import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GLOSSARY_BY_CATEGORY,
  GLOSSARY_TERMS,
} from "@/lib/glossary-data";
import StructuredData from "@/components/seo/StructuredData";
import {
  buildBreadcrumbsFromPath,
  getBreadcrumbListSchema,
} from "@/components/seo/BreadcrumbListSchema";

export const metadata = {
  title: "Construction & Field Inspection Glossary | SpaceCapture",
  description:
    "The complete construction and field inspection glossary. Learn key terms like punch list, site inspection, BIM, AI defect detection, RFI, change order, and more.",
  keywords: [
    "construction glossary",
    "inspection terms",
    "punch list meaning",
    "site inspection definition",
    "construction defect meaning",
    "AI construction terms",
    "BIM definition",
    "lean construction",
    "OSHA",
    "PPE",
    "cladding inspection",
    "modular construction",
  ],
  alternates: {
    canonical: "https://spacecapture.ai/glossary",
  },
  openGraph: {
    type: "website",
    title: "Construction & Field Inspection Glossary | SpaceCapture",
    description:
      "The complete construction and field inspection glossary. Learn key terms used by site engineers, project managers, and quality control teams.",
    url: "https://spacecapture.ai/glossary",
    siteName: "SpaceCapture",
  },
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Inspection:
    "Terms related to field, building, home, and property inspections.",
  Construction:
    "Construction methods, project types, and major industry terms.",
  "AI & Quality":
    "AI, computer vision, and quality management terms.",
  "AI & Technology": "AI and emerging technology terms.",
  "AI & Data": "AI, data, and analytics terms.",
  Technology:
    "BIM, digital twins, and other construction technology terms.",
  "Project Management":
    "Schedules, RFIs, submittals, and project workflows.",
  Documentation:
    "Reports, daily logs, and as-built records.",
  Quality: "Defects, punch lists, and QA/QC terms.",
  Contracts: "Construction contracts and change orders.",
  Safety: "PPE, OSHA, toolbox talks, and safety inspections.",
  Roles: "Construction project roles and responsibilities.",
  Operations: "Work orders and operational workflows.",
  Scheduling: "Gantt charts, CPM, and project schedules.",
  Methodology: "Lean construction and other methodologies.",
  Estimation: "Takeoffs, cost estimation, and bidding.",
};

export default function GlossaryHome() {
  const breadcrumbSchema = getBreadcrumbListSchema(
    buildBreadcrumbsFromPath("/glossary")
  );
  const totalTerms = GLOSSARY_TERMS.length;

  return (
    <main className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Construction & Field Inspection Glossary
        </h1>
        <p className="text-lg text-slate-600 mb-4 max-w-3xl">
          The complete SpaceCapture glossary — covering {totalTerms}+ terms
          used by site engineers, project managers, quality control teams,
          and AI-assisted inspection platforms. Updated regularly as the
          industry evolves.
        </p>
        <p className="text-sm text-slate-500 mb-10">
          Looking for software that uses these terms in your field
          inspections? See our{" "}
          <Link
            href="/field-inspection-software"
            className="text-indigo-600 underline"
          >
            field inspection software
          </Link>{" "}
          or{" "}
          <Link
            href="/construction-inspection-software"
            className="text-indigo-600 underline"
          >
            construction inspection software
          </Link>
          .
        </p>

        <div className="space-y-10">
          {Object.entries(GLOSSARY_BY_CATEGORY).map(([category, terms]) => (
            <section
              key={category}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="mb-4 border-b border-slate-100 pb-3">
                <h2 className="text-2xl font-bold text-slate-900">
                  {category}
                </h2>
                {CATEGORY_DESCRIPTIONS[category] && (
                  <p className="text-sm text-slate-500 mt-1">
                    {CATEGORY_DESCRIPTIONS[category]}
                  </p>
                )}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {terms.map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glossary/${term.slug}`}
                    className="block bg-slate-50 hover:bg-indigo-50 hover:border-indigo-300 border border-slate-200 p-4 rounded-lg transition"
                  >
                    <h3 className="font-bold text-slate-900 mb-1">
                      {term.term}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {term.definition}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <StructuredData data={breadcrumbSchema} />
      </div>
    </main>
  );
}
