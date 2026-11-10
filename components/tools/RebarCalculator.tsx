"use client";
import ToolWorkspaceHeading from './ToolWorkspaceHeading';

import React, { useState } from 'react';
import { BrickWall, ArrowRight } from 'lucide-react';

const BAR_SIZES = [
  { size: '#3', lbPerFt: 0.376 },
  { size: '#4', lbPerFt: 0.668 },
  { size: '#5', lbPerFt: 1.043 },
  { size: '#6', lbPerFt: 1.502 },
  { size: '#7', lbPerFt: 1.966 },
  { size: '#8', lbPerFt: 2.670 },
];

const SPACINGS = [6, 8, 10, 12, 16, 18, 24];

type Num = number | '';
const toNum = (v: Num): number => Number(v) || 0;

type RebarResult = {
  barsLengthwise: number;
  barsWidthwise: number;
  totalBars: number;
  totalLength: number;
  weight: number;
  weightWithWaste: number;
  cost: number;
};

export default function RebarCalculator() {
  const [length, setLength] = useState<Num>(20);
  const [width, setWidth] = useState<Num>(12);
  const [barSize, setBarSize] = useState('#4');
  const [spacing, setSpacing] = useState(12);
  const [cover, setCover] = useState<Num>(3);
  const [waste, setWaste] = useState<Num>(10);
  const [pricePerLb, setPricePerLb] = useState<Num>('');
  const [result, setResult] = useState<RebarResult | null>(null);

  const bar = BAR_SIZES.find(b => b.size === barSize) ?? BAR_SIZES[1];

  const handleCalculate = () => {
    const coverFt = toNum(cover) / 12;
    const spacingFt = spacing / 12;
    const usableL = Math.max(0, toNum(length) - 2 * coverFt);
    const usableW = Math.max(0, toNum(width) - 2 * coverFt);

    // Bars running parallel to the length are counted across the width, and vice versa.
    const barsLengthwise = Math.floor(usableW / spacingFt) + 1;
    const barsWidthwise = Math.floor(usableL / spacingFt) + 1;
    const totalLength = barsLengthwise * usableL + barsWidthwise * usableW;
    const weight = totalLength * bar.lbPerFt;
    const weightWithWaste = weight * (1 + toNum(waste) / 100);

    setResult({
      barsLengthwise,
      barsWidthwise,
      totalBars: barsLengthwise + barsWidthwise,
      totalLength,
      weight,
      weightWithWaste,
      cost: weightWithWaste * toNum(pricePerLb),
    });
  };

  const setNum = (setter: (v: Num) => void) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setter(e.target.value === '' ? '' : Number(e.target.value));

  return (
    <div className="tool-panel tool-rebar bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      <ToolWorkspaceHeading label="Rebar takeoff" steps={['Set slab size', 'Pick bar size & spacing', 'Get weight & count']} />
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500 rounded-lg text-white">
                <BrickWall className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Rebar Calculator</h2>
                <p className="text-sm text-slate-400">Estimate Bar Count, Length & Weight</p>
            </div>
         </div>
         <div className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300 hidden sm:block">
            {bar.size} @ {spacing}&quot; O.C. | {bar.lbPerFt} lb/ft
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">

        {/* Left Col: Visualization */}
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-xl border border-slate-100 p-8 relative">
            <div className="relative w-full max-w-[320px] aspect-[4/3]">
                <svg width="100%" height="100%" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Rebar mesh layout diagram">
                    {/* Slab outline */}
                    <rect x="40" y="36" width="240" height="150" stroke="#94a3b8" strokeWidth="2" fill="#f1f5f9" />
                    {/* Cover margin (dashed) */}
                    <rect x="52" y="48" width="216" height="126" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
                    {/* Lengthwise bars */}
                    {[76, 112, 148, 184, 220, 256].map(x => (
                        <line key={x} x1={x} y1="48" x2={x} y2="174" stroke="#c2410c" strokeWidth="3" />
                    ))}
                    {/* Widthwise bars */}
                    {[72, 108, 144].map(y => (
                        <line key={y} x1="52" y1={y} x2="268" y2={y} stroke="#9a3412" strokeWidth="3" />
                    ))}
                    {/* Spacing indicator */}
                    <g transform="translate(94, 205)">
                        <line x1="0" y1="0" x2="36" y2="0" stroke="#475569" strokeWidth="2" />
                        <line x1="0" y1="-6" x2="0" y2="6" stroke="#475569" strokeWidth="2" />
                        <line x1="36" y1="-6" x2="36" y2="6" stroke="#475569" strokeWidth="2" />
                        <text x="18" y="18" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">{spacing}&quot; O.C.</text>
                    </g>
                    {/* Length label */}
                    <text x="160" y="26" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="1">LENGTH</text>
                    {/* Width label */}
                    <text x="24" y="115" textAnchor="middle" transform="rotate(-90 24 115)" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="1">WIDTH</text>
                    {/* Bar size callout */}
                    <g transform="translate(214, 66)">
                        <rect x="-30" y="-13" width="60" height="24" rx="6" fill="#fff7ed" stroke="#fdba74" />
                        <text x="0" y="4" textAnchor="middle" fill="#c2410c" fontSize="12" fontWeight="bold">{bar.size} bar</text>
                    </g>
                </svg>
            </div>
            <p className="mt-4 text-sm text-slate-400 italic text-center">
                Two-way mat with standard edge cover. Weight uses published ASTM bar weights.
            </p>
        </div>

        {/* Right Col: Inputs */}
        <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="rebar-length" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Length (ft)</label>
                    <input id="rebar-length" type="number" min="0" step="0.1" value={length} onChange={setNum(setLength)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="rebar-width" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Width (ft)</label>
                    <input id="rebar-width" type="number" min="0" step="0.1" value={width} onChange={setNum(setWidth)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="rebar-size" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Bar Size</label>
                    <select id="rebar-size" value={barSize} onChange={e => setBarSize(e.target.value)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5 bg-white">
                        {BAR_SIZES.map(b => <option key={b.size} value={b.size}>{b.size} — {b.lbPerFt} lb/ft</option>)}
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="rebar-spacing" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Spacing (in)</label>
                    <select id="rebar-spacing" value={spacing} onChange={e => setSpacing(Number(e.target.value))}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5 bg-white">
                        {SPACINGS.map(s => <option key={s} value={s}>{s} in on center</option>)}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                    <label htmlFor="rebar-cover" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Cover (in)</label>
                    <input id="rebar-cover" type="number" min="0" value={cover} onChange={setNum(setCover)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="rebar-waste" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Waste (%)</label>
                    <input id="rebar-waste" type="number" min="0" value={waste} onChange={setNum(setWaste)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="rebar-price" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">$/lb</label>
                    <input id="rebar-price" type="number" min="0" step="0.01" placeholder="Optional" value={pricePerLb} onChange={setNum(setPricePerLb)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
            </div>

            <button
                onClick={handleCalculate}
                className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2"
            >
                Calculate Rebar <ArrowRight className="w-5 h-5" />
            </button>

            {result && (
                <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-[#FAF9F6] p-8 rounded-none text-center border-b border-slate-200">
                        <h3 className="text-black font-bold text-2xl mb-4">Total Steel Weight</h3>
                        <div className="flex items-center justify-center gap-8 mb-2">
                            <div className="text-center">
                                <span className="text-orange-600 text-4xl font-bold">{result.weightWithWaste.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
                                <div className="text-black font-medium text-sm">Pounds (with waste)</div>
                            </div>
                            <div className="text-center opacity-50">|</div>
                            <div className="text-center">
                                <span className="text-slate-600 text-3xl font-bold">{result.weight.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
                                <div className="text-black font-medium text-sm">Pounds (net)</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-6 px-8 flex flex-col gap-4 border-t border-slate-100">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">{result.totalBars}</div>
                                <div className="text-slate-600 font-medium text-sm">Total Bars</div>
                                <div className="text-xs text-slate-400 mt-1">{result.barsLengthwise} × {result.barsWidthwise}</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">{result.totalLength.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                <div className="text-slate-600 font-medium text-sm">Total Feet</div>
                                <div className="text-xs text-slate-400 mt-1">cut length</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">
                                    {toNum(pricePerLb) > 0 ? `$${result.cost.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : '—'}
                                </div>
                                <div className="text-slate-600 font-medium text-sm">Est. Cost</div>
                                <div className="text-xs text-slate-400 mt-1">{toNum(pricePerLb) > 0 ? `@$${toNum(pricePerLb)}/lb` : 'set $/lb'}</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 text-center">Two-way mat, both directions. Verify lap splices and chair spacing against your structural drawings.</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
