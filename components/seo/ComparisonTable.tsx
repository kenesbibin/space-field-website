"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Check, X, ChevronsRight } from 'lucide-react';

interface ComparisonFeature {
  feature: string;
  spaceCapture: boolean | string;
  competitors: boolean | string;
}

interface ComparisonTableProps {
  title: string;
  competitorName?: string;
  features: ComparisonFeature[];
}

export const ComparisonTable = ({
  title,
  competitorName = "Traditional Methods",
  features,
}: ComparisonTableProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      const hasOverflow = el.scrollWidth > el.clientWidth + 1;
      const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      setShowHint(hasOverflow && !nearEnd);
    };

    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [features]);

  return (
    <div className="my-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="bg-slate-900 p-6 text-center">
        <h3 className="text-xl font-bold text-white md:text-2xl">{title}</h3>
      </div>
      <div className="relative">
        <div ref={scrollRef} className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 md:text-base">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 md:text-sm">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">
                  Feature
                </th>
                <th
                  scope="col"
                  className="bg-indigo-50/50 px-6 py-4 font-bold tracking-wider text-indigo-900"
                >
                  SpaceCapture
                </th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">
                  {competitorName}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {features.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                >
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {item.feature}
                  </td>
                  <td className="bg-indigo-50/30 px-6 py-4 font-semibold text-indigo-700">
                    {typeof item.spaceCapture === 'boolean' ? (
                      item.spaceCapture ? (
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <Check className="h-4 w-4" />
                          </div>
                          <span>Included</span>
                        </div>
                      ) : (
                        <X className="h-5 w-5 text-red-400" />
                      )
                    ) : (
                      item.spaceCapture
                    )}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {typeof item.competitors === 'boolean' ? (
                      item.competitors ? (
                        <div className="flex items-center gap-2">
                           <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <Check className="h-4 w-4" />
                          </div>
                          <span>Included</span>
                        </div>
                      ) : (
                         <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500">
                            <X className="h-4 w-4" />
                          </div>
                          <span>Not Available</span>
                        </div>
                      )
                    ) : (
                      item.competitors
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showHint && (
          <>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-2 flex items-center"
              aria-hidden="true"
            >
              <ChevronsRight className="w-5 h-5 text-slate-400 animate-pulse" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
