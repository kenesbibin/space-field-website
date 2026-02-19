import Link from 'next/link';
import { PersonaData } from '@/lib/seo-data';
import { CheckCircle2, ArrowRight, AlertCircle, Video, Sparkles } from 'lucide-react';
import CallToAction from '../CallToAction';

export function PersonaTemplate({ data }: { data: PersonaData }) {
  const SIGN_IN_URL = 'https://www.amspace.ai/login?type=Field&moduleId=8b3b6af5-07a3-44b2-b69e-342b61d71718&invite=guest';

  return (
    <div className="flex flex-col gap-20 pb-0">
      {/* HERO */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-purple-300 bg-purple-900/50 border border-purple-700/50 rounded-full">
            Solutions for {data.slug.replace('-', ' ').toUpperCase()}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            {data.hero.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SIGN_IN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/25">
              {data.hero.ctaSecondary} <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <Link href="/request-a-demo" className="inline-flex items-center justify-center px-8 py-4 font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all">
              {data.hero.ctaPrimary}
            </Link>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{data.painPoints.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.painPoints.items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-900 text-white py-24 mx-4 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">{data.benefits.title}</h2>
            <ul className="space-y-8">
              {data.benefits.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
            <div className="mb-6 pb-4 border-b border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                {data.aiFeatures.title}
              </h3>
            </div>
            <div className="space-y-6">
              {data.aiFeatures.items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
