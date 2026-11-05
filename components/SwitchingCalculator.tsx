"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, DollarSign, Clock, Users } from "lucide-react";

const SwitchingCalculator = () => {
  const [inspectors, setInspectors] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(35);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(4);

  // Calculations
  const weeklyCost = inspectors * hourlyRate * hoursPerWeek;
  const annualCost = weeklyCost * 52;
  const savingsPercent = 0.60; // Assume 60% time saving
  const annualSavings = annualCost * savingsPercent;

  return (
    <div className="tool-panel tool-roi w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
      <div className="grid md:grid-cols-2">
        {/* Input Section */}
        <div className="p-8 md:p-10 bg-slate-50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Calculate Your Waste</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400" /> Number of Inspectors
              </label>
              <input
                type="number"
                min="1"
                value={inspectors}
                onChange={(e) => setInspectors(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-bold text-slate-900 bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-slate-400" /> Avg. Hourly Burden Rate ($)
              </label>
              <input
                type="number"
                min="1"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-bold text-slate-900 bg-white"
              />
              <p className="text-xs text-slate-400 mt-1">Include salary + overhead.</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" /> Hours Typing Reports / Week (Per Person)
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs font-bold text-slate-500 mt-2">
                <span>1 hr</span>
                <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{hoursPerWeek} hrs</span>
                <span>20 hrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="p-8 md:p-10 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <p className="text-slate-400 font-medium mb-1">Your annual cost of manual entry:</p>
            <h4 className="text-3xl font-bold text-white mb-8">
              ${annualCost.toLocaleString()}
            </h4>

            <div className="h-px w-full bg-slate-800 mb-8"></div>

            <p className="text-indigo-300 font-bold uppercase tracking-wider text-sm mb-2">
                Potential Savings with SpaceCapture
            </p>
            <motion.div 
               key={annualSavings}
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-6"
            >
              ${annualSavings.toLocaleString()}
            </motion.div>
            
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                By switching to Active AI, you could reclaim ~60% of administrative time, allowing your team to do {Math.round(hoursPerWeek * 0.6 * 52 * inspectors)} more hours of actual inspection work per year.
            </p>

            <a href="/request-a-demo" className="inline-flex items-center justify-center w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all hover:scale-[1.02]">
                Start Saving Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchingCalculator;
