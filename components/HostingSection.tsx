"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Cloud, 
  Server, 
  ShieldCheck, 
  Globe, 
  Lock, 
  Database,
  Cpu
} from 'lucide-react';

const HostingSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* SECTION 1: HOSTING OPTIONS */}
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
                 <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Deployment</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Flexible Hosting <br/>
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Your Way</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Space Capture offers the most flexible hosting options in the market. Whether you need the speed of our global SaaS cloud, the isolation of a private instance, or total control via on-premise deployment—we've got you covered.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Request Hosting Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: HOSTING ARCHITECTURE MOCKUP */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
               <div className="relative w-full max-w-lg">
                  
                  {/* Central Hub (Space Capture Core) */}
                  <div className="relative z-20 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 mb-8">
                      <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                              <Globe className="w-6 h-6 text-white" />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-slate-900">Space Capture Core</h3>
                              <p className="text-xs text-slate-500">Deployment Environment</p>
                          </div>
                      </div>
                      <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                              <Cloud className="w-5 h-5 text-blue-600" />
                              <div>
                                  <span className="text-sm font-bold text-slate-800 block">SaaS Cloud</span>
                                  <span className="text-[10px] text-slate-500">Instant scaling, zero maintenance.</span>
                              </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-100">
                              <Lock className="w-5 h-5 text-purple-600" />
                              <div>
                                  <span className="text-sm font-bold text-slate-800 block">Private Cloud</span>
                                  <span className="text-[10px] text-slate-500">Dedicated VPC, isolated resources.</span>
                              </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100 border border-slate-200">
                              <Server className="w-5 h-5 text-slate-600" />
                              <div>
                                  <span className="text-sm font-bold text-slate-800 block">On-Premise</span>
                                  <span className="text-[10px] text-slate-500">Air-gapped, self-hosted control.</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Floating Elements (Security/Data) */}
                  <motion.div 
                     animate={{ y: [-10, 10, -10] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-0 -right-4 md:-right-12 bg-white p-4 rounded-xl shadow-xl border border-emerald-100 z-30 max-w-[180px]"
                  >
                      <div className="flex items-center gap-2 mb-2 text-emerald-600">
                          <ShieldCheck className="w-5 h-5" />
                          <span className="text-xs font-bold uppercase">Enterprise Grade</span>
                      </div>
                      <p className="text-[10px] text-slate-500">SOC 2 Type II Compliant & ISO 27001 Certified Data Centers.</p>
                  </motion.div>

                  <motion.div 
                     animate={{ y: [10, -10, 10] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="absolute -bottom-4 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-amber-100 z-30 max-w-[180px]"
                  >
                      <div className="flex items-center gap-2 mb-2 text-amber-600">
                          <Database className="w-5 h-5" />
                          <span className="text-xs font-bold uppercase">Data Residency</span>
                      </div>
                      <p className="text-[10px] text-slate-500">Host data in US, EU, AU, or your own local servers.</p>
                  </motion.div>

                  {/* Background Decor */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-200/30 rounded-full blur-[80px] -z-10"></div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: COMPARISON TABLE (Optional but good for SEO content) */}
      <section className="relative py-20 bg-white/50">
         <div className="container mx-auto max-w-[1200px] px-4">
             <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Choose Your Deployment Model</h2>
                 <p className="text-slate-600">Match your infrastructure to your security and compliance needs.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 {/* SaaS Card */}
                 <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 transition-colors">
                     <Cloud className="w-12 h-12 text-blue-500 mb-6" />
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Cloud SaaS</h3>
                     <p className="text-sm text-slate-500 mb-6">Best for teams who want to get started instantly.</p>
                     <ul className="space-y-3">
                         {["Multi-tenant Architecture", "Automatic Updates", "99.9% Uptime SLA", "Global CDN"].map((item, i) => (
                             <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {item}
                             </li>
                         ))}
                     </ul>
                 </div>

                 {/* Private Cloud Card */}
                 <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800 transform md:-translate-y-4">
                     <Lock className="w-12 h-12 text-indigo-400 mb-6" />
                     <h3 className="text-xl font-bold text-white mb-2">Private Cloud</h3>
                     <p className="text-sm text-slate-400 mb-6">For organizations needing isolated resources.</p>
                     <ul className="space-y-3">
                         {["Single-tenant Environment", "Custom Domain & SSO", "Dedicated Database", "VPC Peering"].map((item, i) => (
                             <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                 <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div> {item}
                             </li>
                         ))}
                     </ul>
                 </div>

                 {/* On-Premise Card */}
                 <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-slate-400 transition-colors">
                     <Server className="w-12 h-12 text-slate-600 mb-6" />
                     <h3 className="text-xl font-bold text-slate-900 mb-2">On-Premise</h3>
                     <p className="text-sm text-slate-500 mb-6">Complete control for high-compliance sectors.</p>
                     <ul className="space-y-3">
                         {["Self-Hosted (Docker/K8s)", "Full Data Sovereignty", "Air-Gapped Capable", "Custom Audit Logs"].map((item, i) => (
                             <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                 <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> {item}
                             </li>
                         ))}
                     </ul>
                 </div>
             </div>
         </div>
      </section>

    </div>
  );
};

export default HostingSection;