"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Database, ArrowRight } from 'lucide-react';

const OFFLINE_FEATURES = [
  {
    title: "Works Where You Work",
    icon: WifiOff,
    description: "Capture photos, notes, and forms in basements, tunnels, or remote job sites with zero connectivity."
  },
  {
    title: "Auto-Sync on Connection",
    icon: RefreshCw,
    description: "Work seamlessly offline. As soon as you hit a signal, the app automatically uploads all your data to the cloud."
  },
  {
    title: "Zero Data Loss",
    icon: Database,
    description: "Every inspection is stored locally on your device first. Never lose a report due to a dropped connection again."
  }
];

const OfflineModeSection = () => {
    return (
        <section className="relative py-20 lg:py-28 bg-slate-950 overflow-hidden">
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                 <Image
                   src="/images/construction.webp" 
                   alt="Offline Field Work"
                   fill
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60"></div>
            </div>

            <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                            <WifiOff className="w-4 h-4" />
                            <span>Offline-First Technology</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            No WiFi? <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                No Problem.
                            </span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
                            The offline field inspection app built for the real world. Capture data in basements, tunnels, and dead zones. Sync when you get signal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/request-a-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transform hover:-translate-y-1">
                                Get Offline Access
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="/app-download" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all">
                                Download App
                            </a>
                        </div>
                    </motion.div>

                    {/* Feature Cards Grid */}
                    <div className="grid gap-6">
                        {OFFLINE_FEATURES.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex items-start gap-5 hover:border-blue-500/30 transition-colors"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <feature.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OfflineModeSection;
