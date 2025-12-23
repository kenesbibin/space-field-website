import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { HardHat, ClipboardCheck, Clock, CheckCircle2, Video } from "lucide-react";
import { div } from "framer-motion/client";

export const metadata: Metadata = {
  title: "Automated Construction Punch Lists | SpaceCapture",
  description: "Close out projects faster. Turn site walks into automated punch lists using video capture. Reduce rework and subcontractor disputes.",
};

const ConstructionPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
           {/* Yellow theme for Construction */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             {/* Text */}
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 text-sm font-semibold mb-6">
                <HardHat className="w-4 h-4" /> Construction & Engineering
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Automated <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200">
                  Punch Lists.
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Stop tapping at your screen. Just walk the site with your camera.
                SpaceCapture automatically identifies defects, assigns subcontractors, and creates the punch list for you.
              </p>
              <div className="flex gap-4">
                 <a href="/book-a-demo" className="px-8 py-4 bg-yellow-500 text-slate-900 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20">
                    See It In Action
                 </a>
              </div>
            </div>

             {/* Visual */}
             <div className="order-1 lg:order-2 relative">
                 <div className="aspect-square bg-slate-800 rounded-3xl border border-slate-700 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[url('/images/construction-bg.jpg')] bg-cover opacity-20"></div> {/* Fallback/Placeholder */}
                      <div className="relative z-10 text-center">
                          <Video className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-pulse" />
                          <h3 className="text-xl font-bold text-white">Video-to-List Engine</h3>
                          <p className="text-slate-400 text-sm mt-2">Processing Site Walk...</p>
                      </div>
                      
                      {/* Floating Cards simulating detections */}
                      <div className="absolute top-10 right-10 bg-white p-3 rounded-xl shadow-lg animate-bounce duration-[2000ms]">
                          <div className="flex gap-2 items-center text-xs font-bold text-red-600">
                             <span className="w-2 h-2 bg-red-600 rounded-full"></span> Paint Defect
                          </div>
                      </div>
                       <div className="absolute bottom-20 left-10 bg-white p-3 rounded-xl shadow-lg animate-bounce duration-[2500ms]">
                          <div className="flex gap-2 items-center text-xs font-bold text-orange-600">
                             <span className="w-2 h-2 bg-orange-600 rounded-full"></span> Exposed Wiring
                          </div>
                      </div>
                 </div>
             </div>
          </div>
        </section>

        {/* Features Checklist */}
        <section className="py-24 bg-white">
            <div className="container mx-auto max-w-4xl px-4">
                 <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Eliminate Rework & Disputes</h2>
                     <p className="text-lg text-slate-600">
                        The biggest cost in construction isn't materials—it's fix-work. Stop issues from slipping through the cracks.
                     </p>
                 </div>

                 <div className="space-y-8">
                     {/* Item 1 */}
                     <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl shrink-0 flex items-center justify-center text-yellow-700">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Walk & Talk Reporting</h3>
                            <p className="text-slate-600">
                                Don't stop to type. Narrate your observations as you video the site. Our multimodal AI transcribes your voice, grabs the frame, and creates the ticket instantly.
                            </p>
                        </div>
                     </div>

                     {/* Item 2 */}
                     <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl shrink-0 flex items-center justify-center text-indigo-700">
                            <ClipboardCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Subcontractor Accountability</h3>
                            <p className="text-slate-600">
                                Every defect is geolocated and timestamped. Send automated PDF reports to specific trades with photo proof, eliminating "it wasn't me" disputes.
                            </p>
                        </div>
                     </div>
                     </div>

                     {/* Supported Workflows Grid */}
                     <div className="mt-20">
                         <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Supported Workflows</h3>
                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                             <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-100 text-center hover:bg-yellow-50 transition-colors">
                                 <div className="font-bold text-slate-900 mb-1">Punch Lists</div>
                                 <p className="text-xs text-slate-500">Zero-defect handovers</p>
                             </div>
                             <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-100 text-center hover:bg-yellow-50 transition-colors">
                                 <div className="font-bold text-slate-900 mb-1">Daily Logs</div>
                                 <p className="text-xs text-slate-500">Site progress tracking</p>
                             </div>
                             <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-100 text-center hover:bg-yellow-50 transition-colors">
                                 <div className="font-bold text-slate-900 mb-1">Safety Audits</div>
                                 <p className="text-xs text-slate-500">OSHA compliance</p>
                             </div>
                             <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-100 text-center hover:bg-yellow-50 transition-colors">
                                 <div className="font-bold text-slate-900 mb-1">RFI Creation</div>
                                 <p className="text-xs text-slate-500">Field-to-office queries</p>
                             </div>
                         </div>
                     </div>

            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
};

export default ConstructionPage;