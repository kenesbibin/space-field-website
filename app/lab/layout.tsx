"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Box, 
  Layers, 
  Eye, 
  Activity, 
  Cpu, 
  Settings,
  ChevronRight,
  Menu,
  Clock,
  Mic,
  WifiOff,
  Camera
} from 'lucide-react';
const LabLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pt-28 pb-20 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style={{ 
               backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, 
               backgroundSize: '24px 24px' 
           }}
      ></div>

      <main className="container mx-auto px-4 relative z-10 max-w-7xl">
         {children}
      </main>
    </div>
  );
};

export default LabLayout;
