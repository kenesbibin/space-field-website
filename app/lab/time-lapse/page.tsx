"use client";

import React, { useState } from 'react';
import { LabHeader, LabCard } from '@/components/lab/TestControls';
import { 
  Clock, 
  Calendar, 
  History, 
  PlayCircle, 
  PauseCircle, 
  FastForward,
  CheckSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TimeLapsePage = () => {
    const [week, setWeek] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);

    // Mock Timeline Data
    const phases = [
        { week: 1, label: 'Demolition & Prep', color: 'bg-red-500', status: 'Completed' },
        { week: 2, label: 'Framing & MEP', color: 'bg-orange-500', status: 'Completed' },
        { week: 3, label: 'Drywall Installation', color: 'bg-yellow-500', status: 'In Progress' },
        { week: 4, label: 'Finishing & Paint', color: 'bg-green-500', status: 'Scheduled' },
    ];

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            let currentWeek = week;
            const interval = setInterval(() => {
                currentWeek = currentWeek >= 4 ? 1 : currentWeek + 1;
                setWeek(currentWeek);
            }, 1000);
            // In a real app, we'd clear this interval properly on unmount/stop
            setTimeout(() => { clearInterval(interval); setIsPlaying(false); }, 4000);
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* HERO */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-wide mb-4">
                    <History className="w-4 h-4 mr-2" />
                    4D Construction Monitoring
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Automated AI <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                        Progress Tracking.
                    </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Transform your <strong>Construction Site Photo Documentation</strong> into actionable insights. Our engine aligns daily captures to create a perfect video record, preserving the reality of your site forever.
                </p>
            </div>

            {/* INTERACTIVE DEMO: Timeline Player */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                
                {/* Visualizer (Left 2/3) */}
                <div className="lg:col-span-2 space-y-6">
                    <LabCard className="relative aspect-video bg-slate-900 overflow-hidden shadow-2xl rounded-2xl border-4 border-slate-900">
                        {/* Simulated Scene Layers */}
                        <AnimatePresence mode='wait'>
                            <motion.div 
                                key={week}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center bg-slate-800"
                            >
                                {/* Abstract Representation of Construction Phases */}
                                <div className="text-center opacity-80">
                                    <div className="text-9xl mb-4">
                                        {week === 1 && "🏗️"}
                                        {week === 2 && "🦴"}
                                        {week === 3 && "🧱"}
                                        {week === 4 && "🎨"}
                                    </div>
                                    <h3 className="text-4xl font-black text-white uppercase tracking-widest">{phases[week-1].label}</h3>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Player Controls Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                            <div>
                                <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Current View</span>
                                <div className="flex items-center gap-2 text-white">
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-xl font-bold">Week {week}: {phases[week-1].label}</span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={togglePlay}
                                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:scale-105 transition-transform"
                            >
                                {isPlaying ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8 ml-1" />}
                            </button>
                        </div>
                    </LabCard>

                    {/* Scrubber */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-slate-400 uppercase">Project Timeline</span>
                            <span className="text-xs font-bold text-slate-900">Nov 2024 - Dec 2024</span>
                        </div>
                        <div className="relative h-2 bg-slate-100 rounded-full mb-8">
                            <div 
                                className="absolute top-0 left-0 h-full bg-purple-500 rounded-full transition-all duration-300"
                                style={{ width: `${(week / 4) * 100}%` }}
                            ></div>
                            {/* Steps */}
                            {[1, 2, 3, 4].map((step) => (
                                <button 
                                    key={step}
                                    onClick={() => { setWeek(step); setIsPlaying(false); }}
                                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all ${
                                        step <= week ? 'bg-purple-500 border-white shadow' : 'bg-slate-200 border-white'
                                    }`}
                                    style={{ left: `${(step / 4) * 100 - 12.5}%` }}
                                ></button>
                            ))}
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-slate-500 uppercase">
                            <span>Week 1<br/>Demo</span>
                            <span>Week 2<br/>Framing</span>
                            <span>Week 3<br/>Drywall</span>
                            <span>Week 4<br/>Paint</span>
                        </div>
                    </div>
                </div>

                {/* Info Sidebar (Right 1/3) */}
                <div className="space-y-6">
                    <LabCard className="p-6 border-purple-100 bg-purple-50/50">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                             <CheckSquare className="w-5 h-5 text-purple-600" />
                             Progress Report
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b border-purple-200/50">
                                <span className="text-sm text-slate-600">Schedule Variance</span>
                                <span className="text-sm font-bold text-green-600">-2 Days (Ahead)</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-purple-200/50">
                                <span className="text-sm text-slate-600">Completion</span>
                                <span className="text-sm font-bold text-slate-900">72%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600">Next Milestone</span>
                                <span className="text-sm font-bold text-slate-900">Inspection</span>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-bold hover:bg-purple-700 transition-colors">
                            Generate PDF Report
                        </button>
                    </LabCard>

                    <div className="space-y-4">
                        <FeatureItem 
                            title="Ghost Mode Comparison" 
                            desc="Overlay 'Week 1' vs 'Week 4' to instantly visualize changes." 
                        />
                        <FeatureItem 
                            title="Auto-Align Stabilization" 
                            desc="AI automatically corrects camera tilt and position for smooth video." 
                        />
                        <FeatureItem 
                            title="BIM Integration" 
                            desc="Compare reality against the 4D BIM schedule to catch delays." 
                        />
                    </div>
                </div>

            </div>

            {/* SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareFeature",
                        "name": "Construction Time-Lapse Engine",
                        "description": "Automated 4D progress tracking for construction sites.",
                        "provider": { "@type": "Organization", "name": "SpaceCapture" }
                    })
                }}
            />
        </div>
    );
};

const FeatureItem = ({ title, desc }: any) => (
    <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
        <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
        <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">{title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
        </div>
    </div>
);

// Add Clock to LabLayout import compatibility
import { Activity } from 'lucide-react'; 

export default TimeLapsePage;
