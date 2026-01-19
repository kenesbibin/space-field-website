"use client";
import { motion, Variants } from "framer-motion";
import { MapPin, Globe, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOCATIONS = [
  {
    country: "Singapore",
    role: "Regional Headquarters",
    address: ["ISPACE BUILDING #04-39", "7 SOON LEE STREET", "SINGAPORE 627608"],
    coords: "1.34°, 103.70°",
    mapLink: "https://www.google.com/maps/search/?api=1&query=1.34,103.70",
  },
  {
    country: "USA",
    role: null,
    address: ["2500 MARCONI AVE, STE 101", "SACRAMENTO, CA 95821 USA"],
    coords: "38.62°, -121.38°",
    mapLink: "https://www.google.com/maps/search/?api=1&query=38.62,-121.38",
  },
  {
    country: "Dubai",
    role: "Middle East - Regional Office",
    address: [],
    coords: "25.28°, 55.31°",
    mapLink: "https://www.google.com/maps/search/?api=1&query=25.28,55.31",
  },
  {
    country: "India",
    role: "Technology and R&D",
    address: [],
    coords: "8.91°, 76.69°",
    mapLink: "https://www.google.com/maps/search/?api=1&query=8.91,76.69",
  },
  {
    country: "Kuwait",
    role: "Strategic Partner for Gulf Region",
    address: [],
    coords: "29.08°, 48.13°",
    mapLink: "https://www.google.com/maps/search/?api=1&query=29.08,48.13",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerParent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutUs() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-24">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-blue-200 opacity-30 blur-[120px]" />
          <div className="absolute -left-16 bottom-4 h-80 w-80 rounded-full bg-indigo-100 opacity-40 blur-[110px]" />
          <div className="absolute left-1/2 top-1/3 h-32 w-[480px] -translate-x-1/2 rounded-full border border-dashed border-slate-200" />
        </div>

        <div className="container mx-auto max-w-[1200px] px-4 relative z-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div
              variants={staggerParent}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                Welcome to SPACE CAPTURE: Your Insight Partner For Every Site
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                Over the last decade, we have paired field-tested hardware integrations with an intelligence layer that surfaces the right evidence, at the right second. Our mission is to make every crew feel backed by an on-site command center.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-[32px] border border-slate-100 bg-white/80 p-4 shadow-2xl backdrop-blur">
                <div className="aspect-[4/3] w-full rounded-[28px] bg-gradient-to-br from-blue-100 via-white to-indigo-50 p-8 text-center text-slate-500">
                  <Image
                    src="/images/about/field-team.jpg"
                    alt="Field engineers collaborating around tablets and drones"
                    width={1200}
                    height={900}
                    className="h-full w-full rounded-2xl object-cover"
                    priority
                  />
                </div>

                <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-xl">
                  <div className="rounded-2xl bg-blue-50 p-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Live Site Command</p>
                    <p className="text-base font-bold text-slate-900">Multiple crews guided in parallel</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="container mx-auto max-w-[1100px] px-4">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Delivering insights that drive success</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900">
                We began as a tight-knit crew frustrated by analog workflows. Today, SPACE CAPTURE anchors mission-critical decisions for enterprises that refuse to leave accuracy to chance.
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Since launching in a converted warehouse, we have worked shoulder-to-shoulder with project managers, inspectors, and safety directors. Together, we crafted a platform that mirrors the urgency of real operations and adapts to every discipline from renewable energy to transportation.
              </p>
            </div>

            <div className="flex flex-col gap-7 rounded-3xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.45)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.3),transparent_55%)]" />
              <div className="relative z-10 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">Immersion Lab</p>
                <h3 className="text-3xl font-extrabold leading-snug">A playground where prototypes breathe and field rituals are choreographed.</h3>
                <p className="text-sm text-indigo-100/90">
                  Instead of presentation decks, we build scenes. Crews walk through fog machines, sirens, and tactile boards until the next release feels inevitable.
                </p>
              </div>

              <div className="relative z-10 rounded-2xl border border-white/10 bg-white/10 p-5 flex flex-col gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">Want in?</p>
                <p className="text-base text-indigo-50/90">We rotate a handful of partners through the lab every quarter. Bring your toughest workflow and leave with a cinematic playbook.</p>
                <Link
                  href="/request-a-demo"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
                >
                  Request a lab slot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="rounded-[36px] border border-slate-100 bg-white p-4 shadow-2xl">
                <div className="aspect-[4/3] w-full rounded-[28px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6">
                  <Image
                    src="/images/about/team-collab.jpg"
                    alt="SPACE CAPTURE teammates strategizing in a mission control-style space"
                    width={1200}
                    height={900}
                    className="h-full w-full rounded-3xl object-cover"
                  />
                </div>
              </div>

              <div className="absolute -right-6 top-10 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-4 text-indigo-800 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Team Pulse</p>
                <p className="text-2xl font-black">Thriving</p>
                <p className="text-xs text-indigo-700">Teammates champion SPACE CAPTURE as the place to build their career.</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Our power is people</p>
              <h2 className="mt-4 text-4xl font-extrabold text-slate-900">A multidisciplinary team aligned around impact.</h2>
              <p className="mt-6 text-lg text-slate-600">
                We blend product thinkers, site coordinators, AI researchers, and safety specialists. That diversity lets us simulate real-world chaos inside every design decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Locations */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-blue-700 mb-6">
               <Globe className="h-4 w-4" />
               <span className="text-xs font-bold uppercase tracking-widest">Global Reach</span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900">Our Global Presence</h2>
            <p className="mt-4 text-lg text-slate-600">Strategic hubs supporting our partners worldwide.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {LOCATIONS.map((loc) => (
                <div key={loc.country} className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                   <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-2xl font-black text-slate-900">{loc.country}</h3>
                      <div className="rounded-full bg-slate-50 p-2 text-slate-400 group-hover:text-blue-600 transition-colors">
                         <MapPin className="h-6 w-6" />
                      </div>
                   </div>
                   
                   {loc.role && (
                      <p className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">
                         {loc.role}
                      </p>
                   )}

                   <div className="space-y-1 text-slate-600 text-sm leading-relaxed mb-6 h-20">
                      {loc.address.length > 0 ? (
                         loc.address.map((line, idx) => (
                            <p key={idx}>{line}</p>
                         ))
                      ) : (
                         <p className="italic text-slate-400">Coordinating from regional hub</p>
                      )}
                   </div>

                   <div className="border-t border-slate-100 pt-6">
                      <div className="flex items-center justify-between">
                         <span className="font-mono text-xs text-slate-400">{loc.coords}</span>
                         <a 
                            href={loc.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                         >
                            View Map <ExternalLink className="h-3 w-3" />
                         </a>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto max-w-[1000px] px-4">
          <div className="rounded-[36px] bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 px-8 py-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Join the companies unlocking precise field intelligence with SPACE CAPTURE.</h2>
            <p className="mt-4 text-lg text-orange-50">Let’s co-design the command center your teams deserve.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/request-a-demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-600 shadow-lg shadow-orange-600/30 transition hover:-translate-y-0.5"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}