import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "UI Experience in SpaceCapture App",
    description:
        "Explore how SpaceCapture delivers an intuitive UI experience for construction field teams with an offline-first, intuitive design.",
    keywords: [
        "UI experience",
        "SpaceCapture UI",
        "construction app UX",
        "offline-first UI",
        "field inspection app design",
    ],
    alternates: {
        canonical: 'https://spacecapture.ai/blog/best-ui-experience-spacecapture',
    },
};

export default function BestUIExperiencePage() {
    return (
        <>
            <BlogPostLayout
                title="UI Experience in SpaceCapture App"
                subtitle="Designed for speed, clarity, and real-world job sites — even without internet."
                category="UI / UX"
                readTime="6 min read"
                description="Explore how SpaceCapture delivers an intuitive UI experience for construction field teams with an offline-first, intuitive design."
                url="https://spacecapture.ai/blog/best-ui-experience-spacecapture"
                keywords={["UI experience", "construction app design", "offline-first field app", "SpaceCapture user experience", "mobile field app interface"]}
            >
                {/* Hero Image */}
                <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10 shadow-lg border border-slate-100">
                    <Image
                        src="/images/playstore-mockup.png"
                        alt="Best UI experience in SpaceCapture app"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"

                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                    <p className="lead text-xl text-slate-800 font-medium mb-8">
                        A great construction app isn’t just about features — it’s about how
                        fast, clear, and stress-free it feels on a busy job site.
                        SpaceCapture is built to deliver an intuitive UI experience for
                        field teams working in tough, offline environments.
                    </p>

                    <p>
                        From inspectors and engineers to project managers, every screen in
                        the <strong>SpaceCapture app</strong> is optimized for clarity,
                        minimal taps, and real-world usage.
                    </p>

                    <h2>What Makes SpaceCapture’s UI Stand Out?</h2>
                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li>Clean, distraction-free layouts</li>
                        <li>Large touch targets for gloved hands</li>
                        <li>High contrast for outdoor visibility</li>
                        <li>Fast navigation with minimal learning curve</li>
                    </ul>

                    <h2>Offline-First UI by Design</h2>
                    <p>
                        Unlike apps that break when the network drops, SpaceCapture’s UI is
                        designed to work seamlessly offline. Users can capture photos, fill
                        forms, and tag defects without delays or loading states.
                    </p>

                    <h2>Built for Field Conditions</h2>
                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li>Instant camera access</li>
                        <li>One-hand usability</li>
                        <li>Clear visual hierarchy</li>
                        <li>Fast performance on mid-range devices</li>
                    </ul>

                    <h2>Designed with Construction Teams</h2>
                    <p>
                        Every UI decision in SpaceCapture is validated with real users on
                        active job sites. This ensures the app feels natural, fast, and
                        reliable — even under pressure.
                    </p>

                    <h2>Who Benefits Most?</h2>
                    <ul className="list-disc pl-6 space-y-4 mb-8">
                        <li>Site engineers</li>
                        <li>Quality inspectors</li>
                        <li>Safety officers</li>
                        <li>Project managers</li>
                        <li>Facility maintenance teams</li>
                    </ul>

                    {/* Inline CTA */}
                    <div className="mt-14 p-8 rounded-2xl bg-indigo-50 border border-indigo-100 text-center">
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">
                            Experience the Best UI in the Field
                        </h3>
                        <p className="text-slate-700 mb-6 max-w-[720px] mx-auto">
                            Try SpaceCapture and see how a well-designed UI can dramatically
                            improve inspection speed, accuracy, and team adoption.
                        </p>
                        <Link
                            href="/request-a-demo"
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
