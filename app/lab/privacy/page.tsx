"use client";

import React, { useState } from 'react';
import { LabHeader, LabCard } from '@/components/lab/TestControls';
import { 
  Shield, 
  EyeOff, 
  Lock, 
  FileCheck,
  Globe,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
    const [sliderPos, setSliderPos] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPos(Number(e.target.value));
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* HERO */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide mb-4">
                    <Shield className="w-4 h-4 mr-2" />
                    Enterprise-Grade Security
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Privacy-First <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                        Reality Capture.
                    </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Automatically detect and blur faces, license plates, and sensitive documents. Compliant with GDPR, CCPA, and SOC2 Type II standards.
                </p>
            </div>

            {/* DEMO: Before/After Slider */}
            <div className="max-w-4xl mx-auto">
                <LabCard className="relative aspect-[16/9] bg-slate-100 overflow-hidden shadow-2xl border-4 border-white rounded-2xl group cursor-ew-resize">
                    
                    {/* Layer 1: Blurred (After) - Base */}
                    <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
                        {/* Mock Image Text/Structure */}
                        <div className="w-full h-full relative">
                             <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-slate-800 rounded-full blur-xl opacity-80"></div> 
                             <div className="absolute top-1/2 left-2/3 w-20 h-10 bg-slate-800 rounded blur-lg opacity-80"></div>
                             {/* Text */}
                             <div className="absolute bottom-10 left-10 text-white opacity-20 text-6xl font-black">
                                 SECURED VIEW
                             </div>
                        </div>
                        <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[2px]"></div>
                    </div>

                    {/* Layer 2: Clear (Before) - Clipped */}
                    <div 
                        className="absolute inset-0 bg-slate-200 overflow-hidden transition-all duration-75 ease-linear"
                        style={{ width: `${sliderPos}%` }}
                    >
                        <div className="absolute inset-0 w-[100vw] max-w-4xl h-full flex items-center justify-center bg-white">
                             {/* Recreating the scene unblurred */}
                             <div className="w-full h-full relative p-10 flex items-center justify-around bg-[url('/images/construction-site-1.jpg')] bg-cover">
                                  {/* Just mock elements if image fails */}
                                  <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                      <span className="text-4xl">😊</span>
                                  </div>
                                  <div className="w-40 h-16 bg-white border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-xl shadow-lg">
                                      ABC-1234
                                  </div>
                             </div>
                             <div className="absolute bottom-10 left-10 text-slate-900 opacity-10 text-6xl font-black">
                                 RAW CAPTURE
                             </div>
                        </div>
                        
                        {/* Label Badge */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold shadow-sm">
                            ORIGINAL
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div 
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <EyeOff className="w-4 h-4 text-slate-800" />
                        </div>
                    </div>

                    {/* Hidden Range Input for Logic */}
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sliderPos}
                        onChange={handleSliderChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />

                    {/* "Blurred" Badge on Right */}
                    <div className="absolute bottom-4 right-4 bg-emerald-500/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white shadow-sm">
                        AI REDACTED
                    </div>
                </LabCard>
                <p className="text-center text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
                    <EyeOff className="w-4 h-4" />
                    Drag slider to compare raw vs. redacted footage.
                </p>
            </div>

            {/* COMPLIANCE BADGES */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto py-10">
                <BadgeCard 
                    icon={FileCheck} 
                    title="GDPR Compliant" 
                    desc="We are fully compliant with EU General Data Protection Regulation requirements for data handling."
                />
                <BadgeCard 
                    icon={Lock} 
                    title="SOC2 Type II" 
                    desc="Audited security controls ensuring your data is managed with the highest industry standards." // Fixed typo: 'standrads'
                />
                <BadgeCard 
                    icon={Globe} 
                    title="CCPA Ready" 
                    desc="Tools to manage California Consumer Privacy Act requests including 'Right to be Forgotten'." // Fixed typo: 'Carifornia'
                />
            </div>

            {/* SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareFeature",
                        "name": "AI Privacy Scrubbing",
                        "description": "Automated face and license plate blurring for construction imagery.",
                        "provider": { "@type": "Organization", "name": "Space Capture" }
                    })
                }}
            />
        </div>
    );
};

const BadgeCard = ({ icon: Icon, title, desc }: any) => (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all duration-300">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
);

export default PrivacyPage;
