
export interface LocationData {
  slug: string;
  city: string;
  state?: string;
  country: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  image: string; // Path to a representative image
  features: { title: string; description: string }[];
  contentSections: { title: string; content: string }[];
}

export const LOCATION_DATA: Record<string, LocationData> = {
  "construction-management-software-dubai": {
    slug: "construction-management-software-dubai",
    city: "Dubai",
    country: "UAE",
    heroTitle: "Construction Management Software in Dubai",
    heroSubtitle: "Transform your Dubai construction projects with AI-powered field management.",
    metaTitle: "Construction Management Software Dubai | Space Capture",
    metaDescription: "The leading construction management software in Dubai. Optimize field operations, track defects, and ensure safety compliance with Space Capture.",
    metaKeywords: ["construction management software dubai", "dubai construction app", "field inspection dubai", "construction software uae"],
    image: "/images/locations/dubai-construction.jpg", // Placeholder - check if image exists or use generic
    features: [
      {
        title: "Compliance with UAE Regulations",
        description: "Ensure all your projects meet local Dubai Municipality and regulatory standards with customizable checklists."
      },
      {
        title: "Heat Stress Management",
        description: "Track workforce safety and manage breaks during Dubai's peak summer hours with real-time monitoring."
      },
      {
        title: "Multilingual Support",
        description: "Bridge the communication gap in diverse teams with support for Arabic, Hindi, Urdu, and English."
      }
    ],
    contentSections: [
      {
        title: "Building the Future of Dubai",
        content: "Dubai is synonymous with architectural marvels and rapid infrastructure development. To keep up with the pace, construction firms need robust digital tools. Space Capture provides the edge you need to deliver projects on time and within budget, right here in the UAE."
      },
      {
        title: "Why Space Capture for Dubai Projects?",
        content: "From the Burj Khalifa district to Expo City, Space Capture is designed to handle the scale and complexity of Dubai's mega-projects. Our offline-first mobile app ensures your team stays connected even in remote desert sites or high-rise basements."
      }
    ]
  },
  "field-inspection-app-singapore": {
    slug: "field-inspection-app-singapore",
    city: "Singapore",
    country: "Singapore",
    heroTitle: "#1 Field Inspection App in Singapore",
    heroSubtitle: "Boost productivity and BCA compliance with Singapore's top inspection app.",
    metaTitle: "Field Inspection App Singapore | Space Capture",
    metaDescription: "Streamline defect management, QA/QC, and TOP inspections in Singapore. Compliant with BCA standards and designed for local contractors.",
    metaKeywords: ["field inspection app singapore", "BCA compliance software", "singapore construction app", "defect checklists singapore"],
    image: "/images/locations/singapore-skyline.jpg",
    features: [
      {
        title: "BCA Compliance Ready",
        description: "Pre-loaded templates aligned with Building and Construction Authority (BCA) standards for seamless inspections."
      },
      {
        title: "CONQUAS Quality benchmarks",
        description: "Maintain high Construction Quality Assessment System (CONQUAS) scores with rigorous digital quality controls."
      },
      {
        title: "Smart Nation Integration",
        description: "Aligns with Singapore's digital construction roadmap for IDD (Integrated Digital Delivery)."
      }
    ],
    contentSections: [
      {
        title: "Digitalizing Singapore's Built Environment",
        content: "As Singapore pushes towards a smarter, more sustainable built environment, manual paper forms are obsolete. Space Capture offers a fast, reliable mobile solution for site supervisors and Resident Technical Officers (RTOs) across the island."
      },
      {
        title: "Efficient Defect Management",
        content: "Speed up your defect rectification process during TOP (Temporary Occupation Permit) inspections. Snap photos, annotate issues, and assign tasks instantly to subcontractors."
      }
    ]
  },
  "site-safety-software-texas": {
    slug: "site-safety-software-texas",
    city: "Texas",
    state: "Texas",
    country: "USA",
    heroTitle: "Site Safety Software for Texas Projects",
    heroSubtitle: "Protect your workforce and reduce risk across the Lone Star State.",
    metaTitle: "Site Safety Software Texas | Space Capture",
    metaDescription: "Keep your job sites safe and OSHA compliant in Texas. Real-time safety audits, toolbox talks, and incident reporting for Texan builders.",
    metaKeywords: ["site safety software texas", "texas construction safety", "osha compliance app", "oil and gas safety texas"],
    image: "/images/locations/texas-construction.jpg",
    features: [
      {
        title: "OSHA Compliance Made Easy",
        description: "Digital logs and automated reporting to keep you ready for any OSHA inspection."
      },
      {
        title: "Oil, Gas & Civil Projects",
        description: "Versatile safety tools suitable for Houston's energy sector, Dallas commercial builds, or Austin infrastructure."
      },
      {
        title: "Heat Safety Protocols",
        description: "Specific modules to manage heat illness prevention, critical for Texas summers."
      }
    ],
    contentSections: [
      {
        title: "Safety First in the Lone Star State",
        content: "From the Permian Basin to the metroplexes, safety is paramount. Space Capture empowers safety managers to identify hazards before they become incidents. Digitalize your JSAs (Job Safety Analyses) and daily reports today."
      },
      {
        title: "Real-Time Incident Reporting",
        content: "Don't wait for paperwork to travel back to the office. Report incidents, near-misses, and safety observations instantly from the field, ensuring rapid response and detailed record-keeping."
      }
    ]
  }
};
