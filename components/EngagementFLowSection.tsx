"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  GitBranch, 
  Zap, 
  Mail, 
  MessageSquare, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Play
} from 'lucide-react';

const EngagementFlowsSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* SECTION 1: VISUAL WORKFLOW BUILDER */}
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
                 <div className="h-1 w-12 bg-purple-600 rounded-full"></div>
                 <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Automation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Visual <br/>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Engagement Flows</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Design complex field logic without writing code. Use our drag-and-drop canvas to route tasks, trigger notifications, and update records based on real-time data inputs.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Build a Flow <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: FLOW CHART MOCKUP */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden min-h-[450px] flex flex-col">
                {/* Toolbar */}
                <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-4 justify-between">
                   <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <GitBranch className="w-4 h-4" /> Workflow: Safety Incident
                   </span>
                   <div className="flex gap-2">
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold">ACTIVE</div>
                   </div>
                </div>

                {/* Canvas */}
                <div className="flex-1 relative bg-slate-50/50 p-6 overflow-hidden">
                   {/* Grid Background */}
                   <div className="absolute inset-0 opacity-[0.05]" 
                        style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                   </div>

                   {/* Nodes Container - Centered */}
                   <div className="relative w-full h-full flex flex-col items-center gap-8 pt-4">
                      
                      {/* Node 1: Trigger */}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-48 bg-white p-3 rounded-xl shadow-md border border-slate-200 relative z-10"
                      >
                         <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                               <Zap className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-slate-700">Form Submitted</span>
                         </div>
                         <div className="text-[10px] text-slate-500 bg-slate-50 p-1 rounded">Type: Inspection Report</div>
                         {/* Connector Line Down */}
                         <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-slate-300"></div>
                      </motion.div>

                      {/* Node 2: Condition */}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="w-48 bg-white p-3 rounded-xl shadow-md border border-amber-200 relative z-10"
                      >
                         <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                               <AlertTriangle className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-slate-700">Check Severity</span>
                         </div>
                         <div className="text-[10px] text-slate-500 bg-slate-50 p-1 rounded">If Risk Level &gt; High</div>
                         
                         {/* Connector Lines Branching */}
                         <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-slate-300"></div>
                         <div className="absolute top-full left-1/2 w-24 h-4 border-t-2 border-r-2 border-slate-300 rounded-tr-xl transform translate-x-0.5"></div>
                         <div className="absolute top-full right-1/2 w-24 h-4 border-t-2 border-l-2 border-slate-300 rounded-tl-xl transform -translate-x-0.5"></div>
                      </motion.div>

                      {/* Node 3 & 4: Actions */}
                      <div className="flex gap-8 w-full justify-center">
                          {/* Left Action */}
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="w-40 bg-white p-3 rounded-xl shadow-md border border-purple-200 relative z-10"
                          >
                             <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center text-purple-600">
                                   <Mail className="w-3 h-3" />
                                </div>
                                <span className="text-xs font-bold text-slate-700">Alert Manager</span>
                             </div>
                          </motion.div>

                          {/* Right Action */}
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="w-40 bg-white p-3 rounded-xl shadow-md border border-slate-200 relative z-10 opacity-50"
                          >
                             <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-slate-100 rounded-md flex items-center justify-center text-slate-500">
                                   <CheckCircle className="w-3 h-3" />
                                </div>
                                <span className="text-xs font-bold text-slate-700">Auto-Approve</span>
                             </div>
                          </motion.div>
                      </div>

                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: SMART TRIGGERS */}
      <section className="relative py-20 lg:py-32 bg-white/50">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: LOGIC BUILDER MOCKUP - Order 2 on Mobile */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
               <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-200 rounded-2xl -z-10"></div>

               <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-6">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Automation Rule #1</h3>
                  
                  {/* Logic Card */}
                  <div className="space-y-4">
                      {/* IF Block */}
                      <div className="flex gap-4">
                          <div className="flex flex-col items-center gap-1 pt-1">
                              <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                              <div className="w-0.5 h-full bg-slate-200"></div>
                          </div>
                          <div className="flex-1 pb-6">
                              <span className="text-xs font-bold text-slate-500 block mb-1">WHEN</span>
                              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-3">
                                  <Clock className="w-4 h-4 text-blue-500" />
                                  <span className="text-sm font-medium text-slate-700">Inspection is Overdue by 2 Days</span>
                              </div>
                          </div>
                      </div>

                      {/* THEN Block */}
                      <div className="flex gap-4">
                          <div className="flex flex-col items-center gap-1 pt-1">
                              <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100"></div>
                          </div>
                          <div className="flex-1">
                              <span className="text-xs font-bold text-indigo-600 block mb-1">THEN DO THIS</span>
                              <div className="space-y-2">
                                  <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg flex items-center gap-3 shadow-sm">
                                      <MessageSquare className="w-4 h-4 text-indigo-600" />
                                      <span className="text-sm font-medium text-indigo-900">Send SMS to Assignee</span>
                                  </div>
                                  <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg flex items-center gap-3 shadow-sm">
                                      <Zap className="w-4 h-4 text-indigo-600" />
                                      <span className="text-sm font-medium text-indigo-900">Update Priority to 'High'</span>
                                  </div>
                              </div>
                          </div>
                      </div>
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
                 <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                 <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Smart Triggers</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                If This, <br/>
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Then That.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Automate the boring stuff. Set up rules that work while you sleep. Automatically flag high-risk inspections, dispatch follow-up crews, or generate PDF reports instantly upon submission.
              </p>

              <ul className="space-y-4">
                  {[
                    "Time-Based Triggers (e.g., Monthly)",
                    "Condition-Based Actions (e.g., If Failed)",
                    "Cross-Platform Notifications"
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                              <Play className="w-3 h-3 fill-current" />
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

export default EngagementFlowsSection;