"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    MapPin,
    Globe,
    Award,
    ArrowRight,
    Heart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsContent() {
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
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Space Capture was founded on a simple belief: the physical world deserves a digital twin that is accurate, accessible, and actionable for everyone.
                    </p>
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

            {/* TEAM GRID */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Leadership</span>
                        <h2 className="text-3xl font-bold text-slate-900">Meet the Builders</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <TeamMember
                            name="Sarah Chen"
                            role="CEO & Co-Founder"
                            bio="Ex-NASA Engineer. Leading the vision to digitize reality."
                            image="/images/team-1.jpg" // Placeholder path
                        />
                        <TeamMember
                            name="David Miller"
                            role="CTO"
                            bio="PhD in Computer Vision. Architect of our Core Engine."
                            image="/images/team-2.jpg" // Placeholder path
                        />
                        <TeamMember
                            name="Elena Rodriguez"
                            role="Head of Product"
                            bio="Previously at Autodesk. Passionate about user workflows."
                            image="/images/team-3.jpg" // Placeholder path
                        />
                        <TeamMember
                            name="Kenji Sato"
                            role="VP of Engineering"
                            bio="Scaling systems from 1 to 100 million users."
                            image="/images/team-4.jpg" // Placeholder path
                        />
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-slate-500 mb-6">
                            Plus 150+ engineers, designers, and problem solvers across the globe.
                        </p>
                        <button className="px-6 py-3 bg-white border border-slate-300 rounded-lg font-bold text-slate-700 hover:border-slate-400 transition-colors">
                            View All Open Positions
                        </button>
                    </div>
                </div>
            </section>

            {/* OFFICES */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Where We Work</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We are a remote-first company with hubs in key innovation centers. Come say hi if you're in the neighborhood!
                        </p>

                        <div className="space-y-6">
                            <OfficeLocation city="San Francisco" address="548 Market St, CA 94104" type="Headquarters" />
                            <OfficeLocation city="Singapore" address="71 Ayer Rajah Crescent, #02-01" type="APAC Hub" />
                            <OfficeLocation city="London" address="123 Buckingham Palace Rd" type="EMEA Hub" />
                        </div>
                    </div>

                    <div className="bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                        {/* Abstract Map Visual */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
                        <div className="relative z-10 text-center">
                            <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-bounce" />
                            <h3 className="text-xl font-bold text-slate-900">Global Presence</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Built with passion.<br />Backed by science.</h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        Ready to transform how you manage your physical assets? Join thousands of forward-thinking companies today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/request-a-demo">
                            <button className="px-8 py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-900/50">
                                Start Your Free Trial
                            </button>
                        </Link>
                        <Link href="/lab/photogrammetry">
                            <button className="px-8 py-4 bg-slate-800 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700">
                                Explore Our Tech
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

const TeamMember = ({ name, role, bio, image }: any) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group text-center">
        <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 overflow-hidden relative">
            {/* Placeholder for real image */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 font-bold text-2xl">
                {name.charAt(0)}
            </div>
            {/* <Image src={image} alt={name} fill className="object-cover" /> */}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">{role}</p>
        <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
    </div>
);

const OfficeLocation = ({ city, address, type }: any) => (
    <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition-colors">
        <div className="mt-1 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
            <MapPin className="w-4 h-4" />
        </div>
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-slate-900">{city}</h4>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] uppercase font-bold rounded">{type}</span>
            </div>
            <p className="text-slate-500 text-sm">{address}</p>
        </div>
    </div>
);
