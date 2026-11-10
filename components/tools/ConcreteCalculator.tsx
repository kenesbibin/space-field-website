"use client";
import ToolWorkspaceHeading from './ToolWorkspaceHeading';

import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

type Unit = 'in' | 'ft' | 'yd' | 'm' | 'cm';

export default function ConcreteCalculator() {
  // Input State
  const [length, setLength] = useState<number>(10);
  const [width, setWidth] = useState<number>(10);
  const [depth, setDepth] = useState<number>(4);
  
  const [unitL, setUnitL] = useState<Unit>('ft');
  const [unitW, setUnitW] = useState<Unit>('ft');
  const [unitD, setUnitD] = useState<Unit>('in');

  // Result State
  const [result, setResult] = useState<{
    areaSqFt: number;
    volumeCuFt: number;
    volumeCuYds: number;
    bags80lb: number;
    bags60lb: number;
  } | null>(null);

  // Constants
  // Yields from Quikrete / Industry Standard
  const YIELD_80LB = 0.60; // cu ft per 80lb bag
  const YIELD_60LB = 0.45; // cu ft per 60lb bag

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
    
    // Bag Calculation (Volume / Yield per bag)
    // Adding 5-10% waste is standard, but simple calc first.
    // Let's add 5% waste safety factor implicitly or explicitly? 
    // Usually simple calculators give exact needed, maybe round up.
    // I will use Math.ceil to ensure they buy enough whole bags.
    
    const bags80 = Math.ceil(volumeCuFt / YIELD_80LB);
    const bags60 = Math.ceil(volumeCuFt / YIELD_60LB);

    setResult({
        areaSqFt,
        volumeCuFt,
        volumeCuYds,
        bags80lb: bags80,
        bags60lb: bags60
    });
  };

  return (
    <div className="tool-panel tool-concrete bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      <ToolWorkspaceHeading label="Concrete takeoff" steps={['Size your slab', 'Set thickness', 'Review volume & bags']} />
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-500 rounded-lg text-white">
                <Calculator className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Concrete Slab Calculator</h2>
                <p className="text-sm text-slate-400">Estimate Volume & Bag Count</p>
            </div>
         </div>
         <div className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300 hidden sm:block">
            Yield: 0.60ft³ (80lb) | 0.45ft³ (60lb)
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">
        
        {/* Left Col: Visualization */}
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-xl border border-slate-100 p-8 relative">
            <div className="relative w-full max-w-[320px] aspect-[4/3]">
                {/* SVG Visual Representation */}
                <svg width="100%" height="100%" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                        <marker id="arrowhead-start-gray" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="10 0, 10 7, 0 3.5" fill="#475569" />
                        </marker>
                        <marker id="arrowhead-end-gray" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
                        </marker>
                    </defs>

                    {/* Back Rectangle (Offset) */}
                    <rect x="40" y="40" width="200" height="120" stroke="#94a3b8" strokeWidth="2" fill="#e2e8f0" />
                    
                    {/* Connecting Lines */}
                    <line x1="40" y1="40" x2="80" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="240" y1="40" x2="280" y2="80" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="40" y1="160" x2="80" y2="200" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="240" y1="160" x2="280" y2="200" stroke="#94a3b8" strokeWidth="1" />

                    {/* Front Rectangle */}
                    <rect x="80" y="80" width="200" height="120" stroke="#334155" strokeWidth="2" fill="#cbd5e1" fillOpacity="0.8" />

                    {/* WIDTH Label (Left Side - Vertical) */}
                    <g transform="translate(60, 140)">
                        <line x1="0" y1="-50" x2="0" y2="50" stroke="#475569" strokeWidth="2" markerStart="url(#arrowhead-start-gray)" markerEnd="url(#arrowhead-end-gray)" />
                        <text x="-15" y="5" textAnchor="middle" transform="rotate(-90 -15 5)" fill="#475569" fontSize="12" fontWeight="bold" letterSpacing="1">WIDTH</text>
                    </g>
                    
                    {/* DEPTH Label (Right Side - Vertical) */}
                    <g transform="translate(300, 140)">
                         <line x1="0" y1="-50" x2="0" y2="50" stroke="#475569" strokeWidth="2" markerStart="url(#arrowhead-start-gray)" markerEnd="url(#arrowhead-end-gray)" />
                         <text x="10" y="5" textAnchor="middle" transform="rotate(90 10 5)" fill="#475569" fontSize="12" fontWeight="bold" letterSpacing="1">DEPTH</text>
                    </g>

                    {/* LENGTH Label (Bottom - Horizontal) */}
                    <g transform="translate(180, 225)">
                        <line x1="-90" y1="0" x2="90" y2="0" stroke="#475569" strokeWidth="2" markerStart="url(#arrowhead-start-gray)" markerEnd="url(#arrowhead-end-gray)" />
                        <text x="0" y="-8" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold" letterSpacing="1">LENGTH</text>
                    </g>
                    
                    {/* Visual Guider Lines */}
                    <line x1="50" y1="80" x2="80" y2="80" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="50" y1="200" x2="80" y2="200" stroke="#94a3b8" strokeWidth="1" />

                    <line x1="80" y1="205" x2="80" y2="225" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="280" y1="205" x2="280" y2="225" stroke="#94a3b8" strokeWidth="1" />

                    <line x1="280" y1="80" x2="300" y2="80" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="280" y1="200" x2="300" y2="200" stroke="#94a3b8" strokeWidth="1" />
                </svg>
            </div>
            <p className="mt-4 text-sm text-slate-400 italic text-center">
                Calculate specific volume for precise pre-mix ordering. Output includes standard bag counts.
            </p>
        </div>

        {/* Right Col: Inputs */}
        <div className="space-y-6">
            
            <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Length</label>
                <div className="flex rounded-md shadow-sm">
                    <input 
                        type="number" 
                        min="0"
                        value={length}
                        onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                        className="flex-1 block w-full rounded-l-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" 
                    />
                    <select 
                        value={unitL}
                        onChange={(e) => setUnitL(e.target.value as Unit)}
                        className="inline-flex items-center rounded-r-md border border-l-0 border-slate-300 bg-slate-50 px-3 text-gray-500 sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="ft">ft</option>
                        <option value="yd">yd</option>
                        <option value="m">m</option>
                        <option value="in">in</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Width</label>
                <div className="flex rounded-md shadow-sm">
                    <input 
                        type="number" 
                        min="0"
                        value={width}
                        onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                        className="flex-1 block w-full rounded-l-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" 
                    />
                    <select 
                        value={unitW}
                        onChange={(e) => setUnitW(e.target.value as Unit)}
                        className="inline-flex items-center rounded-r-md border border-l-0 border-slate-300 bg-slate-50 px-3 text-gray-500 sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="ft">ft</option>
                        <option value="yd">yd</option>
                        <option value="m">m</option>
                        <option value="in">in</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Thickness (Depth)</label>
                <div className="flex rounded-md shadow-sm">
                    <input 
                        type="number" 
                        min="0"
                        value={depth}
                        onChange={(e) => setDepth(parseFloat(e.target.value) || 0)}
                        className="flex-1 block w-full rounded-l-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" 
                    />
                     <select 
                        value={unitD}
                        onChange={(e) => setUnitD(e.target.value as Unit)}
                        className="inline-flex items-center rounded-r-md border border-l-0 border-slate-300 bg-slate-50 px-3 text-gray-500 sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="in">in</option>
                        <option value="cm">cm</option>
                    </select>
                </div>
            </div>

            <button 
                onClick={handleCalculate}
                className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2"
            >
                Calculate Volume <ArrowRight className="w-5 h-5" />
            </button>

            {result && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-[#FAF9F6] p-8 rounded-none text-center border-b border-slate-200">
                        <h3 className="text-black font-bold text-2xl mb-4">Total Volume Required</h3>
                        
                        <div className="flex items-center justify-center gap-8 mb-2">
                             <div className="text-center">
                                <span className="text-blue-600 text-4xl font-bold">{result.volumeCuYds.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                <div className="text-black font-medium text-sm">Cubic Yards</div>
                             </div>
                             <div className="text-center opacity-50">|</div>
                             <div className="text-center">
                                <span className="text-slate-600 text-3xl font-bold">{result.volumeCuFt.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
                                <div className="text-black font-medium text-sm">Cubic Feet</div>
                             </div>
                        </div>
                    </div>

                    <div className="bg-white py-6 px-8 flex flex-col gap-4 border-t border-slate-100">
                        <span className="text-black text-xl font-bold text-center md:text-left">Pre-Mix Bags Needed</span>
                        
                        <div className="grid grid-cols-2 gap-4">
                             <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-3xl font-bold">{result.bags80lb}</div>
                                <div className="text-slate-600 font-medium text-sm">80lb Bags</div>
                                <div className="text-xs text-slate-400 mt-1">@ 0.60 cu ft/bag</div>
                             </div>
                             <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-3xl font-bold">{result.bags60lb}</div>
                                <div className="text-slate-600 font-medium text-sm">60lb Bags</div>
                                <div className="text-xs text-slate-400 mt-1">@ 0.45 cu ft/bag</div>
                             </div>
                        </div>
                    </div>

                    <a 
                        href="/request-a-demo" 
                        className="block w-full bg-black text-white font-bold text-lg py-4 text-center mt-4 hover:bg-gray-900 transition-colors uppercase tracking-wide"
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
