"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sun, Zap, Maximize, ArrowRight, Thermometer } from 'lucide-react';

const SolarPanelSection = () => {
    return (
        <section className="relative py-20 lg:py-28 bg-slate-950 overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-slate-950 pointer-events-none"></div>

            <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6">
                            <Sun className="w-4 h-4" />
                            <span>Solar AI Inspection</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Maximize Yield with <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                                Thermal AI.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            Detect hotspots, micro-cracks, and string failures instantly. Integrate drone thermal imagery with Space Capture to audit megawatts of solar assets in minutes, not days.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a href="/request-a-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Audit Your Solar Farm
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                                <Thermometer className="w-8 h-8 text-amber-500 mb-3" />
                                <h3 className="text-white font-bold mb-1">Thermal Anomaly AI</h3>
                                <p className="text-xs text-slate-500">Auto-detect hotspots & overheating cells.</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                                <Maximize className="w-8 h-8 text-amber-500 mb-3" />
                                <h3 className="text-white font-bold mb-1">Drone Integration</h3>
                                <p className="text-xs text-slate-500">Seamlessly sync orthomosaic maps.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                         <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-[4/3] bg-slate-900">
                             <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                                 {/* Placeholder if specific solar image not available, using generic construction or abstract */}
                                 <div className="text-center">
                                     <Zap className="w-16 h-16 mx-auto mb-4 text-slate-700" />
                                     <p>Thermal Imaging Visualization</p>
                                 </div>
                             </div>
                             {/* Overlay UI simulation */}
                             <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs text-green-400 font-mono">
                                 Efficiency: 98.2%
                             </div>
                         </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SolarPanelSection;
