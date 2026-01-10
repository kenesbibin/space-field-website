"use client";

import React, { useState, useRef, useEffect } from 'react';
import { LabHeader, LabCard, LabButton } from '@/components/lab/TestControls';
import { 
  Scan, 
  Tag, 
  Trash2, 
  Plus, 
  Save, 
  AlertCircle,
  MousePointer2,
  Image as ImageIcon,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type BoundingBox = {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
    confidence: number;
    color: string;
};

const MOCK_IMAGES = [
    { id: 1, src: '/images/construction-site-1.jpg', name: 'Site Zone A - Raw' },
    { id: 2, src: '/images/construction-site-2.jpg', name: 'Interior Drywall Phase' },
];

const DEFAULT_BOXES: BoundingBox[] = [
    { id: '1', x: 20, y: 30, width: 15, height: 25, label: 'Hazard', confidence: 0.92, color: 'red' },
    { id: '2', x: 50, y: 40, width: 30, height: 40, label: 'Drywall', confidence: 0.88, color: 'blue' },
];

const AiTuningPage = () => {
    const [boxes, setBoxes] = useState<BoundingBox[]>(DEFAULT_BOXES);
    const [selectedBoxId, setSelectedBoxId] = useState<string | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef<HTMLDivElement>(null);

    // Mock Selection
    const handleBoxClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setSelectedBoxId(id);
    };

    const handleDeleteBox = (id: string) => {
        setBoxes(prev => prev.filter(b => b.id !== id));
        if (selectedBoxId === id) setSelectedBoxId(null);
    };

    const handleSave = () => {
        // Mock save
        const btn = document.getElementById('save-btn');
        if(btn) {
            btn.innerText = "Saved!";
            setTimeout(() => { btn.innerText = "Save Corrections"; }, 2000);
        }
    };

    const colors = {
        red: 'border-red-500 bg-red-500/20 text-red-100',
        blue: 'border-blue-500 bg-blue-500/20 text-blue-100',
        orange: 'border-orange-500 bg-orange-500/20 text-orange-100',
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <LabHeader 
                title="AI Object Recognition Tuning" 
                description="Fine-tune the detection model by correcting bounding boxes and labels."
                actions={
                    <LabButton id="save-btn" onClick={handleSave} className="flex items-center gap-2">
                        <Save className="w-4 h-4" /> Save Corrections
                    </LabButton>
                }
            />

            <div className="grid lg:grid-cols-3 gap-8 h-[calc(100vh-200px)]">
                
                {/* CANVAS EDITOR */}
                <div className="lg:col-span-2 flex flex-col">
                    <LabCard className="flex-1 bg-slate-900 relative overflow-hidden flex items-center justify-center border-slate-700">
                        {/* Mock Image Background */}
                        <div 
                            ref={imageContainerRef}
                            className="relative w-full h-full max-h-[600px] bg-slate-800"
                            style={{ 
                                backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', 
                                backgroundSize: '20px 20px' 
                            }}
                            onClick={() => setSelectedBoxId(null)}
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-slate-600 pointer-events-none">
                                <span className="flex items-center gap-2 text-sm"><ImageIcon className="w-4 h-4"/> Load an image to start</span>
                            </div>

                            {/* Render Boxes */}
                            {boxes.map(box => (
                                <motion.div
                                    key={box.id}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className={`absolute border-2 cursor-pointer transition-colors ${
                                        selectedBoxId === box.id ? 'ring-2 ring-white z-20' : 'z-10'
                                    } ${box.color === 'red' ? 'border-red-500 bg-red-500/10' : 'border-blue-500 bg-blue-500/10'}`}
                                    style={{
                                        left: `${box.x}%`,
                                        top: `${box.y}%`,
                                        width: `${box.width}%`,
                                        height: `${box.height}%`,
                                    }}
                                    onClick={(e) => handleBoxClick(e, box.id)}
                                >
                                    <div className={`absolute -top-6 left-0 px-1.5 py-0.5 text-[10px] font-bold uppercase rounded flex items-center gap-1 text-white ${
                                        box.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
                                    }`}>
                                        {box.label} <span className="opacity-75">{Math.round(box.confidence * 100)}%</span>
                                    </div>
                                    
                                    {/* Resizer Handles (Visual only for mock) */}
                                    {selectedBoxId === box.id && (
                                        <>
                                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full"></div>
                                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                                        </>
                                    )}
                                </motion.div>
                            ))}

                        </div>

                        {/* Toolbar Overlay */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/90 backdrop-blur p-1.5 rounded-full border border-slate-700 shadow-xl">
                            <button className="p-2 rounded-full hover:bg-slate-700 text-white" title="Select mode">
                                <MousePointer2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-full hover:bg-slate-700 text-white" title="Draw Box">
                                <Scan className="w-4 h-4" />
                            </button>
                            <div className="w-px h-4 bg-slate-700 mx-1"></div>
                            <button 
                                className="p-2 rounded-full hover:bg-red-900/50 text-red-400 disabled:opacity-30" 
                                title="Delete Selected"
                                onClick={() => selectedBoxId && handleDeleteBox(selectedBoxId)}
                                disabled={!selectedBoxId}
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </LabCard>
                    <p className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                        <AlertCircle className="w-3 h-3" />
                        Click and drag to draw new detection boxes. Select a box to modify its label.
                    </p>
                </div>

                {/* SIDEBAR: Properties */}
                <div className="space-y-6 overflow-y-auto">
                    
                    {/* Selected Object Props */}
                    {selectedBoxId ? (
                        <LabCard className="p-5 border-indigo-200 shadow-md">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
                                Edit Detection
                                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">ID: {selectedBoxId}</span>
                            </h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Label Class</label>
                                    <select className="w-full p-2 rounded border border-slate-200 bg-white text-sm">
                                        <option>Hazard</option>
                                        <option>Drywall</option>
                                        <option>Electrical</option>
                                        <option>Rebar</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Confidence Score</label>
                                    <input type="range" className="w-full" min="0" max="100" />
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>0% (Ignore)</span>
                                        <span>100% (Certain)</span>
                                    </div>
                                </div>

                                <div className="pt-2">
                                     <button className="w-full py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-100">
                                         Retrain on this Sample
                                     </button>
                                </div>
                            </div>
                        </LabCard>
                    ) : (
                        <div className="p-8 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-center text-slate-400">
                            <MousePointer2 className="w-8 h-8 mb-2 opacity-50" />
                            <p className="text-sm font-medium">Select a detection box to edit properties</p>
                        </div>
                    )}

                    {/* Detections List */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                            <h3 className="font-bold text-slate-700 text-sm">All Detections</h3>
                            <span className="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[10px] font-bold">{boxes.length}</span>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto">
                            {boxes.map(box => (
                                <div 
                                    key={box.id}
                                    onClick={() => setSelectedBoxId(box.id)}
                                    className={`px-5 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer flex items-center justify-between group ${selectedBoxId === box.id ? 'bg-indigo-50/50' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${box.color === 'red' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{box.label}</p>
                                            <p className="text-xs text-slate-400 font-mono">Conf: {(box.confidence * 100).toFixed(1)}%</p>
                                        </div>
                                    </div>
                                    <button 
                                        className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-100 text-red-500 rounded transition-all"
                                        onClick={(e) => { e.stopPropagation(); handleDeleteBox(box.id); }}
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            ))}
                            {boxes.length === 0 && (
                                <div className="p-8 text-center text-sm text-slate-400 italic">No detections found.</div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AiTuningPage;
