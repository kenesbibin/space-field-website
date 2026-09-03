import Link from 'next/link';
import { SolutionData } from '@/lib/seo-data';
import { 
  ArrowRight, 
  Check, 
  Zap, 
  ShieldAlert, 
  Droplets, 
  Layout, // For Visual Form Builder
  Brain, 
  PenTool, // For Signature/Smart Logic
  ChevronDown
} from 'lucide-react';

// Icon mapping (expand as needed)
const IconMap: any = { Zap, ShieldAlert, Droplets, Layout, Brain, PenTool };

export function SolutionDetails({ data }: { data: SolutionData }) {
  return (
    <div className="flex flex-col gap-20 pb-20 pt-10">
      
      {/* 2. FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center break-words">{data.features.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.features.items.map((item, idx) => {
             const Icon = IconMap[item.icon] || Zap;
             return (
              <div key={idx} className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 break-words">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed break-words">{item.desc}</p>
              </div>
             );
          })}
        </div>
      </section>

      {/* 3. HOW IT WORKS (Steps) */}
      <section className="bg-slate-50 py-20 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center break-words">{data.howItWorks.title}</h2>
          <div className="space-y-8">
            {data.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 break-words">{step.title}</h3>
                  <p className="text-slate-600 mt-1 leading-relaxed break-words">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ (Rich Snippets Goldmine) */}
      <section className="max-w-3xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center break-words">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {data.faq.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-6 hover:border-purple-200 transition bg-white">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2 flex items-start gap-2 break-words">
                     <span className="text-purple-600 font-bold">Q.</span> {item.question}
                  </h3>
                  <p className="text-slate-600 pl-6 border-l-2 border-slate-100 break-words">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
