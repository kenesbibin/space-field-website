import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { BookOpen, ShieldCheck, Lock } from "lucide-react";
import { div } from "framer-motion/client";

export const metadata: Metadata = {
  title: "Hallucination-Free AI | SpaceCapture Trust Center",
  description: "How we prevent Generative AI from making things up. Our RAG (Retrieval Augmented Generation) architecture grounded in your manuals.",
};

const TrustPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header */}
        <section className="pt-32 pb-20 bg-white text-center border-b border-slate-200">
             <div className="container mx-auto max-w-4xl px-4">
                 <div className="flex justify-center mb-6">
                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                         <ShieldCheck className="w-8 h-8"/>
                     </div>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    We Don't Guess. We Cite.
                 </h1>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    The fear of "AI Hallucinations" is real. That's why SpaceCapture uses a strictly grounded RAG architecture. If it's not in your manual, our AI won't say it.
                 </p>
             </div>
        </section>

        {/* Protocol Section */}
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                         <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                             <BookOpen className="w-5 h-5 text-indigo-600"/> Upload Your Truth
                         </h3>
                         <p className="text-slate-600">
                             You upload your SOPs, ISO standards, and equipment manuals. We index this into a private vector database unique to your tenant.
                         </p>
                     </div>
                     <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                         <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                             <Lock className="w-5 h-5 text-indigo-600"/> The "Silence" Protocol
                         </h3>
                         <p className="text-slate-600">
                             Standard LLMs try to be helpful by making things up. We fine-tune our models to say "I don't know" or "Reference needed" when data is missing.
                         </p>
                     </div>
                </div>

                {/* Citations Demo Mock */}
                <div className="my-16 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="ml-4 text-xs font-mono text-slate-400">SpaceCapture AI Audit Assistant</span>
                    </div>
                    <div className="p-8 space-y-6">
                        <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
                             <div className="bg-slate-100 rounded-lg p-4 text-slate-700 text-sm">
                                 What is the torque specification for the flange bolt on the V164 gearbox?
                             </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0"></div>
                             <div className="space-y-3">
                                <div className="bg-white border border-indigo-100 rounded-lg p-4 text-slate-800 text-sm shadow-sm">
                                    According to the maintenance manual, the V164 gearbox flange bolts require a torque of <strong>320 Nm</strong>.
                                </div>
                                <div className="flex gap-2">
                                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 cursor-pointer hover:bg-blue-100">
                                        📄 Source: Manual_V164_v3.pdf (Page 42)
                                    </span>
                                    <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                                        ✅ 98% Confidence
                                    </span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Your Data Standards, Enforced.</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        See how our Citation Engine links every AI insight back to a specific page in your PDF manual.
                    </p>
                     <a href="/book-a-demo" className="inline-block px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                        Request Compliance Demo
                     </a>
                </div>
            </div>

        </section>

        {/* Enterprise Security Grid */}
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Enterprise-Grade Security</h2>
                    <p className="text-slate-600 mt-4">Your proprietary data never leaves your tenant.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:border-indigo-200 transition-colors">
                        <div className="font-bold text-slate-900 mb-2">SOC 2 Type II</div>
                        <div className="text-xs text-slate-500">Audited & Certified</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:border-indigo-200 transition-colors">
                        <div className="font-bold text-slate-900 mb-2">GDPR Compliant</div>
                        <div className="text-xs text-slate-500">EU Data Sovereignty</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:border-indigo-200 transition-colors">
                        <div className="font-bold text-slate-900 mb-2">AES-256</div>
                        <div className="text-xs text-slate-500">Encryption at Rest</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:border-indigo-200 transition-colors">
                        <div className="font-bold text-slate-900 mb-2">Single Tenant</div>
                        <div className="text-xs text-slate-500">Isolated Database</div>
                    </div>
                </div>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
};

export default TrustPage;
