"use client"

import React from 'react';
import { Smartphone, PenTool, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: "Unified Web & Mobile Ecosystem",
    icon: Smartphone, 
    description: "Seamlessly switch between the powerful Web Dashboard for office management and the robust Mobile App for on-site execution. One platform, total control."
  },
  {
    title: "Instant Digital Signatures",
    icon: PenTool,
    description: "Eliminate paper trails. Securely capture client approvals and technical sign-offs directly on the device to validate work and close jobs faster."
  },
  {
    title: "Live Field Synchronization",
    icon: Zap,
    description: "Eliminate the communication gap. Updates made on the field are instantly visible in the office, ensuring project managers always have real-time site data."
  },
  {
    title: "Automated Safety & Compliance",
    icon: ShieldCheck,
    description: "Digitize your safety protocols. Enforce mandatory checklists, incident reporting, and digital signatures to ensure your site meets all industry standards."
  }
];

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-24 lg:py-32">
      
      <div className="container mx-auto max-w-[1400px] px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side - CSS Phone Mockup */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center relative w-full"
          >
            <div className="relative z-10">
              {/* The Phone Frame */}
              <div className="relative border-slate-900 bg-slate-900 border-[14px] rounded-[3.5rem] h-[750px] w-[370px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/20">
                
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[32px] w-[120px] bg-slate-900 rounded-b-3xl z-20"></div>
                
                {/* Screen Content (Mock UI) */}
                <div className="flex-1 bg-slate-50 overflow-hidden relative">
                  
                  {/* App Header */}
                  <div className="pt-14 pb-6 px-6 bg-white shadow-sm z-10 relative">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Field Ops</p>
                        <h3 className="text-2xl font-extrabold text-slate-900">SPACE CAPTURE</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center ring-4 ring-blue-50">
                        <CheckCircle2 className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    {/* Daily Progress Widget */}
                    <div className="bg-slate-900 rounded-2xl p-4 text-white shadow-lg mt-4">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-medium text-slate-300">Site Completion</span>
                            <span className="text-2xl font-bold">85%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-[85%] shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                        </div>
                    </div>
                  </div>

                  {/* Task Scroll Area */}
                  <div className="p-6 space-y-4 overflow-y-hidden relative h-full">
                    <div className="flex justify-between items-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Tasks</p>
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">4 New</span>
                    </div>
                    
                    {/* Mock Task Cards */}
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transform transition-transform hover:scale-[1.02]">
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                            i === 1 ? 'bg-blue-50 text-blue-600' : 
                            i === 2 ? 'bg-purple-50 text-purple-600' :
                            'bg-slate-50 text-slate-500'
                        }`}>
                           {i === 1 ? <Zap className="w-6 h-6"/> : <Smartphone className="w-6 h-6"/>}
                        </div>
                        <div className="flex-1 min-w-0">
                           <div className="h-3 w-3/4 bg-slate-200 rounded-full mb-2"></div>
                           <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                        </div>
                        <div className={`h-3 w-3 rounded-full ${i === 1 ? 'bg-green-500' : 'border-2 border-slate-200'}`}></div>
                      </div>
                    ))}

                    {/* Fade out at bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Bottom Floating Action Button */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-6">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-14 rounded-2xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 text-sm font-bold hover:scale-105 transition-transform cursor-pointer">
                          <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" /> Sync Field Data
                      </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blobs behind phone */}
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"></div>
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </motion.div>

          {/* Right Side - Features List */}
          <motion.div 
            className="flex-1 w-full lg:pl-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                 <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                 <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Capabilities</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Our Features
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                 We combine powerful technology with simple usability to help you master every aspect of your field operations.
              </p>
            </div>

            <ul className="grid gap-6 md:grid-cols-2">
              {FEATURES.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  Icon={feature.icon}
                  description={feature.description}
                  index={index}
                />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  Icon: React.ElementType;
  description: string;
  index: number;
};

const FeatureItem = ({ title, Icon, description, index }: FeatureItemProps) => {
  const themes = [
    'group-hover:bg-blue-600 text-blue-600',
    'group-hover:bg-indigo-600 text-indigo-600',
    'group-hover:bg-purple-600 text-purple-600',
    'group-hover:bg-slate-800 text-slate-800'
  ];

  const bgColors = [
    'bg-blue-50',
    'bg-indigo-50',
    'bg-purple-50',
    'bg-slate-100'
  ];

  return (
    <motion.li 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-start group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`rounded-2xl p-4 ${bgColors[index % 4]} transition-colors duration-300 group-hover:bg-transparent`}>
        <div className={`h-8 w-8 ${themes[index % 4]} group-hover:text-white transition-colors duration-300`}>
             <Icon className="w-full h-full" />
        </div>
      </div>
      
      {/* Floating Background for Hover State */}
      <div className={`absolute inset-0 rounded-3xl ${themes[index % 4].split(' ')[0]} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>

      <h3 className="text-lg font-bold mt-5 text-slate-900">
        {title}
      </h3>

      <p className="text-sm text-slate-500 mt-3 leading-relaxed">
        {description}
      </p>
    </motion.li>
  );
};

export default Features;


