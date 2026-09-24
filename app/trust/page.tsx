import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  Globe, 
  CheckCircle,
  FileCheck,
  AlertCircle,
  Activity
} from 'lucide-react';
import { LabCard } from '@/components/lab/TestControls';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Center - SpaceCapture',
  description: 'Enterprise-grade security, compliance, and data protection. SOC 2, ISO 27001, GDPR compliant with 99.99% uptime.',
  alternates: {
    canonical: 'https://spacecapture.ai/trust',
  },
};

export default function TrustCenterPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* HEADER */}
      <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
              <ShieldCheck className="w-4 h-4" />
              Security First
           </div>
           <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Enterprise-Grade Trust. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                 Built into Every Pixel.
              </span>
           </h1>
           <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We protect your critical infrastructure data with banking-level encryption, strict compliance standards, and 24/7 proactive monitoring.
           </p>
        </div>
      </section>

      {/* LIVE STATUS BAR */}
      <div className="container mx-auto px-6 -mt-8 relative z-20">
         <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
               </div>
               <div>
                  <h3 className="font-bold text-slate-900">All Systems Operational</h3>
                  <p className="text-xs text-slate-500">Last updated: Just now</p>
               </div>
            </div>
            
            <div className="flex gap-8 text-sm">
                <StatusItem label="API Uptime" value="99.99%" />
                <StatusItem label="Avg Latency" value="42ms" />
                <StatusItem label="Security Incidents" value="0" color="text-green-600" />
            </div>

            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 text-sm font-bold transition-colors">
               View Historical Uptime
            </button>
         </div>
      </div>

      {/* COMPLIANCE GRID */}
      <section className="py-20 container mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certified Compliance</h2>
            <p className="text-slate-600">We adhere to the strictest global standards for data privacy and security.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <ComplianceCard 
                title="SOC 2 Type II" 
                desc="Audited annually for Security, Availability, and Confidentiality."
                icon={FileCheck}
             />
             <ComplianceCard 
                title="ISO 27001" 
                desc="International standard for Information Security Management Systems."
                icon={Globe}
             />
             <ComplianceCard 
                title="GDPR Ready" 
                desc="Full compliance with EU data protection and privacy regulations."
                icon={ShieldCheck}
             />
             <ComplianceCard 
                title="AES-256" 
                desc="Military-grade encryption for all data at rest and in transit (TLS 1.3)."
                icon={Lock}
             />
         </div>
      </section>

      {/* DATA RESIDENCY MAP (Visual) */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
               <h2 className="text-3xl md:text-4xl font-bold">Global Data Residency</h2>
               <p className="text-slate-400 text-lg">
                  Keep your data where it belongs. We offer dedicated hosting regions in the US, Europe, and Asia-Pacific to satisfy local data sovereignty laws.
               </p>
               
               <div className="space-y-4">
                  <RegionRow region="North America" location="AWS GovCloud (US-East)" status="Active" />
                  <RegionRow region="Europe" location="AWS Frankfurt (EU-Central-1)" status="Active" />
                  <RegionRow region="Asia Pacific" location="AWS Sydney (AP-Southeast-2)" status="Active" />
               </div>

               <div className="pt-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg flex items-start gap-3">
                     <Lock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                     <div>
                        <h4 className="font-bold text-blue-300 text-sm">On-Premise Option</h4>
                        <p className="text-xs text-blue-200/70 mt-1">Air-gapped deployment available for Defense & Critical Infrastructure clients.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Stylized World Map Placeholder */}
            <div className="relative aspect-square md:aspect-video bg-slate-800 rounded-3xl border border-slate-700 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                
                {/* Abstract Nodes */}
                <div className="relative w-full h-full">
                    {/* US Node */}
                    <LocationNode top="30%" left="20%" label="US-East" />
                    {/* EU Node */}
                    <LocationNode top="25%" left="52%" label="EU-Central" />
                    {/* APAC Node */}
                    <LocationNode top="60%" left="85%" label="AP-South" />
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M 200 150 Q 500 50 800 300" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="opacity-50" />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

         </div>
      </section>

      {/* SECURITY FAQ */}
      <section className="py-20 container mx-auto px-6 max-w-4xl">
         <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Security FAQ</h2>
         <p className="text-slate-600 text-center mb-12">
            Security questions, plus how VeritasGraph grounds AI answers in this platform with source attribution.
         </p>
         <div className="space-y-6">
            <SecurityFaq question="Who owns the data I upload?" answer="You typically retain full ownership of all data, photos, and models uploaded to the platform. SpaceCapture claims no IP rights over your project data." />
            <SecurityFaq question="Do you perform penetration testing?" answer="Yes, we engage third-party security firms to perform penetration testing twice annually on both our web platform and mobile API." />
            <SecurityFaq question="How are backups handled?" answer="Full system backups are performed daily with point-in-time recovery enabled. Backups are encrypted and stored in a separate geographic region for disaster recovery." />
            <SecurityFaq question="How does VeritasGraph verify AI answers?" answer="Search and AI answers are grounded by VeritasGraph, an open-source GraphRAG framework. Every response carries source attribution back to the exact capture it came from plus a reasoning path, so answers are verifiable rather than guessed. See the VeritasGraph documentation for details." />
            <SecurityFaq question="What happens to my data in the knowledge graph?" answer="Captured data is resolved into structured graph entities you own. VeritasGraph reads these links to attribute AI answers; it does not train public models on your project data, and on-premise deployment keeps the graph entirely within your infrastructure." />
         </div>
      </section>

      {/* VERITASGRAPH ATTRIBUTION */}
      <section className="py-16 container mx-auto px-6 max-w-4xl">
         <div className="p-6 bg-white rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
               <ShieldCheck className="w-4 h-4 text-blue-500" />
               Powered by VeritasGraph
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
               AI answers and search on SpaceCapture are grounded by{' '}
               <a
                  href="https://github.com/bibinprathap/VeritasGraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
               >
                  the VeritasGraph open-source GraphRAG framework
               </a>
               , providing source attribution and a verifiable reasoning path for every claim. See the full{' '}
               <Link href="/how-it-works" className="text-blue-600 font-semibold hover:underline">
                  capture-to-attributed-answer pipeline
               </Link>{' '}
               or read the{' '}
               <a
                  href="https://bibinprathap.github.io/VeritasGraph/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
               >
                  VeritasGraph documentation
               </a>
               .
            </p>
         </div>
      </section>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Enterprise Trust Center",
            "description": "Security, compliance, and uptime information for SpaceCapture.",
            "provider": { "@type": "Organization", "name": "SpaceCapture" }
          })
        }}
      />

    </main>
  );
}

