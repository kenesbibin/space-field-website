"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Webhook, 
  Database, 
  Code2, 
  Bot, 
  Workflow, 
  CheckCircle2,
  Network,
  Zap
} from 'lucide-react';

const IntegrationsSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* SECTION 1: WEBHOOKS & API */}
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
                 <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                 <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Developer Tools</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Powerful <br/>
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Webhooks</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We've worked hard to flatten our data structure and provide the most robust webhooks in the industry. Instantly push field data to your CRM, Slack, or custom internal tools the moment a form is submitted.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Read Documentation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: WEBHOOK MOCKUP */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[450px] flex items-center justify-center">
                 
                 {/* Background Layer (Blurred Dashboard) */}
                 <div className="absolute inset-0 bg-white/40 border border-white/50 rounded-2xl backdrop-blur-sm p-6 transform scale-95 -z-10">
                     <div className="h-8 w-1/3 bg-slate-200 rounded mb-6"></div>
                     <div className="space-y-3">
                         {[1,2,3,4].map(i => (
                             <div key={i} className="h-12 w-full bg-slate-100 rounded-lg"></div>
                         ))}
                     </div>
                 </div>

                 {/* Connection Line */}
                 <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 z-0" style={{ overflow: 'visible' }}>
                     <path d="M -80 0 C 0 0 0 80 80 80" fill="none" stroke="#6366f1" strokeWidth="3" strokeDasharray="6 6" />
                     <circle cx="-80" cy="0" r="6" fill="#6366f1" />
                     <circle cx="80" cy="80" r="6" fill="#ec4899" />
                 </svg>

                 {/* Card 1: Source (Form Event) */}
                 <div className="absolute top-10 left-0 md:left-10 bg-white p-4 rounded-xl shadow-xl border border-indigo-100 w-64 z-10">
                     <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-bold text-slate-500 uppercase">Trigger</span>
                         <Webhook className="w-4 h-4 text-indigo-500" />
                     </div>
                     <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                         <p className="text-sm font-bold text-indigo-900">New Inspection Submitted</p>
                         <p className="text-[10px] text-indigo-600 mt-1">ID: #FORM_2093</p>
                     </div>
                     <div className="mt-3 flex gap-2">
                         <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Active</span>
                         <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full">JSON</span>
                     </div>
                 </div>

                 {/* Floating Icon Center */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-20 border-4 border-white">
                     <Network className="w-6 h-6 text-white" />
                 </div>

                 {/* Card 2: Destination (CRM Record) */}
                 <div className="absolute bottom-10 right-0 md:right-10 bg-white p-4 rounded-xl shadow-xl border border-pink-100 w-72 z-10">
                     <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-bold text-slate-500 uppercase">Destination: CRM</span>
                         <Database className="w-4 h-4 text-pink-500" />
                     </div>
                     <div className="space-y-2">
                         <div className="flex justify-between items-center text-xs border-b border-slate-50 pb-1">
                             <span className="text-slate-500">Status</span>
                             <span className="font-mono font-bold text-slate-700">High Priority</span>
                         </div>
                         <div className="flex justify-between items-center text-xs border-b border-slate-50 pb-1">
                             <span className="text-slate-500">Customer</span>
                             <span className="font-mono font-bold text-slate-700">Acme Corp</span>
                         </div>
                         <div className="flex justify-between items-center text-xs">
                             <span className="text-slate-500">Action</span>
                             <span className="font-mono font-bold text-pink-600">Create Ticket</span>
                         </div>
                     </div>
                 </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: AI AGENTS */}
      <section className="relative py-20 lg:py-32 bg-white/50">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: AI AGENT VISUALIZATION - Order 2 on Mobile */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
               <div className="absolute -top-6 -left-6 w-full h-full bg-purple-200 rounded-2xl -z-10"></div>

               <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden p-8 relative">
                  <div className="absolute top-0 right-0 p-4">
                      <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                          <span className="text-xs font-bold text-purple-300">AGENT LISTENING</span>
                      </div>
                  </div>

                  <div className="flex flex-col gap-6 mt-4">
                      {/* Chat Bubble 1 (System) */}
                      <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                              <Bot className="w-6 h-6 text-white" />
                          </div>
                          <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 max-w-[80%]">
                              <p className="text-sm text-slate-300 mb-2">I detected a critical safety failure in the latest inspection report.</p>
                              <div className="bg-slate-900 p-2 rounded text-xs font-mono text-red-400 border border-red-900/30">
                                 Error: Guard rail missing on Level 4
                              </div>
                          </div>
                      </div>

                      {/* Chat Bubble 2 (Action) */}
                      <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
                              <Workflow className="w-6 h-6 text-white" />
                          </div>
                          <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 max-w-[80%]">
                              <p className="text-sm text-slate-300 mb-2">Executing automated response protocols:</p>
                              <ul className="space-y-2">
                                  <li className="flex items-center gap-2 text-xs text-green-400">
                                      <CheckCircle2 className="w-3 h-3" /> Notified Site Manager via SMS
                                  </li>
                                  <li className="flex items-center gap-2 text-xs text-green-400">
                                      <CheckCircle2 className="w-3 h-3" /> Created High-Priority Maintenance Ticket
                                  </li>
                                  <li className="flex items-center gap-2 text-xs text-green-400">
                                      <CheckCircle2 className="w-3 h-3" /> Scheduled Re-inspection for tomorrow
                                  </li>
                              </ul>
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
                 <div className="h-1 w-12 bg-purple-600 rounded-full"></div>
                 <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">AI Integration</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Connect with <br/>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Autonomous Agents</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Go beyond simple data piping. Integrate Space Capture with AI Agents to analyze field data in real-time and trigger complex, multi-step workflows across your entire software stack automatically.
              </p>

              <ul className="space-y-4">
                  {[
                    "Natural Language Querying of Field Data",
                    "Automated Risk Assessment & Triage",
                    "Seamless Handover to Slack/Teams Bots"
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                              <Zap className="w-4 h-4" />
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

export default IntegrationsSection;