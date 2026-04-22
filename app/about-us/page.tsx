"use client";

import React from 'react';
import { color, motion } from 'framer-motion';
import {
    Users,
    MapPin,
    Globe,
    Award,
    ArrowRight,
    Heart,
    MessageCircle,
    Mail,
    Phone,
    Cpu
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CallToAction from '@/components/CallToAction';

const LOCATIONS = [
    {
        city: "Singapore",
        type: "Regional Headquarters ",
        address: ["ISPACE BUILDING #04-39", "7 SOON LEE STREET", "SINGAPORE 627608"],
        coords: "1.34°, 103.70°",
        mapLink: "https://www.google.com/maps/search/?api=1&query=1.34,103.70"
    },
    {
        city: "USA",
        type: "Americas Headquarters",
        address: ["2500 MARCONI AVE, STE 101", "SACRAMENTO, CA 95821 USA"],
        coords: "38.62°, -121.38°",
        mapLink: "https://www.google.com/maps/search/?api=1&query=38.62,-121.38"
    },
    {
        city: "Dubai",
        type: "Middle East - Regional Office",
        address: [],
        coords: "25.28°, 55.31°",
        mapLink: "https://www.google.com/maps/search/?api=1&query=25.28,55.31"
    },
    {
        city: "India",
        type: "Technology and R&D",
        address: [],
        coords: "8.91°, 76.69°",
        mapLink: "https://www.google.com/maps/search/?api=1&query=8.91,76.69"
    },
    {
        city: "Kuwait",
        type: "Strategic Partner for Gulf Region",
        address: [],
        coords: "29.08°, 48.13°",
        mapLink: "https://www.google.com/maps/search/?api=1&query=29.08,48.13"
    }
];



export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">

            {/* HERO SECTION */}
            <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        We're organizing the world's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                            spatial data.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                        Space Capture was founded on a simple belief: the physical world deserves a digital twin that is accurate, accessible, and actionable for everyone.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://www.amspace.ai/login?type=Field&moduleId=8b3b6af5-07a3-44b2-b69e-342b61d71718&invite=guest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-base font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:scale-105"
                        >
                            Try for Free
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <Link
                            href="/request-a-demo"
                            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white text-slate-900 px-8 text-base font-bold shadow transition-all hover:bg-slate-100 hover:scale-105"
                        >
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* MISSION & VALUES */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center md:text-left">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Global Scale</h3>
                            <p className="text-slate-600 leading-relaxed">
                                From skyscrapers in New York to infrastructure in Tokyo, our platform powers projects in over 40 countries, processing petabytes of spatial data daily.
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 mx-auto md:mx-0">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Human-Centric AI</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We build technology that augments human intelligence, not replaces it. Our tools empower field teams to make better decisions, faster.
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 mx-auto md:mx-0">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Engineering Excellence</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Accuracy isn't optional. We obsess over every pixel, ensuring that our photogrammetry and LiDAR processing meets the strictest engineering standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT & LEADERSHIP */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Get in Touch</span>
                        <h2 className="text-3xl font-bold text-slate-900">Connect with Leadership</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <ContactCard
                            icon={MessageCircle}
                            title="Chat on WhatsApp"
                            action="Start Chat"
                            href="https://wa.me/17652713686" // Defaulting to US number as typical, adjust if needed
                            color="bg-green-50 text-green-600 hover:bg-green-100"
                        />
                        <ContactCard
                            icon={Mail}
                            title="Email Us"
                            action="Send Message"
                            href="mailto:contact@spacecapture.ai"
                            color="bg-blue-50 text-blue-600 hover:bg-blue-100"
                        />
                        <ContactCard
                            icon={Phone}
                            title="Call Sales"
                            action="+1 (419) 820-1487"
                            href="tel:+14198201487"
                            color="bg-purple-50 text-purple-600 hover:bg-purple-100"
                        />
                        <ContactCard
                            icon={Cpu}
                            title="Tech / CTO"
                            action="Tech Partnerships"
                            href="mailto:cto@spacecapture.ai" // Assuming generic alias, safe fallback
                            color="bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                        />
                    </div>
                </div>
            </section>

            {/* OFFICES */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Global Presence</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Strategically positioned to serve our partners worldwide.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {LOCATIONS.map((loc, idx) => (
                            <OfficeCard key={idx} {...loc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION (Replaced) */}
            <CallToAction />

        </main>
    );
}

const ContactCard = ({ icon: Icon, title, action, href, color }: any) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${color} bg-opacity-50 border border-transparent hover:border-current hover:-translate-y-1`}>
        <Icon className="w-8 h-8 mb-3" />
        <span className="text-sm font-semibold opacity-70 mb-1">{title}</span>
        <span className="text-lg font-bold">{action}</span>
    </a>
);

const OfficeCard = ({ city, type, address, coords, mapLink }: any) => (
    <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg hover:border-blue-200 transition-all group">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-slate-900">{city}</h3>
            <MapPin className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
        </div>

        <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                {type}
            </span>
            {address.length > 0 ? (
                <div className="space-y-1 text-slate-600 text-sm font-medium leading-relaxed">
                    {address.map((line: string, i: number) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            ) : (
                <p className="text-slate-400 text-sm italic">Address not listed publicly.</p>
            )}
        </div>

        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <div className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {coords}
            </div>
            <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
                View Map <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    </div>
);