const StatusItem = ({ label, value, color = "text-slate-900" }: { label: string, value: string, color?: string }) => (
    <div className="text-center md:text-left">
        <span className="block text-xs font-bold text-slate-400 uppercase">{label}</span>
        <span className={`text-lg font-black ${color}`}>{value}</span>
    </div>
);

const ComplianceCard = ({ title, desc, icon: Icon }: any) => (
    <div 
        className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
    >
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        <div className="mt-6 text-green-600 text-xs font-bold flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Certified Active
        </div>
    </div>
);

const RegionRow = ({ region, location, status }: any) => (
    <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg border border-slate-700">
        <div>
            <h4 className="font-bold text-white text-sm">{region}</h4>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                <Server className="w-3 h-3" /> {location}
            </div>
        </div>
        <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
            {status}
        </span>
    </div>
);

const LocationNode = ({ top, left, label }: any) => (
    <div className="absolute flex flex-col items-center gap-2" style={{ top, left }}>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        <span className="text-[10px] font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm whitespace-nowrap">
            {label}
        </span>
    </div>
);

const SecurityFaq = ({ question, answer }: any) => (
    <div className="p-6 bg-white rounded-xl border border-slate-100">
        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-blue-500" />
            {question}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed ml-6">{answer}</p>
    </div>
);
