import React from 'react';
import type { Metadata } from 'next';
import { Download, MessageCircle, Smartphone, Wifi, Camera, ShieldCheck, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsappButton'; // Importing the floating button component if needed globally, but adding inline for specific CTA

export const metadata: Metadata = {
  title: 'Download SpaceCapture | Field Operations App',
  description: 'Download the SpaceCapture mobile app for iOS and Android. Manage offline forms, capture photos, and sync field data in real-time.',
};

export default function AppDownloadPage() {
  const whatsappNumber = "17652713686";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help downloading the app.")}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <main className="pt-32 pb-20">
        
        {/* Dynamic Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto max-w-[1200px] px-4 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full text-blue-400 font-bold uppercase tracking-wider text-xs">
                <Smartphone className="w-4 h-4" /> Mobile Field App
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Your Jobsite, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">In Your Pocket.</span>
              </h1>
              
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                The all-in-one app for field data capture, inspections, and time tracking. Works 100% offline.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                    href="https://www.amspace.ai/login?type=Legal&moduleId=b20f5bfe-a351-46e7-842a-24a02802fe4f&invite=guest" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 group"
                 >
                    <Zap className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    <span>Try for Free</span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                 </a>
                 
                 <a 
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-900/20"
                 >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat Support</span>
                 </a>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 font-mono pt-4">
                 <span>iOS & Android</span>
              </div>
            </div>

            {/* Right Features Grid */}
            <div className="grid gap-6">
                <FeatureCard 
                    icon={Wifi} 
                    title="100% Offline Mode" 
                    desc="Capture photos and fill forms in basements or remote sites. Syncs automatically." 
                    color="text-blue-400"
                    bg="bg-blue-500/10"
                />
                <FeatureCard 
                    icon={Camera} 
                    title="AI Camera" 
                    desc="Detect defects instantly. Tags GPS location and compass direction to every photo." 
                    color="text-purple-400"
                    bg="bg-purple-500/10"
                />
                <FeatureCard 
                    icon={ShieldCheck} 
                    title="Secure & Compliant" 
                    desc="Enterprise-grade encryption (AES-256). SOC 2 Type II Certified." 
                    color="text-green-400"
                    bg="bg-green-500/10"
                />
                <FeatureCard 
                    icon={Zap} 
                    title="Lightning Fast" 
                    desc="Native performance. Zero load times. Built for speed in the field." 
                    color="text-yellow-400"
                    bg="bg-yellow-500/10"
                />
            </div>

          </div>
        </div>

        {/* Whatsapp Floating Button integration */}
        <WhatsAppButton />
      </main>
    </div>
  );
}

const FeatureCard = ({ icon: Icon, title, desc, color, bg }: any) => (
  <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors flex gap-5 items-start">
     <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
        <Icon className={`w-6 h-6 ${color}`} />
     </div>
     <div>
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
     </div>
  </div>
);
