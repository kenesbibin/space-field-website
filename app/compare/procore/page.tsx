"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    XCircle,
    ArrowRight,
    Zap,
    FileText,
    Camera,
    ShieldCheck,
    Smartphone,
    BarChart3,
    BrainCircuit
} from 'lucide-react';

const ProcoreComparisonPage = () => {
    return (
        <div className="bg-white">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_40%)] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10 max-w-6xl text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                            SpaceCapture vs Procore
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                            Project Management Isn&apos;t Field Intelligence. <br />
                            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Let AI Inspect For You.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Procore manages your projects. SpaceCapture inspects them. Add AI-powered defect detection, automated daily reports, and visual verification to your field workflow.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="https://www.spaceaiapp.com/login?type=SpaceCapture&moduleId=7a36674e-f8d6-4962-a0dc-105b50b4849c&invite=guest/login"
                                target="_blank"
                                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all hover:scale-105 shadow-lg shadow-blue-900/50 flex items-center gap-2"
                            >
                                Try Automating for Free <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/request-a-demo"
                                className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all border border-slate-700"
                            >
                                See Live Demo
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* 2. THE FUNDAMENTAL DIFFERENCE */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">The Fundamental Difference</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Procore is a comprehensive project management platform. SpaceCapture is a specialist AI engine that plugs into your field workflow to automate inspections and defect detection.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Procore Card */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
                            <div className="flex items-center gap-3 mb-6 opacity-60">
                                <BarChart3 className="w-6 h-6 text-slate-500" />
                                <h3 className="text-xl font-bold text-slate-500">The "Project Manager"</h3>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-4">Manual Inspection Input</h4>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>Field inspectors must manually log defects and observations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>Photos stored as attachments without intelligent analysis.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>Reporting requires manual data entry from field to office.</span>
                                </li>
                            </ul>
                        </div>

                        {/* SpaceCapture Card */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-indigo-600 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 title-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-50 rounded-full blur-3xl"></div>

                            <div className="flex items-center gap-3 mb-6">
                                <BrainCircuit className="w-6 h-6 text-indigo-600" />
                                <h3 className="text-xl font-bold text-indigo-600">The Cognitive Engine</h3>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-4">Autonomous AI Inspection</h4>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="font-medium text-slate-900">AI auto-detects defects from photos and 360° captures.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="font-medium text-slate-900">Every image is analyzed for risks, conditions, and compliance.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="font-medium text-slate-900">Daily reports generated automatically from field data.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COMPARISON TABLE */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">Feature by Feature Breakdown</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-left py-6 px-6 bg-slate-50 border-b-2 border-slate-200 w-1/3 text-lg font-bold text-slate-700">Feature</th>
                                    <th className="text-center py-6 px-6 bg-slate-50 border-b-2 border-slate-200 w-1/3 text-lg font-bold text-slate-500">Procore</th>
                                    <th className="text-center py-6 px-6 bg-indigo-50 border-b-2 border-indigo-200 w-1/3 text-lg font-bold text-indigo-700">SpaceCapture</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "AI Defect Detection", procore: "Manual Tagging", space: "Auto-Detected (Computer Vision)" },
                                    { feature: "Daily Reporting", procore: "Manual Entry / Templates", space: "Automated (AI-Written)" },
                                    { feature: "360° Photo Capture", procore: "Third-Party Integration", space: "Native with AI Analysis" },
                                    { feature: "Safety Compliance", procore: "Checklist-Based", space: "Risk Prediction Models" },
                                    { feature: "Progress Tracking", procore: "Schedule-Based Updates", space: "Objective Visual Verification" },
                                    { feature: "Offline Mode", procore: "Limited", space: "Full (with on-device AI)" },
                                    { feature: "Pricing Model", procore: "Enterprise (Custom)", space: "Unlimited Users (Flat Rate)" },
                                    { feature: "Integration Focus", procore: "Broad Project Management Suite", space: "Specialized Field Inspection AI" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                        <td className="py-5 px-6 font-medium text-slate-800">{row.feature}</td>
                                        <td className="py-5 px-6 text-center text-slate-500">{row.procore}</td>
                                        <td className="py-5 px-6 text-center font-bold text-indigo-700 bg-indigo-50/10">{row.space}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-slate-500 italic">*Comparison based on publicly available feature lists as of 2024.</p>
                    </div>
                </div>
            </section>

            {/* 4. SWITCHING SECTION */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(99,102,241,0.2))]"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Ready to upgrade your field stack?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Migrating is easier than you think. Import your projects, invite your team, and start automating your daily logs in under 5 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://www.spaceaiapp.com/login?type=SpaceCapture&moduleId=7a36674e-f8d6-4962-a0dc-105b50b4849c&invite=guest/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg"
                        >
                            Start Free Account
                        </Link>
                        <Link
                            href="/tools/switching-calculator"
                            className="px-8 py-4 rounded-full bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold transition-colors"
                        >
                            Calculate ROI
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProcoreComparisonPage;
