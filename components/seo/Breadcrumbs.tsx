'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`py-4 text-sm text-gray-500 ${className}`}>
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-purple-600 transition">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="font-semibold text-gray-900">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-purple-600 transition">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
