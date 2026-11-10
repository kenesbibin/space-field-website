"use client";
import ToolWorkspaceHeading from './ToolWorkspaceHeading';

import React, { useState } from 'react';
import { Home, ArrowRight } from 'lucide-react';

const PITCHES = [
  { rise: 2, label: '2/12 — low slope' },
  { rise: 3, label: '3/12 — low slope' },
  { rise: 4, label: '4/12 — standard' },
  { rise: 5, label: '5/12 — standard' },
  { rise: 6, label: '6/12 — steep' },
  { rise: 7, label: '7/12 — steep' },
  { rise: 8, label: '8/12 — steep' },
  { rise: 9, label: '9/12 — very steep' },
  { rise: 10, label: '10/12 — very steep' },
  { rise: 11, label: '11/12 — very steep' },
  { rise: 12, label: '12/12 — 45°' },
];

const BUNDLES_PER_SQUARE = 3;

type Num = number | '';
const toNum = (v: Num): number => Number(v) || 0;

type RoofResult = {
  pitchFactor: number;
  roofArea: number;
  squares: number;
  squaresWithWaste: number;
  bundles: number;
  cost: number;
};

export default function RoofingCalculator() {
  const [length, setLength] = useState<Num>(40);
  const [width, setWidth] = useState<Num>(30);
  const [pitch, setPitch] = useState(4);
  const [waste, setWaste] = useState<Num>(10);
  const [pricePerBundle, setPricePerBundle] = useState<Num>('');
  const [result, setResult] = useState<RoofResult | null>(null);

  const handleCalculate = () => {
    // Slope factor = hypotenuse / run for a 12-inch run.
    const pitchFactor = Math.sqrt(144 + pitch * pitch) / 12;
    const roofArea = toNum(length) * toNum(width) * pitchFactor;
    const squares = roofArea / 100;
    const squaresWithWaste = squares * (1 + toNum(waste) / 100);
    const bundles = Math.ceil(squaresWithWaste * BUNDLES_PER_SQUARE);

    setResult({
      pitchFactor,
      roofArea,
      squares,
      squaresWithWaste,
      bundles,
      cost: bundles * toNum(pricePerBundle),
    });
  };

  const setNum = (setter: (v: Num) => void) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setter(e.target.value === '' ? '' : Number(e.target.value));

  return (
    <div className="tool-panel tool-roofing bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      <ToolWorkspaceHeading label="Roofing takeoff" steps={['Enter footprint', 'Set the pitch', 'Order shingles']} />
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600 rounded-lg text-white">
                <Home className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Roofing Shingle Calculator</h2>
                <p className="text-sm text-slate-400">Squares, Bundles & Pitch</p>
            </div>
         </div>
         <div className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300 hidden sm:block">
            {BUNDLES_PER_SQUARE} bundles/square | pitch {pitch}/12
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">

        {/* Left Col: Pitch Visualization */}
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-xl border border-slate-100 p-8 relative">
            <div className="relative w-full max-w-[320px] aspect-[4/3]">
                <svg width="100%" height="100%" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Roof pitch triangle diagram">
                    {/* House body */}
                    <rect x="70" y="140" width="180" height="70" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                    {/* Roof triangle */}
                    <path d="M50 145 L160 55 L270 145 Z" fill="#fee2e2" stroke="#b91c1c" strokeWidth="2.5" strokeLinejoin="round" />
                    {/* Shingle courses */}
                    {[128, 112, 96, 80].map((y, i) => (
                        <line key={y} x1={160 - (145 - y) * 1.22} y1={y} x2={160 + (145 - y) * 1.22} y2={y} stroke="#f87171" strokeWidth="1.5" strokeDasharray="6 4" opacity={0.8 - i * 0.1} />
                    ))}
                    {/* Rise line (inside) */}
                    <line x1="160" y1="55" x2="160" y2="145" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="6 5" />
                    <text x="168" y="105" fill="#1d4ed8" fontSize="13" fontWeight="bold">rise {pitch}</text>
                    {/* Run line */}
                    <line x1="160" y1="145" x2="270" y2="145" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="6 5" />
                    <text x="215" y="163" textAnchor="middle" fill="#1d4ed8" fontSize="13" fontWeight="bold">run 12</text>
                    {/* Pitch chip */}
                    <g transform="translate(84, 50)">
                        <rect x="-42" y="-16" width="84" height="28" rx="8" fill="#fff1f2" stroke="#fda4af" />
                        <text x="0" y="4" textAnchor="middle" fill="#9f1239" fontSize="13" fontWeight="bold">{pitch}/12 pitch</text>
                    </g>
                    {/* Slope label */}
                    <text x="240" y="86" fill="#64748b" fontSize="11" fontWeight="bold" transform="rotate(-38 240 86)">SLOPE</text>
                </svg>
            </div>
            <p className="mt-4 text-sm text-slate-400 italic text-center">
                Assumes one rectangular roof plane per side. Add hips, valleys, and dormers with extra waste.
            </p>
        </div>

        {/* Right Col: Inputs */}
        <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="roof-length" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Length (ft)</label>
                    <input id="roof-length" type="number" min="0" step="0.5" value={length} onChange={setNum(setLength)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="roof-width" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Width (ft)</label>
                    <input id="roof-width" type="number" min="0" step="0.5" value={width} onChange={setNum(setWidth)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="roof-pitch" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Roof Pitch</label>
                <select id="roof-pitch" value={pitch} onChange={e => setPitch(Number(e.target.value))}
                    className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5 bg-white">
                    {PITCHES.map(p => <option key={p.rise} value={p.rise}>{p.label}</option>)}
                </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="roof-waste" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Waste (%)</label>
                    <input id="roof-waste" type="number" min="0" value={waste} onChange={setNum(setWaste)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                    <div className="flex flex-wrap gap-2 pt-1">
                        {[10, 15, 20].map(w => (
                            <button key={w} type="button" onClick={() => setWaste(w)}
                                className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${toNum(waste) === w ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300'}`}>
                                {w}%
                            </button>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="roof-price" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">$/Bundle</label>
                    <input id="roof-price" type="number" min="0" step="0.01" placeholder="Optional" value={pricePerBundle} onChange={setNum(setPricePerBundle)}
                        className="w-full rounded-md border-slate-300 border focus:border-blue-500 focus:ring-blue-500 sm:text-lg p-2.5" />
                </div>
            </div>

            <button
                onClick={handleCalculate}
                className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2"
            >
                Calculate Shingles <ArrowRight className="w-5 h-5" />
            </button>

            {result && (
                <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-[#FAF9F6] p-8 rounded-none text-center border-b border-slate-200">
                        <h3 className="text-black font-bold text-2xl mb-4">Shingle Bundles to Order</h3>
                        <div className="flex items-center justify-center gap-8 mb-2">
                            <div className="text-center">
                                <span className="text-red-600 text-4xl font-bold">{result.bundles.toLocaleString()}</span>
                                <div className="text-black font-medium text-sm">Bundles</div>
                            </div>
                            <div className="text-center opacity-50">|</div>
                            <div className="text-center">
                                <span className="text-slate-600 text-3xl font-bold">{result.squaresWithWaste.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
                                <div className="text-black font-medium text-sm">Squares (with waste)</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-6 px-8 flex flex-col gap-4 border-t border-slate-100">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">{result.roofArea.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                <div className="text-slate-600 font-medium text-sm">Roof Sq Ft</div>
                                <div className="text-xs text-slate-400 mt-1">×{result.pitchFactor.toFixed(3)} slope</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">{result.squares.toLocaleString(undefined, { maximumFractionDigits: 1 })}</div>
                                <div className="text-slate-600 font-medium text-sm">Squares</div>
                                <div className="text-xs text-slate-400 mt-1">before waste</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <div className="text-blue-600 text-2xl font-bold">
                                    {toNum(pricePerBundle) > 0 ? `$${result.cost.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : '—'}
                                </div>
                                <div className="text-slate-600 font-medium text-sm">Est. Cost</div>
                                <div className="text-xs text-slate-400 mt-1">{toNum(pricePerBundle) > 0 ? `@$${toNum(pricePerBundle)}/bundle` : 'set $/bundle'}</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 text-center">Counts shingle bundles only — order ridge cap, underlayment, ice-and-water, and starter courses separately.</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
