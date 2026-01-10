"use client";

import React, { useState, useEffect } from 'react';
import { LabHeader, LabCard, LabButton, StatusBadge } from '@/components/lab/TestControls';
import { 
  BarChart4, 
  Timer, 
  HardDrive, 
  Box, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCw,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Datasets
const DATASETS = [
    { id: 'drone-4k', name: 'Drone Survey - 4K High Res', images: 450, size: '2.4 GB', type: 'Aerial' },
    { id: 'handheld-dslr', name: 'Interior - Handheld DSLR', images: 120, size: '850 MB', type: 'Terrestrial' },
    { id: 'iphone-lidar', name: 'iPhone 15 Pro - LiDAR + RGB', images: 85, size: '420 MB', type: 'Mobile' },
    { id: '360-cam', name: 'Site Walk - Insta360 X3', images: 15, size: '1.1 GB', type: '360 Equirect' },
];

const PhotogrammetryPage = () => {
    const [selectedDataset, setSelectedDataset] = useState(DATASETS[0].id);
    const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    
    // Metrics
    const [metrics, setMetrics] = useState({
        uploadSpeed: 0,
        sfmPoints: 0,
        meshFaces: 0,
        textureRes: 0,
        timeElapsed: 0
    });

    const addLog = (msg: string) => setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);

    const runStressTest = async () => {
        setTestStatus('running');
        setProgress(0);
        setLogs([]);
        setMetrics({ uploadSpeed: 0, sfmPoints: 0, meshFaces: 0, textureRes: 0, timeElapsed: 0 });
        
        const dataset = DATASETS.find(d => d.id === selectedDataset)!;
        addLog(`Initializing test for dataset: ${dataset.name}`);
        addLog(`Image count: ${dataset.images} | Size: ${dataset.size}`);

        // Simulation Loop
        let currentProgress = 0;
        const totalDuration = 5000 + Math.random() * 3000; // 5-8 seconds simulated
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            currentProgress = Math.min(100, (elapsed / totalDuration) * 100);
            
            setProgress(currentProgress);
            setMetrics(prev => ({
                ...prev,
                timeElapsed: (elapsed / 1000),
                uploadSpeed: currentProgress < 30 ? Math.random() * 50 + 20 : 0, // Mock upload speed
                sfmPoints: currentProgress > 40 ? Math.floor(prev.sfmPoints + Math.random() * 5000) : 0,
                meshFaces: currentProgress > 70 ? Math.floor(prev.meshFaces + Math.random() * 2000) : 0,
            }));

            // Stage Logs
            if (currentProgress > 10 && currentProgress < 12) addLog("Uploading images to GPU cluster...");
            if (currentProgress > 30 && currentProgress < 32) addLog("Running Structure-from-Motion (SfM)...");
            if (currentProgress > 60 && currentProgress < 62) addLog("Generating Dense Point Cloud...");
            if (currentProgress > 80 && currentProgress < 82) addLog("Meshing and Texturing...");

            if (currentProgress >= 100) {
                clearInterval(interval);
                setTestStatus('success');
                addLog("Reconstruction successful. Model ready.");
                
                // Finalize metrics
                setMetrics(prev => ({
                    ...prev,
                    uploadSpeed: 45.2,
                    sfmPoints: 1250400,
                    meshFaces: 850300,
                    textureRes: 8192
                }));
            }
        }, 100);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <LabHeader 
                title="Photogrammetry Engine Stress-Test" 
                description="Our Enterprise Digital Twin Software converts Construction Site Photo Documentation into 3D models with sub-centimeter accuracy."
                actions={
                    <LabButton onClick={runStressTest} disabled={testStatus === 'running'}>
                        {testStatus === 'running' ? 'Processing...' : 'Start Stress Test'}
                    </LabButton>
                }
            />

            <div className="grid lg:grid-cols-3 gap-8">
                
                {/* LEFT COLUMN: Controls */}
                <div className="space-y-6">
                    <LabCard className="p-5">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <HardDrive className="w-5 h-5 text-indigo-500" />
                            Select Dataset
                        </h3>
                        <div className="space-y-3">
                            {DATASETS.map((ds) => (
                                <button
                                    key={ds.id}
                                    onClick={() => setSelectedDataset(ds.id)}
                                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                                        selectedDataset === ds.id 
                                        ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500' 
                                        : 'border-slate-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-sm text-slate-900">{ds.name}</span>
                                        {selectedDataset === ds.id && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><ImageIcon className="w-3 h-3"/> {ds.images} imgs</span>
                                        <span>•</span>
                                        <span>{ds.size}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </LabCard>

                    <LabCard className="p-5">
                         <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                             <Settings className="w-5 h-5 text-slate-500" />
                             config params
                         </h3>
                         <div className="space-y-4 text-sm">
                             <div className="flex justify-between items-center">
                                 <span className="text-slate-600">Quality Preset</span>
                                 <span className="font-mono bg-slate-100 px-2 py-1 rounded">ULTRA_HIGH</span>
                             </div>
                             <div className="flex justify-between items-center">
                                 <span className="text-slate-600">Feature Extraction</span>
                                 <span className="font-mono bg-slate-100 px-2 py-1 rounded">SIFT_GPU</span>
                             </div>
                             <div className="flex justify-between items-center">
                                 <span className="text-slate-600">Depth Filtering</span>
                                 <div className="flex items-center gap-2">
                                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                     <span className="text-slate-900 font-medium">Enabled</span>
                                 </div>
                             </div>
                         </div>
                    </LabCard>
                </div>

                {/* MIDDLE & RIGHT: Visualization & Metrics */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* Status & Progress */}
                    <LabCard className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900">Live Engine Status</h2>
                                <p className="text-sm text-slate-500">Monitoring GPU cluster activity</p>
                            </div>
                            <StatusBadge status={testStatus} />
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                                <span>Reconstruction Progress</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                ></motion.div>
                            </div>
                            <div className="mt-2 flex justify-between text-xs text-slate-400 font-mono">
                                <span>STAGE: {
                                    progress < 10 ? 'INIT' :
                                    progress < 30 ? 'UPLOAD' :
                                    progress < 60 ? 'SPARSE_RECON' :
                                    progress < 90 ? 'DENSE_RECON' : 'FINALIZE'
                                }</span>
                                <span>ETA: {testStatus === 'running' ? '12s' : '-'}</span>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid sm:grid-cols-4 gap-4">
                            <MetricBox 
                                label="Time Elapsed" 
                                value={`${metrics.timeElapsed.toFixed(1)}s`} 
                                icon={Timer} 
                            />
                            <MetricBox 
                                label="Upload Speed" 
                                value={`${metrics.uploadSpeed.toFixed(1)} MB/s`} 
                                icon={Activity} 
                                color="text-blue-600"
                            />
                            <MetricBox 
                                label="Sparse Points" 
                                value={metrics.sfmPoints.toLocaleString()} 
                                icon={Box} 
                                color="text-indigo-600"
                            />
                            <MetricBox 
                                label="Mesh Faces" 
                                value={metrics.meshFaces.toLocaleString()} 
                                icon={Box} 
                                color="text-purple-600"
                            />
                        </div>
                    </LabCard>

                    {/* Console Output */}
                    <LabCard className="bg-slate-900 border-slate-800 text-slate-300 min-h-[300px] flex flex-col">
                        <div className="p-3 border-b border-slate-700 bg-slate-950/50 flex items-center gap-2">
                             <div className="flex gap-1.5">
                                 <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                             </div>
                             <span className="ml-2 text-xs font-mono opacity-50">processing_node_v1.log</span>
                        </div>
                        <div className="p-4 font-mono text-xs space-y-1 overflow-y-auto flex-1 max-h-[300px]">
                            {logs.length === 0 ? (
                                <span className="opacity-30 italic">Ready to start simulation...</span>
                            ) : (
                                logs.map((log, i) => (
                                    <div key={i} className="border-l-2 border-slate-700 pl-3 py-0.5 animate-in fade-in slide-in-from-left-2">
                                        {log}
                                    </div>
                                ))
                            )}
                        </div>
                    </LabCard>

                </div>
            </div>
        </div>
    );
};

// Helper for metrics
const MetricBox = ({ label, value, icon: Icon, color = 'text-slate-900' }: any) => (
    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
        <div className="flex items-center gap-2 mb-1">
            <Icon className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-bold text-slate-500 uppercase">{label}</span>
        </div>
        <p className={`text-lg font-bold ${color} font-mono tracking-tight`}>{value}</p>
    </div>
);

// Import Activity icon separately since it was used but not imported in the metrics helper context
import { Activity, Settings } from 'lucide-react';

export default PhotogrammetryPage;
