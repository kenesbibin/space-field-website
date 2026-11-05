'use client';

import React, { useState } from 'react';
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
    Sparkles,
    Shield,
    Globe
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';

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
        description: "Compare manual reporting costs with SpaceCapture and estimate potential savings.",
        href: "/tools/switching-calculator",
        icon: Zap,
        color: "yellow"
    }
];

const COLORS = {
    amber: "from-amber-500/10 to-amber-600/5 text-amber-600 border-amber-200/50",
    slate: "from-slate-500/10 to-slate-600/5 text-slate-600 border-slate-200/50",
    blue: "from-blue-500/10 to-blue-600/5 text-blue-600 border-blue-200/50",
    indigo: "from-indigo-500/10 to-indigo-600/5 text-indigo-600 border-indigo-200/50",
    purple: "from-purple-500/10 to-purple-600/5 text-purple-600 border-purple-200/50",
    rose: "from-rose-500/10 to-rose-600/5 text-rose-600 border-rose-200/50",
    yellow: "from-yellow-500/10 to-yellow-600/5 text-yellow-600 border-yellow-200/50",
};

export default function ToolsClient() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All tools');
    const categories = ['All tools', 'Materials', 'Cost & ROI', 'Drawings'];
    const getCategory = (href: string) => href.includes('cad-viewer') ? 'Drawings' :
        /construction-cost|labor-cost|switching/.test(href) ? 'Cost & ROI' : 'Materials';
    const visibleTools = TOOLS.filter(tool =>
        (category === 'All tools' || getCategory(tool.href) === category) &&
        `${tool.name} ${tool.description}`.toLowerCase().includes(query.toLowerCase().trim()));
    return (
        <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
                        <div className="absolute top-24 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-[120px] animate-pulse duration-[4000ms]" />
                    </div>

                    <div className="container mx-auto px-4 relative">
                        <div className="max-w-4xl mx-auto text-center transform transition-all duration-1000 animate-in slide-in-from-bottom-8 fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-700 text-sm font-semibold mb-8 border border-blue-100 shadow-sm">
                                <Sparkles className="w-4 h-4" />
                                100% Free Tools for Professionals
                            </span>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                                Less guesswork.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Better project planning.</span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                                Free construction calculators and tools for your next site decision.
                                Estimate materials, plan labor, and compare costs in one place.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tools Grid Section */}
                <section className="py-12 pb-24" aria-label="Explore tools">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your field toolkit</h2>
                                <div className="flex flex-wrap gap-2" aria-label="Tool categories">
                                    {categories.map(value => <button key={value} type="button" aria-pressed={category === value}
                                        onClick={() => setCategory(value)}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${category === value ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300'}`}>
                                        {value}
                                    </button>)}
                                </div>
                            </div>
                            <div className="w-full lg:max-w-xs">
                                <label htmlFor="tool-search" className="block text-sm font-medium text-slate-600 mb-2">Find a tool</label>
                                <input id="tool-search" type="search" value={query} onChange={e => setQuery(e.target.value)}
                                    placeholder="Search concrete, labor, paint…" className="w-full px-4 py-3 text-slate-900" />
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 mb-6" role="status">{visibleTools.length} {visibleTools.length === 1 ? 'tool' : 'tools'} available</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {visibleTools.map((tool, index) => (
                                <div
                                    key={tool.name}
                                    className="transform transition-all duration-700 animate-in fade-in slide-in-from-bottom-8"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <Link
                                        href={tool.href}
                                        className="group relative block h-full bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden hover:-translate-y-1"
                                    >
                                        {/* Background hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${COLORS[tool.color as keyof typeof COLORS]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border`}>
                                                <tool.icon className="w-7 h-7" />
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                                {tool.name}
                                            </h3>

                                            <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                                                {tool.description}
                                            </p>

                                            <div className="flex items-center text-sm font-bold text-blue-600 border-t border-slate-100 pt-5 transition-all duration-300">
                                                Launch Tool
                                                <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {visibleTools.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                            <h3 className="text-lg font-bold text-slate-900">No matching tools</h3>
                            <p className="text-slate-500 mt-2 mb-4">Try another search or browse all categories.</p>
                            <button type="button" onClick={() => { setQuery(''); setCategory('All tools'); }} className="font-semibold text-blue-600">Reset filters</button>
                        </div>}
                    </div>
                </section>

                {/* Automation Context Section */}
                <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[200px] translate-y-1/2 -translate-x-1/2" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-20">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for Construction Accuracy</h2>
                                <p className="text-slate-400 text-lg max-w-3xl mx-auto font-medium">
                                    Eliminate error-prone spreadsheets and paper notes. Our cloud-based tools provide
                                    instant, shareable precision for high-stakes field operations.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-12 mb-32">
                                <div className="p-8 rounded-4xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                    <Shield className="w-12 h-12 text-purple-400 mb-6" />
                                    <h4 className="text-2xl font-bold mb-4">Precision Engineering</h4>
                                    <p className="text-slate-400 leading-relaxed">
                                        Calculations vetted by structural and civil engineers to ensure multi-factor accuracy for paving, concrete pouring, and cost estimation.
                                    </p>
                                </div>

                                <div className="p-8 rounded-4xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                    <Globe className="w-12 h-12 text-blue-400 mb-6" />
                                    <h4 className="text-2xl font-bold mb-4">Global Reach</h4>
                                    <p className="text-slate-400 leading-relaxed">
                                        Whether you&apos;re onsite in Mumbai or Munich, our web-first architecture ensures low-latency access to CAD viewing and material math.
                                    </p>
                                </div>

                                <div className="p-8 rounded-4xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                    <Zap className="w-12 h-12 text-amber-400 mb-6" />
                                    <h4 className="text-2xl font-bold mb-4">Site Efficiency</h4>
                                    <p className="text-slate-400 leading-relaxed">
                                        Reduce &quot;back-to-the-trailer&quot; trips by 40% with instant field math on your mobile device. Truly efficient project automation.
                                    </p>
                                </div>
                            </div>

                            {/* Automation Highlights */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden text-center">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Sparkles className="w-32 h-32" />
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold mb-8">Mastering Project Automation</h2>
                                <p className="text-slate-400 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
                                    In the modern era, <strong>project automation</strong> isn&apos;t just about robots—it&apos;s about removing the friction
                                    from daily engineering tasks. Our <strong>free construction software</strong> gives every foreman
                                    the capability of a data analyst.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="text-3xl font-bold text-white">100%</div>
                                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Accurate Results</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="text-3xl font-bold text-white">0s</div>
                                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Latency for Field Math</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="text-3xl font-bold text-white">Free</div>
                                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Lifetime Access</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-white">
                    <CallToAction />
                </div>
            </main>
        </div>
    );
}
