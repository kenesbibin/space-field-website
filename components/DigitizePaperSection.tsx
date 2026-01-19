"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Smartphone, CheckCircle, ArrowRight, FileText, Repeat } from 'lucide-react';

const DIGITIZE_FEATURES = [
  {
    title: "Convert Excel to Mobile Apps",
    icon: FileSpreadsheet,
    description: "Import your existing Excel checklists and turn them into user-friendly mobile forms in minutes."
  },
  {
    title: "Paperless Safety Audits",
    icon: FileText,
    description: "Eliminate lost paperwork. Conduct safety audits on your phone and generate instant PDF reports."
  },
  {
    title: "Digital Daily Reports",
    icon: Smartphone,
    description: "Automate your daily construction reports. Capture photos, weather, and labor hours in one digital flow."
  }
];

const DigitizePaperSection = () => {
    return (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-32 -z-10"></div>

            <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-semibold mb-6">
                            <Repeat className="w-4 h-4" />
                            <span>Go Paperless Today</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                            Stop Using <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                                Paper & Excel.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Transform your messy clipboards and spreadsheets into a powerful digital daily construction report app. 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a href="/request-a-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Digitize Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                         {/* Feature List */}
                         <div className="space-y-6">
                            {DIGITIZE_FEATURES.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                         <feature.icon className="w-5 h-5" />
                                     </div>
                                     <div>
                                         <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                                         <p className="text-slate-500 text-sm">{feature.description}</p>
                                     </div>
                                </div>
                            ))}
                         </div>
                    </motion.div>

                    {/* Right Side Image/Illustration */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                             {/* Abstract representation of converting paper to digital */}
                             <div className="aspect-[4/3] bg-slate-100 relative flex items-center justify-center">
                                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>
                                  
                                  {/* Paper Stack */}
                                  <motion.div 
                                    className="absolute left-10 top-20 w-40 h-52 bg-white border border-slate-300 shadow-md rounded-lg p-4 rotate-[-6deg]"
                                    animate={{ x: [0, 10, 0], opacity: [1, 0, 1] }} 
                                    transition={{ duration: 4, repeat: Infinity }}
                                  >
                                      <div className="w-full h-4 bg-slate-200 rounded mb-3"></div>
                                      <div className="space-y-2">
                                         <div className="w-full h-2 bg-slate-100 rounded"></div>
                                         <div className="w-3/4 h-2 bg-slate-100 rounded"></div>
                                         <div className="w-full h-2 bg-slate-100 rounded"></div>
                                      </div>
                                  </motion.div>

                                  {/* Arrow */}
                                  <ArrowRight className="w-12 h-12 text-slate-400 z-10" />

                                  {/* Phone App */}
                                  <motion.div 
                                     className="absolute right-10 top-10 w-44 h-[280px] bg-slate-900 rounded-[2rem] border-4 border-slate-300 shadow-2xl p-2 z-20"
                                     initial={{ y: 20 }}
                                     animate={{ y: 0 }}
                                     transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                  >
                                      <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden flex flex-col">
                                          <div className="h-6 bg-slate-100 border-b border-slate-100"></div>
                                          <div className="p-3 space-y-3">
                                              <div className="w-full h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
                                                  Daily Report #102
                                              </div>
                                              <div className="space-y-1">
                                                  <div className="flex gap-1"><CheckCircle className="w-3 h-3 text-green-500"/><div className="w-20 h-2 bg-slate-100 rounded"></div></div>
                                                  <div className="flex gap-1"><CheckCircle className="w-3 h-3 text-green-500"/><div className="w-16 h-2 bg-slate-100 rounded"></div></div>
                                              </div>
                                              <div className="w-full h-24 bg-slate-100 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
                                                  <Smartphone className="w-6 h-6 text-slate-300" />
                                              </div>
                                          </div>
                                      </div>
                                  </motion.div>
                             </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DigitizePaperSection;
