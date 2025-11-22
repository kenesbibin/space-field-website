'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Hammer,
  Wifi,
  Wrench,
  Factory,
  Truck,
  Droplets,
  HardHat,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const industriesItems = [
  { name: 'Construction', href: '/industries/construction', icon: Hammer, description: 'Manage sites and crews efficiently.' },
  { name: 'Utilities & Energy', href: '/industries/utilities', icon: Zap, description: 'Grid maintenance and inspections.' },
  { name: 'Telecommunications', href: '/industries/telecom', icon: Wifi, description: 'Field service for network infra.' },
  { name: 'HVAC & Plumbing', href: '/industries/hvac', icon: Wrench, description: 'Dispatch and repair tracking.' },
  { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory, description: 'Equipment maintenance logs.' },
  { name: 'Logistics', href: '/industries/logistics', icon: Truck, description: 'Fleet and delivery operations.' },
  { name: 'Oil & Gas', href: '/industries/oil-gas', icon: Droplets, description: 'Safety compliance and checks.' },
  { name: 'Facility Management', href: '/industries/facility-management', icon: HardHat, description: 'Building upkeep and services.' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [hoveredIndustries, setHoveredIndustries] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const SIGN_IN_URL = 'https://spaceaiapp.com';
  const DEMO_URL = '/request-a-demo';
  const PHONE_NUMBER = '+65 8611 1900';
  const PHONE_NUMBER2 = '+1 916-969-0451';
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowIndustries(false);
        setHoveredIndustries(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isMenuOpen]);

  const handleIndustriesMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredIndustries(true);
    setShowIndustries(true);
  };

  const handleIndustriesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndustries(false);
      setShowIndustries(false);
    }, 150);
  };

  const renderButton = (href: string, text: string, isPrimary = true) => (
    <a
      href={href}
      className="w-full lg:w-auto"
      onClick={() => setIsMenuOpen(false)}
    >
      <button
        className={`relative w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${
          isPrimary
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-purple-500/50 hover:shadow-xl'
            : 'border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:shadow-md hover:shadow-purple-400/30'
        }`}
      >
        <span className={isPrimary ? 'text-white' : 'text-purple-600'}>{text}</span>
        {isPrimary && (
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30 -z-10" />
        )}
      </button>
    </a>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 py-3 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-lg'
        }`}
      >
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="flex items-center gap-6">
            <div
              className="flex flex-1 items-center justify-between rounded-2xl lg:border-2 lg:border-gray-300 lg:p-2.5 bg-transparent"
            >
              {/* Logo */}
              <div className="flex items-center gap-12">
       <div className="flex items-center">
  <Link
    href="/"
    className="flex items-center rounded-lg px-1 py-1 transition-colors hover:bg-white/5 cursor-pointer"
    aria-label="SPACE CAPTURE Home"
  >
    <Image
      src="/images/icononly_transparent_nobuffer.png"
      alt="SPACE CAPTURE"
      width={24}
      height={24}
      className="h-6 w-6 object-contain"
    />

   <span
  className="ml-0 text-3xl font-extrabold bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-none"
>
      PACE CAPTURE
    </span>
  </Link>
</div>


                {/* Desktop: Industries Dropdown */}
                <div className="hidden lg:block" ref={dropdownRef}>
                  <div 
                    className="relative group"
                    onMouseEnter={handleIndustriesMouseEnter}
                    onMouseLeave={handleIndustriesMouseLeave}
                  >
                    <a
                      href="/industries"
                      className="flex items-center gap-1 text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer relative py-2"
                      onClick={(e) => {
                        if (showIndustries) {
                          e.preventDefault();
                        }
                        setShowIndustries(false);
                        setHoveredIndustries(false);
                      }}
                    >
                      Industries
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showIndustries ? 'rotate-180' : ''}`} />
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                          hoveredIndustries ? 'w-full' : 'w-0'
                        }`}
                      />
                    </a>

                    {/* Dropdown Panel */}
                    {showIndustries && (
                      <div
                        className="absolute top-full left-0 mt-2 w-[600px] rounded-2xl bg-[linear-gradient(135deg,#fafbfc,#f1f4fb_35%,#f6ecf9_70%,#fef3f8_101%)] shadow-2xl shadow-blue-500/10 border border-slate-100 z-50 overflow-hidden"
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                        }}
                        onMouseLeave={handleIndustriesMouseLeave}
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {industriesItems.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="group flex items-start gap-4 p-3 rounded-lg hover:bg-blue-100/75 transition-colors cursor-pointer"
                                onClick={() => {
                                  setShowIndustries(false);
                                  setHoveredIndustries(false);
                                }}
                              >
                                <item.icon className="w-5 h-5 text-gray-500 group-hover:text-violet-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                                  <p className="text-xs text-gray-500 mt-1 leading-snug">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Desktop: Contact & Actions */}
              <div className="hidden lg:flex items-center gap-5">
                <Link
                  href="/about-us"
                  className="text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer"
                >
                  About Us
                </Link>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                  className="flex items-center gap-2 text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer"
                >
                  <span className="text-sm">🇸🇬</span>
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{PHONE_NUMBER}</span>
                </a>
                 <a 
                  href={`tel:${PHONE_NUMBER2.replace(/\s/g, '')}`} 
                  className="flex items-center gap-2 text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer"
                >
                  <span className="text-sm">🇺​​🇸​</span>
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{PHONE_NUMBER2}</span>
                </a>

                <div className="ml-2 flex items-center gap-3">
                  {renderButton(SIGN_IN_URL, 'Sign In')}
                  {renderButton(DEMO_URL, 'Request a Demo', false)}
                </div>
              </div>

              {/* Mobile: Toggle Button */}
              <button 
                className="rounded-lg border-2 border-gray-300 bg-white p-2 text-gray-700 transition-all hover:bg-gray-50 active:scale-95 cursor-pointer lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 backdrop-blur-xl pt-24 lg:hidden">
          <div className="container px-4 py-6">
            <nav className="space-y-6">
              <Link
                href="/"
                className="block border-b border-gray-200 py-3 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Industries Section */}
              <div className="border-b border-gray-200 pb-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Industries
                </div>
                <div className="space-y-2">
                  {industriesItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-3 rounded-lg p-2 text-gray-700 transition-colors hover:bg-purple-100 hover:text-purple-700 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-sm block font-medium">{item.name}</span>
                        <span className="text-xs text-gray-500 block mt-1">{item.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* About Us */}
              <Link
                href="/about-us"
                className="block border-b border-gray-200 py-3 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Contact Number */}
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="flex w-full items-center gap-3 border-b border-gray-200 py-3 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm">🇸🇬</span>
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER}
              </a>
              
                <a
                href={`tel:${PHONE_NUMBER2.replace(/\s/g, '')}`}
                className="flex w-full items-center gap-3 border-b border-gray-200 py-3 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm">🇺​​🇸​</span>
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER2}
              </a>

              {/* Buttons */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex flex-col gap-4">
                  {renderButton(SIGN_IN_URL, 'Sign In')}
                  {renderButton(DEMO_URL, 'Request a Demo', false)}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}


