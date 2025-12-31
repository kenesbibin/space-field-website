"use client";

import React, { useState } from 'react';
import { LabHeader, LabCard, LabButton } from '@/components/lab/TestControls';
import { 
  Layers, 
  Database, 
  Zap, 
  Globe, 
  Cpu, 
  Server,
  ArrowRight,
  CheckCircle2,
  Download
} from 'lucide-react';
import { motion } from 'framer-motion';

const PointCloudPage = () => {
    const [bandwidthSaved, setBandwidthSaved] = useState(0);

    // Interactive Calculator
    const handleCalculate = () => {
        // Simple animation for the "saved" number
        let val = 0;
        const interval = setInterval(() => {
            val += 2;
            if (val >= 94) {
                clearInterval(interval);
                setBandwidthSaved(94);
            } else {
                setBandwidthSaved(val);
            }
        }, 20);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* Header / Hero */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wide mb-4">
                    <Zap className="w-4 h-4 mr-2" />
                    Potree-based Streaming Engine
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Visualize Massive Datasets <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        Zero Latency.
                    </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Our proprietary <strong>Level of Detail (LOD)</strong> algorithm slices multi-gigabyte Point Clouds into octree chunks, allowing you to stream billions of points in the browser on any device.
                </p>
            </div>

            {/* VISUAL DIAGRAM: How Octree Works */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                     <h3 className="text-2xl font-bold text-slate-900">How "Smart Streaming" Works</h3>
                     <p className="text-slate-600">
                        Traditional viewers try to load the entire 50GB file at once, crashing your browser.
                        <br/><br/>
                        **Our Solution:** We index the point cloud into an **Octree Structure**. When you zoom out, we serve low-res "proxy" blocks. As you zoom in, we dynamically stream high-res detail only for the area you're looking at.
                     </p>
                     
                     <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                         <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                             <Database className="w-5 h-5 text-indigo-600" />
                             Bandwidth Efficiency Simulator
                         </h4>
                         <div className="space-y-4">
                             <div className="flex justify-between text-sm">
                                 <span className="text-slate-500">Traditional Load (Raw .LAS)</span>
                                 <span className="font-mono font-bold text-red-600">4,200 MB</span>
                             </div>
                             <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                 <div className="h-full bg-red-400 w-full"></div>
                             </div>

                             <div className="flex justify-between text-sm">
                                 <span className="text-slate-500">Space Capture LOD Stream</span>
                                 <span className="font-mono font-bold text-green-600">240 MB</span>
                             </div>
                             <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                 <div className="h-full bg-green-500 w-[6%]"></div>
                             </div>

                             <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                 <button 
                                    onClick={handleCalculate}
                                    className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors"
                                 >
                                     Run Analysis
                                 </button>
                                 <div className="text-right">
                                     <span className="block text-xs uppercase text-slate-400 font-bold">Bandwidth Saved</span>
                                     <span className="text-3xl font-extrabold text-indigo-600">{bandwidthSaved}%</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>

                {/* CSS OCTREE ANIMATION */}
                <div className="order-1 lg:order-2 flex justify-center py-10">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Base Box */}
                        <motion.div 
                            className="absolute inset-0 border-4 border-indigo-200 bg-indigo-50/50 rounded-lg flex items-center justify-center"
                            animate={{ rotateY: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        >
                             <div className="grid grid-cols-2 gap-1 w-3/4 h-3/4 opacity-80">
                                 {/* 4 Chunks */}
                                 {[1,2,3,4].map(i => (
                                     <motion.div 
                                        key={i}
                                        className="bg-indigo-500 rounded-md flex items-center justify-center text-white font-bold text-xs"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: i * 0.2, duration: 0.5 }}
                                     >
                                         LOD 1
                                     </motion.div>
                                 ))}
                             </div>
                        </motion.div>
                        
                        {/* Floating Labels */}
                        <div className="absolute -top-4 -right-4 bg-white px-3 py-1 rounded shadow-lg border border-slate-100 text-xs font-bold text-slate-600 animate-bounce">
                            Smart Octree Split
                        </div>
                    </div>
                </div>
            </div>

            {/* TECH SPECS GRID */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Engine Specifications</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SpecCard 
                        icon={Layers} 
                        label="Max Points Rendered" 
                        value="20 Billion+" 
                        desc="Unlimited theoretical max due to dynamic unloading." 
                    />
                    <SpecCard 
                        icon={Globe} 
                        label="Supported Formats" 
                        value="LAS, LAZ, E57" 
                        desc="Native support for industry standard survey files." 
                    />
                    <SpecCard 
                        icon={Cpu} 
                        label="LOD Levels" 
                        value="12 Depth" 
                        desc="Deep hierarchical slicing for millimeter precision." 
                    />
                    <SpecCard 
                        icon={Server} 
                        label="Compression" 
                        value="Brotli / Gzip" 
                        desc="High-density binary compression for fast transfer." 
                    />
                </div>
            </div>

            {/* INTEGRATION SECTION */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready for Enterprise Integration?</h3>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                    Our viewer is available as a standalone React Component NPM package for seamless integration into your existing dashboard.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Whitepaper
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-slate-700 hover:bg-slate-800 text-white rounded-lg font-bold transition-all">
                        View API Docs
                    </button>
                </div>
            </div>

            {/* FAQ / JSON-LD Data for SEO */}
            <div className="max-w-3xl mx-auto space-y-6 pt-10 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
                <FaqItem 
                    q="Do I need a dedicated GPU to view these files?" 
                    a="No. Our LOD technology offloads complexity to the server preprocessing stage, delivering lightweight chunks that run smoothly on standard integrated graphics and even mobile devices." 
                />
                <FaqItem 
                    q="Is my data secure during streaming?" 
                    a="Yes. All point cloud data is encrypted at rest (AES-256) and in transit (TLS 1.3). We also support ephemeral streaming links." 
                />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Space Capture Point Cloud Engine",
                        "applicationCategory": "Visualization",
                        "operatingSystem": "Web Browser",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "featureList": "LOD Streaming, Octree Indexing, 20 Billion Point Support"
                    })
                }}
            />
        </div>
    );
};

const SpecCard = ({ icon: Icon, label, value, desc }: any) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
            <Icon className="w-6 h-6" />
        </div>
        <h4 className="text-3xl font-extrabold text-slate-900 mb-1">{value}</h4>
        <p className="font-bold text-slate-700 mb-2">{label}</p>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

const FaqItem = ({ q, a }: { q: string, a: string }) => (
    <div className='space-y-2'>
        <h4 className="font-bold text-slate-900 flex items-start gap-2">
            <ArrowRight className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
            {q}
        </h4>
        <p className="text-slate-600 text-sm pl-6">{a}</p>
    </div>
);

export default PointCloudPage;
