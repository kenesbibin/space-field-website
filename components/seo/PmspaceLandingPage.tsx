"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PmspaceLandingPageProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    featureStrip: string;
    statusLabel: string;
    children: React.ReactNode;
}

/**
 * Landing template for the pmspace.ai inspection prototype pages.
 * Hero carries an eyebrow, feature strip, and prototype status label
 * instead of the SpaceCapture trust badge, and closes with the
 * pilot call-to-action (no social-proof claims).
 */
export const PmspaceLandingPage = ({
    eyebrow,
    title,
    subtitle,
    featureStrip,
    statusLabel,
    children,
}: PmspaceLandingPageProps) => {
    return (
        <div className="min-h-screen bg-slate-50">
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{eyebrow}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto">
                            {title}
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                            {subtitle}
                        </p>

                        {/* Main Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <Link
                                href="/request-a-demo"
                                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-base font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:scale-105"
                            >
                                Request a Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href="https://pointcloud.aibqs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 text-base font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/50 hover:scale-105"
                            >
                                Try for Free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#how-it-works"
                                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white text-slate-900 px-8 text-base font-bold shadow transition-all hover:bg-slate-100 hover:scale-105"
                            >
                                Explore the Workflow
                            </a>
                        </div>

                        {/* Short Feature Strip */}
                        <p className="text-sm md:text-base text-slate-400 mb-8">
                            {featureStrip}
                        </p>

                        {/* Prototype Status Label */}
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-emerald-900/40 border border-emerald-700 text-emerald-300 text-xs font-semibold">
                            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                            {statusLabel}
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
                            {children}
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="relative py-20 bg-slate-900 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            See your inspection workflow from a clearer perspective.
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Explore how connected survey context, photo observations, and human
                            review could support your next infrastructure-inspection pilot.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/request-a-demo"
                                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-indigo-600 px-8 text-lg font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:scale-105"
                            >
                                Request a Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href="https://pointcloud.aibqs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-white text-slate-900 px-8 text-lg font-bold shadow transition-all hover:bg-slate-100 hover:scale-105"
                            >
                                Try for Free
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
