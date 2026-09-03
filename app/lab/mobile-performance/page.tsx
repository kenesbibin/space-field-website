"use client";

import React from 'react';
import { LabHeader, LabCard } from '@/components/lab/TestControls';
import { 
  Battery, 
  Smartphone, 
  Thermometer, 
  WifiOff, 
  Zap, 
  Activity,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

const MobilePerformancePage = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* HER0 */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold tracking-wide mb-4">
                    <Activity className="w-4 h-4 mr-2" />
                    Field Reliability Engine
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Capture All Day. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
                        Without Overheating.
                    </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Our optimized mobile core runs 40% cooler than competitors, enabling 6+ hours of continuous LiDAR scanning on a single charge.
                </p>
            </div>

            {/* VISUALS GRID */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* CHARTS: Battery Comparison */}
                <LabCard className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Battery className="w-6 h-6 text-green-600" />
                        Discharge Rate Analysis
                    </h3>
                    
                    <div className="space-y-6">
                        {/* Competitor Bar */}
                        <div>
                             <div className="flex justify-between text-sm font-bold mb-2">
                                 <span className="text-slate-500">Industry Standard App</span>
                                 <span className="text-red-500">2.5 Hours</span>
                             </div>
                             <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }} 
                                    whileInView={{ width: '40%' }} 
                                    transition={{ duration: 1 }}
                                    className="h-full bg-slate-300"
                                 ></motion.div>
                             </div>
                        </div>

                        {/* SpaceCapture Bar */}
                        <div>
                             <div className="flex justify-between text-sm font-bold mb-2">
                                 <span className="text-slate-900">SpaceCapture Mobile</span>
                                 <span className="text-green-600">6.2 Hours</span>
                             </div>
                             <div className="h-4 bg-green-100 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }} 
                                    whileInView={{ width: '85%' }} 
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-full bg-green-500"
                                 ></motion.div>
                             </div>
                             <p className="mt-2 text-xs text-green-700 font-medium flex items-center gap-1">
                                 <Zap className="w-3 h-3" />
                                 140% Longer Battery Life
                             </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <span className="block text-3xl font-black text-slate-900">42°C</span>
                            <span className="text-xs text-slate-500 uppercase font-bold">Max Temp (Competitor)</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-3xl font-black text-green-600">34°C</span>
                            <span className="text-xs text-green-700/70 uppercase font-bold">Max Temp (Ours)</span>
                        </div>
                    </div>
                </LabCard>

                {/* VISUAL: Thermal Phone */}
                <div className="relative flex justify-center py-10">
                     <div className="relative w-full max-w-64 aspect-[9/19.5] border-8 border-slate-900 rounded-[3rem] bg-slate-800 shadow-2xl overflow-hidden">
                         {/* Screen showing Heatmap */}
                         <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-green-400 opacity-60"></div>
                         
                         {/* Cool Center */}
                         <div className="absolute inset-x-0 top-20 bottom-20 bg-blue-300 opacity-40 blur-xl"></div>
                         
                         {/* UI Overlay on Phone */}
                         <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                             <div className="flex justify-between items-center text-xs font-mono opacity-80">
                                 <span>CPU: 12%</span>
                                 <span>FPS: 60</span>
                             </div>
                             <div className="text-center">
                                 <Thermometer className="w-12 h-12 mx-auto mb-2 text-blue-100" />
                                 <h4 className="text-2xl font-bold">Cool Runnings</h4>
                                 <p className="text-sm opacity-80">Thermal Throttling: 0%</p>
                             </div>
                             <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                                 <div className="w-3/4 h-full bg-white"></div>
                             </div>
                         </div>
                     </div>
                     
                     {/* Floating Badge */}
                     <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute top-1/2 -right-4 md:-right-10 hidden sm:block bg-white p-3 md:p-4 rounded-xl shadow-lg border border-slate-100 max-w-[120px] md:max-w-[150px]"
                     >
                         <h5 className="text-sm font-bold text-slate-900 mb-1">LiDAR Optimized</h5>
                         <p className="text-xs text-slate-500">Efficient point cloud meshing prevents device overheating.</p>
                     </motion.div>
                </div>

            </div>

            {/* FEATURES LIST */}
            <div className="grid md:grid-cols-3 gap-6">
                <FeatureBox 
                    icon={WifiOff} 
                    title="True Offline Mode" 
                    desc="Zero dependency on network. Data is cached locally and synced only when you say so."
                />
                <FeatureBox 
                    icon={Smartphone} 
                    title="Background Upload" 
                    desc="Continue capturing while previous scans upload silently in the background."
                />
                <FeatureBox 
                    icon={Zap} 
                    title="Low Power Mode" 
                    desc="Intelligent display dimming and sensor pausing to extend critical field time."
                />
            </div>

            {/* SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareFeature",
                        "name": "Mobile Capture Reliability",
                        "description": "High-efficiency mobile scanning app with 6+ hour battery life.",
                        "provider": { "@type": "Organization", "name": "SpaceCapture" }
                    })
                }}
            />
        </div>
    );
};

const FeatureBox = ({ icon: Icon, title, desc }: any) => (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <Icon className="w-8 h-8 text-orange-500 mb-4" />
        <h4 className="font-bold text-slate-900 text-lg mb-2">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
);

export default MobilePerformancePage;
