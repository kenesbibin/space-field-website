import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Truck,
    HardHat,
    BarChart3,
    Ruler,
    Users,
    Palette,
    Zap,
    ArrowRight,
    Calculator,
    Hammer
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
    title: 'Free Construction Tools & Calculators | Space Capture',
    description: 'Access our suite of free construction tools: asphalt and concrete calculators, labor burden estimators, CAD viewers, and more. Built for field engineers.',
    keywords: ['construction tools', 'construction calculators', 'free construction software', 'asphalt estimator', 'concrete calculator', 'labor cost tool'],
};

const TOOLS = [
    {
        name: "Asphalt Calculator",
        description: "Estimate tonnage and volume for paving projects with compaction factors.",
        href: "/tools/asphalt-calculator",
        icon: Truck,
        color: "amber"
    },
    {
        name: "Concrete Calculator",
        description: "Calculate cubic yards and bag counts for slabs, footings, and columns.",
        href: "/tools/concrete-calculator",
        icon: HardHat,
        color: "slate"
    },
    {
        name: "Construction Cost Calculator",
        description: "Create detailed building estimates with line items for materials and labor.",
        href: "/tools/construction-cost-calculator",
        icon: BarChart3,
        color: "blue"
    },
    {
        name: "Free Online CAD Viewer",
        description: "View and share DWG/DXF files instantly in your browser without software.",
        href: "/tools/free-online-cad-viewer",
        icon: Ruler,
        color: "indigo"
    },
    {
        name: "Labor Cost Calculator",
        description: "Determine true labor burden, overhead, and markup for your workforce.",
        href: "/tools/labor-cost-calculator",
        icon: Users,
        color: "purple"
    },
    {
        name: "Paint Calculator",
        description: "Estimate gallons of paint needed based on wall area and coverage rates.",
        href: "/tools/paint-calculator",
        icon: Palette,
        color: "rose"
    },
    {
        name: "Switching Calculator",
        description: "Utility tool for calculating electrical switching and load distributions.",
        href: "/tools/switching-calculator",
        icon: Zap,
        color: "yellow"
    }
];

const COLORS = {
    amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-600",
    slate: "bg-slate-50 text-slate-600 group-hover:bg-slate-600",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
    indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600",
    rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-600",
    yellow: "bg-yellow-50 text-yellow-600 group-hover:bg-yellow-600",
};

export default function ToolsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Construction Tools & Calculators",
        "description": "A collection of free web-based tools designed for construction professionals and field engineers.",
        "publisher": {
            "@type": "Organization",
            "name": "Space Capture"
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main>
                {/* Header Section */}
                <section className="pt-32 pb-16 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Free Construction <span className="text-purple-600">Tools</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            We build specialized tools to help field engineers and project managers work faster.
                            From material estimation to visual documentation, access everything you need for free.
                        </p>
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {TOOLS.map((tool) => (
                                <Link
                                    key={tool.name}
                                    href={tool.href}
                                    className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:text-white transition-colors duration-300 ${COLORS[tool.color as keyof typeof COLORS]}`}>
                                        <tool.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {tool.description}
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-purple-600 transition-colors">
                                        Try This Tool <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO Context Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg prose-slate mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Built for the Modern Field Team</h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4 text-left">
                                        <Calculator className="w-6 h-6 text-purple-600" />
                                        Accuracy in the Field
                                    </h4>
                                    <p className="text-slate-600 text-left">
                                        Manual calculations on scrap paper lead to mistakes and ordering delays. Our web-based tools provide instant,
                                        reproducible results that can be shared with suppliers and stakeholders immediately.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4 text-left">
                                        <Hammer className="w-6 h-6 text-purple-600" />
                                        Zero Friction Workflow
                                    </h4>
                                    <p className="text-slate-600 text-left">
                                        No signups, no downloads, and no credit cards. We provide these tools free of charge because we believe
                                        construction technology should be accessible to everyone on the job site.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Need More Than Just a Calculator?</h3>
                                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                                    Space Capture is a complete field operation platform. From AI-powered inspections to automated reporting,
                                    we help you manage the entire project lifecycle with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <CallToAction />
            </main>
        </div>
    );
}
