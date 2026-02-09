"use client";

import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';

type Unit = 'in' | 'ft' | 'yd' | 'm' | 'cm';

export default function AsphaltCalculator() {
  // Input State
  const [length, setLength] = useState<number>(10);
  const [width, setWidth] = useState<number>(10);
  const [depth, setDepth] = useState<number>(3);
  
  const [unitL, setUnitL] = useState<Unit>('ft');
  const [unitW, setUnitW] = useState<Unit>('ft');
  const [unitD, setUnitD] = useState<Unit>('in');

  // Result State
  const [result, setResult] = useState<{
    areaSqFt: number;
    volumeCuFt: number;
    volumeCuYds: number;
    weightTons: number;
  } | null>(null);

  // Constants
  const DENSITY_LBS_CUFT = 145; // Standard asphalt density
  const COMPACTION_FACTOR = 1.10; // +10% for compaction

  // Helper: Convert to Feet
  const toFeet = (val: number, unit: Unit): number => {
    switch(unit) {
        case 'in': return val / 12;
        case 'ft': return val;
        case 'yd': return val * 3;
        case 'm': return val * 3.28084;
        case 'cm': return val / 30.48;
        default: return val;
    }
  };

  const handleCalculate = () => {
    const lFt = toFeet(length, unitL);
    const wFt = toFeet(width, unitW);
    const dFt = toFeet(depth, unitD);

    const areaSqFt = lFt * wFt;
    const volumeCuFt = areaSqFt * dFt;
    const volumeCuYds = volumeCuFt / 27;
    
    // Weight Calculation: Vol (cu ft) * Density
    // Then add compaction factor
    const weightLbs = volumeCuFt * DENSITY_LBS_CUFT;
    const totalWeightLbs = weightLbs * COMPACTION_FACTOR;
    const weightTons = totalWeightLbs / 2000;

    setResult({
        areaSqFt,
        volumeCuFt: volumeCuFt * COMPACTION_FACTOR, // Showing compacted volume requirement
        volumeCuYds: volumeCuYds * COMPACTION_FACTOR,
        weightTons
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500 rounded-lg text-slate-900">
                <Calculator className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Asphalt Calculator</h2>
                <p className="text-sm text-slate-400">Estimate Hot Mix Asphalt Needs</p>
            </div>
         </div>
         <div className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300 hidden sm:block">
            Density: 145 lbs/ft³ | Compaction: +10%
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">
        
        {/* Left Col: Visualization */}
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-xl border border-slate-100 p-8 relative">
            <div className="relative w-full max-w-[320px] aspect-[4/3]">
                {/* SVG Visual Representation */}
                <svg width="100%" height="100%" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Definitions for arrow markers */}
                    <defs>
                        <marker id="arrowhead-start" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="10 0, 10 7, 0 3.5" fill="#d97706" />
                        </marker>
                        <marker id="arrowhead-end" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#d97706" />
                        </marker>
                    </defs>

                    {/* Back Rectangle (Offset) */}
                    <rect x="40" y="40" width="200" height="120" stroke="#94a3b8" strokeWidth="2" fill="#f1f5f9" />
                    
                    {/* Connecting Lines */}
                    <line x1="40" y1="40" x2="80" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="240" y1="40" x2="280" y2="80" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="40" y1="160" x2="80" y2="200" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="240" y1="160" x2="280" y2="200" stroke="#94a3b8" strokeWidth="1" />

                    {/* Front Rectangle */}
                    <rect x="80" y="80" width="200" height="120" stroke="#1e293b" strokeWidth="2" fill="rgba(255,255,255,0.8)" />

                    {/* WIDTH Label (Left Side - Vertical) */}
                    <g transform="translate(60, 140)">
                        <line x1="0" y1="-50" x2="0" y2="50" stroke="#d97706" strokeWidth="2" markerStart="url(#arrowhead-start)" markerEnd="url(#arrowhead-end)" />
                        <text x="-15" y="5" textAnchor="middle" transform="rotate(-90 -15 5)" fill="#d97706" fontSize="12" fontWeight="bold" letterSpacing="1">WIDTH</text>
                    </g>
                    
                    {/* DEPTH Label (Right Side - Vertical) */}
                    <g transform="translate(300, 140)">
                         <line x1="0" y1="-50" x2="0" y2="50" stroke="#d97706" strokeWidth="2" markerStart="url(#arrowhead-start)" markerEnd="url(#arrowhead-end)" />
                         <text x="15" y="5" textAnchor="middle" transform="rotate(90 15 5)" fill="#d97706" fontSize="12" fontWeight="bold" letterSpacing="1">DEPTH</text>
                    </g>

                    {/* LENGTH Label (Bottom - Horizontal) */}
                    <g transform="translate(180, 225)">
                        <line x1="-90" y1="0" x2="90" y2="0" stroke="#d97706" strokeWidth="2" markerStart="url(#arrowhead-start)" markerEnd="url(#arrowhead-end)" />
                        <text x="0" y="20" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="bold" letterSpacing="1">LENGTH</text>
                    </g>
                    
                    {/* Visual Guider Lines for labels */}
                     {/* Width Guiders */}
                    <line x1="50" y1="80" x2="80" y2="80" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="50" y1="200" x2="80" y2="200" stroke="#cbd5e1" strokeWidth="1" />

                    {/* Length Guiders */}
                    <line x1="80" y1="205" x2="80" y2="225" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="280" y1="205" x2="280" y2="225" stroke="#cbd5e1" strokeWidth="1" />

                    {/* Depth Guiders */}
                    <line x1="280" y1="80" x2="300" y2="80" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="280" y1="200" x2="300" y2="200" stroke="#cbd5e1" strokeWidth="1" />

                </svg>
            </div>
            <p className="mt-4 text-sm text-slate-400 italic text-center max-w-xs">
                Visual representation only. Not to scale.
            </p>
        </div>

        {/* Right Col: Inputs */}
        <div className="space-y-6">
            
            <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 uppercase bg-amber-100 inline-block px-2 py-0.5 rounded">Length</label>
                <div className="flex rounded-md shadow-sm">
                    <input 
                        type="number" 
                        min="0"
                        value={length}
                        onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                        className="flex-1 block w-full rounded-l-md border-slate-300 border focus:border-amber-500 focus:ring-amber-500 sm:text-lg p-2.5" 
                    />
                    <select 
                        value={unitL}
                        onChange={(e) => setUnitL(e.target.value as Unit)}
                        className="inline-flex items-center rounded-r-md border border-l-0 border-slate-300 bg-slate-50 px-3 text-gray-500 sm:text-sm focus:border-amber-500 focus:ring-amber-500"
                    >
                        <option value="ft">ft</option>
                        <option value="yd">yd</option>
                        <option value="m">m</option>
                        <option value="in">in</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 uppercase bg-amber-100 inline-block px-2 py-0.5 rounded">Width</label>
                <div className="flex rounded-md shadow-sm">
                    <input 
                        type="number" 
                        min="0"
                        value={width}
                        onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                        className="flex-1 block w-full rounded-l-md border-slate-300 border focus:border-amber-500 focus:ring-amber-500 sm:text-lg p-2.5" 
                    />
                    <select 
                        value={unitW}
                        onChange={(e) => setUnitW(e.target.value as Unit)}
                        className="inline-flex items-center rounded-r-md border border-l-0 border-slate-300 bg-slate-50 px-3 text-gray-500 sm:text-sm focus:border-amber-500 focus:ring-amber-500"
                    >
                        <option value="ft">ft</option>
                        <option value="yd">yd</option>
                        <option value="m">m</option>
                        <option value="in">in</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 uppercase bg-amber-100 inline-block px-2 py-0.5 rounded">Thickness (Depth)</label>
                <div className="flex rounded-md shadow-sm">
                    <input 
                        type="number" 
                        min="0"
                        value={depth}
                        onChange={(e) => setDepth(parseFloat(e.target.value) || 0)}
                        className="flex-1 block w-full rounded-l-md border-slate-300 border focus:border-amber-500 focus:ring-amber-500 sm:text-lg p-2.5" 
                    />
                     <select 
                        value={unitD}
                        onChange={(e) => setUnitD(e.target.value as Unit)}
                        className="inline-flex items-center rounded-r-md border border-l-0 border-slate-300 bg-slate-50 px-3 text-gray-500 sm:text-sm focus:border-amber-500 focus:ring-amber-500"
                    >
                        <option value="in">in</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
            </div>

            <button 
                onClick={handleCalculate}
                className="w-full bg-slate-900 text-amber-500 font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2"
            >
                Calculate <ArrowRight className="w-5 h-5" />
            </button>

            {result && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-[#FAF9F6] p-8 rounded-none text-center">
                        <h3 className="text-black font-bold text-2xl mb-4">Asphalt Required</h3>
                        
                        <div className="flex items-center justify-center gap-4 mb-2">
                             <div className="text-center">
                                <span className="text-[#FF6B00] text-4xl font-bold">{result.volumeCuFt.toLocaleString(undefined, { maximumFractionDigits: 0 })} ft³</span>
                                <div className="text-black font-medium text-sm">Cubic feet</div>
                             </div>
                             <span className="text-black text-lg font-medium">or</span>
                             <div className="text-center">
                                <span className="text-[#FF6B00] text-4xl font-bold">{result.volumeCuYds.toLocaleString(undefined, { maximumFractionDigits: 2 })} yd³</span>
                                <div className="text-black font-medium text-sm">Cubic yards</div>
                             </div>
                        </div>
                    </div>

                    <div className="bg-white py-6 px-8 flex flex-col md:flex-row items-center justify-between border-t border-slate-100">
                        <span className="text-black text-xl font-bold">Asphalt Weight</span>
                        
                        <div className="flex items-center gap-8">
                             <div className="text-center">
                                <span className="text-[#FF6B00] text-2xl font-bold">{result.weightTons.toFixed(2)}</span>
                                <div className="text-black font-medium text-sm">Tons</div>
                             </div>
                             <div className="h-8 w-px bg-slate-300 hidden md:block"></div>
                             <div className="text-center">
                                <span className="text-[#FF6B00] text-2xl font-bold">{(result.weightTons * 2000).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                <div className="text-black font-medium text-sm">Pounds</div>
                             </div>
                        </div>
                    </div>

                    <a 
                        href="/request-a-demo" 
                        className="block w-full bg-black text-[#FF6B00] font-bold text-lg py-4 text-center mt-4 hover:bg-gray-900 transition-colors uppercase tracking-wide"
                    >
                        Request a Demo
                    </a>
                </div>
            )}

        </div>
      </div>
    </div>
  );
}
