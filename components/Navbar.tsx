"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Hammer,
  Wifi,
  Wrench,
  Factory,
  Truck,
  Droplets,
  HardHat,
  Zap,
  Layout,
  Palette,
  Users,
  GitBranch,
  Lock,
  BarChart3,
  Plug,
  Server,
  BrainIcon,
  Mail,
  Check,
  Copy,
  Globe,
  ShieldCheck,
  Building2,
  Ruler,
  ScanSearch,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

// --- Configuration Data ---
const industriesItems = [
  {
    name: "Construction",
    href: "/industries/construction",
    icon: Hammer,
    description: "Manage sites and crews efficiently.",
  },
  {
    name: "Insurance & Claims",
    href: "/industries/insurance",
    icon: ShieldCheck,
    description: "Remote adjusting & fraud prevention.",
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
    icon: Building2,
    description: "Virtual tours & investor updates.",
  },
  {
    name: "Utilities & Energy",
    href: "/industries/utilities",
    icon: Zap,
    description: "Grid maintenance and inspections.",
  },
  {
    name: "Telecommunications",
    href: "/industries/telecom",
    icon: Wifi,
    description: "Field service for network infra.",
  },
  {
    name: "HVAC & Plumbing",
    href: "/industries/hvac",
    icon: Wrench,
    description: "Dispatch and repair tracking.",
  },
  {
    name: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
    description: "Equipment maintenance logs.",
  },
  {
    name: "Logistics",
    href: "/industries/logistics",
    icon: Truck,
    description: "Fleet and delivery operations.",
  },
  {
    name: "Oil & Gas",
    href: "/industries/oil-and-gas",
    icon: Droplets,
    description: "Safety compliance and checks.",
  },
  {
    name: "Facility Management",
    href: "/industries/facility-management",
    icon: HardHat,
    description: "Building upkeep and services.",
  },
];

const productsMenuItems: {
  [key: string]: {
    name: string;
    href: string;
    icon: any;
    description: string;
  }[];
} = {
  Features: [
    {
      name: "Core Functions",
      href: "/core-functions",
      icon: Layout,
      description: "Essential tools for field operations management.",
    },
    {
      name: "Visual Form Builder",
      href: "/visual-form-builder",
      icon: Palette,
      description: "Create custom forms without coding.",
    },
    {
      name: "AI Detection Analysis",
      href: "/ai-detection",
      icon: BrainIcon,
      description: "Manage team members and permissions.",
    },
    {
      name: "Engagement Flows",
      href: "/engagement-flows",
      icon: GitBranch,
      description: "Automate workflows and processes.",
    },
    {
      name: "Access Control",
      href: "/access-control",
      icon: Lock,
      description: "Secure data with role-based access.",
    },
    {
      name: "Deep Insights",
      href: "/reports",
      icon: BarChart3,
      description: "Analytics and reporting dashboard.",
    },
    {
      name: "Sample Reports",
      href: "/sample-inspection-reports",
      icon: FileText,
      description: "View professional PDF report samples.",
    },
  ],
  "AI Intelligence": [
    {
      name: "AI Detection Analysis",
      href: "/ai-detection",
      icon: BrainIcon,
      description: "Manage team members and permissions.",
    },
    {
      name: "AI Tuning Station",
      href: "/lab/ai-tuning",
      icon: BrainIcon,
      description: "Fine-tune object detection models.",
    },
    {
      name: "Privacy Scrubbing",
      href: "/lab/privacy",
      icon: Lock,
      description: "GDPR-compliant face blurring.",
    },
    {
      name: "Voice-to-Tag",
      href: "/lab/voice-tag",
      icon: Zap,
      description: "Hands-free site documentation.",
    },
  ],
  "For Developers": [
    {
      name: "Integrations",
      href: "/integrations",
      icon: Plug,
      description: "Connect with your existing tools and systems.",
    },
    {
      name: "Flexible Hosting",
      href: "/hosting",
      icon: Server,
      description: "Deploy on-premise or in the cloud.",
    },
  ],
  "Who We Serve": [
    {
      name: "General Contractors",
      href: "/who-we-serve/general-contractors",
      icon: HardHat,
      description: "Manage subs and site risk.",
    },
    {
      name: "Facility Managers",
      href: "/who-we-serve/facility-managers",
      icon: Factory,
      description: "Maintenance and inspections.",
    },
    {
      name: "Subcontractors",
      href: "/who-we-serve/subcontractors",
      icon: Hammer,
      description: "Get paid faster with daily logs.",
    },
    {
      name: "Property Developers",
      href: "/who-we-serve/property-developers",
      icon: BarChart3,
      description: "Track ROI and milestones.",
    },
    {
      name: "Architects & Engineers",
      href: "/who-we-serve/architects-engineers",
      icon: Ruler,
      description: "Design compliance and RFIs.",
    },
  ],
  Comparisons: [
    {
      name: "vs SafetyCulture",
      href: "/alternatives/safetyculture",
      icon: HardHat,
      description: "Compare inspection automation.",
    },
    {
      name: "vs GoCanvas",
      href: "/alternatives/gocanvas",
      icon: Layout,
      description: "Compare visual data capture.",
    },
    {
      name: "vs Procore",
      href: "/alternatives/procore",
      icon: Factory,
      description: "Field vs Office comparison.",
    },
    {
      name: "vs PlanRadar",
      href: "/compare/planradar",
      icon: ScanSearch,
      description: "Compare inspection efficiency.",
    },
    {
      name: "vs Fieldwire",
      href: "/alternatives/fieldwire",
      icon: Copy,
      description: "Better for small teams.",
    },
  ],
};

