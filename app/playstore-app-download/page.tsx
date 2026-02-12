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

            {/* RIGHT SIDE - MOBILE FRAME WITH VIDEO */}
            <div className="flex justify-center">
              <div className="relative w-[320px] h-[650px] bg-black rounded-[40px] p-3 shadow-2xl border-[8px] border-slate-800 animate-float">

                {/* Top Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-full z-20" />

                {/* Video */}
                <div className="w-full h-full overflow-hidden rounded-[30px] bg-black">
                  <video
                    src="/videos/app-demo-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-24">
            <h2 className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full text-blue-400 font-bold uppercase tracking-wider text-xs">
              Features of Application
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <FeatureCard icon={Wifi} title="Offline First" desc="Work without internet. Sync when online." />
              <FeatureCard icon={Camera} title="AI Camera" desc="Auto-tag photos with GPS & direction." />
              <FeatureCard icon={ShieldCheck} title="Enterprise Security" desc="AES-256 encryption & compliance." />
              <FeatureCard icon={Zap} title="Fast & Native" desc="Optimized for field performance." />
            </div>
          </div>
        </div>

        <WhatsAppButton />
        <div className="container space-y-4 mx-auto max-w-[1200px] px-4 mt-12 mb-12">
                    <h1 className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full text-blue-400 font-bold uppercase tracking-wider text-xs">
                        Frequently asked questions      </h1>
                    <div className="flex flex-col gap-6">
                        {[
                            {
                                q: "How accurate is AI defect detection?",
                                a: "Modern AI models used in construction have an accuracy rate of over 95%, often surpassing human inspectors in detecting minute hairline cracks or thermal anomalies.",
                            },
                            {
                                q: "Does it replace human inspectors?",
                                a: "No, it augments them. AI handles the repetitive task of scanning for common defects, allowing human experts to focus on complex structural assessments and decision-making.",
                            },
                            {
                                q: "What types of defects can it detect?",
                                a: "It can identify concrete cracks, water leakage, missing safety gear (PPE), corrosion, and even installation errors by comparing site photos against BIM models.",
                            },
                            {
                                q: "Do I need special cameras?",
                                a: "No. Most systems work with standard smartphone cameras, drones, and 360-degree cameras. The AI processing happens in the cloud.",
                            },
                            {
                                q: "Is my data secure?",
                                a: "Yes. SpaceCapture uses enterprise-grade encryption for all visual data and adheres to strict data privacy standards.",
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-slate-600 text-sm m-0">{faq.a}</p>
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
                                        "name": "How accurate is AI defect detection?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Modern AI models used in construction have an accuracy rate of over 95%, often surpassing human inspectors in detecting minute hairline cracks or thermal anomalies." },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Does it replace human inspectors?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "No, it augments them. AI handles the repetitive task of scanning for common defects, allowing human experts to focus on complex structural assessments and decision-making." },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What types of defects can it detect?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "It can identify concrete cracks, water leakage, missing safety gear (PPE), corrosion, and even installation errors by comparing site photos against BIM models." },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do I need special cameras?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "No. Most systems work with standard smartphone cameras, drones, and 360-degree cameras. The AI processing happens in the cloud." },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is my data secure?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes. SpaceCapture uses enterprise-grade encryption for all visual data and adheres to strict data privacy standards." },
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
    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <h3 className="font-bold mt-4 mb-1">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);
