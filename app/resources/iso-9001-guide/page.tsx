import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { CheckSquare, FileCheck, RefreshCw, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "ISO 9001 Audit Autopilot | SpaceCapture Guide",
  description: "5 Ways to automate your next ISO Audit using visual proof. Ensure QMS compliance without the paperwork scramble.",
};

const IsoGuidePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="pt-32 pb-20 bg-white border-b border-slate-200">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                 <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
                    Manufacturing & Quality
                 </div>
                 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    ISO 9001 Autopilot.
                 </h1>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    The audit is coming. Usually, that means panic. With SpaceCapture, your Quality Management System (QMS) is self-documenting.
                 </p>
            </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="space-y-12">
<div className="space-y-16">
                     {/* Section 1: The Core Solution */}
                     <div>
                         <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">The 3 Pillars of Automated Compliance</h2>
                         <div className="space-y-8">
                             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
                                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                     <Eye className="w-6 h-6"/>
                                 </div>
                                 <div>
                                     <h3 className="text-xl font-bold text-slate-900 mb-2">1. Evidence, Not Just Tick Boxes</h3>
                                     <p className="text-slate-600 leading-relaxed">
                                         Auditors hate tick boxes because they are easy to fake. They love proof. SpaceCapture forces a "visual handshake" for every critical check. 
                                         Steps cannot be completed without a geolocated photo, timestamped to the millisecond.
                                     </p>
                                 </div>
                             </div>

                             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
                                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
                                     <RefreshCw className="w-6 h-6"/>
                                 </div>
                                 <div>
                                     <h3 className="text-xl font-bold text-slate-900 mb-2">2. Version Control is Automatic</h3>
                                     <p className="text-slate-600 leading-relaxed">
                                         Using an old form version is a major non-conformance (Minor NC). With SpaceCapture's <strong>Visual Form Builder</strong>, you update the template centrally, 
                                         and every device globally updates instantly. Our <em>Access Control</em> ensures only authorized personnel can modify these critical templates.
                                     </p>
                                 </div>
                             </div>

                             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
                                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                                     <FileCheck className="w-6 h-6"/>
                                 </div>
                                 <div>
                                     <h3 className="text-xl font-bold text-slate-900 mb-2">3. The "2-Click" Audit Trail</h3>
                                     <p className="text-slate-600 leading-relaxed">
                                         When the auditor asks, "Show me the maintenance records for Machine X from last June," you don't dig through filing cabinets. 
                                         You search "Machine X June", and export a zipped PDF dossier in seconds.
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>

                     {/* New Section: Common Pitfalls */}
                     <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
                         <h2 className="text-2xl md:text-3xl font-bold mb-8">Common Audit Pitfalls We Solve</h2>
                         <div className="grid md:grid-cols-2 gap-8">
                             <div>
                                 <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><div className="w-2 h-2 bg-red-400 rounded-full"/>Missing Signatures</h4>
                                 <p className="text-slate-300 text-sm">Paper forms often have illegible or missing signatures. SpaceCapture mandates digital sign-offs before submission.</p>
                             </div>
                             <div>
                                 <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><div className="w-2 h-2 bg-red-400 rounded-full"/>Lost Records</h4>
                                 <p className="text-slate-300 text-sm">"It's in the van" isn't an acceptable answer. Cloud sync ensures data survives even if the device is destroyed.</p>
                             </div>
                             <div>
                                 <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><div className="w-2 h-2 bg-red-400 rounded-full"/>Illegible Handwriting</h4>
                                 <p className="text-slate-300 text-sm">Handwritten notes lead to errors in transcription. Typed text and voice-to-text ensures 100% clarity.</p>
                             </div>
                             <div>
                                 <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><div className="w-2 h-2 bg-red-400 rounded-full"/>Late Reporting</h4>
                                 <p className="text-slate-300 text-sm">Reports filed days late obscure the timeline of events. Real-time submission proves compliance.</p>
                             </div>
                         </div>
                     </div>
                </div>

                {/* FAQ Section for SEO */}
                <div className="mt-16 border-t border-slate-200 pt-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Are digital signatures valid for ISO 9001?</h3>
                            <p className="text-slate-600 text-sm">Yes. SpaceCapture signatures are time-stamped and legally binding, compliant with e-signature regulations and fully accepted by ISO auditors.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Can this work without internet?</h3>
                            <p className="text-slate-600 text-sm">Absolutely. Our offline-first architecture allows full inspection capabilities in remote areas. Data syncs automatically when connectivity is restored.</p>
                        </div>
                         <div>
                            <h3 className="font-bold text-slate-900 mb-2">How do I export data for the auditor?</h3>
                            <p className="text-slate-600 text-sm">You can give the auditor "Read-Only" guest access, or export ZIP files containing all PDF reports and high-resolution original photos organized by date or asset ID.</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl font-bold text-slate-900 mb-6">Ready to ace your next audit?</p>
                    <a href="/book-a-demo" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                        Get the QMS Template Pack
                    </a>
                </div>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
};

export default IsoGuidePage;
