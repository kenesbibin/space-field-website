import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Site Inspection? | SpaceCapture Glossary",
  description:
    "Site inspection is the process of examining construction work to ensure compliance with plans, safety standards, and quality requirements.",
  keywords: [
    "site inspection meaning",
    "construction inspection",
    "field inspection definition",
    "AI site inspection software",
  ],
};

export default function SiteInspectionPage() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-lg">
        <h1>Site Inspection</h1>
        <p>
          <strong>Site inspection</strong> is the process of examining
          construction activities to verify that work is performed according to
          approved plans, safety regulations, and quality standards.
        </p>

        <h2>Purpose of Site Inspections</h2>
        <ul>
          <li>Ensure safety compliance</li>
          <li>Identify defects early</li>
          <li>Track project progress</li>
        </ul>

        <h2>AI in Site Inspections</h2>
        <p>
          AI inspection tools like SpaceCapture enable engineers to capture
          photos, detect defects automatically, and generate reports instantly.
        </p>

        <Link href="/features/inspection" className="text-blue-600">
          Explore inspection software →
        </Link>
      </div>
    </main>
  );
}
