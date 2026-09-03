"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronsRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLOListElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkOverflow = () => {
      const hasOverflow = el.scrollWidth > el.clientWidth + 1;
      const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      setShowScrollHint(hasOverflow && !nearEnd);
    };

    checkOverflow();
    el.addEventListener("scroll", checkOverflow, { passive: true });
    window.addEventListener("resize", checkOverflow);

    return () => {
      el.removeEventListener("scroll", checkOverflow);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [pathname]);

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
    <div className="bg-slate-50/80 backdrop-blur-md relative mt-[var(--navbar-height)]">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        {/* JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <nav aria-label="Breadcrumb" className="relative">
          <ol
            ref={scrollRef}
            className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-1 pr-8"
          >
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

            {breadcrumbItems.map((item) => (
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

          {/* Right-edge fade to indicate scrollable content */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-50/90 to-transparent"
            aria-hidden="true"
          />

          {/* Scroll hint arrow */}
          {showScrollHint && (
            <div
              className="pointer-events-none absolute inset-y-0 right-2 flex items-center"
              aria-hidden="true"
            >
              <ChevronsRight className="w-5 h-5 text-slate-400 animate-pulse" />
            </div>
          )}
        </nav>
      </div>

      {/* Light Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-70"></div>
    </div>
  );
}
