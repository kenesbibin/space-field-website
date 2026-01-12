'use client';

import { useState, useEffect, useRef } from 'react';
import type { ElementType } from 'react';
import Image from 'next/image';
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Hammer, Wifi, Wrench, Factory, Truck, Droplets, HardHat, Zap, Layout, Palette, Users, GitBranch, Lock, BarChart3, Plug, Server, BrainIcon, Mail, Check, Copy, Globe, ShieldCheck, Clock
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

// --- Configuration Data ---
const industriesItems = [
  { name: 'construction', href: '/industries/construction', icon: Hammer },
  { name: 'utilities', href: '/industries/utilities', icon: Zap },
  { name: 'telecom', href: '/industries/telecom', icon: Wifi },
  { name: 'hvac', href: '/industries/hvac', icon: Wrench },
  { name: 'manufacturing', href: '/industries/manufacturing', icon: Factory },
  { name: 'logistics', href: '/industries/logistics', icon: Truck },
  { name: 'oilGas', href: '/industries/oil-gas', icon: Droplets },
  { name: 'facilityManagement', href: '/industries/facility-management', icon: HardHat },
];

type ProductMenuItem = {
  name: string;
  href: string;
  icon: ElementType;
  description?: string;
};

const productsMenuItems: Record<string, ProductMenuItem[]> = {
  Features: [
    { name: 'coreFunctions', href: '/core-functions', icon: Layout },
    { name: 'visualFormBuilder', href: '/visual-form-builder', icon: Palette },
    { name: 'aiDetection', href: '/ai-detection', icon: BrainIcon },
    { name: 'engagementFlows', href: '/engagement-flows', icon: GitBranch },
    { name: 'accessControl', href: '/access-control', icon: Lock },
    { name: 'deepInsights', href: '/reports', icon: BarChart3 },
  ],
  'For Developers': [
    { name: 'integrations', href: '/integrations', icon: Plug },
    { name: 'flexibleHosting', href: '/hosting', icon: Server },
  ],
  Solutions: [
    { name: 'Azure AD SSO', href: '/solutions/azure-sso', icon: Lock, description: 'Azure single sign on + Okta federation for every workflow.' },
    { name: 'Inspection Software', href: '/solutions/inspection-software', icon: ShieldCheck, description: 'Building, fire, vehicle, and quality inspection apps.' },
    { name: 'Fleet Maintenance', href: '/solutions/fleet-maintenance', icon: Truck, description: 'Fleet maintenance app, DVIR, and equipment tracking.' },
    { name: 'Time Tracking', href: '/solutions/time-tracking', icon: Clock, description: 'Time clock apps, payroll-ready timesheets, and scheduling.' },
    { name: 'Data Collection', href: '/solutions/data-collection', icon: Plug, description: 'Fulcrum app alternative, offline forms, and feature requests.' },
  ],
  Resources: [
    { name: 'Construction Templates', href: '/resources/templates', icon: Globe, description: 'Scope of work, safety checklists, and inspection templates.' },
    { name: 'Fulcrum Comparison', href: '/compare/fulcrum', icon: GitBranch, description: 'See how SpaceCapture stacks up against the Fulcrum app.' },
  ],
};

