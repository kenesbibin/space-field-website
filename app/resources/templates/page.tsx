import React from 'react';

import CallToAction from '@/components/CallToAction';
import { ScanFace, FileText, Smartphone, Tablet, Monitor, Zap, ExternalLink, Bot, BrainCircuit, ShieldAlert, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SIGNUP_URL = "https://www.spaceaiapp.com/login?type=SpaceCapture&moduleId=7a36674e-f8d6-4962-a0dc-105b50b4849c&invite=guest/login";

export default function TemplatesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <main>
                {/* Hero */}
                <section className="bg-slate-900 text-white pt-12 pb-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                    {/* Gradient Orbs */}
                    <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-slate-800 border border-slate-700 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="flex items-center gap-2"><Smartphone className="w-3 h-3" /> iOS</span>
                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            <span className="flex items-center gap-2"><Tablet className="w-3 h-3" /> Android</span>
                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            <span className="flex items-center gap-2"><Monitor className="w-3 h-3" /> Web</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Free AI Field Inspection App <br />
                            <span className="text-blue-400">& AI Modules</span>
                        </h1>

                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Experience the power of Computer Vision and AI Risk Analysis. Turn your phone into a smart inspection tool for free.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={SIGNUP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-900/50"
                            >
                                Try For Free <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto max-w-[1200px] px-4 -mt-8 relative z-10 mb-20">


                    {/* Why App is Better Section */}
                    <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 md:p-10 mb-16 mt-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Why use AI Field Modules?</h2>
                                <ul className="space-y-4">
                                    {[
                                        "AI Defect Detection Analysis (Cracks, Leaks, Hazards)",
                                        "Automated AI Task Generation from Photos",
                                        "Instant Safety Risk Scoring on every inspection",
                                        "Zero-entry Daily Reports via Voice-to-Text"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Sparkles className="w-3 h-3 text-blue-600" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-900 rounded-xl p-6 text-center transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Free AI Tier</div>
                                <div className="text-white text-4xl font-extrabold mb-1">0$</div>
                                <div className="text-slate-400 text-sm mb-6">No credit card required</div>
                                <a href={SIGNUP_URL} className="block w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                                    Create Free Account
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Template Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <TemplateCard
                            title="AI Defect Detection"
                            format="Vision AI"
                            description="Auto-identify cracks, leaks, and safety hazards instantly from site photos using our computer vision engine."
                            icon={ScanFace}
                        />
                        <TemplateCard
                            title="AI Construction Inspections"
                            format="Smart Module"
                            description="Intelligent checklists that auto-suggest risks and codes based on your phase and trade."
                            icon={Bot}
                        />
                        <TemplateCard
                            title="AI Maintenance Module"
                            format="Predictive"
                            description="Generate predictive maintenance schedules automatically by analyzing asset condition photos."
                            icon={BrainCircuit}
                        />
                        <TemplateCard
                            title="AI Task Automation"
                            format="AI Tasks"
                            description="Voice-to-task creation. Simply speak or take a photo, and the AI assigns the correct trade and priority."
                            icon={Zap}
                        />
                        <TemplateCard
                            title="Smart Daily Reports"
                            format="Auto-Gen"
                            description="Summarize entire site activity automatically from location data, photos, and team inputs."
                            icon={FileText}
                        />
                        <TemplateCard
                            title="AI Safety Shield"
                            format="Risk Analysis"
                            description="Real-time analysis of site conditions to score safety risks and prevent accidents before they happen."
                            icon={ShieldAlert}
                        />
                    </div>
                </div>

                <CallToAction />
            </main>
        </div>
    );
}

const TemplateCard = ({ title, format, description, icon: Icon }: any) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-start hover:shadow-xl transition-shadow group relative overflow-hidden">
            {/* Hover Highlight */}
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex justify-between w-full items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${format.includes('AI') || format.includes('Smart') ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase py-1 px-2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    {format}
                </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                {description}
            </p>

            <div className="w-full">
                {/* Primary Action: Run in App */}
                <a
                    href={SIGNUP_URL}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg group-hover:scale-[1.02] transform transition-transform"
                >
                    <Zap className="w-4 h-4 fill-white text-white" />
                    Try AI Module
                </a>
            </div>
        </div>
    );
};
