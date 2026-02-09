"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Calculator, Send, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Types
type Category = "Materials" | "Labor" | "Permits" | "Site Prep" | "Other";

interface LineItem {
  id: string;
  name: string;
  category: Category;
  unitCost: number;
  quantity: number;
  notes?: string;
}

const CATEGORIES: Category[] = ["Materials", "Labor", "Permits", "Site Prep", "Other"];

export default function ConstructionCostCalculator() {
  const router = useRouter();
  
  // State
  const [items, setItems] = useState<LineItem[]>([
    { id: '1', name: 'Foundation Concrete', category: 'Materials', unitCost: 150, quantity: 10, notes: '3000 PSI Mix' },
    { id: '2', name: 'Framing Labor', category: 'Labor', unitCost: 45, quantity: 40, notes: 'Certified crew' },
  ]);
  // Currency fixed to USD
  const currency = '$'; 
  const [showModal, setShowModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculated Values
  const calculateRowTotal = (item: LineItem) => item.unitCost * item.quantity;
  const grandTotal = items.reduce((sum, item) => sum + calculateRowTotal(item), 0);

  // Actions
  const addItem = () => {
    const newItem: LineItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      category: 'Materials',
      unitCost: 0,
      quantity: 1,
      notes: ''
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof LineItem, value: any) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const clearAll = () => {
    if (confirm('Are you sure you want to clear all items?')) {
      setItems([]);
    }
  };
  
  const handlePrint = () => {
    window.print();
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call / Prepare data
    const summary = items.map(i => 
      `- ${i.name || 'Unnamed Item'} (${i.category}): ${currency}${calculateRowTotal(i).toFixed(2)}${i.notes ? ` [${i.notes}]` : ''}`
    ).join('\n');
    
    const projectDetails = `Construction Cost Estimate Request:
    
Total Estimated: ${currency}${grandTotal.toFixed(2)}

Breakdown:
${summary}

User: ${leadForm.name}
Email: ${leadForm.email}
    `;

    // Simulate delay then redirect
    setTimeout(() => {
        setIsSubmitting(false);
        setShowModal(false);
        // Encode and redirect to Request Demo
        const params = new URLSearchParams();
        params.set('projectDetails', projectDetails);
        params.set('firstName', leadForm.name.split(' ')[0] || '');
        params.set('lastName', leadForm.name.split(' ').slice(1).join(' ') || '');
        params.set('email', leadForm.email);
        
        router.push(`/request-a-demo?${params.toString()}`);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:shadow-none print:border-0">
        {/* Header */}
        <div className="bg-slate-900 p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white print:bg-white print:text-black print:border-b-2 print:border-black">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg print:hidden">
                    <Calculator className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-xl font-bold">Project Estimator</h2>
                    <p className="text-sm text-slate-400 print:text-slate-600">Professional Grade Calculation</p>
                </div>
            </div>
            {/* Removed Currency Toggle */}
        </div>

        {/* Table Area */}
        <div className="p-6 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3 px-2">Item Name</th>
                        <th className="py-3 px-2 w-40">Category</th>
                        <th className="py-3 px-2 w-48">Notes</th>
                        <th className="py-3 px-2 w-32">Unit Cost</th>
                        <th className="py-3 px-2 w-24">Qty</th>
                        <th className="py-3 px-2 w-32 text-right">Total</th>
                        <th className="py-3 px-2 w-16 print:hidden"></th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    <AnimatePresence>
                        {items.map((item) => (
                            <motion.tr 
                                key={item.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                className="group hover:bg-slate-50 border-b border-slate-100 last:border-0 print:border-slate-300"
                            >
                                <td className="p-2">
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Drywall Sheets"
                                        className="w-full bg-transparent border border-transparent hover:border-slate-300 focus:border-blue-500 rounded px-2 py-1 outline-none transition-all print:border-none"
                                        value={item.name}
                                        onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                                    />
                                </td>
                                <td className="p-2">
                                    <select 
                                        className="w-full bg-transparent border border-transparent hover:border-slate-300 focus:border-blue-500 rounded px-2 py-1 outline-none transition-all cursor-pointer print:appearance-none print:border-none"
                                        value={item.category}
                                        onChange={(e) => updateItem(item.id, 'category', e.target.value as Category)}
                                    >
                                        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </td>
                                <td className="p-2">
                                    <input 
                                        type="text" 
                                        placeholder="Optional details..."
                                        className="w-full bg-transparent border border-transparent hover:border-slate-300 focus:border-blue-500 rounded px-2 py-1 outline-none transition-all text-slate-500 print:border-none"
                                        value={item.notes || ''}
                                        onChange={(e) => updateItem(item.id, 'notes', e.target.value)}
                                    />
                                </td>
                                <td className="p-2">
                                    <div className="relative">
                                        <span className="absolute left-2 top-1.5 text-slate-400 text-xs">{currency}</span>
                                        <input 
                                            type="number" 
                                            min="0"
                                            className="w-full pl-6 bg-transparent border border-transparent hover:border-slate-300 focus:border-blue-500 rounded pr-2 py-1 outline-none transition-all print:border-none"
                                            value={item.unitCost}
                                            onChange={(e) => updateItem(item.id, 'unitCost', parseFloat(e.target.value) || 0)}
                                        />
                                    </div>
                                </td>
                                <td className="p-2">
                                    <input 
                                        type="number" 
                                        min="0"
                                        className="w-full bg-transparent border border-transparent hover:border-slate-300 focus:border-blue-500 rounded px-2 py-1 outline-none transition-all print:border-none"
                                        value={item.quantity}
                                        onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                                    />
                                </td>
                                <td className="p-2 text-right font-medium text-slate-700">
                                    {currency}{calculateRowTotal(item).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </td>
                                <td className="p-2 text-center print:hidden">
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                        title="Remove Item"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </AnimatePresence>
                </tbody>
            </table>
            
            {items.length === 0 && (
                <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-200 rounded-lg mt-4 print:hidden">
                    <p>No items added yet.</p>
                    <button onClick={addItem} className="text-blue-600 font-medium hover:underline mt-2">Start by adding a row</button>
                </div>
            )}
        </div>

        {/* Footer / Controls */}
        <div className="bg-slate-50 p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-200 print:bg-white print:border-t-2 print:border-black">
            <div className="flex gap-4 print:hidden">
                <button 
                    onClick={addItem}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
                >
                    <Plus className="w-4 h-4" /> Add Item
                </button>
                {items.length > 0 && (
                     <>
                        <button 
                            onClick={clearAll}
                            className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-red-600 font-medium text-sm transition-colors"
                        >
                            Clear All
                        </button>
                        <button 
                            onClick={handlePrint}
                            className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors"
                        >
                            Print
                        </button>
                     </>
                )}
            </div>

            <div className="flex flex-col items-end gap-1 w-full md:w-auto">
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Estimated Total</div>
                <div className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    {currency}{grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
            </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-blue-600 p-4 text-white flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">
            <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-medium text-blue-100">Estimates are for planning purposes only.</span>
            </div>
            <button 
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95"
            >
                <Send className="w-4 h-4" /> Email Me This Estimate
            </button>
        </div>

        {/* Lead Capture Modal */}
        <AnimatePresence>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    />
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 overflow-hidden"
                    >
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
                        
                        <button 
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileSignatureIcon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Save Your Estimate</h3>
                            <p className="text-slate-500 mt-2">Enter your details to receive this estimate and unlock the full report.</p>
                        </div>

                        <form onSubmit={handleLeadSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input 
                                    required
                                    type="text" 
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="John Doe"
                                    value={leadForm.name}
                                    onChange={e => setLeadForm({...leadForm, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Business Email</label>
                                <input 
                                    required
                                    type="email" 
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="john@company.com"
                                    value={leadForm.email}
                                    onChange={e => setLeadForm({...leadForm, email: e.target.value})}
                                />
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>Processing...</>
                                ) : (
                                    <>Get Estimate & Request Demo <ArrowRightIcon className="w-4 h-4" /></>
                                )}
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-4">
                                By continuing, you agree to our Terms of Service.
                            </p>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    </div>
  );
}

// Simple icons for local use
function FileSignatureIcon(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 19v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10" />
      <path d="M8 2v22" />
      <path d="M14 2v2" />
      <path d="M8 10h12" />
      <path d="M8 14h8" />
      <path d="M8 18h4" />
      <path d="M12 2h8" />
    </svg>
  );
}

function ArrowRightIcon(props: any) {
    return (
        <svg 
            {...props}
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
