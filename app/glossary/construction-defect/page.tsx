import React from "react";
import type { Metadata as MetadataDefect } from "next";
import Link from "next/link";

export const metadata: MetadataDefect = {
  title: "What Is a Construction Defect? | SpaceCapture Glossary",
  description:
    "A construction defect is a flaw in design, materials, or workmanship that reduces a building's quality or safety.",
  keywords: [
    "construction defect definition",
    "structural defect meaning",
    "building defects",
    "AI defect detection construction",
  ],
};

export default function ConstructionDefectPage() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 prose prose-lg">
        <h1>Construction Defect</h1>
        <p>
          A <strong>construction defect</strong> refers to any flaw in design,
          materials, or workmanship that compromises a building's performance,
          durability, or safety.
        </p>

        <h2>Common Types of Defects</h2>
        <ul>
          <li>Concrete cracks</li>
          <li>Water leakage</li>
          <li>Structural misalignment</li>
        </ul>

        <h2>AI Defect Detection</h2>
        <p>
          Modern AI tools like SpaceCapture can automatically identify defects
          from images, helping teams resolve issues faster and reduce costs.
        </p>

        <Link href="/features/defect-detection" className="text-blue-600">
          See AI defect detection →
        </Link>
      </div>
    </main>
  );
}
