import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { FileX, BrainCircuit, ScanEye, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The End of Digital Paper | SpaceCapture Manifesto",
  description: "Why digitizing paper forms failed to solve the real problem, and why Active AI is the only way forward for field operations.",
};

const ManifestoPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Header / Manifesto Title */}
        <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
             <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
                 <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest mb-8">
                    <FileX className="w-4 h-4" /> Thought Leadership
                 </div>
                 <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                    The End of <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        Digital Paper.
                    </span>
                 </h1>
                 <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                    We promised field workers a revolution. <br/>
                    We gave them a PDF on a screen. <br/>
                    <span className="text-white font-semibold">It's time to apologize. And then, it's time to fix it.</span>
                 </p>
             </div>
        </section>

        {/* The Argument */}
        <section className="py-24 bg-white">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="prose prose-lg prose-slate mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Glass Paper" Trap</h2>
                    <p className="mb-6">
                        For the last 15 years, "Digital Transformation" in field service has meant one thing: taking a paper form, recreating it exactly on an iPad, and congratulating ourselves.
                    </p>
                    <p className="mb-8">
                        We call this <strong>"Digital Paper"</strong>. It's not innovation; it's the digitization of bureaucracy. It has all the flaws of physical paper—linear, rigid, and dumb—but now it requires a battery boost and a WiFi signal to function.
                    </p>
                    <p className="mb-8 font-serif italic text-xl text-slate-700 border-l-4 border-red-500 pl-4">
                        "If you simply digitize a bad process, you just get a bad digital process."
                    </p>



                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Active AI: The Real Revolution</h2>
                    <p className="mb-6">
                        The future isn't about typing better. It's about seeing, sensing, and syncing in real-time. Active AI doesn't wait for input; it observes reality.
                    </p>
                    
                    <ul className="space-y-4 list-none pl-0 mb-12">
                        <li className="flex gap-4 items-start">
                             <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0"><ScanEye className="w-4 h-4"/></div>
                             <div>
                                 <strong>It Sees (Computer Vision):</strong> Don't describe a crack. Snap a picture, and let our <em>AI Detection Analysis</em> measure the length, width, and severity instantly.
                             </div>
                        </li>
                        <li className="flex gap-4 items-start">
                             <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0"><BrainCircuit className="w-4 h-4"/></div>
                             <div>
                                 <strong>It Thinks (Engagement Flows):</strong> Static forms are dumb. SpaceCapture's <em>Visual Form Builder</em> creates dynamic flows that adapt based on what the inspector finds, guiding them through ISO-compliant checks automatically.
                             </div>
                        </li>
                         <li className="flex gap-4 items-start">
                             <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0"><ArrowRight className="w-4 h-4"/></div>
                             <div>
                                 <strong>It Connects (Live Sync):</strong> "Submit" buttons are archaic. Data streams to the office via <em>Live Field Synchronization</em> the moment it's captured, even before the inspector leaves the site.
                             </div>
                        </li>
                    </ul>

                    {/* Workflow Comparison */}
                    <div className="my-16 bg-slate-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-center mb-12">The Shift: Passive vs. Active</h3>
                        <div className="grid md:grid-cols-2 gap-12 relative">
                            {/* Divider Line */}
                             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-300"></div>

                            {/* Old Way */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">The "Digital Paper" Way</h4>
                                <ul className="space-y-8">
                                    <li className="opacity-60">
                                        <div className="font-bold text-slate-900">1. Open PDF</div>
                                        <p className="text-sm">Find correct version. Wait for load.</p>
                                    </li>
                                    <li className="opacity-60">
                                        <div className="font-bold text-slate-900">2. Type Manually</div>
                                        <p className="text-sm">"Crack found on beam..." (Typos likely)</p>
                                    </li>
                                    <li className="opacity-60">
                                        <div className="font-bold text-slate-900">3. Take Separate Photo</div>
                                        <p className="text-sm">Close app. Open Camera. Take photo. Re-open app. Attach.</p>
                                    </li>
                                </ul>
                            </div>

                             {/* New Way */}
                            <div>
                                <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-6 text-center">The SpaceCapture Way</h4>
                                <ul className="space-y-8">
                                    <li>
                                        <div className="font-bold text-slate-900 flex items-center gap-2"><ScanEye className="w-4 h-4 text-indigo-600"/> 1. Point Camera</div>
                                        <p className="text-sm">AI auto-identifies asset: "Beam B-14".</p>
                                    </li>
                                    <li>
                                        <div className="font-bold text-slate-900 flex items-center gap-2"><BrainCircuit className="w-4 h-4 text-indigo-600"/> 2. AI Measures</div>
                                        <p className="text-sm">Crack detected. Width: 2mm. Severity: High.</p>
                                    </li>
                                    <li>
                                        <div className="font-bold text-slate-900 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-indigo-600"/> 3. Auto-Log</div>
                                        <p className="text-sm">Finding logged. Ticket created. Supervisor alerted.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Join the Post-Form Era</h2>
                    <p className="mb-6">
                        SpaceCapture is not a form builder. It is an operations intelligence engine. Stop asking your highly paid engineers to be data entry clerks.
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <a href="/book-a-demo" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
                        See The Future Work <ArrowRight className="w-5 h-5"/>
                    </a>
                </div>
            </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
};

export default ManifestoPage;
