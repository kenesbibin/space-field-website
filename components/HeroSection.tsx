import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-slate-50 pt-32 pb-20 lg:pt-40 overflow-hidden flex items-center">
      {/* Background decoration — CSS animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="hero-blob hero-blob--blue absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="hero-blob hero-blob--indigo absolute top-40 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="hero-blob hero-blob--purple absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 text-center lg:text-left hero-text-animate">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight hero-fade-in-up">
                AI Field Inspection Software <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  That Catches Defects Before They Cost You
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium hero-fade-in-up hero-fade-in-up--delay-1">
                SpaceCapture uses AI to detect construction defects, automate daily reports, and track site safety — so your team catches issues early and delivers projects on time.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start hero-fade-in-up hero-fade-in-up--delay-2">
              <a
                href="https://app.pmspace.ai/login?type=SpaceCapture&moduleId=7a36674e-f8d6-4962-a0dc-105b50b4849c&invite=guest/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/request-a-demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full text-lg font-semibold border border-slate-200 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 active:scale-95 shadow-sm"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Mobile Video Demo */}
          <div className="relative w-full flex justify-center lg:justify-end hero-slide-in">
            {/* Realistic Mobile Device Frame */}
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px]">
              {/* Outer Frame / Bezel */}
              <div className="relative rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19.5]">
                {/* Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
                </div>

                {/* App demo video, cropped to fill the phone screen */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/images/hero-poster.jpg"
                  aria-label="SpaceCapture app demo on mobile"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/videos/hero-phone.mp4" type="video/mp4" />
                </video>
                {/* Keeps the notch blended without dimming the video */}
                <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Side Buttons (Visual Details) */}
              <div className="absolute -left-[10px] top-24 w-[2px] h-12 bg-slate-800 rounded-l-md"></div>
              <div className="absolute -left-[10px] top-40 w-[2px] h-20 bg-slate-800 rounded-l-md"></div>
              <div className="absolute -right-[10px] top-32 w-[2px] h-24 bg-slate-800 rounded-r-md"></div>

              {/* Floating Badge */}
              <div className="absolute -right-4 sm:-right-8 md:-right-20 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-xl border border-blue-100 hidden sm:flex gap-3 items-center z-20 max-w-[150px] md:max-w-[180px] hero-badge-animate">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Site Inspection</p>
                  <p className="text-[10px] text-green-600 font-medium">Completed</p>
                </div>
              </div>
            </div>

            {/* Decorative elements behind device */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
