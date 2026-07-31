"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on the home page
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    // Format label: remove hyphens, capitalize words
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    
    return {
      label,
      href,
      isLast: index === pathSegments.length - 1,
    };
  });

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://spacecapture.ai",
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://spacecapture.ai${item.href}`,
      })),
    ],
  };

  return (
    <div className="bg-slate-50/80 backdrop-blur-md mt-[72px] relative">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        
        {/* JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-1">
            
            {/* Home Link */}
            <li>
              <Link 
                href="/" 
                className="text-slate-500 hover:text-purple-600 transition-colors flex items-center p-1 rounded-md hover:bg-purple-50"
              >
                <Home className="w-5 h-5" />
                <span className="sr-only">Home</span>
              </Link>
            </li>

            {breadcrumbItems.map((item, index) => (
              <li key={item.href} className="flex items-center whitespace-nowrap">
                <ChevronRight className="w-5 h-5 text-slate-300 mx-1 flex-shrink-0" />
                {item.isLast ? (
                  <span
                    className="text-base font-bold text-slate-800 tracking-wide px-2 py-1 bg-white/50 rounded-md border border-slate-100 shadow-sm breadcrumb-animate"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-slate-500 hover:text-purple-600 transition-colors px-1 py-1 rounded-md hover:bg-purple-50"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      
      {/* Light Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-70"></div>
    </div>
  );
}
