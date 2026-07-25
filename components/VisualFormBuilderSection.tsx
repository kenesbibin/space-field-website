"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MousePointer2, 
  Settings, 
  Image as ImageIcon, 
  Star, 
  MapPin, 
  Camera, 
  CheckSquare, 
  LayoutTemplate, 
  Copy, 
  Edit3, 
  Trash2, 
  ToggleRight 
} from 'lucide-react';

const VisualFormBuilderSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* SECTION 1: NO CODE EDITOR */}
      <section className="relative pt-32 pb-20 lg:py-32">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                 <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                 <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Visual Editor</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                No-Code <br/>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Form Builder</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Tired of waiting for developers to update a single field? With SpaceCapture, you are the engineer. Drag and drop complex logic, customize branding, and deploy smart forms to your field teams instantly—all without writing a line of code.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/request-a-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: CSS Mockup (Form Builder UI) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Browser Toolbar */}
                <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="ml-4 bg-white px-3 py-1 rounded-md text-xs text-slate-400 flex-1 border border-slate-200">
                      spacecapture.ai/builder
                   </div>
                </div>

                {/* Builder Interface */}
                <div className="p-6 bg-slate-50 min-h-[400px] relative">
                   
                   {/* Form Canvas */}
                   <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-md mx-auto space-y-6">
                      
                      {/* Header Element */}
                      <div className="border-2 border-dashed border-transparent hover:border-blue-300 rounded-lg p-2 transition-colors cursor-pointer relative group">
                          <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                  <ImageIcon className="w-6 h-6 text-slate-400"/>
                              </div>
                              <div>
                                  <div className="w-32 h-4 bg-slate-800 rounded mb-2"></div>
                                  <div className="w-20 h-2 bg-slate-300 rounded"></div>
                              </div>
                          </div>
                      </div>

                      {/* Rating Element */}
                      <div className="space-y-2">
                          <p className="text-sm font-medium text-slate-700">Rate site safety compliance:</p>
                          <div className="flex gap-1">
                              {[1,2,3,4,5].map(i => (
                                  <Star key={i} className={`w-6 h-6 ${i<=3 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                              ))}
                          </div>
                      </div>

                      {/* Photo Upload Element (Active State) */}
                      <div className="relative group border-2 border-blue-500 bg-blue-50/50 rounded-lg p-4">
                          <div className="w-full h-32 bg-white rounded-lg border-2 border-dashed border-blue-200 flex flex-col items-center justify-center text-blue-400">
                              <ImageIcon className="w-8 h-8 mb-2" />
                              <span className="text-xs font-semibold">Upload Site Photo</span>
                          </div>
                          
                          {/* Simulated Cursor Interaction */}
                          <motion.div 
                             animate={{ x: [0, 20, 20, 0], y: [0, -10, 0, 0] }}
                             transition={{ duration: 4, repeat: Infinity }}
                             className="absolute bottom-4 right-12 z-20 pointer-events-none"
                          >
                              <MousePointer2 className="w-6 h-6 text-slate-900 fill-white drop-shadow-md" />
                          </motion.div>
                      </div>
                   </div>

                   {/* Floating Tool Palette (Field Properties) - REPLACED THEME SELECTOR */}
                   <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-10 right-4 md:right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-200 w-72 z-30"
                   >
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                          <span className="text-sm font-bold text-slate-800">Field Properties</span>
                          <Settings className="w-4 h-4 text-slate-400" />
                      </div>
                      
                      <div className="space-y-4">
                          {/* Property 1 */}
                          <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-blue-500" />
                                  <span className="text-xs font-medium text-slate-600">Auto-Geotagging</span>
                              </div>
                              <ToggleRight className="w-8 h-8 text-blue-600 cursor-pointer" />
                          </div>

                          {/* Property 2 */}
                          <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                  <Camera className="w-4 h-4 text-purple-500" />
                                  <span className="text-xs font-medium text-slate-600">Require Photo</span>
                              </div>
                              <ToggleRight className="w-8 h-8 text-blue-600 cursor-pointer" />
                          </div>

                          {/* Property 3 */}
                          <div className="space-y-1">
                              <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Validation</span>
                              <div className="bg-slate-100 p-2 rounded-lg flex justify-between items-center border border-slate-200">
                                  <span className="text-xs font-bold text-slate-700">Mandatory Field</span>
                                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
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

      {/* SECTION 2: OPERATIONAL TEMPLATES */}
      <section className="relative py-20 lg:py-32 bg-white/50">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: CSS Mockup (Template Library) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
               <div className="absolute -top-6 -left-6 w-full h-full bg-purple-200 rounded-2xl -z-10"></div>

               <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                      <div className="flex items-center gap-2">
                          <LayoutTemplate className="w-5 h-5 text-purple-600" />
                          <span className="font-bold text-slate-700">Operational Templates</span>
                      </div>
                      <div className="text-xs text-slate-400">120+ Available</div>
                  </div>

                  <div className="p-6 space-y-4">
                      <div className="border border-purple-200 bg-purple-50 rounded-xl p-4 relative shadow-sm transition-all hover:shadow-md">
                          <div className="flex justify-between items-start mb-3">
                              <h4 className="font-bold text-slate-900">Daily Site Safety Log</h4>
                              <span className="bg-purple-200 text-purple-800 text-[10px] px-2 py-0.5 rounded-full font-bold">POPULAR</span>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm text-slate-600">
                                  <span className="text-slate-400">1.</span> Site condition check?
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-600">
                                  <span className="text-slate-400">2.</span> PPE verified for all crew?
                              </div>
                          </div>

                          <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.5 }}
                             className="bg-slate-900 text-white text-xs rounded-lg py-2 px-4 absolute -bottom-4 right-4 shadow-lg flex gap-4 items-center"
                          >
                              <button className="flex items-center gap-1 hover:text-blue-300"><Edit3 className="w-3 h-3"/> Edit</button>
                              <button className="flex items-center gap-1 hover:text-blue-300"><Copy className="w-3 h-3"/> Copy</button>
                              <button className="flex items-center gap-1 hover:text-red-300"><Trash2 className="w-3 h-3"/> Delete</button>
                          </motion.div>
                      </div>

                      {[1, 2].map((i) => (
                          <div key={i} className="border border-slate-100 rounded-xl p-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                              <div className="h-4 w-2/3 bg-slate-200 rounded mb-2"></div>
                              <div className="h-2 w-full bg-slate-100 rounded"></div>
                          </div>
                      ))}
                  </div>
               </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 max-w-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                 <div className="h-1 w-12 bg-purple-600 rounded-full"></div>
                 <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Operational Templates</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Launch Faster with <br/>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Pre-Built Workflows</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Don't start from scratch. Benefit from our library of 100+ industry-standard operational templates used by thousands of field teams.
              </p>

              <ul className="space-y-4 mb-8">
                  {[
                    "Safety Audits & Risk Assessments",
                    "Equipment Maintenance Logs",
                    "Quality Control Checklists",
                    "Daily Progress Reports"
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                              <CheckSquare className="w-4 h-4" />
                          </div>
                          {item}
                      </li>
                  ))}
              </ul>

              <p className="text-sm text-slate-500 italic border-l-4 border-purple-200 pl-4">
                "Once you've created templates for your team, save them and share for consistent future use across all project sites."
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default VisualFormBuilderSection;