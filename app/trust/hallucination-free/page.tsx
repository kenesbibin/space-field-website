import React from "react";
import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import { BookOpen, ShieldCheck, Lock, AlertTriangle, Quote, Search, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "Hallucination-Free AI | SpaceCapture Trust Center",
  description:
    "How SpaceCapture stops AI from making things up: answers grounded in your own manuals and inspection records, with a page-level citation on every claim — and an honest 'I don't know' when the answer isn't there.",
  alternates: {
    canonical: 'https://spacecapture.ai/trust/hallucination-free',
  },
};

const HALLUCINATION_FAQS = [
  {
    q: "What is an AI hallucination?",
    a: "An AI hallucination is a confident answer that isn't true — a torque spec nobody wrote down, a clause that doesn't exist in your contract. On a real inspection, a made-up answer can pass a defect or fail equipment that's perfectly fine, so guessing isn't a small failure mode.",
  },
  {
    q: "How does SpaceCapture stop the AI from making things up?",
    a: "Grounding. You upload your SOPs, ISO standards, and equipment manuals, and every answer is built from those documents only. The AI quotes the passage it used and attaches the file and page as a citation, so you can check the answer in one click.",
  },
  {
    q: "What does the AI say when it doesn't know the answer?",
    a: "Nothing invented. When your documents don't cover a question, SpaceCapture says so and flags the missing reference instead of filling the gap with a plausible-sounding guess. That's the Silence Protocol: an honest \"reference needed\" beats a confident wrong answer every time.",
  },
  {
    q: "Can I see where an answer came from?",
    a: "Yes. Every answer shows its source — the exact file and page, like Manual_V164_v3.pdf page 42 — plus a confidence score. Click the citation and you're reading the original passage yourself, so verification never depends on trusting the model.",
  },
  {
    q: "Does SpaceCapture train public AI models on my documents?",
    a: "No. Your documents are indexed into a private, single-tenant store that only your workspace can query. They answer your questions, never train shared or public models — and on-premise deployments keep everything inside infrastructure you already control.",
  },
  {
    q: "How does VeritasGraph relate to hallucination-free answers?",
    a: "VeritasGraph is the open-source grounding layer behind these citations. It connects your documents and captures into a knowledge graph, tracks every claim back to its source, and exposes the reasoning path — the same mechanism behind source attribution across SpaceCapture.",
  },
];

const HALLUCINATION_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HALLUCINATION_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
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
                    We Don&apos;t Guess. We Cite.
                 </h1>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    The fear of AI hallucinations is real — and on a job site, a confidently wrong answer costs more than a wrong search result. That&apos;s why every SpaceCapture answer is built from your own documents: if it&apos;s not in your manual, our AI won&apos;t say it.
                 </p>
             </div>
        </section>

        {/* Why hallucinations matter */}
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-7 h-7 text-amber-500" />
                        Why a Confident Wrong Answer Is Worse Than No Answer
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        General-purpose chatbots are trained to be helpful, so when they don&apos;t know something, they fill the gap with something plausible. Ask one for a flange torque spec and it will happily give you a number — round, specific, and invented.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        On paper that&apos;s an annoyance. In the field it&apos;s a hazard: an inspector who trusts a made-up spec can sign off on a bolted joint that was never tightened correctly, and a compliance answer that sounds right but cites nothing can&apos;t be defended in an audit.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        SpaceCapture is built the other way around. The AI is only allowed to answer from your documents, cite what it used, and admit when the answer isn&apos;t there. <strong className="text-slate-900">Useful when it knows. Silent when it doesn&apos;t.</strong>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                     <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                         <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                             <BookOpen className="w-5 h-5 text-indigo-600"/> Upload Your Truth
                         </h3>
                         <p className="text-slate-600">
                             You upload your SOPs, ISO standards, and equipment manuals. We index them into a private search store unique to your workspace — this becomes the only source the AI is allowed to answer from.
                         </p>
                     </div>
                     <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                         <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                             <Lock className="w-5 h-5 text-indigo-600"/> The &quot;Silence&quot; Protocol
                         </h3>
                         <p className="text-slate-600">
                             Standard LLMs try to be helpful by making things up. Ours is built to say &quot;I don&apos;t know&quot; or &quot;reference needed&quot; when your documents don&apos;t cover the question — because an honest gap is safer than a confident guess.
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
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 cursor-pointer hover:bg-blue-100">
                                        📄 Source: Manual_V164_v3.pdf (Page 42)
                                    </span>
                                    <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                                        ✅ 98% Confidence
                                    </span>
                                </div>
                             </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
                             <div className="bg-slate-100 rounded-lg p-4 text-slate-700 text-sm">
                                 What about the bearing preload for the same gearbox?
                             </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0"></div>
                             <div className="space-y-3">
                                <div className="bg-white border border-amber-100 rounded-lg p-4 text-slate-800 text-sm shadow-sm">
                                    I don&apos;t have a document that covers bearing preload for the V164. <strong>Reference needed</strong> — ask your maintenance team to upload the procedure, and I&apos;ll answer from it.
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
                     <a href="/request-a-demo" className="inline-block px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                        Request Compliance Demo
                     </a>
                </div>
            </div>
        </section>

        {/* VeritasGraph bridge */}
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                            <GitBranch className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Grounded by VeritasGraph</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        The citation engine above runs on{' '}
                        <a href="https://github.com/bibinprathap/VeritasGraph" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                            the VeritasGraph open-source GraphRAG framework
                        </a>{' '}
                        — the same attribution layer behind search and AI answers across SpaceCapture. It links every claim to its source document or capture and shows the reasoning path, so hallucination-free isn&apos;t a promise, it&apos;s checkable.
                    </p>
                    <a href="/how-it-works" className="text-sm font-semibold text-blue-600 hover:underline">
                        See how SpaceCapture verifies AI answers →
                    </a>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto max-w-4xl px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
                    Hallucination-Free AI: Questions, Answered
                </h2>
                <p className="text-slate-600 text-center mb-12">
                    How grounding, citations, and the Silence Protocol keep AI answers honest.
                </p>
                <div className="space-y-4">
                    {HALLUCINATION_FAQS.map((f) => (
                        <div key={f.q} className="p-6 bg-white rounded-xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <Quote className="w-4 h-4 text-indigo-500 shrink-0" />
                                {f.q}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed ml-6">{f.a}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="/trust"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        <Search className="w-4 h-4" />
                        Back to the Trust Center — security, compliance & uptime
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HALLUCINATION_FAQ_SCHEMA) }}
      />
    </div>
  );
};

export default TrustPage;
