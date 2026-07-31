"use client"

import React from 'react';
import Image from 'next/image';
import { Smartphone, Zap, CloudOff, ShieldCheck, Download, QrCode } from 'lucide-react';

const AppDownloadSection = () => {
    const features = [
        {
            icon: CloudOff,
            title: "Offline Mode",
            description: "Capture data even without internet. Syncs automatically when back online."
        },
        {
            icon: Zap,
            title: "Fast Capture",
            description: "Instant photo uploads and quick-fill forms designed for thumb-only use."
        },
        {
            icon: ShieldCheck,
            title: "Secure & Compliant",
            description: "Enterprise-grade security for all your field data and inspection reports."
        }
    ];

    return (
        <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="text-left animate-[heroFadeInUp_0.8s_ease-out_both]">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8">
                            <Smartphone className="w-4 h-4" />
                            <span>Mobile App Available</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
                            Empower Your Field Team <br />
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Anywhere, Anytime.
                            </span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">
                            Take the power of SpaceCapture to the field. Our Android app is optimized for speed, reliability, and ease of use in even the toughest environments.
                        </p>

                        {/* Feature mini-grid */}
                        <div className="grid sm:grid-cols-3 gap-6 mb-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="space-y-3">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-white font-bold text-sm">{feature.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Download Buttons / QR */}
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.SpaceAi.FieldModule&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105 active:scale-95"
                            >
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    width={200}
                                    height={60}
                                    className="h-[60px] w-auto"
                                />
                            </a>

                            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl border border-white/10">
                                <div className="bg-white p-2 rounded-lg">
                                    <QrCode className="w-12 h-12 text-slate-900" />
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold uppercase tracking-wider">Scan to Download</p>
                                    <p className="text-slate-500 text-[10px]">Instant access for Android</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end animate-[heroSlideIn_1s_ease-out_0.2s_both]">
                        <div className="relative w-full max-w-[500px]">
                            {/* Decorative Background for Mockup */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                            <Image
                                src="/images/playstore-mockup.png"
                                alt="SpaceCapture Mobile App Mockup"
                                width={600}
                                height={800}
                                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                            />

                            {/* Floating UI Element for extra "Wow" */}
                            <div className="absolute -left-4 top-1/2 p-4 bg-blue-600 rounded-2xl shadow-2xl border border-blue-400/30 flex items-center gap-4 z-20 animate-[heroFloat_4s_ease-in-out_infinite]">
                                <div className="p-2 bg-white/20 rounded-lg">
                                    <Download className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">10k+ Downloads</p>
                                    <p className="text-blue-100 text-[10px]">Trusted by field teams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
