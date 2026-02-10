import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
    Download,
    MessageCircle,
    Smartphone,
    Wifi,
    Camera,
    ShieldCheck,
    Zap,
    ArrowRight,
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
    ],

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

    // Direct "Write a Review" deep link
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
                                available on Google Play Store. Capture photos, fill forms, and sync
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex gap-4">
                                    <Image
                                        src="/images/space-capture-logo.jpg"
                                        alt="SpaceCapture App Logo"
                                        width={55}
                                        height={48}
                                        className="rounded-xl"
                                        priority
                                    />
                                    <div>
                                        <h1 className="text-xl font-bold">Space Capture</h1>
                                        <a
                                            href={playStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start justify-center gap-3  text-blue-400  rounded-2xl font-light "
                                        >
                                            www.space-sign.ai
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center gap-4">

                                <a
                                    href={playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3  px-8 py-3 rounded-2xl font-bold bg-slate-900/50 p-6 border border-slate-800 hover:border-slate-700 transition  shadow-lg group"
                                >
                                    <Download className="w-5 h-5 group-hover:-translate-y-1 transition" />
                                    Download App
                                    <ExternalLink className="w-4 h-4 opacity-70" />
                                </a>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-black justify-center gap-3 bg-[#a7c0b0] px-8 py-3 rounded-2xl font-bold hover:bg-[#8a938d] transition"
                                >
                                    <MessageCircle className="w-5 h-5 text-black" />
                                    request-a-demo
                                </a>
                            </div>

                            {/* Review */}
                            <a
                                href={reviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-slate-900/50 p-3 rounded-2xl border border-slate-800 hover:border-slate-700 transition"
                            >
                                <Star className="w-4 h-4 mr-2 " />
                                Rate & Review on Play Store
                            </a>

                            {/* <div className="flex gap-6 text-xs text-slate-500 font-mono">
                <span>⭐ 4.8 Rating</span>
                <span>⬇ 10K+ Downloads</span>
                <span>🔒 Secure</span>
              </div> */}
                        </div>

                        {/* RIGHT MOCKUP */}
                        <div className="relative flex justify-center">
                            <div className="relative max-w-sm lg:max-w-md">
                                <Image
                                    src="/images/playstore-mockup.png"
                                    alt="SpaceCapture Play Store App Preview"
                                    width={600}
                                    height={1200}
                                    priority
                                    className="drop-shadow-2xl rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* FEATURES */}
                    <div className="flex  flex-col gap-4 mt-20">
                        <h1 className="inline-flex items-center gap-2 border w-fit border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full text-blue-400 font-bold uppercase tracking-wider text-xs">
                            Features of Application      </h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                            <FeatureCard
                                icon={Wifi}
                                title="Offline First"
                                desc="Work without internet. Sync when online."
                                color="text-blue-400"
                                bg="bg-blue-500/10"
                            />
                            <FeatureCard
                                icon={Camera}
                                title="AI Camera"
                                desc="Auto-tag photos with GPS & direction."
                                color="text-purple-400"
                                bg="bg-purple-500/10"
                            />
                            <FeatureCard
                                icon={ShieldCheck}
                                title="Enterprise Security"
                                desc="AES-256 encryption & compliance."
                                color="text-green-400"
                                bg="bg-green-500/10"
                            />
                            <FeatureCard
                                icon={Zap}
                                title="Fast & Native"
                                desc="Optimized for field performance."
                                color="text-yellow-400"
                                bg="bg-yellow-500/10"
                            />
                        </div>
                    </div>
                </div>

                {/* Hidden SEO Content */}
                <section className="sr-only">
                    <h2>Download SpaceCapture Android App</h2>
                    <p>
                        SpaceCapture is an offline-first Android field operations app
                        available on Google Play Store.
                    </p>
                </section>

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

const FeatureCard = ({ icon: Icon, title, desc, color, bg }: any) => (
    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg}`}>
            <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <h3 className="font-bold mt-4 mb-1">{title}</h3>
        <p className="text-slate-400 text-sm">{desc}</p>
    </div>
);
