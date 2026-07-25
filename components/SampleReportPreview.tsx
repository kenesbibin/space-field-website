"use client";

import React from 'react';
import { Download, CheckCircle, MapPin, Calendar, User, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const SampleReportPreview = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Professional Site Audit Report Template
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            This is an example of the clean, professional PDF reports SpaceCapture generates automatically. 
            Impress your clients with branded, easy-to-read documentation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* REPORT PREVIEW (Paper Look) */}
          <div className="w-full max-w-[210mm] mx-auto bg-white shadow-2xl border border-slate-200 min-h-[297mm] p-[15mm] relative hidden md:block transform scale-90 origin-top">
            
            {/* Header */}
            <div className="flex justify-between items-start border-b-2 border-slate-900 pb-6 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">SITE INSPECTION REPORT</h1>
                <div className="text-sm text-slate-500 font-medium">Report #2024-05-12-A</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-indigo-600 mb-1">SpaceCapture</div>
                <div className="text-xs text-slate-400">Powered by AI Field Intelligence</div>
              </div>
            </div>

            {/* Project Info Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-8 bg-slate-50 p-6 rounded-lg border border-slate-100">
               <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Project Name</div>
                  <div className="font-semibold text-slate-900">Skyline Tower Renovation</div>
               </div>
               <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Location</div>
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" /> 123 Construction Ave, NY
                  </div>
               </div>
               <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Inspection Date</div>
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" /> Oct 24, 2025
                  </div>
               </div>
               <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Inspector</div>
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" /> Alex Richardson
                  </div>
               </div>
            </div>

            {/* Summary Stats */}
            <div className="flex gap-4 mb-8">
                <div className="flex-1 bg-green-50 border border-green-100 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-green-700">12</div>
                    <div className="text-xs font-bold text-green-600 uppercase">Items Passed</div>
                </div>
                <div className="flex-1 bg-amber-50 border border-amber-100 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-amber-700">3</div>
                    <div className="text-xs font-bold text-amber-600 uppercase">Issues Found</div>
                </div>
                <div className="flex-1 bg-blue-50 border border-blue-100 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-blue-700">98%</div>
                    <div className="text-xs font-bold text-blue-600 uppercase">Score</div>
                </div>
            </div>

            {/* Content Body - Checklist Item 1 */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 border-l-4 border-indigo-500 pl-3 mb-4 bg-slate-50 py-1">
                    1. Safety & Compliance
                </h3>
                
                <div className="mb-4 pl-4 border-b border-slate-100 pb-4">
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold text-slate-800">1.1 PPE Compliance</span>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> PASS
                        </span>
                    </div>
                    <p className="text-sm text-slate-500">All workers observed wearing hard hats and high-visibility vests.</p>
                </div>

                <div className="mb-4 pl-4 border-b border-slate-100 pb-4">
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold text-slate-800">1.2 Perimeter Fencing</span>
                        <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> ISSUE
                        </span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">
                        South gate latch is broken and remains open. Requires immediate maintenance.
                    </p>
                    
                    {/* Mock Photo Placeholders */}
                    <div className="flex gap-3">
                       <div className="w-32 h-24 bg-slate-200 rounded flex items-center justify-center text-slate-400 text-xs text-center p-2">
                          [Photo Evidence 1]
                       </div>
                       <div className="w-32 h-24 bg-slate-200 rounded flex items-center justify-center text-slate-400 text-xs text-center p-2">
                          [Photo Evidence 2]
                       </div>
                    </div>
                </div>
            </div>

             {/* Footer */}
             <div className="absolute bottom-[15mm] left-[15mm] right-[15mm] flex justify-between border-t border-slate-200 pt-4">
                 <div className="text-xs text-slate-400">Generated by SpaceCapture</div>
                 <div className="text-xs text-slate-400">Page 1 of 5</div>
             </div>

          </div>

          {/* MOBILE VIEW PLACEHOLDER (Since the detailed CSS paper might differ on mobile) */}
          <div className="w-full bg-white shadow-xl border border-slate-200 p-6 rounded-xl md:hidden">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                      <Download className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900">Sample Report PDF</div>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                  The full report template is best viewed on desktop or by downloading the sample below.
              </p>
          </div>

          {/* Sidebar / Actions */}
          <div className="w-full lg:w-80 flex flex-col gap-6 sticky top-24">
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">Download Sample</h3>
                <p className="text-sm text-slate-500 mb-6">
                    See the full 5-page audit report including charts, maps, and detailed item breakdowns.
                </p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1">
                    <Download className="w-4 h-4" /> Download PDF
                </button>
             </div>

             <div className="bg-indigo-900 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-2">Customize Your Report</h3>
                    <p className="text-indigo-200 text-sm mb-6">
                        Add your logo, choose your brand colors, and configure specific data fields.
                    </p>
                    <a href="/request-a-demo" className="block text-center w-full bg-white text-indigo-900 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                        Start Free Trial
                    </a>
                </div>
                {/* Decorative BG */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-800 rounded-full opacity-50"></div>
                <div className="absolute top-4 right-4 text-indigo-800 opacity-30">
                    <CheckCircle className="w-16 h-16" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SampleReportPreview;
