"use client";

import React, { useState } from 'react';
import { PaintBucket, ArrowRight, RefreshCw } from 'lucide-react';

export default function PaintCalculator() {
  // Input State
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  
  const [doors, setDoors] = useState<number>(1);
  const [windows, setWindows] = useState<number>(2);

  // Result State
  const [result, setResult] = useState<{
    totalAreaSqFt: number;
    wallAreaSqFt: number;
    ceilingAreaSqFt: number;
    gallonsRaw: number;
    gallonsRecommended: number;
    primerGallons: number;
  } | null>(null);

  // Constants
  const COVERAGE_PER_GALLON = 350; // Standard 350-400 sq ft
  const DOOR_AREA = 21; // 3x7 standard
  const WINDOW_AREA = 15; // 3x5 standard averages

  const handleCalculate = () => {
    // 1. Calculate Gross Wall Area
    const perimeter = 2 * (length + width);
    const grossWallArea = perimeter * height;

    // 2. Calculate Deductions
    const deductions = (doors * DOOR_AREA) + (windows * WINDOW_AREA);

    // 3. Net Wall Area
    const netWallArea = Math.max(0, grossWallArea - deductions);
    
    // 4. Ceiling
    const ceilingArea = length * width;

    // 5. Gallons (Walls only for primary output)
    const gallonsNeeded = netWallArea / COVERAGE_PER_GALLON;
    const primerNeeded = netWallArea / 250; // Primer spreads less

    setResult({
        totalAreaSqFt: netWallArea + ceilingArea,
        wallAreaSqFt: netWallArea,
        ceilingAreaSqFt: ceilingArea,
        gallonsRaw: gallonsNeeded,
        gallonsRecommended: Math.ceil(gallonsNeeded), // Buy whole gallons
        primerGallons: Math.ceil(primerNeeded)
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500 rounded-lg text-white">
                <PaintBucket className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Room Paint Calculator</h2>
                <p className="text-sm text-slate-400">Estimate Gallons & Primer</p>
            </div>
         </div>
         <div className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300 hidden sm:block">
            Coverage: 350 ft²/gal
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">
        
        {/* Left Col: Visual / Inputs */}
        <div className="flex flex-col gap-6">
            {/* Visual */}
            <div className="relative w-full aspect-[4/3] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center">
                <svg width="100%" height="80%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Room Box Wireframe */}
                    {/* Back Wall */}
                    <rect x="75" y="50" width="150" height="100" stroke="#cbd5e1" strokeWidth="2" fill="#f8fafc" />
                    
                    {/* Perspective Lines */}
                    <line x1="25" y1="25" x2="75" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="275" y1="25" x2="225" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="25" y1="175" x2="75" y2="150" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="275" y1="175" x2="225" y2="150" stroke="#cbd5e1" strokeWidth="1" />

                    {/* Front Frame */}
                    <rect x="25" y="25" width="250" height="150" stroke="#6366f1" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5"/>
                    
                    {/* Dimensions Labels */}
                    <text x="150" y="190" textAnchor="middle" fill="#6366f1" fontSize="12" fontWeight="bold">LENGTH {length} ft</text>
                    <text x="15" y="100" textAnchor="middle" transform="rotate(-90 15 100)" fill="#6366f1" fontSize="12" fontWeight="bold">WIDTH {width} ft</text>
                    <text x="285" y="100" textAnchor="middle" transform="rotate(90 285 100)" fill="#6366f1" fontSize="12" fontWeight="bold">HEIGHT {height} ft</text>
                </svg>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Length (ft)</label>
                    <input 
                        type="number" min="0" value={length} 
                        onChange={e => setLength(parseFloat(e.target.value) || 0)}
                        className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Width (ft)</label>
                    <input 
                        type="number" min="0" value={width} 
                        onChange={e => setWidth(parseFloat(e.target.value) || 0)}
                        className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Height (ft)</label>
                    <input 
                        type="number" min="0" value={height} 
                        onChange={e => setHeight(parseFloat(e.target.value) || 0)}
                        className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Doors</label>
                        <input 
                            type="number" min="0" value={doors} 
                            onChange={e => setDoors(parseFloat(e.target.value) || 0)}
                            className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Windows</label>
                        <input 
                            type="number" min="0" value={windows} 
                            onChange={e => setWindows(parseFloat(e.target.value) || 0)}
                            className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>
                </div>
            </div>

            <button 
                onClick={handleCalculate}
                className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2"
            >
                Calculate Paint <ArrowRight className="w-5 h-5" />
            </button>
        </div>

        {/* Right Col: Results */}
        <div className="flex flex-col justify-between">
            {result ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col gap-6">
                    
                    {/* Primary Result */}
                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-center flex-1 flex flex-col justify-center">
                        <h3 className="text-slate-900 font-bold text-lg mb-2 uppercase tracking-wide">Paint Needed (2 Coats)</h3>
                        <div className="flex items-center justify-center gap-2">
                             <span className="text-5xl font-extrabold text-indigo-600">{(result.gallonsRecommended * 2)}</span>
                             <div className="text-left leading-tight">
                                <span className="block font-bold text-slate-900">Gallons</span>
                                <span className="text-xs text-slate-500">For 2 coats</span>
                             </div>
                        </div>
                        <p className="mt-4 text-sm text-slate-600">
                            Based on {result.wallAreaSqFt.toLocaleString()} sq ft of wall area.
                        </p>
                    </div>

                    {/* Breakdown */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                        <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Material Breakdown</h4>
                        
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600">Primer (1 Coat)</span>
                            <span className="font-bold text-slate-900">{result.primerGallons} Gallons</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600">Single Coat Paint</span>
                            <span className="font-bold text-slate-900">{result.gallonsRecommended} Gallons</span>
                        </div>
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600">Ceiling Paint</span>
                            <span className="font-bold text-slate-900">{Math.ceil(result.ceilingAreaSqFt / 350)} Gallons</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <a 
                        href="/request-a-demo" 
                        className="block w-full bg-indigo-600 text-white font-bold text-lg py-4 text-center rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                         Get Professional Quote
                    </a>

                </div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 border-2 border-dashed border-slate-200 rounded-xl">
                    <RefreshCw className="w-12 h-12 mb-4 opacity-50" />
                    <p className="text-center">Enter room dimensions to see paint requirements.</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
}
