import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "AI Defect Detection with Best UI Experience | SpaceCapture",
    description:
        "Discover how SpaceCapture combines AI defect detection with a best-in-class UI experience designed for real construction job sites.",
    keywords: [
        "AI defect detection UI",
        "SpaceCapture UX",
        "construction app UI",
        "offline AI inspection",
        "best field app experience",
    ],
};

export default function AiDefectDetectionBestUIPage() {
    return (
        <>
            <BlogPostLayout
                title="AI Defect Detection with Best UI Experience"
                subtitle="Powerful AI meets a clean, offline-first UI built for real construction sites."
                category="AI / UI Experience"
                readTime="6 min read"
            >


                {/* Content */}
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                    <p className="lead text-xl text-slate-800 font-medium mb-8">
                        AI is only effective when people can actually use it easily.
                        SpaceCapture combines advanced AI defect detection with one of the
                        best UI experiences in construction field apps — fast, clear, and
                        stress-free.
                    </p>

                    <p>
                        Instead of complex dashboards or slow workflows, the{" "}
                        <strong>SpaceCapture mobile app</strong> delivers AI insights through
                        a clean interface designed for inspectors working under real job
                        site conditions.
                    </p>

                    <h2>AI That Works Seamlessly in the UI</h2>
                    <p>
                        SpaceCapture’s AI runs quietly in the background. Users simply
                        capture images, and defects are detected automatically — without
                        extra steps, settings, or technical knowledge.
                    </p>

                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li>One-tap image capture</li>
                        <li>Automatic AI defect analysis</li>
                        <li>Clear visual defect tagging</li>
                        <li>No manual classification required</li>
                    </ul>

                    <h2>Offline-First UI Experience</h2>
                    <p>
                        Construction sites often lack reliable connectivity. SpaceCapture’s
                        UI is designed to feel instant and responsive even when fully
                        offline. There are no loading screens, broken flows, or blocked
                        actions.
                    </p>

                    <h2>Designed for Speed & Accuracy</h2>
                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li>Large touch targets for field use</li>
                        <li>High contrast visuals for outdoor visibility</li>
                        <li>Minimal taps to complete inspections</li>
                        <li>Consistent layouts across workflows</li>
                    </ul>

                    <h2>Benefits for Construction Teams</h2>
                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li>Faster inspections with less training</li>
                        <li>Reduced human error through AI assistance</li>
                        <li>Standardized reporting across teams</li>
                        <li>Higher adoption by field staff</li>
                    </ul>

                    <h2>Built for Real Job Sites</h2>
                    <p>
                        SpaceCapture is used by contractors, quality engineers, safety
                        officers, and project managers who need reliable tools that work
                        under pressure — not just in demos.
                    </p>

                    {/* Inline CTA */}
                    <div className="mt-14 p-8 rounded-2xl bg-indigo-50 border border-indigo-100 text-center">
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">
                            Experience AI with a Better UI
                        </h3>
                        <p className="text-slate-700 mb-6 max-w-[720px] mx-auto">
                            See how SpaceCapture combines AI defect detection with a UI
                            experience your field teams will actually enjoy using.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </BlogPostLayout>

            <CallToAction />
        </>
    );
}
