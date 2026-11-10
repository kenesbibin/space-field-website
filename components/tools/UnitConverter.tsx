"use client";
import ToolWorkspaceHeading from './ToolWorkspaceHeading';

import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

type UnitDef = { id: string; label: string; short: string; factor: number };

const CATEGORIES: { id: string; label: string; units: UnitDef[] }[] = [
  {
    id: 'length', label: 'Length', units: [
      { id: 'mm', label: 'Millimeters', short: 'mm', factor: 0.001 },
      { id: 'cm', label: 'Centimeters', short: 'cm', factor: 0.01 },
      { id: 'm', label: 'Meters', short: 'm', factor: 1 },
      { id: 'in', label: 'Inches', short: 'in', factor: 0.0254 },
      { id: 'ft', label: 'Feet', short: 'ft', factor: 0.3048 },
      { id: 'yd', label: 'Yards', short: 'yd', factor: 0.9144 },
      { id: 'mi', label: 'Miles', short: 'mi', factor: 1609.344 },
    ],
  },
  {
    id: 'area', label: 'Area', units: [
      { id: 'cm2', label: 'Square centimeters', short: 'cm²', factor: 0.0001 },
      { id: 'm2', label: 'Square meters', short: 'm²', factor: 1 },
      { id: 'ft2', label: 'Square feet', short: 'ft²', factor: 0.09290304 },
      { id: 'yd2', label: 'Square yards', short: 'yd²', factor: 0.83612736 },
      { id: 'acre', label: 'Acres', short: 'acre', factor: 4046.8564224 },
      { id: 'ha', label: 'Hectares', short: 'ha', factor: 10000 },
    ],
  },
  {
    id: 'volume', label: 'Volume', units: [
      { id: 'ml', label: 'Milliliters', short: 'mL', factor: 0.000001 },
      { id: 'l', label: 'Liters', short: 'L', factor: 0.001 },
      { id: 'm3', label: 'Cubic meters', short: 'm³', factor: 1 },
      { id: 'in3', label: 'Cubic inches', short: 'in³', factor: 0.000016387064 },
      { id: 'ft3', label: 'Cubic feet', short: 'ft³', factor: 0.028316846592 },
      { id: 'yd3', label: 'Cubic yards', short: 'yd³', factor: 0.764554857984 },
      { id: 'gal', label: 'US gallons', short: 'gal', factor: 0.003785411784 },
    ],
  },
  {
    id: 'weight', label: 'Weight', units: [
      { id: 'g', label: 'Grams', short: 'g', factor: 0.001 },
      { id: 'kg', label: 'Kilograms', short: 'kg', factor: 1 },
      { id: 'oz', label: 'Ounces', short: 'oz', factor: 0.028349523125 },
      { id: 'lb', label: 'Pounds', short: 'lb', factor: 0.45359237 },
      { id: 'ton-us', label: 'US tons', short: 'ton', factor: 907.18474 },
      { id: 'tonne', label: 'Tonnes (metric)', short: 't', factor: 1000 },
    ],
  },
];

type Num = number | '';
const toNum = (v: Num): number => Number(v) || 0;

const formatNum = (n: number): string => {
  if (!isFinite(n)) return '—';
  const abs = Math.abs(n);
  if (abs !== 0 && abs < 0.0001) return n.toExponential(4);
  return parseFloat(n.toPrecision(10)).toLocaleString(undefined, { maximumFractionDigits: 6 });
};

const COMMON: [string, string][] = [
  ['1 inch', '2.54 cm'],
  ['1 foot', '0.3048 m'],
  ['1 yard', '0.9144 m'],
  ['1 cubic yard', '27 cubic feet'],
  ['1 gallon (US)', '3.785 L'],
  ['1 pound', '0.4536 kg'],
  ['1 ton (US)', '907.18 kg'],
];

