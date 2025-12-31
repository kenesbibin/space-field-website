"use client";

import React, { useState } from 'react';
import { LabHeader, LabCard } from '@/components/lab/TestControls';
import { 
  Compass, 
  Map, 
  Move3d, 
  CheckCircle2, 
  Target,
  Layers,
  Zap,
  RotateCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AutoAlignPage = () => {
    const [isAligned, setIsAligned] = useState(false);

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* HER0 */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-4">
                    <Compass className="w-4 h-4 mr-2" />
                    Automated BIM Alignment
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Perfect Coordinates. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        Every Single Time.
                    </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Our <strong>Auto-Align™ Engine</strong> uses computer vision to instinctively lock 360° captures and point clouds onto your 2D floor plans or BIM models. No manual dragging required.
                </p>
            </div>

            {/* INTERACTIVE DEMO: Map Overlay */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Visualizer */}
                <LabCard className="relative h-96 lg:h-[500px] bg-slate-900 overflow-hidden flex items-center justify-center p-0 border-slate-800 shadow-2xl">
                    {/* Background: Satellite/Site Map (Mock) */}
                    <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale"></div>
                    
                    {/* Overlay: Floorplan (Mock Grid/Lines) */}
                    <motion.div 
                        className="relative z-10 w-64 h-80 border-2 border-cyan-400 bg-cyan-900/30 backdrop-blur-sm rounded"
                        animate={{ 
                            rotate: isAligned ? 0 : 15, 
                            scale: isAligned ? 1 : 0.9,
                            x: isAligned ? 0 : -30,
                            y: isAligned ? 0 : 20,
                            opacity: 1
                        }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    >
                         {/* Internal Floorplan Lines */}
                         <div className="absolute top-4 left-4 right-4 h-2 border-b border-cyan-400/50"></div>
                         <div className="absolute top-4 bottom-4 left-8 w-2 border-r border-cyan-400/50"></div>
                         <div className="absolute bottom-10 right-10 w-20 h-20 border border-cyan-400/50 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                         </div>
                         
                         {/* Alignment Markers */}
                         <AnimatePresence>
                             {isAligned && (
                                 <>
                                    <motion.div 
                                        initial={{ scale: 0 }} animate={{ scale: 1 }} 
                                        className="absolute -top-3 -left-3 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                                    >
                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                    </motion.div>
                                    <motion.div 
                                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }}
                                        className="absolute -bottom-3 -right-3 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                                    >
                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                    </motion.div>
                                 </>
                             )}
                         </AnimatePresence>
                    </motion.div>

                    {/* Status Text overlay */}
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                         <div className={`inline-flex items-center px-4 py-2 rounded-lg backdrop-blur-md border ${isAligned ? 'bg-green-500/20 border-green-500/50 text-green-100' : 'bg-slate-800/80 border-slate-700 text-slate-300'}`}>
                             {isAligned ? (
                                 <>
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span className="font-bold">Aligned (Confidence: 99.8%)</span>
                                 </>
                             ) : (
                                 <>
                                    <RotateCw className="w-5 h-5 mr-2 animate-spin" />
                                    <span className="font-mono">Scanning Features...</span>
                                 </>
                             )}
                         </div>
                    </div>
                </LabCard>

                {/* Controls & Text */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Eliminate Manual "Pinning"</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Stop wasting hours dragging 360 photos onto PDF maps. Our algorithm analyzes structural features (walls, columns, doors) to snap captures into their exact geospatial coordinates automatically.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FeatureBox 
                            icon={Target} 
                            title="2mm Accuracy" 
                            desc="Laser-scan grade precision for verify-in-field tasks." 
                        />
                        <FeatureBox 
                            icon={Layers} 
                            title="BIM Overlay" 
                            desc="Support for Revit, Navisworks, and IFC models." 
                        />
                        <FeatureBox 
                            icon={Zap} 
                            title="Instant Sync" 
                            desc="Aligns 100+ photos in under 5 minutes." 
                        />
                        <FeatureBox 
                            icon={Map} 
                            title="GPS Fallback" 
                            desc="Smart switching between Visual SLAM and GPS data." 
                        />
                    </div>

                    <div className="pt-4">
                         <button 
                            onClick={() => setIsAligned(!isAligned)}
                            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                         >
                            <Move3d className="w-5 h-5" />
                            {isAligned ? 'Reset Simulation' : 'Run Auto-Align Algorithm'}
                         </button>
                    </div>
                </div>

            </div>

            {/* SCHEMA & FAQ */}
            <div className="max-w-3xl mx-auto border-t border-slate-200 pt-10 mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Common Questions</h3>
                <div className="space-y-6">
                    <FaqItem 
                        q="Does this work with hand-drawn sketches?" 
                        a="Yes, as long as the sketch is to scale. However, vector PDFs or CAD/BIM files yield the highest accuracy." 
                    />
                    <FaqItem 
                        q="What if the site has changed significantly (e.g., demolition)?" 
                        a="Our manual override tool allows you to set 2 'Ground Control Points' which the system then uses to re-calibrate the rest of the tour." 
                    />
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareFeature",
                        "name": "Auto-Align Technology",
                        "description": "Automated alignment of 360 photos to 2D floor plans using Computer Vision.",
                        "provider": { "@type": "Organization", "name": "Space Capture" }
                    })
                }}
            />
        </div>
    );
};

const FeatureBox = ({ icon: Icon, title, desc }: any) => (
    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col gap-2">
        <Icon className="w-6 h-6 text-blue-600" />
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="text-xs text-slate-500">{desc}</p>
    </div>
);

const FaqItem = ({ q, a }: { q: string, a: string }) => (
    <div>
        <h5 className="font-bold text-slate-900 mb-1">{q}</h5>
        <p className="text-sm text-slate-600">{a}</p>
    </div>
);

export default AutoAlignPage;
