"use client";

import React, { useState } from 'react';
import { LabHeader, LabCard } from '@/components/lab/TestControls';
import { 
  Mic, 
  MessageSquare, 
  MapPin, 
  FileText,
  User,
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VoiceTagPage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState<string | null>(null);

    const toggleRecording = () => {
        if (!isRecording) {
            setIsRecording(true);
            setTranscription(null);
            // Simulate recording stop
            setTimeout(() => {
                setIsRecording(false);
                setTranscription("Issue identified: Hairline fracture in the north bearing wall column C4. Recommend structural review immediately.");
            }, 3000);
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* HERO */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-bold tracking-wide mb-4">
                    <Mic className="w-4 h-4 mr-2" />
                    Hands-Free Site Reporting
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Speak Your Notes. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                        Pinned to Reality.
                    </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Walk the site, record your observations, and let our AI transcribe and pin them to exact 3D coordinates. No typing required.
                </p>
            </div>

            {/* DEMO: Interactive Recording */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Visualizer */}
                <LabCard className="relative h-[400px] flex flex-col items-center justify-center p-0 overflow-hidden bg-slate-50 border-cyan-100">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0891b2 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    
                    {/* Recording Button */}
                    <div className="relative z-10 text-center">
                         <motion.button 
                            onClick={toggleRecording}
                            animate={isRecording ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all ${
                                isRecording ? 'bg-red-500 text-white shadow-red-200' : 'bg-white text-cyan-600 hover:text-cyan-700'
                            }`}
                         >
                             <Mic className="w-10 h-10" />
                         </motion.button>
                         <p className="mt-4 font-bold text-slate-400 uppercase text-xs tracking-widest">
                             {isRecording ? 'Listening...' : 'Tap to Record'}
                         </p>
                    </div>

                    {/* Waveform Animation */}
                    <AnimatePresence>
                        {isRecording && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 60 }}
                                exit={{ opacity: 0, height: 0 }}
                                className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-1"
                            >
                                {[1,2,3,4,5,6,7,8,9,10].map(i => (
                                    <motion.div 
                                        key={i}
                                        className="w-1.5 bg-cyan-500 rounded-full"
                                        animate={{ height: [10, 40 + Math.random() * 20, 10] }}
                                        transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05 }}
                                    ></motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Result Card */}
                    <AnimatePresence>
                        {!isRecording && transcription && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-cyan-500"
                            >
                                <div className="flex items-start gap-3">
                                    <MessageSquare className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">AI Transcribed • 99% Confidence</p>
                                        <p className="text-slate-800 font-medium text-sm">"{transcription}"</p>
                                        <div className="mt-3 flex gap-2">
                                            <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" /> Zone B, Fl 2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </LabCard>

                {/* Features List */}
                <div className="space-y-8">
                     <h3 className="text-2xl font-bold text-slate-900">Multilingual Field Assistant</h3>
                     <p className="text-slate-600">
                         Don't stop to type. Our engine processes natural language in noisy environments, automatically tagging technical terms (like "bearing wall" or "HVAC") with links to spec sheets.
                     </p>
                     
                     <div className="grid gap-4">
                         <FeatureRow icon={Headphones} title="Noise Cancellation" desc="Isolates voice from jackhammers and drills." />
                         <FeatureRow icon={FileText} title="Context Awareness" desc="Auto-links comments to BIM element IDs." />
                         <FeatureRow icon={User} title="Speaker ID" desc="Distinguishes between Foreman and Engineer." />
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
                        "name": "Voice-to-Tag Reality Capture",
                        "description": "AI-powered voice transcription for 3D pinning on construction sites.",
                        "provider": { "@type": "Organization", "name": "SpaceCapture" }
                    })
                }}
            />
        </div>
    );
};

const FeatureRow = ({ icon: Icon, title, desc }: any) => (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
        <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <h4 className="font-bold text-slate-900">{title}</h4>
            <p className="text-sm text-slate-500">{desc}</p>
        </div>
    </div>
);

export default VoiceTagPage;
