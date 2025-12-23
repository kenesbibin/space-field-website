"use client";

import React from "react";
import { CheckCircle2, XCircle, AlertCircle, Minus } from "lucide-react";
import { motion } from "framer-motion";

interface ComparisonRow {
  feature: string;
  competitorValue: string | boolean;
  ourValue: string | boolean;
  highlight?: boolean;
}

interface ComparisonTableProps {
  competitorName: string;
  ourName?: string;
  rows: ComparisonRow[];
  title?: string;
  subtitle?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  competitorName,
  ourName = "SpaceCapture",
  rows,
  title = "The Difference is Clear",
  subtitle = "Why leading teams are switching to Active AI",
}) => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="overflow-hidden bg-white rounded-2xl shadow-xl border border-slate-200">
          <div className="grid grid-cols-3 bg-slate-900 text-white py-6 px-4 md:px-8">
            <div className="col-span-1 font-bold text-lg md:text-xl flex items-center">
              Feature
            </div>
            <div className="col-span-1 font-bold text-lg md:text-xl text-center text-slate-400">
              {competitorName}
            </div>
            <div className="col-span-1 font-bold text-lg md:text-xl text-center text-indigo-400">
              {ourName}
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`grid grid-cols-3 py-6 px-4 md:px-8 items-center hover:bg-slate-50 transition-colors ${
                  row.highlight ? "bg-indigo-50/30" : ""
                }`}
              >
                {/* Feature Name */}
                <div className="col-span-1 font-medium text-slate-800 pr-4">
                  {row.feature}
                </div>

                {/* Competitor Value */}
                <div className="col-span-1 flex justify-center text-center text-slate-500 px-2">
                  {typeof row.competitorValue === "boolean" ? (
                    row.competitorValue ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-slate-300" />
                    )
                  ) : (
                    <span className="text-sm">{row.competitorValue}</span>
                  )}
                </div>

                {/* Our Value */}
                <div className="col-span-1 flex justify-center text-center font-bold text-indigo-700 px-2 relative">
                  {row.highlight && (
                    <div className="absolute inset-0 bg-indigo-100/50 -z-10 rounded-lg scale-x-110 scale-y-125 md:scale-y-110 opacity-0 md:opacity-100" />
                  )}
                  {typeof row.ourValue === "boolean" ? (
                    row.ourValue ? (
                      <CheckCircle2 className="w-7 h-7 text-indigo-600" />
                    ) : (
                      <Minus className="w-6 h-6 text-slate-300" />
                    )
                  ) : (
                    <span className="text-base">{row.ourValue}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="p-8 bg-slate-50 text-center border-t border-slate-100">
             <p className="text-sm text-slate-500 italic">
                *Comparison based on publicly available features as of {new Date().getFullYear()}.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