// --- Email Modal Component ---
const EmailModal = ({ isOpen, onClose, email }: { isOpen: boolean; onClose: () => void; email: string }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 transform transition-all scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-purple-100 rounded-full text-purple-600">
            <Mail className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-gray-900">{t('common.getInTouch')}</h3>
          <p className="text-gray-500 text-sm">
            {t('common.copyEmail')}
          </p>

          <div className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 mt-4">
            <span className="text-gray-700 font-medium font-mono text-sm sm:text-base truncate mr-2">
              {email}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center justify-center p-2 rounded-md transition-colors hover:bg-white hover:shadow-sm text-gray-500 hover:text-purple-600 focus:outline-none"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          <div className="pt-2 text-xs text-gray-400">
            {copied ? t('common.copied') : t('common.clickToCopy')}
          </div>
        </div>
      </div>
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default function Navbar() {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [hoveredIndustries, setHoveredIndustries] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [hoveredProducts, setHoveredProducts] = useState(false);
  const [activeProductCategory, setActiveProductCategory] = useState<string>('Features');
  const [scrolled, setScrolled] = useState(false);

  // Modal State
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [mobileEmailCopied, setMobileEmailCopied] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { t } = useLanguage();

  // Constants
  const SIGN_IN_URL = 'https://www.amspace.ai/login?type=Legal&moduleId=b20f5bfe-a351-46e7-842a-24a02802fe4f&invite=guest';
  const DEMO_URL = '/request-a-demo';
  const PHONE_NUMBER_SG = '+65 8611 1900';
  const PHONE_NUMBER_USA = '+1 516 669 7420';
  const CONTACT_EMAIL = 'contact@spacecapture.ai';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowIndustries(false);
        setHoveredIndustries(false);
        setShowProducts(false);
        setHoveredProducts(false);
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

  // Dropdown Handlers
  const handleIndustriesMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredIndustries(true);
    setShowIndustries(true);
    setShowProducts(false);
    setHoveredProducts(false);
  };

  const handleIndustriesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndustries(false);
      setShowIndustries(false);
    }, 150);
  };

  const handleProductsMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredProducts(true);
    setShowProducts(true);
    setShowIndustries(false);
    setHoveredIndustries(false);
  };

  const handleProductsMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredProducts(false);
      setShowProducts(false);
    }, 150);
  };

  const handleMobileEmailCopy = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setMobileEmailCopied(true);
    setTimeout(() => setMobileEmailCopied(false), 2000);
  };

  const renderButton = (href: string, text: string, isPrimary = true) => (
    <a
      href={href}
      className="w-full lg:w-auto"
      onClick={() => setIsMenuOpen(false)}
    >
      <button
        className={`relative w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${isPrimary
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
      <EmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        email={CONTACT_EMAIL}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 py-3 transition-all duration-300 ${scrolled || isMenuOpen
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-lg'
          }`}
      >
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="flex items-center gap-6">
            <div
              className="flex flex-1 items-center justify-between rounded-2xl lg:border-2 lg:border-gray-300 lg:p-2.5 bg-transparent min-w-0"
            >
              {/* Logo */}
              <div className="flex items-center gap-4 lg:gap-8 xl:gap-12 flex-shrink-0">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="flex items-center rounded-lg px-1 py-1 transition-colors hover:bg-white/5 cursor-pointer whitespace-nowrap"
                    aria-label="Space Field Home"
                  >
                    <Image
                      src="/images/icononly_transparent_nobuffer.png"
                      alt="Space Field"
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />

                    <span
                      className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-none whitespace-nowrap hidden sm:block"
                    >
                      {t('common.appName')}
                    </span>
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-none whitespace-nowrap sm:hidden">
                      SPACE
                    </span>
                  </Link>
                </div>

                {/* Desktop: Products & Industries Dropdowns */}
                <div className="hidden lg:block" ref={dropdownRef}>
                  {/* Products Dropdown */}
                  <div
                    className="relative group inline-block mr-8"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    <a
                      href="/products"
                      className="flex items-center gap-1 text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer relative py-2"
                      onClick={(e) => {
                        if (showProducts) {
                          e.preventDefault();
                        }
                        setShowProducts(false);
                        setHoveredProducts(false);
                      }}
                    >
                      {t('navbar.products')}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showProducts ? 'rotate-180' : ''}`} />
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${hoveredProducts ? 'w-full' : 'w-0'
                          }`}
                      />
                    </a>

                    {/* Products Dropdown Panel */}
                    {showProducts && (
                      <div
                        className="absolute top-full left-0 mt-2 w-[720px] rounded-2xl bg-white shadow-2xl shadow-blue-500/10 border border-slate-100 z-50 overflow-hidden"
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                        }}
                        onMouseLeave={handleProductsMouseLeave}
                      >
                        <div className="flex">
                          {/* Left: categories */}
                          <div className="w-[220px] flex-shrink-0 bg-[linear-gradient(135deg,#fafbfc,#f1f4fb_35%,#f6ecf9_70%,#fef3f8_101%)] p-4 border-r border-gray-200">
                            <div className="space-y-1">
                              {Object.keys(productsMenuItems).map((category) => (
                                <button
                                  key={category}
                                  onMouseEnter={() => setActiveProductCategory(category)}
                                  className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center justify-between ${activeProductCategory === category
                                    ? 'bg-violet-50 text-violet-700'
                                    : 'text-gray-600 hover:bg-white/50'
                                    }`}
                                >
                                  <span>{category === 'Features' ? t('products.features') : t('products.forDevelopers')}</span>
                                  <ChevronRight className={`w-4 h-4 transition-opacity duration-200 ${activeProductCategory === category ? 'opacity-100' : 'opacity-0'}`} />
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Right: items for active category */}
                          <div className="flex-1 p-6 bg-white">
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                              {productsMenuItems[activeProductCategory]?.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="group flex items-start gap-4 p-3 rounded-lg hover:bg-blue-100/75 transition-colors cursor-pointer"
                                  onClick={() => {
                                    setShowProducts(false);
                                    setHoveredProducts(false);
                                  }}
                                >
                                  <item.icon className="w-5 h-5 text-gray-500 group-hover:text-violet-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-semibold text-gray-900">{t(`products.${item.name}`)}</p>
                                    <p className="text-xs text-gray-500 mt-1 leading-snug">{t(`products.${item.name}Desc`)}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Industries Dropdown */}
                  <div
                    className="relative group inline-block"
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
                      {t('navbar.industries')}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showIndustries ? 'rotate-180' : ''}`} />
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${hoveredIndustries ? 'w-full' : 'w-0'
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
                                  <p className="text-sm font-semibold text-gray-900">{t(`industries.${item.name}`)}</p>
                                  <p className="text-xs text-gray-500 mt-1 leading-snug">{t(`industries.${item.name}Desc`)}</p>
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
              <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-nowrap whitespace-nowrap min-w-0 flex-shrink-0 justify-end">

                {/* Email Icon (Triggers Modal) */}
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="flex items-center justify-center p-2 rounded-full hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-colors flex-shrink-0"
                  title={t('common.email')}
                >
                  <Mail className="h-5 w-5" />
                </button>

                {/* Language Switcher - Ensure it has space and high z-index */}
                <div className="flex-shrink-0 relative z-40">
                  <LanguageSwitcher />
                </div>

                {/* Phone Numbers (Side by Side) */}
                <div className="flex items-center gap-4 lg:gap-2 xl:gap-4 border-l border-r border-gray-200 px-2 xl:px-4 h-8 whitespace-nowrap flex-shrink-0 hidden xl:flex">
                  <a
                    href={`tel:${PHONE_NUMBER_USA.replace(/\s/g, '')}`}
                    className="flex items-center gap-1.5 text-gray-700 font-medium hover:text-purple-600 transition-colors text-xs whitespace-nowrap"
                  >
                    <span className="text-base">🇺🇸</span>
                    <span className="hidden 2xl:inline">{PHONE_NUMBER_USA}</span>
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBER_SG.replace(/\s/g, '')}`}
                    className="flex items-center gap-1.5 text-gray-700 font-medium hover:text-purple-600 transition-colors text-xs whitespace-nowrap"
                  >
                    <span className="text-base">🇸🇬</span>
                    <span className="hidden 2xl:inline">{PHONE_NUMBER_SG}</span>
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 xl:gap-3 whitespace-nowrap pl-2 flex-shrink-0">
                  {/* Sign In - Always visible on desktop, compact on smaller lg */}
                  <a
                    href={SIGN_IN_URL}
                    className="w-auto"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <button className="relative w-full cursor-pointer rounded-lg px-3 lg:px-4 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:shadow-md hover:shadow-purple-400/30">
                      <span className="text-purple-600 whitespace-nowrap">{t('common.signIn')}</span>
                    </button>
                  </a>

                  {/* Request Demo - Adaptive Visibility */}
                  <div className="hidden lg:block">
                    <a
                      href={DEMO_URL}
                      className="w-auto"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <button className="relative w-full cursor-pointer rounded-lg px-3 lg:px-4 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-purple-500/50 hover:shadow-xl">
                        <span className="text-white whitespace-nowrap">{t('common.requestDemo')}</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30 -z-10" />
                      </button>
                    </a>
                  </div>
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
                {t('navbar.home')}
              </Link>

              {/* Products Section */}
              <div className="border-b border-gray-200 pb-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  {t('navbar.products')}
                </div>
                <div className="space-y-4">
                  {Object.entries(productsMenuItems).map(([category, items]) => (
                    <div key={category} className="pb-2">
                      <div className="mb-2 text-sm font-semibold text-gray-700">{category === 'Features' ? t('products.features') : t('products.forDevelopers')}</div>
                      <div className="space-y-2">
                        {items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 rounded-lg p-2 text-gray-700 transition-colors hover:bg-purple-100 hover:text-purple-700 cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <item.icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="text-sm block font-medium">{t(`products.${item.name}`)}</span>
                              <span className="text-xs text-gray-500 block mt-1">{t(`products.${item.name}Desc`)}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div >

              {/* Industries Section */}
              < div className="border-b border-gray-200 pb-4" >
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  {t('navbar.industries')}
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
                        <span className="text-sm block font-medium">{t(`industries.${item.name}`)}</span>
                        <span className="text-xs text-gray-500 block mt-1">{t(`industries.${item.name}Desc`)}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div >

              {/* Contact Info Section */}
              < div className="border-b border-gray-200 pb-4 space-y-3" >
                {/* Email for Mobile */}
                < button
                  className="flex w-full items-center gap-3 py-2 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer text-left"
                  onClick={handleMobileEmailCopy}
                >
                  {mobileEmailCopied ? <Check className="h-5 w-5 text-green-600" /> : <Mail className="h-5 w-5" />
                  }
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{t('common.email')}</span>
                    <span className="text-xs text-gray-500">{mobileEmailCopied ? t('common.copied') : CONTACT_EMAIL}</span>
                  </div>
                </button >

                {/* USA Number */}
                < a
                  href={`tel:${PHONE_NUMBER_USA.replace(/\s/g, '')}`}
                  className="flex w-full items-center gap-3 py-2 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">🇺🇸</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{t('common.usa')}</span>
                    <span className="text-sm">{PHONE_NUMBER_USA}</span>
                  </div>
                </a >

                {/* SG Number */}
                < a
                  href={`tel:${PHONE_NUMBER_SG.replace(/\s/g, '')}`}
                  className="flex w-full items-center gap-3 py-2 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">🇸🇬</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{t('common.singapore')}</span>
                    <span className="text-sm">{PHONE_NUMBER_SG}</span>
                  </div>
                </a >
              </div >

              {/* Mobile Language Switcher */}
              < div className="border-b border-gray-200 pb-4" >
                <LanguageSwitcher isMobile={true} />
              </div >

              {/* Buttons */}
              < div className="pt-2 pb-8" >
                <div className="flex flex-col gap-4">
                  {renderButton(SIGN_IN_URL, t('common.signIn'))}
                  {renderButton(DEMO_URL, t('common.requestDemo'), false)}
                </div>
              </div >
            </nav >
          </div >
        </div >
      )}
    </>
  );
}