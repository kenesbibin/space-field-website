import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Lock, FileCheck, CheckCircle2, ArrowRight, Eye, Server, Globe, KeyRound } from 'lucide-react';
import TrustCenterContent from '@/components/TrustCenterContent';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trust Center — SOC 2, GDPR & Enterprise Security | SpaceCapture',
  description: 'SpaceCapture protects your construction data with SOC 2 Type II, ISO 27001, GDPR, AES-256 encryption, and 99.99% uptime. Explore our enterprise security architecture.',
  keywords: [
    'construction data security',
    'SOC 2 construction software',
    'SOC 2 Type II compliance',
    'GDPR compliant construction app',
    'ISO 27001 construction',
    'enterprise construction security',
    'data privacy construction software',
    'construction software encryption',
    'AES-256 construction data',
    'construction data sovereignty',
    'on-premise construction software',
    'OSHA compliance software',
    'construction cybersecurity',
    'secure field inspection app',
  ],
  alternates: {
    canonical: '/trust',
  },
};

const securityFaqItems = [
  {
    q: "Is SpaceCapture SOC 2 certified?",
    a: "Yes. SpaceCapture maintains SOC 2 Type II certification, audited annually by an independent third-party firm for Security, Availability, and Confidentiality trust service criteria. SOC 2 reports are available to enterprise customers under NDA."
  },
  {
    q: "Is SpaceCapture GDPR compliant?",
    a: "Yes. SpaceCapture is fully GDPR compliant. We provide data processing agreements (DPAs), support right-to-erasure requests, and allow EU customers to host data exclusively in our Frankfurt (EU-Central-1) AWS region. Our privacy policy details all data handling practices."
  },
  {
    q: "Who owns the data I upload to SpaceCapture?",
    a: "You retain full ownership of all data, photos, models, and reports uploaded to the platform. SpaceCapture claims no intellectual property rights over your project data. You can export or delete your data at any time."
  },
  {
    q: "Where is my construction data stored?",
    a: "SpaceCapture offers dedicated hosting in three regions: North America (AWS GovCloud US-East), Europe (AWS Frankfurt EU-Central-1), and Asia Pacific (AWS Sydney AP-Southeast-2). Air-gapped on-premise deployment is available for Defense and Critical Infrastructure clients."
  },
  {
    q: "Does SpaceCapture perform penetration testing?",
    a: "Yes. We engage independent third-party security firms to conduct penetration testing twice annually on our web platform, mobile APIs, and cloud infrastructure. Findings are remediated within 48 hours and verified in follow-up tests."
  },
  {
    q: "How are backups and disaster recovery handled?",
    a: "Full system backups are performed daily with point-in-time recovery enabled (15-minute RPO). Backups are AES-256 encrypted and stored in a geographically separate AWS region. Our disaster recovery plan targets an RTO of under 4 hours."
  },
  {
    q: "Does SpaceCapture support Single Sign-On (SSO)?",
    a: "Yes. SpaceCapture supports enterprise SSO via SAML 2.0 and integrates with Azure Active Directory, Okta, Google Workspace, and OneLogin. Role-based access control (RBAC) is available at project, organization, and portfolio levels."
  },
  {
    q: "Can SpaceCapture be deployed on-premise?",
    a: "Yes. For defense contractors, government agencies, and critical infrastructure operators, SpaceCapture offers air-gapped on-premise deployment with dedicated support. Contact our enterprise team for architecture details."
  },
];

