"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, BrainCircuit, ScanSearch } from 'lucide-react';

const PlanRadarPage = () => {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_40%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl text-center">
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                    Space Capture vs PlanRadar
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                    Don't Just Pin Tickets. <br/>
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Solve Them with AI.</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    PlanRadar is a great digital ticketing tool. Space Capture is an autonomous inspection engine. Move beyond manual pins and let AI detect defects for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                        href="/request-a-demo" 
                        target="_blank"
                        className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all hover:scale-105 shadow-lg shadow-emerald-900/50 flex items-center gap-2"
                    >
                        See AI in Action <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </motion.div>

        </div>
      </section>

      {/* 2. THE FUNDAMENTAL DIFFERENCE */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Manual Input vs AI Detection</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    The fundamental difference isn't the app—it's who does the work. You or the software?
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* PlanRadar Card */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
                    <div className="flex items-center gap-3 mb-6 opacity-60">
                        <ScanSearch className="w-6 h-6 text-slate-500" />
                        <h3 className="text-xl font-bold text-slate-500">PlanRadar</h3>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">You do the work.</h4>
                    <ul className="space-y-4 text-slate-600">
                        <li className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <span>Manually walk to location.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <span>Manually drop pin on plan.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <span>Manually type defect description.</span>
                        </li>
                    </ul>
                </div>

                {/* Space Capture Card */}
                <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                    
                    <div className="flex items-center gap-3 mb-6">
                        <BrainCircuit className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-xl font-bold text-emerald-600">Space Capture</h3>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">AI does the work.</h4>
                    <ul className="space-y-4 text-slate-600">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-medium text-slate-900">Take a 360 photo or video walk.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-medium text-slate-900">AI auto-locates you on the plan.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-medium text-slate-900">AI Identifies defects & generates tickets.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">Breaking Down the Tech</h2>
            
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-left py-6 px-6 bg-slate-50 border-b-2 border-slate-200 w-1/3 text-lg font-bold text-slate-700">Feature</th>
                            <th className="text-center py-6 px-6 bg-slate-50 border-b-2 border-slate-200 w-1/3 text-lg font-bold text-slate-500">PlanRadar</th>
                            <th className="text-center py-6 px-6 bg-emerald-50 border-b-2 border-emerald-200 w-1/3 text-lg font-bold text-emerald-700">Space Capture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { feature: "Defect Creation", val1: "Manual Pin Drop", val2: "Automated AI Detection" },
                            { feature: "Progress Tracking", val1: "Ticket Status", val2: "Visual Reality Capture" },
                            { feature: "BIM Integration", val1: "Viewer Only", val2: "Compare Reality vs BIM" },
                            { feature: "Input Method", val1: "Typing / Dictation", val2: "Visual Capture (Video/Photo)" },
                            { feature: "Setup Speed", val1: "Moderate", val2: "Instant (No floor plans needed)" },
                        ].map((row, idx) => (
                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                <td className="py-5 px-6 font-medium text-slate-800">{row.feature}</td>
                                <td className="py-5 px-6 text-center text-slate-500">{row.val1}</td>
                                <td className="py-5 px-6 text-center font-bold text-emerald-700 bg-emerald-50/10">{row.val2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </section>

    </div>
  );
};

export default PlanRadarPage;
