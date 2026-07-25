"use client";

import React, { useState, useEffect } from 'react';
import { LabHeader, LabCard } from '@/components/lab/TestControls';
import { 
  Wifi, 
  WifiOff, 
  RefreshCw, 
  CloudLightning, 
  Database,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OfflineSyncPage = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [pendingItems, setPendingItems] = useState<number[]>([]);
    const [syncProgress, setSyncProgress] = useState(100);

    // Simulate item accumulation when offline
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isOnline) {
            interval = setInterval(() => {
                if (pendingItems.length < 15) {
                    setPendingItems(prev => [...prev, Date.now()]);
                }
            }, 1200);
        } else {
            // Rapid sync when back online
            if (pendingItems.length > 0) {
                setSyncProgress(0);
                let p = 0;
                interval = setInterval(() => {
                    p += 5;
                    setSyncProgress(p);
                    if (p >= 100) {
                        setPendingItems([]);
                        clearInterval(interval);
                    }
                }, 50);
            }
        }
        return () => clearInterval(interval);
    }, [isOnline, pendingItems.length]);

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* HERO */}
            <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wide mb-4">
                    <CloudLightning className="w-4 h-4 mr-2" />
                    Delta-Sync Protocol
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    No Signal? <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                        No Problem.
                    </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Capture gigabytes of data in the basement or tunnel. Our "Delta-Sync" engine intelligently queues locally and bursts encrypted data the moment you reconnect.
                </p>
            </div>

            {/* DEMO */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Visualizer */}
                <LabCard className="p-8 bg-slate-900 text-white min-h-[400px]">
                    
                    {/* Status Header */}
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-700">
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase">Connection Status</h3>
                            <div className={`flex items-center gap-2 text-xl font-bold ${isOnline ? 'text-green-400' : 'text-red-400'}`}>
                                {isOnline ? <Wifi className="w-6 h-6" /> : <WifiOff className="w-6 h-6" />}
                                {isOnline ? 'ONLINE (5G)' : 'OFFLINE MODE'}
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOnline(!isOnline)}
                            className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
                                isOnline 
                                ? 'bg-red-500 hover:bg-red-600 text-white' 
                                : 'bg-green-500 hover:bg-green-600 text-white'
                            }`}
                        >
                            {isOnline ? 'Simulate Outage' : 'Reconnect'}
                        </button>
                    </div>

                    {/* Sync Queue Visual */}
                    <div className="grid grid-cols-5 gap-3 mb-8">
                        {pendingItems.map((item, idx) => (
                            <motion.div 
                                key={item}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600 relative overflow-hidden"
                            >
                                <Database className="w-5 h-5 text-slate-400" />
                                {idx === pendingItems.length - 1 && !isOnline && (
                                    <div className="absolute inset-0 bg-yellow-400/20 animate-pulse"></div>
                                )}
                            </motion.div>
                        ))}
                        {/* Placeholders */}
                        {Array.from({ length: Math.max(0, 15 - pendingItems.length) }).map((_, i) => (
                            <div key={`ph-${i}`} className="aspect-square bg-slate-800/50 rounded-lg border border-slate-800/50 border-dashed"></div>
                        ))}
                    </div>

                    {/* Sync Progress Bar */}
                    <div>
                        <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                             <span>Cloud Synchronization</span>
                             <span>{pendingItems.length > 0 ? 'Paused (Waiting for Net)' : isOnline ? 'All Systems Synced' : 'Queued'}</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                                className={`h-full ${isOnline ? 'bg-blue-500' : 'bg-yellow-500'}`}
                                animate={{ width: isOnline && pendingItems.length === 0 ? '100%' : pendingItems.length > 0 ? '0%' : `${syncProgress}%` }}
                                transition={{ type: 'spring', stiffness: 50 }}
                            ></motion.div>
                        </div>
                    </div>

                </LabCard>

                {/* Features */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Conflict-Free Resolution</h3>
                    <p className="text-slate-600">
                        Multi-user edits are handled with Operational Transformation (OT) logic, ensuring that field notes made offline never overwrite office updates.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-start">
                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                <Check className="w-3 h-3" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Priority Queuing</h4>
                                <p className="text-sm text-slate-500">Text & Coordinates upload first; heavy imagery background uploads last.</p>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                <Check className="w-3 h-3" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">E2E Encryption</h4>
                                <p className="text-sm text-slate-500">Local cache is AES-256 encrypted on the device.</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

             {/* SCHEMA */}
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareFeature",
                        "name": "Offline Delta-Sync",
                        "description": "Robust offline data collection and synchronization for construction sites.",
                        "provider": { "@type": "Organization", "name": "SpaceCapture" }
                    })
                }}
            />
        </div>
    );
};

export default OfflineSyncPage;
