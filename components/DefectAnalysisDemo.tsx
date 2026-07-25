"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, AlertTriangle, CheckCircle, Smartphone, Activity, Zap } from 'lucide-react';

const DefectAnalysisDemo = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setShowResult(false);
    
    // Simulate scan duration
    setTimeout(() => {
        setIsScanning(false);
        setShowResult(true);
    }, 2500);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-950 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Interactive Demo UI */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto lg:mx-0 w-full max-w-md"
            >
                {/* Phone Frame */}
                <div className="relative rounded-[2.5rem] border-8 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/18]">
                    
                    {/* Status Bar */}
                    <div className="h-6 bg-black w-full flex justify-between px-6 items-center">
                         <div className="text-[10px] text-white font-mono">9:41</div>
                         <div className="flex gap-1.5">
                             <div className="w-4 h-2 bg-white rounded-sm"></div>
                             <div className="w-1 h-3 bg-white rounded-sm"></div>
                         </div>
                    </div>

                    {/* App Header */}
                    <div className="absolute top-6 left-0 w-full px-4 py-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
                        <div className="px-3 py-1 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10 text-xs text-white flex items-center gap-2">
                             <Activity className="w-3 h-3 text-green-400" /> AI Active
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative w-full h-full bg-slate-800">
                        <Image
                            src="/images/aidefectimage.webp"
                            alt="Construction Defect"
                            fill
                            className="object-cover"
                        />
                        
                        {/* Scanning Line */}
                        <AnimatePresence>
                            {isScanning && (
                                <motion.div
                                    initial={{ top: "0%" }}
                                    animate={{ top: "100%" }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                                    className="absolute left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] z-10"
                                />
                            )}
                        </AnimatePresence>

                        {/* Result Overlay */}
                        <AnimatePresence>
                            {showResult && (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="absolute bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-slate-700 p-6 rounded-t-3xl z-30"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white font-bold text-lg">Structural Crack</h3>
                                                <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">ID: #TRK-8921</span>
                                            </div>
                                            <p className="text-sm text-slate-400">Wall Segment A-12</p>
                                        </div>
                                        <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-xs font-bold uppercase">
                                            High Severity
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                                            <span className="text-xs text-slate-400 block mb-1">Recommended Fix:</span>
                                            <p className="text-sm text-slate-200 font-medium">Epoxy injection sealing required. Consult structural engineer for potential foundation settling.</p>
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            <button className="flex-1 py-3 bg-blue-600 rounded-xl text-white text-sm font-bold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                                                <Activity className="w-4 h-4" /> Start Tracking
                                            </button>
                                            <button 
                                                onClick={() => { setShowResult(false); }}
                                                className="px-4 py-3 bg-slate-800 rounded-xl text-slate-300 hover:text-white transition-colors"
                                            >
                                                Retake
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Scan Button (Initial State) */}
                        {!isScanning && !showResult && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={startScan}
                                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg shadow-blue-900/30 z-20 group"
                            >
                                <div className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center">
                                    <Scan className="w-6 h-6 text-slate-900 group-hover:text-blue-600 transition-colors" />
                                </div>
                            </motion.button>
                        )}
                        
                        {/* Detection Box (During/After Scan) */}
                        {(isScanning || showResult) && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute top-1/3 left-1/4 w-40 h-40 border-2 border-blue-500 bg-blue-500/10 rounded-lg z-10 box-border"
                            >
                                <div className="absolute -top-3 -left-1 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded">
                                    {isScanning ? "Analyzing..." : "98% Confidence"}
                                </div>
                            </motion.div>
                        )}

                    </div>
                </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                    <Zap className="w-4 h-4" />
                    <span>Instant AI Analysis</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                    See What Others <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                        Miss Completely.
                    </span>
                </h2>

                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                    Don't just take a photo. Let our AI analyze it instantly. Detect cracks, corrosion, and safety hazards, then get automated severity ratings and repair suggestions—before you even leave the site.
                </p>

                <div className="space-y-4 mb-4">
                     <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                         <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                             <AlertTriangle className="w-5 h-5"/>
                         </div>
                         <div>
                             <h4 className="text-white font-bold">Risk Identification</h4>
                             <p className="text-slate-500 text-sm">Spots potential hazards human eyes overlook.</p>
                         </div>
                     </div>
                     <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                         <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                             <CheckCircle className="w-5 h-5"/>
                         </div>
                         <div>
                             <h4 className="text-white font-bold">Actionable Insights</h4>
                             <p className="text-slate-500 text-sm">Suggested fixes based on defect type & severity.</p>
                         </div>
                     </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DefectAnalysisDemo;
