'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { GlossaryTerm } from '@/lib/glossary-data';

interface GlossaryProps {
  terms: GlossaryTerm[];
}

export const Glossary = ({ terms }: GlossaryProps) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(terms.map((t) => t.category)))];

  // Filter terms
  const filteredTerms = terms
    .filter((t) => selectedCategory === 'All' || t.category === selectedCategory)
    .filter((t) => t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.term.localeCompare(b.term));

  // Group by first letter for the view
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
                type="text" 
                placeholder="Search for a term (e.g., 'RFI', 'BIM')..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                        selectedCategory === cat 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-10">
        {filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
                <p className="text-lg">No terms found matching "{search}"</p>
                <button onClick={() => { setSearch(''); setSelectedCategory('All'); }} className="mt-4 text-indigo-600 font-medium hover:underline">Clear filters</button>
            </div>
        ) : (
            sortedLetters.map((letter) => (
                <div key={letter} className="relative">
                    <div className="sticky top-20 bg-slate-50/90 backdrop-blur-sm z-10 px-4 py-2 rounded-lg mb-4 inline-block border border-slate-200 shadow-sm">
                        <span className="text-xl font-bold text-indigo-600">{letter}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 pl-4 md:pl-0">
                        {groupedTerms[letter].map((term) => (
                            <Link href={`/glossary/${term.slug}`} key={term.term}>
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-5 h-full rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group cursor-pointer"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{term.term}</h3>
                                        <span className="text-xs font-medium px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">{term.category}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{term.definition}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))
        )}
      </div>

    </div>
  );
};