// --- Contact Dropdown Data ---
const contactLocations = [
  {
    code: "us",
    flag: "🇺🇸",
    country: "USA",
    phones: [
      { display: "+1 646 421 5740", value: "+16464215740" },
      { display: "+1 979 326 9493", value: "+19793269493" },
    ],
    email: "contact@spacecapture.ai",
    address: "2500 MARCONI AVE, STE 101, SACRAMENTO, CA 95821 USA",
  },
  {
    code: "ca",
    flag: "🇨🇦",
    country: "Canada",
    phones: [
      { display: "+1 (979) 326-9493", value: "+19793269493" },
    ],
    email: "contact@spacecapture.ai",
    address: "",
  },
  {
    code: "ae",
    flag: "🇦🇪",
    country: "UAE",
    phones: [
      { display: "+971 56 256 7509", value: "+971562567509" },
    ],
    email: "contact@spacecapture.ai",
    address: "Middle East Regional Office, Dubai, UAE",
  },
  {
    code: "sa",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    phones: [
      { display: "+966 56 208 1999", value: "+966562081999" },
    ],
    email: "contact@spacecapture.ai",
    address: "",
  },
  {
    code: "kw",
    flag: "🇰🇼",
    country: "Kuwait",
    phones: [
      { display: "+965 9724 3755", value: "+96597243755" },
    ],
    email: "contact@spacecapture.ai",
    address: "",
  },
  {
    code: "sg",
    flag: "🇸🇬",
    country: "Singapore",
    phones: [
      { display: "+65 86 111 900", value: "+6586111900" },
    ],
    email: "contact@spacecapture.ai",
    address: "7 Soon Lee St, #04-39 ISPACE BUILDING, Singapore 627608",
  },
  {
    code: "my",
    flag: "🇲🇾",
    country: "Malaysia",
    phones: [
      { display: "+60 10 660 7357", value: "+60106607357" },
    ],
    email: "contact@spacecapture.ai",
    address: "",
  },
];