export default function TrustCenterPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* HEADER — Server-rendered for SEO */}
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

      {/* Interactive content (client component) */}
      <TrustCenterContent />

      {/* ─── SERVER-RENDERED SEO CONTENT ─── */}

      {/* Trust Badges Summary */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-4">
              <FileCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-extrabold text-slate-900">SOC 2 Type II</div>
              <div className="text-xs text-slate-500">Annually Audited</div>
            </div>
            <div className="p-4">
              <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-extrabold text-slate-900">ISO 27001</div>
              <div className="text-xs text-slate-500">Certified ISMS</div>
            </div>
            <div className="p-4">
              <ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-extrabold text-slate-900">GDPR Ready</div>
              <div className="text-xs text-slate-500">EU Data Protection</div>
            </div>
            <div className="p-4">
              <Lock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <div className="font-extrabold text-slate-900">AES-256</div>
              <div className="text-xs text-slate-500">Military Encryption</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOC 2 Deep Dive */}
      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">SOC 2 Type II Compliance for Construction Software</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          <strong>SOC 2 Type II</strong> is the gold standard for SaaS security. Unlike SOC 2 Type I (which evaluates controls at a single point in time), Type II audits verify that security controls operate effectively <em>over a sustained period</em> — typically 6-12 months. SpaceCapture undergoes this rigorous audit annually, conducted by an independent CPA firm.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          Our SOC 2 audit covers three trust service criteria: <strong>Security</strong> (access controls, intrusion detection, vulnerability management), <strong>Availability</strong> (99.99% uptime SLA, redundant infrastructure, disaster recovery), and <strong>Confidentiality</strong> (encryption, data classification, access logging). Enterprise customers can request a copy of our most recent SOC 2 report under NDA.
        </p>
      </section>

      {/* GDPR + Data Privacy */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">GDPR Compliance & Construction Data Privacy</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The <strong>General Data Protection Regulation (GDPR)</strong> applies to any construction firm processing data from EU residents — even if the firm is headquartered outside the EU. SpaceCapture provides full GDPR compliance including: data processing agreements (DPAs), lawful basis documentation, right-to-erasure ("right to be forgotten") workflows, and the ability to restrict data to our Frankfurt (EU-Central-1) AWS region.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-5 rounded-xl border border-slate-100">
              <KeyRound className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1 text-sm">Data Minimization</h3>
              <p className="text-slate-500 text-xs">We only collect data essential to platform functionality. No tracking, no data selling.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100">
              <Eye className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1 text-sm">Transparency</h3>
              <p className="text-slate-500 text-xs">Full audit logs of who accessed what data, when, and from which device.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100">
              <Server className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1 text-sm">Data Sovereignty</h3>
              <p className="text-slate-500 text-xs">Choose your hosting region. Data never leaves the jurisdiction you select.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Construction Data Security Architecture</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
          Construction data is sensitive — it includes building blueprints, infrastructure designs, inspection reports, and worker information. SpaceCapture's security architecture is built with defense-in-depth principles:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="text-left p-4 font-bold">Layer</th>
                <th className="text-left p-4 font-bold">Protection</th>
                <th className="text-left p-4 font-bold">Standard</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Data at Rest", "AES-256 encryption on all databases and file storage", "NIST SP 800-175B"],
                ["Data in Transit", "TLS 1.3 for all API and web traffic", "IETF RFC 8446"],
                ["Authentication", "Multi-factor auth (MFA), SAML 2.0 SSO, OAuth 2.0", "NIST SP 800-63B"],
                ["Access Control", "Role-based (RBAC) at project, org, and portfolio levels", "ISO 27001 A.9"],
                ["Network", "WAF, DDoS protection, VPC isolation, private subnets", "AWS Well-Architected"],
                ["Monitoring", "24/7 SIEM, intrusion detection, anomaly alerting", "SOC 2 CC7.2"],
              ].map(([layer, protection, standard], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-4 font-medium text-slate-900">{layer}</td>
                  <td className="p-4 text-slate-600">{protection}</td>
                  <td className="p-4 text-blue-600 font-medium text-xs">{standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* OSHA & Construction Compliance */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">OSHA & Construction Regulatory Compliance</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Beyond data security, SpaceCapture helps construction firms maintain <strong>OSHA compliance</strong> through automated safety inspection documentation, PPE monitoring, and audit-ready digital records. Every inspection photo is timestamped, GPS-tagged, and immutably logged — creating a defensible trail for regulatory audits, insurance claims, and dispute resolution.
          </p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Digital Audit Trails:</strong> Every action logged with user, timestamp, GPS, and device info.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Automated Safety Reports:</strong> OSHA-format safety inspection reports generated with one click.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>PPE Compliance Monitoring:</strong> AI flags missing hard hats, vests, and safety equipment in real-time.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>ISO 9001 Support:</strong> Quality management documentation for QA/QC workflows.</span></li>
          </ul>
        </div>
      </section>

      {/* Server-rendered FAQ */}
      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Enterprise Security FAQ</h2>
        <div className="space-y-4">
          {securityFaqItems.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 container mx-auto px-6 max-w-4xl">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Explore SpaceCapture</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: "/about-us", label: "About SpaceCapture" },
            { href: "/pricing", label: "Pricing & Plans" },
            { href: "/ai-defect-detection", label: "AI Defect Detection" },
            { href: "/real-time-construction-monitoring", label: "Real-Time Monitoring" },
            { href: "/trust/hallucination-free", label: "Hallucination-Free AI" },
            { href: "/integrations", label: "Integrations & API" },
            { href: "/access-control", label: "Access Control & Permissions" },
            { href: "/customers", label: "Customer Stories" },
          ].map((link, i) => (
            <Link key={i} href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-900 font-medium group-hover:text-blue-700 transition-colors">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 container mx-auto px-6 max-w-4xl text-center">
        <Link href="/request-a-demo" className="inline-flex items-center gap-2 text-white bg-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg">
          Talk to Our Security Team <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": securityFaqItems.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SpaceCapture Trust Center — Enterprise Security & Compliance",
            "description": "SOC 2 Type II, ISO 27001, and GDPR compliant construction field inspection software. Learn about SpaceCapture's enterprise security architecture.",
            "provider": { "@type": "Organization", "name": "SpaceCapture" },
            "about": [
              { "@type": "Thing", "name": "SOC 2 Type II Compliance" },
              { "@type": "Thing", "name": "GDPR Compliance" },
              { "@type": "Thing", "name": "ISO 27001 Certification" },
              { "@type": "Thing", "name": "Construction Data Security" }
            ]
          })
        }}
      />

    </main>
  );
}
