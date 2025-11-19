"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { MapPin, Activity, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Data for the carousel slides
const slides = [
  {
    id: 1,
    image: "/images/landing1.jpg", 
    title: "Field Operations Hub",
    location: "Construction Site A",
    description: "Real-time monitoring",
    icon: MapPin
  },
  {
    id: 2,
    image: "/images/landing2.jpg", 
    title: "Asset Tracking",
    location: "Logistics Center",
    description: "Precision GPS Lock",
    icon: Activity
  },
  {
    id: 3,
    image: "/images/hero.jpg", 
    title: "Safety Compliance",
    location: "Inspection Zone",
    description: "100% Protocol Adherence",
    icon: ShieldCheck
  }
];

const ShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manual Navigation Handlers
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-rotate slides every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000); 
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    // UPDATED GRADIENT: Light Blue -> Indigo -> Light Purple
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch h-full min-h-[600px]">
          
          {/* LEFT SIDE: Carousel Feature Card */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] group">
            
            {/* Fixed White Screen: Images cross-fade */}
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                // Zoom In/Out Animation
                initial={{ opacity: 0, scale: 1.1 }} 
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, zIndex: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Manual Controls (Arrows) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Floating Content Badge */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-10 pointer-events-none">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 max-w-md">
                 {/* Animated Text Content */}
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 flex-shrink-0">
                        {React.createElement(slides[currentIndex].icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{slides[currentIndex].title}</h3>
                        <div className="flex items-center gap-2 text-blue-200 text-sm mt-1">
                          <span>{slides[currentIndex].location}</span>
                          <span className="w-1 h-1 bg-blue-200 rounded-full" />
                          <span>{slides[currentIndex].description}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
              </div>

              {/* Progress Indicators */}
              <div className="flex gap-2 mt-6 pointer-events-auto">
                {slides.map((_, idx) => (
                  <button
                    key={idx} 
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/40 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Static Info Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 text-white flex flex-col justify-center p-8 xl:p-12">
            
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            {/* Gradient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-[80px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-[80px] opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-light leading-tight">
                  <strong className="font-extrabold block text-blue-400 mb-2">Eliminate Field Blindspots.</strong>
                  Don&apos;t let distance become a barrier to progress.
                </h2>
              </motion.div>
              
              <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 0.2, duration: 0.6 }}
                 viewport={{ once: true }}
                 className="text-slate-300 text-lg leading-relaxed"
              >
                Traditional field management relies on guesswork and outdated reports. Space Field bridges the gap between on-site reality and office decision-making with military-grade precision.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button className="mt-4 text-sm font-bold uppercase tracking-wider text-blue-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                  Explore Solutions <span className="text-lg">→</span>
                </button>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;