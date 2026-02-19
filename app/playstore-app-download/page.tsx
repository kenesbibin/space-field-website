import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Download,
  MessageCircle,
  Wifi,
  Camera,
  ShieldCheck,
  Zap,
  ExternalLink,
  Star,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title:
    "SpaceCapture App – Available on Google Play | Android Field Operations App",
  description:
    "SpaceCapture is available on Google Play Store. Download the Android field operations app with offline inspections, AI camera, and real-time data sync.",
  keywords: [
    "SpaceCapture app",
    "SpaceCapture Android app",
    "available on Google Play",
    "Google Play Store app",
    "field operations app",
    "offline inspection app",
    "android field app",
    "play store app download",

    // Construction-focused keywords
    "construction field app",
    "construction inspection app",
    "construction site inspection software",
    "construction defect detection app",
    "AI construction inspection",
    "construction punch list app",
    "construction quality control app",
    "construction site reporting app",
    "construction field reporting software",
    "mobile construction management app",

    // AI & Defect detection keywords
    "AI defect detection software",
    "AI construction defect detection",
    "AI site inspection app",
    "computer vision construction app",

    // Offline & Field work keywords
    "offline construction app",
    "offline field inspection software",
    "jobsite inspection mobile app",
    "construction app for contractors",
    "construction app for engineers",
    "field data capture app",

    // Commercial intent keywords
    "best construction inspection app",
    "PlanGrid alternative",
    "iAuditor alternative",
    "construction inspection software Android",
  ]
  ,
  openGraph: {
    title: "SpaceCapture App – Available on Google Play",
    description:
      "Download SpaceCapture from the Google Play Store. Offline-first Android app for inspections and field data capture.",
    images: [
      {
        url: "/images/playstore-mockup.png",
        width: 1200,
        height: 630,
        alt: "SpaceCapture App available on Google Play Store",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceCapture App – Available on Google Play",
    description:
      "Download SpaceCapture from the Google Play Store. Built for offline field operations.",
    images: ["/images/playstore-mockup.png"],
  },
};

export default function AppDownloadPage() {
  const whatsappNumber = "17652713686";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I need help downloading the SpaceCapture app."
  )}`;

  const appId = "com.SpaceAi.FieldModule";
  const playStoreUrl = `https://play.google.com/store/apps/details?id=${appId}`;
  const reviewUrl = `https://play.google.com/store/apps/details?id=${appId}&reviewId=0`;

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Your Jobsite,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  In Your Pocket
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-lg">
                Available on Google Play Store. Capture photos, fill forms, and
                sync field data in real-time — even offline.
              </p>

              {/* Logo */}
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/space-capture-logo.jpg"
                  alt="SpaceCapture App Logo"
                  width={55}
                  height={48}
                  className="rounded-xl"
                  priority
                />
                <div>
                  <h2 className="text-xl font-bold">Space Capture</h2>
                  <a
                    href="https://www.space-sign.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm"
                  >
                    www.space-sign.ai
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-3 rounded-2xl font-bold bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Download App
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-black gap-3 bg-[#a7c0b0] px-8 py-3 rounded-2xl font-bold hover:bg-[#8a938d] transition"
                >
                  <MessageCircle className="w-5 h-5 text-black" />
                  Request a Demo
                </a>
              </div>

              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-slate-900/50 p-3 rounded-2xl border border-slate-800 hover:border-slate-700 transition"
              >
                <Star className="w-4 h-4 mr-2" />
                Rate & Review on Play Store
              </a>
            </div>

            {/* RIGHT SIDE - MOBILE MOCKUP */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[400px] animate-float">
                {/* Decorative Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur-[100px] -z-10"></div>

                <Image
                  src="/images/playstore-mockup.png"
                  alt="SpaceCapture App Mockup"
                  width={600}
                  height={1000}
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                  priority
                />

                {/* Optional: Add a small floating element for extra flair */}
                <div className="absolute -right-6 top-1/4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Download className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Trusted by</p>
                      <p className="text-sm font-bold">10k+ Field Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES SECTION - SEO RICH */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full text-blue-400 font-bold uppercase tracking-wider text-xs mb-6">
                Core Capabilities
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                The Most Advanced <span className="text-blue-400">Field Inspection App</span>
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                SpaceCapture isn't just a daily report app. It's an enterprise-grade field management platform built for construction teams, property developers, and field engineers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <FeatureCard
                icon={Wifi}
                title="Offline Field App"
                desc="Never let a dead zone stop your work. Our offline-first architecture allows you to conduct site audits and safety inspections without internet. Data syncs instantly when you're back in range."
              />
              <FeatureCard
                icon={Camera}
                title="AI-Powered Inspection"
                desc="Revolutionize defect detection with our AI camera. Automatically identify cracks, corrosion, and safety violations. Every photo is automatically geotagged with precise GPS and orientation data."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Enterprise Compliance"
                desc="Meet the strictest industry standards. Our app ensures every field report is secure, with AES-256 encryption. Generate professional, audit-ready PDF reports directly from your jobsite."
              />
              <FeatureCard
                icon={Zap}
                title="Real-Time Data Sync"
                desc="Bridge the gap between field and office. Share punch lists and daily logs instantly. Project managers get real-time visibility into site progress, reducing rework and accelerating timelines."
              />
            </div>
          </div>

          {/* ROLE-BASED BENEFITS - NEW SECTION */}
          <div className="mt-32">
            <div className="bg-slate-900 shadow-2xl rounded-[3rem] p-8 md:p-16 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                    Built for Every <span className="text-purple-400">Stakeholder</span>
                  </h2>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">For Owners & Developers</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Get transparent data from the field. Track asset health, monitor project quality, and minimize long-term maintenance costs with detailed historical records.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">For Project Managers</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Manage multiple sites effortlessly. Automate daily reports, assign corrective actions from punch lists, and stay on top of safety compliance without leaving the office.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400">
                        <Camera className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">For Field Engineers</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Save hours every day. No more carrying clipboards or spending nights on reports. Capture details on-site and generate a professional report with a single tap.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/digitize.jpg"
                    alt="Mobile Construction Reporting"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl border border-slate-700"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-xl hidden sm:block">
                    <p className="text-white font-bold text-lg">70% Faster</p>
                    <p className="text-blue-100 text-xs text-center">Reporting Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhatsAppButton />

        {/* EXPANDED FAQ SECTION */}
        <div className="container space-y-4 mx-auto max-w-[1200px] px-4 mt-32 mb-12">
          <div className="text-center mb-12">
            <h2 className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full text-blue-400 font-bold uppercase tracking-wider text-xs mb-4">
              Expert Knowledge Base
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Common Questions About <span className="text-blue-400">Field Apps</span></h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Why use a specialized construction field app instead of generic tools?",
                a: "Generic tools like WhatsApp or basic camera apps don't offer structured data, geotagging, or automated reporting. SpaceCapture is purpose-built for construction, offering AI defect detection, offline capabilities, and instant PDF generation specifically for site audits and safety inspections.",
              },
              {
                q: "How does offline mode work in the SpaceCapture app?",
                a: "Our app uses local storage to save your inspection data, photos, and forms. As soon as you have a stable internet connection (Wi-Fi or cellular), the app automatically pushes the data to the cloud, ensuring no information is ever lost.",
              },
              {
                q: "Can the app handle large scale construction projects?",
                a: "Absolutely. SpaceCapture is designed for enterprise scalability. Whether you're managing a single residential build or a massive infrastructure project with thousands of inspection points, our platform maintains high performance and data integrity.",
              },
              {
                q: "Is the SpaceCapture app compatible with my existing BIM software?",
                a: "Yes, we offer integrations with major construction management and BIM software. This allows you to link site photos and defect reports directly to the 3D model, creating a true 'Digital Twin' of your project's progress.",
              },
              {
                q: "What training is required for my field team?",
                a: "Zero to minimal. We've designed SpaceCapture with 'field-first' usability. If your team knows how to take a photo on a smartphone, they can use SpaceCapture. Most teams are fully productive within 15 minutes of downloading the app.",
              },
              {
                q: "How does AI defect detection improve site safety?",
                a: "By automating the identification of hazards like missing railings, improper scaffolding, or structural cracks, the AI acts as a 24/7 safety officer. It alerts project managers to risks that might be missed during manual walkthroughs, preventing accidents before they happen.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition flex flex-col gap-4">
                <h3 className="font-bold text-white text-lg leading-snug">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why use a specialized construction field app instead of generic tools?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Generic tools like WhatsApp or basic camera apps don't offer structured data, geotagging, or automated reporting. SpaceCapture is purpose-built for construction, offering AI defect detection, offline capabilities, and instant PDF generation specifically for site audits and safety inspections." },
                  },
                  {
                    "@type": "Question",
                    "name": "How does offline mode work in the SpaceCapture app?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Our app uses local storage to save your inspection data, photos, and forms. As soon as you have a stable internet connection (Wi-Fi or cellular), the app automatically pushes the data to the cloud, ensuring no information is ever lost." },
                  },
                  {
                    "@type": "Question",
                    "name": "Can the app handle large scale construction projects?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. SpaceCapture is designed for enterprise scalability. Whether you're managing a single residential build or a massive infrastructure project with thousands of inspection points, our platform maintains high performance and data integrity." },
                  },
                  {
                    "@type": "Question",
                    "name": "Is the SpaceCapture app compatible with my existing BIM software?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer integrations with major construction management and BIM software. This allows you to link site photos and defect reports directly to the 3D model, creating a true 'Digital Twin' of your project's progress." },
                  },
                  {
                    "@type": "Question",
                    "name": "What training is required for my field team?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Zero to minimal. We've designed SpaceCapture with 'field-first' usability. If your team knows how to take a photo on a smartphone, they can use SpaceCapture. Most teams are fully productive within 15 minutes of downloading the app." },
                  },
                  {
                    "@type": "Question",
                    "name": "How does AI defect detection improve site safety?",
                    "acceptedAnswer": { "@type": "Answer", "text": "By automating the identification of hazards like missing railings, improper scaffolding, or structural cracks, the AI acts as a 24/7 safety officer. It alerts project managers to risks that might be missed during manual walkthroughs, preventing accidents before they happen." },
                  },
                ],
              }),
            }}
          />
        </div>
      </main>
    </div>
  );
}

const FeatureCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 mb-6">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <h3 className="font-bold text-white text-lg mb-3 leading-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);
