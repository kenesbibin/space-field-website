import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Construction Inspection Glossary | SpaceCapture",
    description:
        "Explore the construction inspection glossary by SpaceCapture. Learn key terms like punch list, site inspection, construction defects, AI inspection, and field reporting.",
    keywords: [
        "construction glossary",
        "inspection terms",
        "punch list meaning",
        "site inspection definition",
        "construction defect meaning",
        "AI construction terms",
    ],
};

export default function GlossaryHome() {
    return (
        <main className="bg-slate-50 min-h-screen py-16">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
                    Construction Inspection Glossary
                </h1>
                <p className="text-lg text-slate-600 mb-10">
                    Learn essential construction and field inspection terms used by site
                    engineers, project managers, and quality control teams.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <Link
                        href="/glossary/punch-list"
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg border"
                    >
                        <h2 className="text-xl font-bold text-blue-700 mb-2">
                            Punch List
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Definition of punch list in construction and why it matters.
                        </p>
                    </Link>

                    <Link
                        href="/glossary/site-inspection"
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg border"
                    >
                        <h2 className="text-xl font-bold text-blue-700 mb-2">
                            Site Inspection
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Learn what site inspection means and its importance.
                        </p>
                    </Link>

                    <Link
                        href="/glossary/construction-defect"
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg border"
                    >
                        <h2 className="text-xl font-bold text-blue-700 mb-2">
                            Construction Defect
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Understand construction defects and defect detection.
                        </p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
