"use client";

import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  isLoading?: boolean;
}

export const LabButton = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 focus:ring-indigo-100",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-100",
    danger: "bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 hover:border-red-200 focus:ring-red-50",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 focus:ring-slate-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
};

export const LabCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const LabHeader = ({ title, description, actions }: { title: string, description?: string, actions?: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h1>
        {description && <p className="text-slate-500 mt-1">{description}</p>}
      </div>
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </div>
  );
};

export const StatusBadge = ({ status }: { status: 'idle' | 'running' | 'success' | 'error' }) => {
    const styles = {
        idle: 'bg-slate-100 text-slate-600',
        running: 'bg-indigo-100 text-indigo-700 animate-pulse',
        success: 'bg-green-100 text-green-700',
        error: 'bg-red-100 text-red-700',
    };

    return (
        <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${styles[status]}`}>
            {status}
        </span>
    );
};
