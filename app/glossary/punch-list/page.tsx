import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
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

export default function PunchListPage() {
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