export default function UnitConverter() {
  const [categoryId, setCategoryId] = useState('length');
  const [fromId, setFromId] = useState('ft');
  const [toId, setToId] = useState('m');
  const [value, setValue] = useState<Num>(1);
  const [feet, setFeet] = useState<Num>(10);
  const [inches, setInches] = useState<Num>(6);

  const category = CATEGORIES.find(c => c.id === categoryId) ?? CATEGORIES[0];
  const from = category.units.find(u => u.id === fromId) ?? category.units[0];
  const to = category.units.find(u => u.id === toId) ?? category.units[1];

  const converted = toNum(value) * from.factor / to.factor;
  const relation = formatNum(from.factor / to.factor);
  const decimalFeet = toNum(feet) + toNum(inches) / 12;

  const handleCategory = (id: string) => {
    const next = CATEGORIES.find(c => c.id === id) ?? CATEGORIES[0];
    setCategoryId(id);
    setFromId(next.units[0].id);
    setToId(next.units[1].id);
  };

  const handleSwap = () => {
    setFromId(to.id);
    setToId(from.id);
  };

  const setNum = (setter: (v: Num) => void) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setter(e.target.value === '' ? '' : Number(e.target.value));

  return (
    <div className="tool-panel tool-converter bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl mx-auto">
      <ToolWorkspaceHeading label="Jobsite converter" steps={['Pick a category', 'Choose units', 'Read the result']} />
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-600 rounded-lg text-white">
                <ArrowLeftRight className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Construction Unit Converter</h2>
                <p className="text-sm text-slate-400">Length, Area, Volume & Weight</p>
            </div>
         </div>
         <div className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300 hidden sm:block">
            Imperial ↔ Metric
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">

        {/* Left Col: Helper + Reference */}
        <div className="space-y-6">
            <div className="rounded-xl border border-cyan-200 bg-cyan-50/60 p-5">
                <h3 className="text-sm font-bold text-cyan-900 uppercase tracking-wide mb-4">Feet + Inches Helper</h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <label htmlFor="conv-feet" className="block text-xs font-bold text-slate-600">Feet</label>
                        <input id="conv-feet" type="number" min="0" value={feet} onChange={setNum(setFeet)}
                            className="w-full rounded-md border-slate-300 border focus:border-cyan-600 focus:ring-cyan-500 p-2.5" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="conv-inches" className="block text-xs font-bold text-slate-600">Inches</label>
                        <input id="conv-inches" type="number" min="0" value={inches} onChange={setNum(setInches)}
                            className="w-full rounded-md border-slate-300 border focus:border-cyan-600 focus:ring-cyan-500 p-2.5" />
                    </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase">Decimal feet</span>
                    <span className="text-2xl font-bold text-cyan-700 tabular-nums">{formatNum(decimalFeet)} ft</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase">Meters</span>
                    <span className="text-lg font-bold text-slate-700 tabular-nums">{formatNum(decimalFeet * 0.3048)} m</span>
                </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Common Jobsite Conversions</h3>
                <dl className="grid grid-cols-1 gap-2">
                    {COMMON.map(([left, right]) => (
                        <div key={left} className="flex justify-between text-sm border-b border-slate-200/80 pb-1.5 last:border-0">
                            <dt className="text-slate-600">{left}</dt>
                            <dd className="font-semibold text-slate-900 tabular-nums">{right}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>

        {/* Right Col: Converter Controls */}
        <div className="space-y-5">
            <div className="space-y-2">
                <span className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Category</span>
                <div className="grid grid-cols-4 gap-2" role="group" aria-label="Conversion category">
                    {CATEGORIES.map(c => (
                        <button key={c.id} type="button" onClick={() => handleCategory(c.id)} aria-pressed={categoryId === c.id}
                            className={`px-2 py-2.5 rounded-lg text-xs sm:text-sm font-bold border transition-colors ${categoryId === c.id ? 'bg-cyan-600 border-cyan-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-cyan-300'}`}>
                            {c.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="conv-value" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">Value</label>
                <input id="conv-value" type="number" value={value} onChange={setNum(setValue)}
                    className="w-full rounded-md border-slate-300 border focus:border-cyan-600 focus:ring-cyan-500 sm:text-lg p-2.5" />
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">
                <div className="space-y-2">
                    <label htmlFor="conv-from" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">From</label>
                    <select id="conv-from" value={fromId} onChange={e => setFromId(e.target.value)}
                        className="w-full rounded-md border-slate-300 border focus:border-cyan-600 focus:ring-cyan-500 p-2.5 bg-white">
                        {category.units.map(u => <option key={u.id} value={u.id}>{u.short}</option>)}
                    </select>
                </div>
                <button type="button" onClick={handleSwap} aria-label="Swap units"
                    className="mb-1 p-2.5 rounded-lg border border-slate-200 text-slate-500 hover:text-cyan-700 hover:border-cyan-300 transition-colors">
                    <ArrowLeftRight className="w-5 h-5" />
                </button>
                <div className="space-y-2">
                    <label htmlFor="conv-to" className="block text-sm font-bold text-slate-700 uppercase bg-slate-200 inline-block px-2 py-0.5 rounded">To</label>
                    <select id="conv-to" value={toId} onChange={e => setToId(e.target.value)}
                        className="w-full rounded-md border-slate-300 border focus:border-cyan-600 focus:ring-cyan-500 p-2.5 bg-white">
                        {category.units.map(u => <option key={u.id} value={u.id}>{u.short}</option>)}
                    </select>
                </div>
            </div>

            <div className="rounded-xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 text-center">
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-2">Result</div>
                <div className="text-4xl font-extrabold text-slate-900 tabular-nums break-words">
                    {formatNum(converted)} <span className="text-2xl font-bold text-cyan-700">{to.short}</span>
                </div>
                <div className="mt-3 text-sm text-slate-500 tabular-nums">
                    {formatNum(toNum(value) || 1)} {from.short} = {relation} {to.short}
                </div>
                <div className="mt-1 text-xs text-slate-400">
                    {from.label} → {to.label}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
