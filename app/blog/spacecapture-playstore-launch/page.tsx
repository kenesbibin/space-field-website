import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "SpaceCapture App Launched on Google Play Store",
    description:
        "SpaceCapture is now available on Google Play Store. Download the offline-first AI-powered field inspection app for construction teams.",
    keywords: [
        "SpaceCapture Play Store",
        "SpaceCapture app launch",
        "construction field app android",
        "AI inspection app",
        "offline construction app",
    ],
    alternates: {
        canonical: 'https://spacecapture.ai/blog/spacecapture-playstore-launch',
    },
};

export default function SpaceCapturePlayStoreLaunch() {
    return (
        <>
            <BlogPostLayout
                title="SpaceCapture App Officially Launched on Google Play Store"
                subtitle="Offline-first AI-powered field inspections are now accessible to construction teams everywhere."
                category="App Launch"
                readTime="7 min read"
                description="SpaceCapture is now available on Google Play Store. Download the offline-first AI-powered field inspection app for construction teams."
                url="https://spacecapture.ai/blog/spacecapture-playstore-launch"
                keywords={["SpaceCapture Play Store", "construction field app android", "AI inspection app download", "offline construction app", "Google Play construction app"]}
            >
                {/* Hero Image */}
                <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10 shadow-lg border border-slate-100">
                    <Image
                        src="/images/playstore-mockup.png"
                        alt="SpaceCapture App launched on Google Play Store"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"

                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                    <p className="lead text-xl text-slate-800 font-medium mb-8">
                        We’re excited to announce that the <strong>SpaceCapture mobile app</strong>{" "}
                        is now officially available on the{" "}
                        <strong>Google Play Store</strong>. This launch marks a major milestone
                        in making AI-powered construction inspections accessible to field
                        teams everywhere.
                    </p>

                    <p>
                        For too long, field teams have relied on disconnected tools—cameras,
                        clipboards, spreadsheets—to capture and report site conditions.
                        SpaceCapture changes that by delivering a unified, offline-first
                        platform designed specifically for construction professionals.
                    </p>

                    <h2>Why SpaceCapture?</h2>
                    <p>
                        SpaceCapture is built from the ground up for construction and field
                        operations—not adapted from generic mobile apps.
                    </p>

                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li><strong>100% offline-first:</strong> Work without connectivity</li>
                        <li><strong>AI-powered insights:</strong> Automatic defect detection</li>
                        <li><strong>Intuitive interface:</strong> Designed for outdoor use</li>
                        <li><strong>Enterprise security:</strong> AES-256 encryption</li>
                        <li><strong>Fast & native:</strong> Optimized Android performance</li>
                    </ul>

                    <h2>Key Features Available at Launch</h2>
                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li>Photo & video capture with GPS and timestamps</li>
                        <li>AI-powered defect detection</li>
                        <li>Smart search across inspections</li>
                        <li>Offline form completion</li>
                        <li>Automatic data sync</li>
                    </ul>

                    <h2>Built for Real Job Sites</h2>
                    <p>
                        Unlike generic form apps, SpaceCapture is optimized for harsh jobsite
                        conditions where connectivity is unreliable.
                    </p>

                    <h2>Who Should Use SpaceCapture?</h2>
                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li>Construction contractors</li>
                        <li>Quality control engineers</li>
                        <li>Safety inspectors</li>
                        <li>Project managers</li>
                        <li>Facility managers</li>
                    </ul>

                    <h2>What’s Next?</h2>
                    <p>
                        Upcoming releases include 360° walkthroughs, BIM integrations,
                        advanced RFI workflows, and AI-powered compliance checks.
                    </p>

                    {/* Inline CTA */}
                    <div className="mt-14 p-8 rounded-2xl bg-indigo-50 border border-indigo-100 text-center">
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">
                            Download SpaceCapture on Google Play
                        </h3>
                        <p className="text-slate-700 mb-6 max-w-[720px] mx-auto">
                            Start capturing smarter inspections with AI-powered tools built
                            for construction professionals.
                        </p>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.SpaceAi.FieldModule&hl=en_IN"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
                        >
                            Available on Google Play
                        </Link>
                    </div>
                </div>
            </BlogPostLayout>

            <CallToAction />
        </>
    );
}
