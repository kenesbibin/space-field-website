import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import {  Cpu, WifiOff, Layers, Scan } from "lucide-react";

export const metadata: Metadata = {
  title: "Inside the Eye: Computer Vision Deep Dive | SpaceCapture",
  description: "How SpaceCapture's Edge AI works offline, distinguishes structural damage from cosmetic scratches, and processes video in real-time.",
  alternates: {
    canonical: 'https://spacecapture.ai/technology/computer-vision',
  },
};

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="pt-32 pb-20 bg-white text-center border-b border-slate-200">
             <div className="container mx-auto max-w-4xl px-4">
                 <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Under the Hood</span>
                 <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6">
                    Inside the Eye.
                 </h1>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    SpaceCapture isn't just a wrapper for GPT-4. It is a proprietary stack of Edge Computer Vision models designed for the chaos of the physical world.
                 </p>
             </div>
        </section>

        {/* Technical Diagram Section */}
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Edge-First" Architecture</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-indigo-900 text-white rounded-xl flex items-center justify-center shrink-0">
                                    <WifiOff className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Zero-Latency Offline Inference</h3>
                                    <p className="text-slate-600 mt-2">
                                        We don't rely on the cloud processing loop. We deploy <strong>quantized YOLOv8-Nano</strong> and <strong>MobileNetV3</strong> backbones directly to the edge. These models run on the device's NPU, delivering <strong>30+ FPS</strong> inference without touching the internet.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-indigo-900 text-white rounded-xl flex items-center justify-center shrink-0">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Semantic Segmentation & Reports</h3>
                                    <p className="text-slate-600 mt-2">
                                        We don't just segment pixels on the phone. This data is instantly fed into our <em>Deep Insights</em> engine, generating automated, detailed PDF reports that highlight every defect with heatmaps—ready for the client before you even leave the site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Simplified Architecture Diagram */}
                    <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-20"></div>
                        
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 border-2 border-slate-700 rounded-lg flex items-center justify-center text-xs font-mono text-slate-400">Input Frame</div>
                                <div className="h-0.5 w-8 bg-slate-700"></div>
                                <div className="flex-1 border border-indigo-500 bg-indigo-500/10 p-4 rounded-lg">
                                    <div className="text-sm font-bold text-indigo-300 mb-2">On-Device Model</div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="h-2 bg-indigo-500/40 rounded"></div>
                                        <div className="h-2 bg-indigo-500/40 rounded"></div>
                                        <div className="h-2 bg-indigo-500/40 rounded"></div>
                                    </div>
                                </div>
                            </div>
                             <div className="flex justify-center h-8 border-l-2 border-slate-700 border-dashed mx-8"></div>
                             <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-green-900/20 border border-green-500 rounded-lg flex items-center justify-center text-green-500">
                                    <Scan className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-mono text-sm text-green-400">{`{ "defect": "crack", "severity": 0.89 }`}</p>
                                    <p className="text-xs text-slate-500 mt-1">JSON Output (15ms latency)</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* new: Model Performance Metrics */}
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Model Performance Metrics</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Benchmarked on standard iPad Pro (M4) and Samsung Galaxy Tab S9 hardware.
                        We prioritize latency over raw parameter count.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center">
                        <div className="text-4xl font-extrabold text-blue-400 mb-2">18ms</div>
                        <div className="text-sm font-mono text-slate-400 uppercase tracking-widest">Inference Latency</div>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center">
                        <div className="text-4xl font-extrabold text-emerald-400 mb-2">99.2%</div>
                        <div className="text-sm font-mono text-slate-400 uppercase tracking-widest">mAP @ 0.50IoU</div>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center">
                        <div className="text-4xl font-extrabold text-purple-400 mb-2">INT8</div>
                        <div className="text-sm font-mono text-slate-400 uppercase tracking-widest">Quantization</div>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center">
                        <div className="text-4xl font-extrabold text-pink-400 mb-2">7MB</div>
                        <div className="text-sm font-mono text-slate-400 uppercase tracking-widest">Model Size</div>
                    </div>
                </div>
            </div>
        </section>
        
        <CallToAction />
      </main>
    </div>
  );
};

export default TechnologyPage;