// --- Email Modal Component ---
const EmailModal = ({
  isOpen,
  onClose,
  email,
}: {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}) => {
  const [copied, setCopied] = useState(false);

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

          <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
          <p className="text-gray-500 text-sm">
            Copy our email address below to send us a message directly.
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
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="pt-2 text-xs text-gray-400">
            {copied ? "Copied to clipboard!" : "Click the icon to copy"}
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
  const [activeProductCategory, setActiveProductCategory] =
    useState<string>("Features");
  const [scrolled, setScrolled] = useState(false);

  // Modal State
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [mobileEmailCopied, setMobileEmailCopied] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const phoneDropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (phoneDropdownOpen) return;
    const interval = setInterval(() => {
      setCurrentLocationIndex((prev) => (prev + 1) % contactLocations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [phoneDropdownOpen]);

  const activeLocation = contactLocations[currentLocationIndex];

  // Constants
  const SIGN_IN_URL =
    "https://www.amspace.ai/login?type=Field&moduleId=8b3b6af5-07a3-44b2-b69e-342b61d71718&invite=guest";
  const DEMO_URL = "/request-a-demo";
  const PHONE_NUMBER_SG = "+65 86 111 900";
  const PHONE_NUMBER_USA = "+1 646 421 5740";
  const CONTACT_EMAIL = "contact@spacecapture.ai";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowIndustries(false);
        setHoveredIndustries(false);
        setShowProducts(false);
        setHoveredProducts(false);
        setShowProducts(false);
        setHoveredProducts(false);
      }
      if (
        phoneDropdownRef.current &&
        !phoneDropdownRef.current.contains(event.target as Node)
      ) {
        setPhoneDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
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
      target="_blank"
      rel="noopener noreferrer"
      className="w-full lg:w-auto"
      onClick={() => setIsMenuOpen(false)}
    >
      <button
        className={`relative w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${isPrimary
          ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-purple-500/50 hover:shadow-xl"
          : "border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:shadow-md hover:shadow-purple-400/30"
          }`}
      >
        <span className={isPrimary ? "text-white" : "text-purple-600"}>
          {text}
        </span>
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
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-lg"
          }`}
      >
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="flex items-center justify-between rounded-2xl lg:border-2 lg:border-gray-300 lg:p-2.5 bg-transparent gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center rounded-lg px-1 py-1 transition-colors hover:bg-white/5 cursor-pointer"
                aria-label="Space Capture Home"
              >
                <Image
                  src="/images/space-capture-navbar.png"
                  alt="Space Capture"
                  width={106}
                  height={80}
                  priority
                  className="h-14 w-auto rounded-sm object-contain sm:h-16"
                />
              </Link>
            </div>

            {/* Desktop: Products & Industries Dropdowns */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center" ref={dropdownRef}>
              {/* Products Dropdown */}
              <div
                className="relative group inline-block"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                    <a
                      href="#"
                      className="flex items-center gap-1 text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer relative py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        if (showProducts) {
                          setShowProducts(false);
                          setHoveredProducts(false);
                        }
                      }}
                    >
                      Products
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${showProducts ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${hoveredProducts ? "w-full" : "w-0"
                          }`}
                      />
                    </a>

                    {/* Products Dropdown Panel */}
                    {showProducts && (
                      <div
                        className="absolute top-full left-0 mt-2 w-[720px] rounded-2xl bg-white shadow-2xl shadow-blue-500/10 border border-slate-100 z-50 overflow-hidden"
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current)
                            clearTimeout(hoverTimeoutRef.current);
                        }}
                        onMouseLeave={handleProductsMouseLeave}
                      >
                        <div className="flex">
                          {/* Left: categories */}
                          <div className="w-[220px] flex-shrink-0 bg-[linear-gradient(135deg,#fafbfc,#f1f4fb_35%,#f6ecf9_70%,#fef3f8_101%)] p-4 border-r border-gray-200">
                            <div className="space-y-1">
                              {Object.keys(productsMenuItems).map(
                                (category) => (
                                  <button
                                    key={category}
                                    onMouseEnter={() =>
                                      setActiveProductCategory(category)
                                    }
                                    className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center justify-between ${activeProductCategory === category
                                      ? "bg-violet-50 text-violet-700"
                                      : "text-gray-600 hover:bg-white/50"
                                      }`}
                                  >
                                    <span>{category}</span>
                                    <ChevronRight
                                      className={`w-4 h-4 transition-opacity duration-200 ${activeProductCategory === category ? "opacity-100" : "opacity-0"}`}
                                    />
                                  </button>
                                ),
                              )}
                            </div>
                          </div>

                          {/* Right: items for active category */}
                          <div className="flex-1 p-6 bg-white">
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                              {productsMenuItems[activeProductCategory]?.map(
                                (item) => (
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
                                      <p className="text-sm font-semibold text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="text-xs text-gray-500 mt-1 leading-snug">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ),
                              )}
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
                      href="#"
                      className="flex items-center gap-1 text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer relative py-2"
                      onClick={(e) => {
                        e.preventDefault();
                        if (showIndustries) {
                          setShowIndustries(false);
                          setHoveredIndustries(false);
                        }
                      }}
                    >
                      Industries
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${showIndustries ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${hoveredIndustries ? "w-full" : "w-0"
                          }`}
                      />
                    </a>

                    {/* Dropdown Panel */}
                    {showIndustries && (
                      <div
                        className="absolute top-full left-0 mt-2 w-[600px] rounded-2xl bg-[linear-gradient(135deg,#fafbfc,#f1f4fb_35%,#f6ecf9_70%,#fef3f8_101%)] shadow-2xl shadow-blue-500/10 border border-slate-100 z-50 overflow-hidden"
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current)
                            clearTimeout(hoverTimeoutRef.current);
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
                                  <p className="text-sm font-semibold text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1 leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Blog Link */}
                  <Link
                    href="/blog"
                    className="inline-block text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer py-2"
                  >
                    Blog
                  </Link>

                  {/* Tools Link */}
                  <Link
                    href="/tools"
                    className="inline-block text-gray-700 font-semibold transition-colors hover:text-purple-600 cursor-pointer py-2"
                  >
                    Tools
                  </Link>
                </div>

                {/* Desktop: Contact & Actions */}
                <div className="hidden lg:flex items-center gap-4">
                {/* Email Icon (Triggers Modal) */}
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="flex items-center justify-center p-2 rounded-full hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-colors"
                  title="Contact via Email"
                >
                  <Mail className="h-5 w-5" />
                </button>

                {/* Phone Dropdown */}
                <div className="relative" ref={phoneDropdownRef}>
                  <button
                    onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                    className="flex items-center gap-1 text-gray-700 font-medium hover:text-purple-600 transition-colors text-xs whitespace-nowrap border-l border-r border-gray-200 px-4 h-8 cursor-pointer w-[210px] justify-between bg-transparent"
                  >
                    <div className="relative h-5 w-[165px] flex items-center overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentLocationIndex}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="flex items-center gap-2 absolute inset-0"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${activeLocation.code}.png`}
                            alt={`${activeLocation.country} flag`}
                            className="w-5 h-3.5 object-cover rounded-xs border border-gray-100 flex-shrink-0"
                          />
                          <span className="font-mono text-sm font-semibold tabular-nums tracking-tight text-gray-700">
                            {activeLocation.phones[0].display}
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${phoneDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {phoneDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-[460px] rounded-2xl bg-white shadow-2xl shadow-blue-500/10 border border-slate-100 z-50 overflow-hidden">
                      <div className="p-4 grid grid-cols-2 gap-3">
                        {contactLocations.map((loc) => (
                          <a
                            key={loc.country}
                            href={`tel:${loc.phones[0].value}`}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                            onClick={() => setPhoneDropdownOpen(false)}
                          >
                            <img
                              src={`https://flagcdn.com/w40/${loc.code}.png`}
                              alt={`${loc.country} flag`}
                              className="w-5 h-3.5 object-cover rounded-xs border border-gray-100 flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-900 leading-tight truncate">{loc.phones[0].display}</p>
                              <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{loc.country}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 px-4 py-3">
                        <a
                          href={`tel:${PHONE_NUMBER_USA.replace(/\s/g, "")}`}
                          className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold hover:from-purple-500 hover:to-indigo-500 transition-all hover:shadow-md hover:shadow-purple-500/20"
                          onClick={() => setPhoneDropdownOpen(false)}
                        >
                          Call main office
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {renderButton(SIGN_IN_URL, "Try for Free")}
                  {renderButton(DEMO_URL, "Request a Demo", false)}
                </div>
              </div>

              {/* Mobile: Toggle Button */}
              <button
                className="rounded-lg border-2 border-gray-300 bg-white p-2 text-gray-700 transition-all hover:bg-gray-50 active:scale-95 cursor-pointer lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 backdrop-blur-xl pt-24 lg:hidden">
          <div className="container px-4 py-6">
            <nav className="space-y-6">
              <a
                href="/"
                className="block border-b border-gray-200 py-3 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <Link
                href="/blog"
                className="block border-b border-gray-200 py-3 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/tools"
                className="block border-b border-gray-200 py-3 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>

              {/* Products Section */}
              <div className="border-b border-gray-200 pb-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Products
                </div>
                <div className="space-y-4">
                  {Object.entries(productsMenuItems).map(
                    ([category, items]) => (
                      <div key={category} className="pb-2">
                        <div className="mb-2 text-sm font-semibold text-gray-700">
                          {category}
                        </div>
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
                                <span className="text-sm block font-medium">
                                  {item.name}
                                </span>
                                <span className="text-xs text-gray-500 block mt-1">
                                  {item.description}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

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
                        <span className="text-sm block font-medium">
                          {item.name}
                        </span>
                        <span className="text-xs text-gray-500 block mt-1">
                          {item.description}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="border-b border-gray-200 pb-4 space-y-3">
                {/* Email for Mobile */}
                <button
                  className="flex w-full items-center gap-3 py-2 text-lg text-gray-700 transition-colors hover:text-purple-600 cursor-pointer text-left"
                  onClick={handleMobileEmailCopy}
                >
                  {mobileEmailCopied ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <Mail className="h-5 w-5" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Email</span>
                    <span className="text-xs text-gray-500">
                      {mobileEmailCopied
                        ? "Copied to clipboard"
                        : CONTACT_EMAIL}
                    </span>
                  </div>
                </button>

                {/* Location Contacts */}
                {contactLocations.map((loc) => (
                  <div key={loc.country} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0 pt-2 first:pt-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <img
                        src={`https://flagcdn.com/w40/${loc.code}.png`}
                        alt={`${loc.country} flag`}
                        className="w-4 h-3 object-cover rounded-2xs border border-gray-100 flex-shrink-0"
                      />
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{loc.country}</span>
                    </div>
                    <div className="pl-7 space-y-2">
                      {/* Phones */}
                      <div className="space-y-1">
                        {loc.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone.value}`}
                            className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Phone className="w-3.5 h-3.5 text-blue-400" />
                            <span>{phone.display}</span>
                          </a>
                        ))}
                      </div>
                      
                      {/* Email */}
                      <div>
                        <a
                          href={`mailto:${loc.email}`}
                          className="text-xs text-gray-500 hover:text-purple-600 transition-colors block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {loc.email}
                        </a>
                      </div>

                      {/* Address */}
                      {loc.address && (
                        <p className="text-[10px] text-gray-400 leading-normal">
                          {loc.address}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 pt-2">
                <div className="flex flex-col gap-4">
                  {renderButton(SIGN_IN_URL, "Sign In")}
                  {renderButton(DEMO_URL, "Request a Demo", false)}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
