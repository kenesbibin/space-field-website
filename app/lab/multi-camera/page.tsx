"use client";

import React from 'react';
import { LabHeader, LabCard } from '@/components/lab/TestControls';
import { 
  Camera, 
  Smartphone, 
  Aperture, 
  Plane,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const MultiCameraPage = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* HERO */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-bold tracking-wide mb-4">
                    <Camera className="w-4 h-4 mr-2" />
                    Universal Hardware SDK
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Bring Your Own Device. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">
                        We Handle the Rest.
                    </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    From enterprise laser scanners to the phone in your pocket. Our platform normalizes data from over 50+ sensors into a single, unified Digital Twin.
                </p>
            </div>

            {/* HARDWARE GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <CameraCard 
                    icon={Smartphone} 
                    title="Mobile LiDAR" 
                    models={['iPhone 14/15 Pro', 'iPad Pro (M1/M2)']}
                    color="bg-blue-500"
                />
                <CameraCard 
                    icon={Aperture} 
                    title="360° Cameras" 
                    models={['Ricoh Theta Z1', 'Insta360 X3 / One RS', 'Matterport Pro2']}
                    color="bg-purple-500"
                />
                <CameraCard 
                    icon={Camera} 
                    title="Laser Scanners" 
                    models={['Leica BLK360', 'Trimble X7', 'Faro Focus']}
                    color="bg-red-500"
                />
                 <CameraCard 
                    icon={Plane} 
                    title="Drone Photogrammetry" 
                    models={['DJI Mavic 3E', 'Skydio 2+', 'Autel Evo II']}
                    color="bg-orange-500"
                />
            </div>

            {/* INTEGRATION DEMO */}
            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Unified Ingestion Pipeline</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Stop juggling 5 different vendor apps. Our **Space Capture SDK** connects directly to hardware APIs, allowing you to control scanning parameters, battery status, and file transfer from one dashboard.
                        </p>
                        <button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">
                            View Supported Devices List <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    
                    {/* Visual Code Snippet */}
                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs shadow-2xl">
                        <div className="text-green-400 mb-2">{`// Initialize Universal Scanner`}</div>
                        <div className="text-purple-400">const</div> <div className="text-white inline">scanner = </div> <div className="text-yellow-400 inline">new</div> <div className="text-blue-400 inline">SpaceCaptureSDK</div><div className="text-white inline">();</div>
                        <br/>
                        <div className="text-purple-400 mt-2">await</div> <div className="text-blue-400 inline">scanner</div><div className="text-white inline">.</div><div className="text-yellow-400 inline">connect</div><div className="text-white inline">({`{`}</div>
                        <div className="pl-4 text-cyan-300">type: <span className="text-green-300">'insta360'</span>,</div>
                        <div className="pl-4 text-cyan-300">mode: <span className="text-green-300">'hdr_5k'</span></div>
                        <div className="text-white inline">{`}`});</div>
                        <br/>
                        <div className="text-green-400 mt-4">{`> Device Connected: Insta360 X3 (Battery: 85%)`}</div>
                        <div className="text-green-400">{`> Ready to Capture.`}</div>
                        <div className="w-2 h-4 bg-white animate-pulse inline-block mt-1"></div>
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
                        "name": "Multi-Camera Support",
                        "description": "Compatibility with major 3D capture hardware brands.",
                        "provider": { "@type": "Organization", "name": "Space Capture" }
                    })
                }}
            />
        </div>
    );
};

const CameraCard = ({ icon: Icon, title, models, color }: any) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
            <Icon className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>
        <ul className="space-y-3">
            {models.map((m: string) => (
                <li key={m} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {m}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default MultiCameraPage;
