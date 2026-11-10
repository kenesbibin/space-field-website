"use client";
import ToolWorkspaceHeading from './ToolWorkspaceHeading';

import React, { useState } from 'react';
import { Mountain, ArrowRight } from 'lucide-react';

const MATERIALS = [
  { id: 'gravel', label: 'Crushed Stone / Gravel', lbPerFt3: 105 },
  { id: 'pea', label: 'Pea Gravel', lbPerFt3: 96 },
  { id: 'sand', label: 'Sand (dry)', lbPerFt3: 100 },
  { id: 'limestone', label: 'Crushed Limestone Base', lbPerFt3: 110 },
  { id: 'topsoil', label: 'Topsoil', lbPerFt3: 78 },
  { id: 'mulch', label: 'Mulch', lbPerFt3: 30 },
];

type Num = number | '';
const toNum = (v: Num): number => Number(v) || 0;

type GravelResult = {
  areaSqFt: number;
  volumeCuFt: number;
  volumeCuYd: number;
  tons: number;
  cost: number;
};

export default function GravelCalculator() {
  const [length, setLength] = useState<Num>(20);
  const [width, setWidth] = useState<Num>(10);
  const [depth, setDepth] = useState<Num>(4);
  const [materialId, setMaterialId] = useState('gravel');
  const [pricePerTon, setPricePerTon] = useState<Num>('');
  const [result, setResult] = useState<GravelResult | null>(null);

  const material = MATERIALS.find(m => m.id === materialId) ?? MATERIALS[0];

  const handleCalculate = () => {
    const areaSqFt = toNum(length) * toNum(width);
    const volumeCuFt = areaSqFt * (toNum(depth) / 12);
    const volumeCuYd = volumeCuFt / 27;
    const tons = (volumeCuFt * material.lbPerFt3) / 2000;

    setResult({
      areaSqFt,
      volumeCuFt,
      volumeCuYd,
      tons,
      cost: tons * toNum(pricePerTon),
    });
  };

  const setNum = (setter: (v: Num) => void) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setter(e.target.value === '' ? '' : Number(e.target.value));

  return (
    <div className="tool-panel tool-gravel bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      <ToolWorkspaceHeading label="Aggregate estimator" steps={['Measure the area', 'Set depth & material', 'Order by the ton']} />
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-600 rounded-lg text-white">
                <Mountain className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Gravel Calculator</h2>
                <p className="text-sm text-slate-400">Estimate Cubic Yards & Tons</p>
            </div>
         </div>
         <div className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300 hidden sm:block">
            {material.label} | {material.lbPerFt3} lb/ft³
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">

        {/* Left Col: Section Visualization */}
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-xl border border-slate-100 p-8 relative">
            <div className="relative w-full max-w-[320px] aspect-[4/3]">
                <svg width="100%" height="100%" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Gravel layer cross-section diagram">
                    {/* Subgrade */}
                    <rect x="30" y="150" width="260" height="60" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                    <text x="160" y="185" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="bold" letterSpacing="1">SUBGRADE</text>
                    {/* Gravel layer with dots */}
                    <rect x="30" y="110" width="260" height="40" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                    {[[46,120],[66,132],[88,122],[108,134],[130,124],[152,136],[174,122],[196,132],[218,124],[240,136],[262,122],[276,132],[56,140],[96,142],[144,144],[204,144],[252,142]].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#b45309" fillOpacity="0.65" />
                    ))}
                    {/* Depth dimension (right) */}
                    <g transform="translate(305, 130)">
                        <line x1="0" y1="-20" x2="0" y2="20" stroke="#475569" strokeWidth="2" />
                        <line x1="-6" y1="-20" x2="6" y2="-20" stroke="#475569" strokeWidth="2" />
                        <line x1="-6" y1="20" x2="6" y2="20" stroke="#475569" strokeWidth="2" />
                        <text x="-4" y="4" textAnchor="end" fill="#475569" fontSize="12" fontWeight="bold">{toNum(depth) || 0}&quot;</text>
                    </g>
                    {/* Length dimension (bottom) */}
                    <g transform="translate(160, 230)">
                        <line x1="-130" y1="0" x2="130" y2="0" stroke="#475569" strokeWidth="2" />
                        <line x1="-130" y1="-6" x2="-130" y2="6" stroke="#475569" strokeWidth="2" />
                        <line x1="130" y1="-6" x2="130" y2="6" stroke="#475569" strokeWidth="2" />
                        <text x="0" y="-9" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">LENGTH × WIDTH = AREA</text>
                    </g>
                    {/* Material chip */}
                    <g transform="translate(96, 44)">
                        <rect x="-66" y="-16" width="132" height="28" rx="8" fill="#fffbeb" stroke="#fcd34d" />
                        <text x="0" y="4" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">{material.label}</text>
                    </g>
                    <line x1="160" y1="60" x2="160" y2="108" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
            </div>
            <p className="mt-4 text-sm text-slate-400 italic text-center">
                Densities are typical values — confirm with your supplier, especially for recycled products.
            </p>
        </div>

        {/* Right Col: Inputs */}
        <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="gravel-length" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Length (ft)</label>
                    <input id="gravel-length" type="number" min="0" step="0.1" value={length} onChange={setNum(setLength)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="gravel-width" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Width (ft)</label>
                    <input id="gravel-width" type="number" min="0" step="0.1" value={width} onChange={setNum(setWidth)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="gravel-depth" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Depth (in)</label>
                <input id="gravel-depth" type="number" min="0" step="0.5" value={depth} onChange={setNum(setDepth)}
                    className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                <div className="flex flex-wrap gap-2 pt-1">
                    {[2, 4, 6, 8].map(d => (
                        <button key={d} type="button" onClick={() => setDepth(d)}
                            className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${toNum(depth) === d ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300'}`}>
                            {d}&quot;
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="gravel-material" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Material</label>
                <select id="gravel-material" value={materialId} onChange={e => setMaterialId(e.target.value)}
                    className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5 bg-white">
                    {MATERIALS.map(m => <option key={m.id} value={m.id}>{m.label} ({m.lbPerFt3} lb/ft³)</option>)}
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="gravel-price" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Price per Ton ($)</label>
                <input id="gravel-price" type="number" min="0" step="0.01" placeholder="Optional" value={pricePerTon} onChange={setNum(setPricePerTon)}
                    className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
            </div>

            <button
                onClick={handleCalculate}
                className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2"
            >
                Calculate Material <ArrowRight className="w-5 h-5" />
            </button>

            {result && (
                <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-[#FAF9F6] p-8 rounded-none text-center border-b border-slate-200">
                        <h3 className="text-black font-bold text-2xl mb-4">Material Needed</h3>
                        <div className="flex items-center justify-center gap-8 mb-2">
                            <div className="text-center">
                                <span className="text-amber-700 text-4xl font-bold">{result.tons.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                <div className="text-black font-medium text-sm">Tons</div>
                            </div>
                            <div className="text-center opacity-50">|</div>
                            <div className="text-center">
                                <span className="text-slate-600 text-3xl font-bold">{result.volumeCuYd.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                <div className="text-black font-medium text-sm">Cubic Yards</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-6 px-8 flex flex-col gap-4 border-t border-slate-100">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">{result.volumeCuFt.toLocaleString(undefined, { maximumFractionDigits: 1 })}</div>
                                <div className="text-slate-600 font-medium text-sm">Cubic Feet</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">{result.areaSqFt.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                <div className="text-slate-600 font-medium text-sm">Sq Ft Covered</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">
                                    {toNum(pricePerTon) > 0 ? `$${result.cost.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : '—'}
                                </div>
                                <div className="text-slate-600 font-medium text-sm">Est. Cost</div>
                                <div className="text-xs text-slate-400 mt-1">{toNum(pricePerTon) > 0 ? `@$${toNum(pricePerTon)}/ton` : 'set $/ton'}</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 text-center">Order 5–10% extra for compaction and uneven subgrades. Delivery minimums may apply.</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
