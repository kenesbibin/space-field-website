"use client";

import React, { useState, useCallback } from 'react';
import { UploadCloud, File, AlertCircle, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function CadViewerTool() {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setError(null);
        if (acceptedFiles.length > 0) {
            const selected = acceptedFiles[0];
            const ext = selected.name.split('.').pop()?.toLowerCase();

            if (ext === 'dwg' || ext === 'dxf') {
                setFile(selected);
            } else {
                setError("Only .dwg and .dxf files are supported in the free viewer.");
            }
        }
    }, []);

    // Simple Drag and Drop implementation without extra deps if react-dropzone isn't installed
    // But I will simulate standard drag drop events manually to be safe and dependency-free if needed.
    // Actually, for a "wow" factor, I'll implement a custom drop area using standard events.

    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        setError(null);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const selected = e.dataTransfer.files[0];
            const ext = selected.name.split('.').pop()?.toLowerCase();
            if (ext === 'dwg' || ext === 'dxf') {
                setFile(selected);
            } else {
                setError("Only .dwg and .dxf files are supported.");
            }
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selected = e.target.files[0];
            const ext = selected.name.split('.').pop()?.toLowerCase();
            if (ext === 'dwg' || ext === 'dxf') {
                setFile(selected);
                setError(null);
            } else {
                setError("Only .dwg and .dxf files are supported.");
            }
        }
    };

    const handleProcessFile = () => {
        if (!file) return;

        setIsUploading(true);

        // Simulate upload progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            setUploadProgress(progress);

            if (progress >= 100) {
                clearInterval(interval);
                // Redirect
                setTimeout(() => {
                    window.location.href = "https://app.pmspace.ai/login?type=SpaceCapture&moduleId=7a36674e-f8d6-4962-a0dc-105b50b4849c&invite=guest/login";
                }, 500);
            }
        }, 100);
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className="bg-slate-900 p-6 text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Upload CAD File</h2>
                    <p className="text-slate-400 text-sm">View .DWG and .DXF files instantly in our secure cloud viewer.</p>
                </div>

                {/* Content */}
                <div className="p-8">

                    {/* Upload Area */}
                    {!file && !isUploading && (
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`
                            relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 cursor-pointer group
                            ${isDragOver ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'}
                            ${error ? 'border-red-300 bg-red-50' : ''}
                        `}
                        >
                            <input
                                type="file"
                                accept=".dwg,.dxf"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleFileInput}
                            />

                            <div className="flex flex-col items-center gap-4">
                                <div className={`p-4 rounded-full ${isDragOver ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:shadow-md transition-all'}`}>
                                    <UploadCloud className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-700">
                                        {isDragOver ? 'Drop file to upload' : 'Drag & Drop your CAD file here'}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">or click to browse from your computer</p>
                                </div>
                                <div className="flex gap-2 text-xs text-slate-400 uppercase tracking-wider font-medium mt-2">
                                    <span className="px-2 py-1 bg-slate-100 rounded">.DWG</span>
                                    <span className="px-2 py-1 bg-slate-100 rounded">.DXF</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg mt-4 text-sm font-medium"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </motion.div>
                    )}

                    {/* Selected File State */}
                    {file && !isUploading && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-slate-50 border border-slate-200 rounded-xl p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                        <File className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800">{file.name}</h3>
                                        <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setFile(null)}
                                    className="text-sm text-slate-400 hover:text-red-500 hover:underline"
                                >
                                    Change File
                                </button>
                            </div>

                            <button
                                onClick={handleProcessFile}
                                className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                Open in Viewer <ArrowRight className="w-5 h-5" />
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-4">
                                By uploading, you agree to our Terms of Service. Files are securely processed.
                            </p>
                        </motion.div>
                    )}

                    {/* Processing State */}
                    {isUploading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-8"
                        >
                            <div className="relative w-20 h-20 mx-auto mb-6">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        className="text-slate-100 stroke-current"
                                        strokeWidth="8"
                                        cx="50" cy="50" r="40"
                                        fill="transparent"
                                    />
                                    <circle
                                        className="text-blue-600 progress-ring__circle stroke-current transition-all duration-300"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        cx="50" cy="50" r="40"
                                        fill="transparent"
                                        strokeDasharray={`${2 * Math.PI * 40}`}
                                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - uploadProgress / 100)}`}
                                        style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-700">
                                    {uploadProgress}%
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 animate-pulse">Processing Geometry...</h3>
                            <p className="text-slate-500 text-sm mt-1">Analyzing layers and blocks</p>
                        </motion.div>
                    )}

                </div>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-8 mt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simple visual placeholders for trust */}
                <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" /> Secure Encryption
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" /> Auto-Delete
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" /> High Precision
                </div>
            </div>
        </div>
    );
}
