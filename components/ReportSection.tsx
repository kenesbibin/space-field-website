"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar, 
  FileText, 
  Filter,
  Share2
} from 'lucide-react';

const ReportsSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* SECTION 1: ANALYTICS DASHBOARD */}
      <section className="relative pt-32 pb-20 lg:py-32">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                 <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
                 <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Deep Insights</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Turn Field Data into <br/>
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Business Intelligence</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Don&rsquo;t let your data collect dust. Visualize project health, track team performance, and spot safety trends instantly with our interactive dashboards.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View Sample Reports <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: DASHBOARD MOCKUP */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden min-h-[450px] p-6">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800">Project Overview</h3>
                        <p className="text-xs text-slate-400">Last updated: Just now</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 bg-slate-100 rounded-lg border border-slate-200 text-slate-500">
                            <Calendar className="w-4 h-4" />
                        </div>
                        <div className="p-2 bg-slate-100 rounded-lg border border-slate-200 text-slate-500">
                            <Filter className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl">
                        <p className="text-[10px] font-bold text-blue-500 uppercase">Total Inspections</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">1,248</p>
                        <div className="flex items-center gap-1 text-[10px] text-green-600 font-bold mt-1">
                            <TrendingUp className="w-3 h-3" /> +12%
                        </div>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl">
                        <p className="text-[10px] font-bold text-amber-500 uppercase">Open Issues</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">34</p>
                        <div className="flex items-center gap-1 text-[10px] text-red-500 font-bold mt-1">
                            <TrendingUp className="w-3 h-3" /> +2%
                        </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                        <p className="text-[10px] font-bold text-emerald-500 uppercase">Compliance</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">98%</p>
                        <div className="w-full h-1 bg-emerald-200 rounded-full mt-2">
                            <div className="w-[98%] h-full bg-emerald-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-3 gap-4 h-48">
                    {/* Main Bar Chart */}
                    <div className="col-span-2 bg-slate-50 border border-slate-100 rounded-xl p-4 relative flex items-end justify-between gap-2">
                        {/* Bars */}
                        {[40, 70, 50, 90, 60, 80, 65].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                className="w-full bg-indigo-500 rounded-t-md opacity-80 hover:opacity-100 transition-opacity relative group"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}
                                </div>
                            </motion.div>
                        ))}
                        <div className="absolute top-4 left-4 text-xs font-bold text-slate-400">Weekly Activity</div>
                    </div>

                    {/* Donut Chart */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center relative">
                        <div className="text-xs font-bold text-slate-400 absolute top-4 left-4">Issues by Type</div>
                        <div className="relative w-24 h-24 rounded-full border-[8px] border-orange-400 border-l-indigo-500 border-b-emerald-400 flex items-center justify-center transform rotate-45">
                             {/* Inner Circle */}
                             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
                                 <span className="text-xs font-bold text-slate-600">Total</span>
                             </div>
                        </div>
                        <div className="mt-3 flex gap-2">
                            <div className="flex items-center gap-1 text-[8px] text-slate-500">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div> Safety
                            </div>
                            <div className="flex items-center gap-1 text-[8px] text-slate-500">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Quality
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: AUTOMATED REPORTING */}
      <section className="relative py-20 lg:py-32 bg-white/50">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: REPORT BUILDER MOCKUP - Order 2 on Mobile */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
               <div className="absolute -top-6 -left-6 w-full h-full bg-amber-100 rounded-2xl -z-10"></div>

               <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-8">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                          <FileText className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-slate-900">Export Report</h3>
                          <p className="text-xs text-slate-500">Configure your download settings</p>
                      </div>
                  </div>

                  <div className="space-y-6">
                      {/* Format Selection */}
                      <div>
                          <label className="text-xs font-bold text-slate-500 mb-2 block uppercase">File Format</label>
                          <div className="grid grid-cols-2 gap-3">
                              <div className="border-2 border-amber-500 bg-amber-50 text-amber-700 p-3 rounded-lg flex items-center justify-center gap-2 font-bold text-sm cursor-pointer shadow-sm">
                                  <FileText className="w-4 h-4" /> PDF Document
                              </div>
                              <div className="border border-slate-200 text-slate-500 p-3 rounded-lg flex items-center justify-center gap-2 font-bold text-sm cursor-pointer hover:bg-slate-50">
                                  <BarChart3 className="w-4 h-4" /> Excel / CSV
                              </div>
                          </div>
                      </div>

                      {/* Options */}
                      <div>
                          <label className="text-xs font-bold text-slate-500 mb-2 block uppercase">Include Data</label>
                          <div className="space-y-2">
                              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                  <span className="text-sm text-slate-700 font-medium">Site Photos & Annotations</span>
                                  <div className="w-5 h-5 bg-amber-500 rounded flex items-center justify-center text-white"><ArrowRight className="w-3 h-3 rotate-90" /></div>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                  <span className="text-sm text-slate-700 font-medium">GPS Location Maps</span>
                                  <div className="w-5 h-5 bg-amber-500 rounded flex items-center justify-center text-white"><ArrowRight className="w-3 h-3 rotate-90" /></div>
                              </div>
                          </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" /> Generate & Download
                      </button>
                  </div>
               </div>
            </motion.div>

            {/* Right: Text Content - Order 1 on Mobile */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 max-w-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                 <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
                 <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Custom Exports</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Professional Reports, <br/>
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Ready in Seconds.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Forget spending hours formatting spreadsheets. Space Capture automatically compiles your field data into professional, branded PDF reports or raw Excel exports.
              </p>

              <ul className="space-y-4">
                  {[
                    "Schedule Automated Email Delivery",
                    "White-Label with Your Company Logo",
                    "Filter by Date, User, or Project",
                    "One-Click Audit Logs"
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                              <Share2 className="w-3 h-3" />
                          </div>
                          {item}
                      </li>
                  ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ReportsSection;