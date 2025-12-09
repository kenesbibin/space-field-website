"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
   ArrowRight, 
   Lock, 
  Users, 
  Check, 
  MoreHorizontal, 
  ChevronDown, 
  UserCog,
  FileKey,
  Eye,
  Edit3,
  Trash2
} from 'lucide-react';

const AccessControlSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* SECTION 1: ROLE-BASED ACCESS CONTROL (RBAC) */}
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
                 <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                 <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Security First</span>
              </div>
              
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                        Enterprise-Grade <br/>
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Access Control</span>
                     </h1>
              
                     <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Define exactly who can see, edit, or delete data. Create custom roles like &ldquo;Field Inspector,&rdquo; &ldquo;Project Manager,&rdquo; or &ldquo;Auditor&rdquo; to ensure data integrity and compliance across your organization.
                     </p>

              <div className="flex gap-4">
                <Link 
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white text-base font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Secure Your Data <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: RBAC MOCKUP */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden min-h-[400px] z-10">
                {/* Header */}
                <div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
                   <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-indigo-600" />
                      <span className="font-bold text-slate-800">Team Members</span>
                   </div>
                   <button className="text-xs font-bold text-white bg-indigo-600 px-3 py-1.5 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors">
                      + Invite Member
                   </button>
                </div>

                {/* Member List */}
                <div className="p-6 space-y-4">
                   {/* Admin User */}
                   <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">JD</div>
                         <div>
                            <p className="text-sm font-bold text-slate-900">John Doe</p>
                            <p className="text-xs text-slate-500">john@company.com</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Admin</span>
                         <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer" />
                      </div>
                   </div>

                   {/* Field User (Active Selection) */}
                   <div className="relative flex items-center justify-between p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50/30 shadow-md transition-all">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">AS</div>
                         <div>
                            <p className="text-sm font-bold text-slate-900">Sarah Smith</p>
                            <p className="text-xs text-slate-500">sarah@company.com</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="flex items-center gap-1 bg-white border border-emerald-200 px-2 py-1 rounded-lg shadow-sm cursor-pointer">
                            <span className="text-emerald-700 text-[10px] font-bold uppercase tracking-wide">Field User</span>
                            <ChevronDown className="w-3 h-3 text-emerald-500" />
                         </div>
                         <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer" />
                      </div>

                      {/* Floating Permissions Tooltip */}
                      <motion.div 
                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
                         whileInView={{ opacity: 1, y: 0, scale: 1 }}
                         transition={{ delay: 0.6 }}
                         className="absolute top-full right-10 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-20"
                      >
                         <p className="text-xs font-bold text-slate-400 uppercase mb-3">Permissions: Field User</p>
                         <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                               <div className="flex items-center gap-2 text-slate-700">
                                  <Edit3 className="w-3 h-3 text-emerald-500" />
                                  <span>Submit Forms</span>
                               </div>
                               <Check className="w-4 h-4 text-emerald-500" />
                            </div>
                            <div className="flex items-center justify-between text-sm">
                               <div className="flex items-center gap-2 text-slate-700">
                                  <Eye className="w-3 h-3 text-emerald-500" />
                                  <span>View Own Data</span>
                               </div>
                               <Check className="w-4 h-4 text-emerald-500" />
                            </div>
                            <div className="flex items-center justify-between text-sm opacity-50">
                               <div className="flex items-center gap-2 text-slate-700">
                                  <Trash2 className="w-3 h-3" />
                                  <span>Delete Records</span>
                               </div>
                               <div className="w-4 h-4 border border-slate-300 rounded-full"></div>
                            </div>
                         </div>
                      </motion.div>
                   </div>

                   {/* Viewer User */}
                   <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all opacity-70">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">MK</div>
                         <div>
                            <p className="text-sm font-bold text-slate-900">Mike K.</p>
                            <p className="text-xs text-slate-500">mike@client.com</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Client Viewer</span>
                         <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer" />
                      </div>
                   </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-emerald-500/10 rounded-3xl"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: USER TASK ASSIGNMENTS */}
      <section className="relative py-20 lg:py-32 bg-white/50">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: TASK ASSIGNMENT MOCKUP */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
               <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-100 rounded-2xl -z-10"></div>

               <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-8 relative">
                  
                  {/* Assignment Card */}
                  <div className="border border-slate-200 rounded-xl p-5 space-y-5">
                      <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900">Assign Inspection</h3>
                          <Lock className="w-4 h-4 text-slate-400" />
                      </div>

                      <div className="space-y-4">
                          {/* Select User */}
                          <div>
                              <label className="text-xs font-bold text-slate-500 mb-1.5 block">ASSIGN TO</label>
                              <div className="flex items-center gap-2 p-2 border border-indigo-200 bg-indigo-50 rounded-lg cursor-pointer">
                                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">AS</div>
                                  <span className="text-sm text-slate-900 font-medium flex-1">Sarah Smith (Field Team)</span>
                                  <Check className="w-4 h-4 text-indigo-600" />
                              </div>
                          </div>

                          {/* Select Location */}
                          <div>
                              <label className="text-xs font-bold text-slate-500 mb-1.5 block">RESTRICT ACCESS TO</label>
                              <div className="p-2 border border-slate-200 rounded-lg flex items-center justify-between text-sm text-slate-600">
                                  <span>Site Alpha - Sector 4</span>
                                  <ChevronDown className="w-4 h-4 text-slate-400" />
                              </div>
                          </div>

                          {/* Expiration */}
                          <div>
                              <label className="text-xs font-bold text-slate-500 mb-1.5 block">ACCESS EXPIRATION</label>
                              <div className="flex gap-2">
                                  <span className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-600 cursor-pointer">24 Hours</span>
                                  <span className="px-3 py-1 bg-slate-900 text-white rounded-md text-xs font-medium shadow-lg transform scale-105 cursor-pointer">1 Week</span>
                                  <span className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-600 cursor-pointer">Permanent</span>
                              </div>
                          </div>
                      </div>

                      <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                          <UserCog className="w-4 h-4" /> Grant Access
                      </button>
                  </div>

                  {/* Success Toast Animation */}
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1 }}
                     className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-2 px-4 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap"
                  >
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-2 h-2 text-white" />
                      </div>
                      Task assigned securely to Sarah
                  </motion.div>
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
                 <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                 <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Task Assignment</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Right Person, <br/>
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Right Place.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Assign inspections and forms to specific users or teams. Ensure sensitive project data is only accessible to authorized personnel, and revoke access automatically when a job is done.
              </p>

              <ul className="space-y-4">
                  {[
                    "Direct User-to-Task Assignment",
                    "Location-Based Geofencing Access",
                    "Temporary / Guest Access Links"
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                              <FileKey className="w-3 h-3" />
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

export default AccessControlSection;