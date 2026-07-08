export interface LocationData {
  slug: string;
  city: string;
  state?: string;
  stateCode?: string;
  country: string;
  countryCode: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  image: string;
  latitude?: number;
  longitude?: number;
  features: { title: string; description: string }[];
  contentSections: { title: string; content: string }[];
  /** Local compliance / regulatory references shown in the content */
  compliance?: { name: string; description: string }[];
  /** Industry callouts unique to this region */
  industryCallouts?: { name: string; description: string }[];
}

// ---------------------------------------------------------------------------
// 20 US state-level + 10 international metro geo pages.
// Each entry is unique content (no templated duplication) and includes
// LocalBusiness-schema-ready coordinates.
// ---------------------------------------------------------------------------

export const LOCATION_DATA: Record<string, LocationData> = {
  // -------- US states --------
  "field-inspection-software-california": {
    slug: "field-inspection-software-california",
    city: "California",
    state: "California",
    stateCode: "CA",
    country: "USA",
    countryCode: "US",
    latitude: 36.7783,
    longitude: -119.4179,
    heroTitle: "Field Inspection Software in California",
    heroSubtitle:
      "Cal/OSHA-aligned field inspections, seismic and Title 24 reporting, and AI defect detection for California's $400B construction market.",
    metaTitle:
      "Field Inspection Software California | SpaceCapture",
    metaDescription:
      "AI-powered field inspection software for California construction, energy, and infrastructure projects. Cal/OSHA-aligned safety checks, Title 24 documentation, and offline mobile capture.",
    metaKeywords: [
      "field inspection software california",
      "cal osha inspection app",
      "title 24 inspection software",
      "california construction software",
      "california building inspection",
      "construction inspection software los angeles",
      "construction inspection software san francisco",
      "construction inspection software san diego",
    ],
    image: "/images/locations/california.jpg",
    features: [
      {
        title: "Cal/OSHA-Aligned Checklists",
        description:
          "Pre-loaded safety checklists aligned with California Division of Occupational Safety and Health (DOSH) requirements — fall protection, heat illness prevention, seismic bracing, and more.",
      },
      {
        title: "Title 24 Energy Documentation",
        description:
          "Capture and store Title 24 energy compliance evidence for residential and non-residential buildings, with photo-anchored reports ready for HERS raters and CEC submittals.",
      },
      {
        title: "Wildfire-Resilient Inspection Templates",
        description:
          "Defensible-space, ember-resistant construction, and WUI-compliant checklists for California's wildfire-exposed regions.",
      },
    ],
    contentSections: [
      {
        title: "Built for California Construction",
        content:
          "California is the largest construction market in the US, with unique regulatory layers (Cal/OSHA, Title 24, HERS, CalGreen, WUI) that generic field tools don't address. SpaceCapture ships with California-specific templates so your team spends less time configuring and more time inspecting.",
      },
      {
        title: "Earthquake, Fire, and Drought — All in One Platform",
        content:
          "From seismic retrofit inspections in San Francisco to wildfire defensible-space audits in Los Angeles and water-use compliance in the Central Valley, SpaceCapture's mobile app handles every California-specific workflow. AI defect detection flags cracks, spalling, corrosion, and missing seismic anchors on site photos.",
      },
    ],
    compliance: [
      {
        name: "Cal/OSHA",
        description: "California-specific safety standards (Title 8 CCR).",
      },
      {
        name: "Title 24",
        description: "California Building Standards Code (energy, green).",
      },
      {
        name: "CalGreen",
        description: "California Green Building Standards Code.",
      },
      {
        name: "HERS",
        description: "Home Energy Rating System (CEC certified).",
      },
    ],
    industryCallouts: [
      {
        name: "Seismic retrofit",
        description: "Soft-story, brace-and-bolt, and unreinforced masonry.",
      },
      {
        name: "Wildfire defensible space",
        description: "WUI-compliant inspections and ember-resistant upgrades.",
      },
      {
        name: "High-speed rail",
        description: "Major infrastructure programs in the Central Valley.",
      },
    ],
  },
  "field-inspection-software-texas": {
    slug: "field-inspection-software-texas",
    city: "Texas",
    state: "Texas",
    stateCode: "TX",
    country: "USA",
    countryCode: "US",
    latitude: 31.9686,
    longitude: -99.9018,
    heroTitle: "Field Inspection Software in Texas",
    heroSubtitle:
      "Heat-safe, OSHA-aligned field inspections for Texas construction, oil & gas, and wind energy projects.",
    metaTitle: "Field Inspection Software Texas | SpaceCapture",
    metaDescription:
      "AI field inspection software for Texas construction, oil & gas, and energy projects. Heat illness prevention, OSHA compliance, and offline mobile capture.",
    metaKeywords: [
      "field inspection software texas",
      "texas construction inspection",
      "osha inspection texas",
      "heat illness prevention app",
      "texas oil and gas inspection",
      "construction software houston",
      "construction software dallas",
      "construction software austin",
    ],
    image: "/images/locations/texas.jpg",
    features: [
      {
        title: "Heat Illness Prevention",
        description:
          "Texas summers regularly exceed 100°F. SpaceCapture tracks water breaks, shade access, and work-rest cycles to keep crews compliant with TXOSHA heat rules.",
      },
      {
        title: "Oil, Gas & Wind Energy",
        description:
          "Pre-built templates for upstream, midstream, downstream, and wind turbine inspections. Photo-anchored records for PHMSA, TCEQ, and ERCOT compliance.",
      },
      {
        title: "Hurricane and Storm Response",
        description:
          "Post-event damage assessments with mobile capture. Pre- and post-storm condition surveys for insurance, FEMA, and recovery planning.",
      },
    ],
    contentSections: [
      {
        title: "Texas is Big. Your Inspection Tool Should Be Too.",
        content:
          "From Houston petrochemical plants to Dallas high-rises to Austin tech campuses to West Texas wind farms, Texas construction is incredibly diverse. SpaceCapture's mobile-first app handles every workflow — from pre-pour on a Dallas tower to blade inspection on a Panhandle turbine.",
      },
      {
        title: "OSHA, TCEQ, and Local Compliance",
        content:
          "Texas has its own OSHA-approved plan (OSHA-State). SpaceCapture includes pre-built checklists for TXOSHA's most-cited construction standards, plus TCEQ environmental templates for stormwater, SPCC, and Phase I/II ESAs.",
      },
    ],
    compliance: [
      { name: "TXOSHA", description: "Texas OSHA-approved State Plan." },
      {
        name: "TCEQ",
        description: "Texas Commission on Environmental Quality.",
      },
      {
        name: "PHMSA",
        description: "Pipeline and Hazardous Materials Safety Admin.",
      },
    ],
    industryCallouts: [
      {
        name: "Petrochemical",
        description: "Refineries, terminals, and pipeline ROW.",
      },
      {
        name: "Wind energy",
        description: "Utility-scale wind in West Texas and Panhandle.",
      },
      {
        name: "Data centers",
        description: "Hyperscale builds in Dallas / Austin / San Antonio.",
      },
    ],
  },
  "field-inspection-software-new-york": {
    slug: "field-inspection-software-new-york",
    city: "New York",
    state: "New York",
    stateCode: "NY",
    country: "USA",
    countryCode: "US",
    latitude: 42.9538,
    longitude: -75.5268,
    heroTitle: "Field Inspection Software in New York",
    heroSubtitle:
      "FISP / Local Law 11, NYC DOB, and NYS DEC compliance in one mobile platform.",
    metaTitle: "Field Inspection Software New York | SpaceCapture",
    metaDescription:
      "AI field inspection software for New York construction. FISP / Local Law 11 facade inspections, NYC DOB compliance, NYS DEC reporting, and offline capture.",
    metaKeywords: [
      "field inspection software new york",
      "FISP inspection software",
      "local law 11 inspection app",
      "nyc dob inspection software",
      "new york construction software",
      "construction inspection software new york",
      "construction inspection software nyc",
    ],
    image: "/images/locations/new-york.jpg",
    features: [
      {
        title: "FISP / Local Law 11 Facade Inspections",
        description:
          "NYC requires periodic facade inspections of buildings over six stories. SpaceCapture handles SWARMPTR + Critical Examination reports, with photo evidence and engineer sign-off.",
      },
      {
        title: "NYC DOB Compliance",
        description:
          "DOB violation tracking, jobsite inspection (IQS) reports, and BIS-related documentation in one app.",
      },
      {
        title: "NYS DEC Environmental",
        description:
          "Erosion and sediment control, SPEDES stormwater, and asbestos inspection templates for NYS DEC submittal.",
      },
    ],
    contentSections: [
      {
        title: "New York's Toughest Compliance, Made Easier",
        content:
          "New York has some of the most demanding construction regulations in the US — DOB, DEC, FDNY, FISP, SCA. SpaceCapture is the only field-first platform with pre-built templates for each, so you don't have to start from scratch on every project.",
      },
    ],
    compliance: [
      { name: "FISP / LL11", description: "NYC facade inspection program." },
      { name: "NYC DOB", description: "Department of Buildings." },
      { name: "NYS DEC", description: "Department of Environmental Conservation." },
    ],
    industryCallouts: [
      { name: "High-rise facades", description: "FISP-mandated inspections." },
      { name: "Transit", description: "MTA, Amtrak, Port Authority work." },
      { name: "Affordable housing", description: "HPD, HCR, and NYCHA work." },
    ],
  },
  "field-inspection-software-florida": {
    slug: "field-inspection-software-florida",
    city: "Florida",
    state: "Florida",
    stateCode: "FL",
    country: "USA",
    countryCode: "US",
    latitude: 27.6648,
    longitude: -81.5158,
    heroTitle: "Field Inspection Software in Florida",
    heroSubtitle:
      "Hurricane-ready, FBC-compliant field inspections for Florida construction and insurance claims.",
    metaTitle: "Field Inspection Software Florida | SpaceCapture",
    metaDescription:
      "AI field inspection software for Florida construction. FBC compliance, hurricane inspections, insurance claims, and offline mobile capture.",
    metaKeywords: [
      "field inspection software florida",
      "florida building code inspection",
      "fbc inspection app",
      "hurricane inspection software",
      "florida construction software",
      "miami construction software",
      "orlando construction software",
      "tampa construction software",
    ],
    image: "/images/locations/florida.jpg",
    features: [
      {
        title: "Florida Building Code (FBC) Templates",
        description:
          "Pre-built inspection templates aligned with the 7th Edition FBC (2024), including HVHZ (High-Velocity Hurricane Zone) requirements for Miami-Dade and Broward.",
      },
      {
        title: "Hurricane and Storm Inspection",
        description:
          "Post-event damage assessments, roof inspections, and window/door impact compliance. The same template works for emergency response and routine maintenance.",
      },
      {
        title: "Insurance and Claims Support",
        description:
          "Pre- and post-incident condition surveys for insurance carriers, with timestamped, geo-tagged photo evidence accepted in Florida courts.",
      },
    ],
    contentSections: [
      {
        title: "Hurricane Country, Compliance-Ready",
        content:
          "Florida's unique combination of hurricanes, salt air, sinkholes, and strict building codes demands a field tool that goes beyond generic checklists. SpaceCapture's FBC-aligned templates, plus HVHZ-specific compliance, give you an edge in Florida's competitive market.",
      },
    ],
    compliance: [
      {
        name: "FBC 7th Ed. (2024)",
        description: "Florida Building Code.",
      },
      {
        name: "HVHZ",
        description: "High-Velocity Hurricane Zone (Miami-Dade / Broward).",
      },
    ],
    industryCallouts: [
      {
        name: "Hurricane restoration",
        description: "Post-storm inspections and insurance documentation.",
      },
      {
        name: "Hospitality",
        description: "Hotels, resorts, and timeshares.",
      },
      {
        name: "Residential",
        description: "Single-family and condo developments.",
      },
    ],
  },
  "field-inspection-software-illinois": {
    slug: "field-inspection-software-illinois",
    city: "Illinois",
    state: "Illinois",
    stateCode: "IL",
    country: "USA",
    countryCode: "US",
    latitude: 40.3495,
    longitude: -88.9861,
    heroTitle: "Field Inspection Software in Illinois",
    heroSubtitle:
      "IDOL, IEPA, and Chicago Building Code compliance in one mobile platform.",
    metaTitle: "Field Inspection Software Illinois | SpaceCapture",
    metaDescription:
      "AI field inspection software for Illinois and Chicago construction. IDOL, IEPA, and Chicago Building Code compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software illinois",
      "chicago building code inspection",
      "iepa inspection app",
      "illinois construction software",
      "construction inspection software chicago",
    ],
    image: "/images/locations/illinois.jpg",
    features: [
      {
        title: "Chicago Building Code",
        description:
          "Pre-built templates for the Chicago Building Code (Title 14), including the city's stringent energy, sustainability, and life-safety requirements.",
      },
      {
        title: "IEPA Environmental",
        description:
          "Illinois EPA stormwater, asbestos, and remediation inspection templates ready for submittal.",
      },
    ],
    contentSections: [
      {
        title: "From Skyscrapers to Suburbs",
        content:
          "Chicago's vertical construction is unique — and so is its regulatory stack. SpaceCapture handles the Chicago Building Code, IDOL, and IEPA requirements out of the box.",
      },
    ],
    compliance: [
      { name: "Chicago Building Code", description: "Title 14 of Chicago Municipal Code." },
      { name: "IDOL", description: "Illinois Department of Labor." },
      { name: "IEPA", description: "Illinois Environmental Protection Agency." },
    ],
    industryCallouts: [
      { name: "High-rise", description: "Chicago Loop commercial and residential towers." },
      { name: "Industrial", description: "Manufacturing and logistics in the suburbs." },
    ],
  },
  "field-inspection-software-pennsylvania": {
    slug: "field-inspection-software-pennsylvania",
    city: "Pennsylvania",
    state: "Pennsylvania",
    stateCode: "PA",
    country: "USA",
    countryCode: "US",
    latitude: 40.5908,
    longitude: -77.2098,
    heroTitle: "Field Inspection Software in Pennsylvania",
    heroSubtitle:
      "UCC, DEP, and Philadelphia compliance for Pennsylvania construction.",
    metaTitle: "Field Inspection Software Pennsylvania | SpaceCapture",
    metaDescription:
      "AI field inspection software for Pennsylvania construction. UCC, PA DEP, and Philadelphia code compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software pennsylvania",
      "philadelphia construction inspection",
      "pa ucc inspection software",
      "pa dep inspection app",
      "pennsylvania construction software",
    ],
    image: "/images/locations/pennsylvania.jpg",
    features: [
      {
        title: "Pennsylvania UCC Compliance",
        description:
          "Templates aligned with PA's Uniform Construction Code, including residential and commercial inspections.",
      },
      {
        title: "PA DEP Environmental",
        description:
          "Erosion, sedimentation, and water-quality inspections ready for PA DEP submittal.",
      },
    ],
    contentSections: [
      {
        title: "From Philly to Pittsburgh",
        content:
          "Pennsylvania's two major metros have very different construction cultures. SpaceCapture adapts — Philadelphia's dense urban infill vs. Pittsburgh's hilly, mixed-use developments — all in one platform.",
      },
    ],
    compliance: [
      { name: "PA UCC", description: "Pennsylvania Uniform Construction Code." },
      { name: "PA DEP", description: "Department of Environmental Protection." },
    ],
    industryCallouts: [
      { name: "Healthcare", description: "Hospital systems in Philadelphia and Pittsburgh." },
      { name: "Education", description: "Penn State, Pitt, and K-12 capital projects." },
    ],
  },
  "field-inspection-software-ohio": {
    slug: "field-inspection-software-ohio",
    city: "Ohio",
    state: "Ohio",
    stateCode: "OH",
    country: "USA",
    countryCode: "US",
    latitude: 40.3888,
    longitude: -82.7649,
    heroTitle: "Field Inspection Software in Ohio",
    heroSubtitle:
      "Ohio Building Code, Ohio EPA, and BWC compliance for Ohio construction and manufacturing.",
    metaTitle: "Field Inspection Software Ohio | SpaceCapture",
    metaDescription:
      "AI field inspection software for Ohio construction and manufacturing. Ohio Building Code, Ohio EPA, and BWC compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software ohio",
      "ohio building code inspection",
      "ohio epa inspection app",
      "ohio construction software",
      "columbus construction software",
      "cleveland construction software",
      "cincinnati construction software",
    ],
    image: "/images/locations/ohio.jpg",
    features: [
      {
        title: "Ohio Building Code (OBC)",
        description:
          "Templates aligned with the Ohio Building Code, including the commercial and residential energy conservation requirements.",
      },
      {
        title: "Bureau of Workers' Compensation (BWC)",
        description:
          "Pre-built safety inspections aligned with BWC's most-cited construction standards.",
      },
    ],
    contentSections: [
      {
        title: "Built for the Midwest",
        content:
          "Ohio's mix of heavy manufacturing, urban redevelopment, and agricultural construction needs a flexible tool. SpaceCapture handles everything from a Cleveland steel-mill retrofit to a Columbus suburban development.",
      },
    ],
    compliance: [
      { name: "OBC", description: "Ohio Building Code." },
      { name: "Ohio EPA", description: "Ohio Environmental Protection Agency." },
      { name: "BWC", description: "Ohio Bureau of Workers' Compensation." },
    ],
    industryCallouts: [
      { name: "Manufacturing", description: "Steel, automotive, chemicals." },
      { name: "Logistics", description: "Distribution centers and cold storage." },
    ],
  },
  "field-inspection-software-georgia": {
    slug: "field-inspection-software-georgia",
    city: "Georgia",
    state: "Georgia",
    stateCode: "GA",
    country: "USA",
    countryCode: "US",
    latitude: 32.9866,
    longitude: -83.6487,
    heroTitle: "Field Inspection Software in Georgia",
    heroSubtitle:
      "Georgia State Codes, EPD, and OSHA-aligned inspections for Georgia construction.",
    metaTitle: "Field Inspection Software Georgia | SpaceCapture",
    metaDescription:
      "AI field inspection software for Georgia construction. State codes, GA EPD, and OSHA-aligned inspections, with offline mobile capture.",
    metaKeywords: [
      "field inspection software georgia",
      "georgia construction software",
      "atlanta construction software",
      "ga epd inspection app",
      "georgia osha inspection",
    ],
    image: "/images/locations/georgia.jpg",
    features: [
      {
        title: "Georgia State Minimum Codes",
        description:
          "Pre-built inspection templates aligned with Georgia's adopted International Codes.",
      },
      {
        title: "GA EPD Compliance",
        description:
          "Erosion, sedimentation, and NPDES inspection templates ready for GA EPD submittal.",
      },
    ],
    contentSections: [
      {
        title: "From Atlanta to Savannah",
        content:
          "Georgia's booming construction market — from Atlanta's film-studio boom to Savannah's port expansion — needs a field tool that scales from a single GCs to multi-region firms.",
      },
    ],
    compliance: [
      { name: "GA Codes", description: "Georgia State Minimum Standard Codes." },
      { name: "GA EPD", description: "Georgia Environmental Protection Division." },
    ],
    industryCallouts: [
      { name: "Film & entertainment", description: "Studio construction in Atlanta and Pinewood." },
      { name: "Port & logistics", description: "Savannah port expansion." },
    ],
  },
  "field-inspection-software-north-carolina": {
    slug: "field-inspection-software-north-carolina",
    city: "North Carolina",
    state: "North Carolina",
    stateCode: "NC",
    country: "USA",
    countryCode: "US",
    latitude: 35.5397,
    longitude: -79.8431,
    heroTitle: "Field Inspection Software in North Carolina",
    heroSubtitle:
      "NC Building Code, NCDEQ, and Charlotte-Mecklenburg compliance for North Carolina construction.",
    metaTitle: "Field Inspection Software North Carolina | SpaceCapture",
    metaDescription:
      "AI field inspection software for North Carolina construction. NC Building Code, NCDEQ, and Charlotte-Mecklenburg compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software north carolina",
      "nc building code inspection",
      "nc construction software",
      "charlotte construction software",
      "ncdeq inspection app",
    ],
    image: "/images/locations/north-carolina.jpg",
    features: [
      {
        title: "NC Building Code Compliance",
        description:
          "Templates aligned with NC's adopted International Codes, including the 2018 NC Building Code.",
      },
      {
        title: "NCDEQ Inspections",
        description:
          "Stormwater, erosion, and sediment control templates for NCDEQ submittal.",
      },
    ],
    contentSections: [
      {
        title: "Banking on Field Software",
        content:
          "Charlotte is the second-largest banking center in the US, fueling a major commercial construction boom. SpaceCapture handles high-rise and suburban work alike.",
      },
    ],
    compliance: [
      { name: "NC Building Code", description: "Adopted International Codes." },
      { name: "NCDEQ", description: "NC Department of Environmental Quality." },
    ],
    industryCallouts: [
      { name: "Banking HQ", description: "Charlotte commercial towers." },
      { name: "Research Triangle", description: "Raleigh-Durham-Chapel Hill." },
    ],
  },
  "field-inspection-software-michigan": {
    slug: "field-inspection-software-michigan",
    city: "Michigan",
    state: "Michigan",
    stateCode: "MI",
    country: "USA",
    countryCode: "US",
    latitude: 43.3266,
    longitude: -84.5361,
    heroTitle: "Field Inspection Software in Michigan",
    heroSubtitle:
      "Michigan Building Code, EGLE, and Detroit compliance for Michigan construction and manufacturing.",
    metaTitle: "Field Inspection Software Michigan | SpaceCapture",
    metaDescription:
      "AI field inspection software for Michigan construction and manufacturing. Michigan Building Code, EGLE, and Detroit compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software michigan",
      "michigan building code inspection",
      "michigan construction software",
      "detroit construction software",
      "michigan egle inspection app",
    ],
    image: "/images/locations/michigan.jpg",
    features: [
      {
        title: "Michigan Building Code",
        description:
          "Pre-built templates aligned with the Michigan Building Code (based on IBC 2015 with state amendments).",
      },
      {
        title: "EGLE Environmental",
        description:
          "EGLE (Environment, Great Lakes, and Energy) inspection templates for Part 91 stormwater and beyond.",
      },
    ],
    contentSections: [
      {
        title: "Auto Industry and Beyond",
        content:
          "Michigan's auto-supply chain and EV-battery boom drive intense industrial construction. SpaceCapture handles plant expansions, battery facilities, and supplier builds across the state.",
      },
    ],
    compliance: [
      { name: "Michigan Building Code", description: "State building code." },
      { name: "EGLE", description: "Environment, Great Lakes, and Energy." },
    ],
    industryCallouts: [
      { name: "EV batteries", description: "Battery plant construction across the state." },
      { name: "Auto supply", description: "Tier 1 supplier facilities." },
    ],
  },
  "field-inspection-software-new-jersey": {
    slug: "field-inspection-software-new-jersey",
    city: "New Jersey",
    state: "New Jersey",
    stateCode: "NJ",
    country: "USA",
    countryCode: "US",
    latitude: 40.2989,
    longitude: -74.521,
    heroTitle: "Field Inspection Software in New Jersey",
    heroSubtitle:
      "NJ UCC, NJDEP, and DCA compliance for New Jersey construction.",
    metaTitle: "Field Inspection Software New Jersey | SpaceCapture",
    metaDescription:
      "AI field inspection software for New Jersey construction. NJ UCC, NJDEP, and DCA compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software new jersey",
      "nj ucc inspection app",
      "njdep inspection software",
      "nj construction software",
    ],
    image: "/images/locations/new-jersey.jpg",
    features: [
      {
        title: "NJ UCC Compliance",
        description:
          "Templates aligned with New Jersey's Uniform Construction Code, including commercial and residential subcodes.",
      },
      {
        title: "NJDEP Environmental",
        description:
          "Stormwater, contaminated site, and remediation inspections ready for NJDEP.",
      },
    ],
    contentSections: [
      {
        title: "Dense, Regulated, and Fast",
        content:
          "New Jersey has some of the densest construction in the US — plus a strong regulatory framework. SpaceCapture keeps the paperwork moving while you keep building.",
      },
    ],
    compliance: [
      { name: "NJ UCC", description: "Uniform Construction Code." },
      { name: "NJDEP", description: "Department of Environmental Protection." },
    ],
    industryCallouts: [
      { name: "Pharma", description: "New Jersey pharmaceutical facilities." },
      { name: "Transit-oriented", description: "Density around Newark / Jersey City." },
    ],
  },
  "field-inspection-software-virginia": {
    slug: "field-inspection-software-virginia",
    city: "Virginia",
    state: "Virginia",
    stateCode: "VA",
    country: "USA",
    countryCode: "US",
    latitude: 37.7693,
    longitude: -78.17,
    heroTitle: "Field Inspection Software in Virginia",
    heroSubtitle:
      "USBC, VDEQ, and VOSH compliance for Virginia construction and data centers.",
    metaTitle: "Field Inspection Software Virginia | SpaceCapture",
    metaDescription:
      "AI field inspection software for Virginia construction. USBC, VDEQ, and VOSH compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software virginia",
      "virginia usbc inspection app",
      "vdeq inspection software",
      "vosh inspection app",
      "virginia construction software",
      "data center construction virginia",
    ],
    image: "/images/locations/virginia.jpg",
    features: [
      {
        title: "VUSBC Compliance",
        description:
          "Templates aligned with the Virginia Uniform Statewide Building Code.",
      },
      {
        title: "Data Center Boom",
        description:
          "Pre-built inspection templates for hyperscale data center builds — including commissioning, MEP, and security.",
      },
    ],
    contentSections: [
      {
        title: "From Data Centers to Defense",
        content:
          "Northern Virginia's data-center alley is one of the largest construction markets in the world. SpaceCapture handles the speed, scale, and security requirements of these complex builds.",
      },
    ],
    compliance: [
      { name: "VUSBC", description: "Virginia Uniform Statewide Building Code." },
      { name: "VOSH", description: "Virginia Occupational Safety and Health." },
    ],
    industryCallouts: [
      { name: "Data centers", description: "Loudoun, Prince William, Fairfax." },
      { name: "Federal", description: "DC-area federal contracts." },
    ],
  },
  "field-inspection-software-washington": {
    slug: "field-inspection-software-washington",
    city: "Washington",
    state: "Washington",
    stateCode: "WA",
    country: "USA",
    countryCode: "US",
    latitude: 47.4009,
    longitude: -121.4905,
    heroTitle: "Field Inspection Software in Washington",
    heroSubtitle:
      "Washington State Building Code, Department of Labor & Industries, and Seattle-specific compliance.",
    metaTitle: "Field Inspection Software Washington | SpaceCapture",
    metaDescription:
      "AI field inspection software for Washington state construction. WSBC, L&I, and Seattle compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software washington",
      "washington state building code inspection",
      "seattle construction software",
      "washington li inspection app",
    ],
    image: "/images/locations/washington.jpg",
    features: [
      {
        title: "WSBC Compliance",
        description:
          "Templates aligned with the Washington State Building Code (based on IBC with state amendments).",
      },
      {
        title: "L&I (Department of Labor & Industries)",
        description:
          "Pre-built inspection templates for L&I's most-cited construction standards, plus apprenticeship and prevailing wage tracking.",
      },
    ],
    contentSections: [
      {
        title: "From Seattle Spires to Suburban Sprawl",
        content:
          "Washington's construction market stretches from Seattle's high-rise tech corridor to sprawling suburban developments. SpaceCapture's mobile-first app is built for both.",
      },
    ],
    compliance: [
      { name: "WSBC", description: "Washington State Building Code." },
      { name: "L&I", description: "Department of Labor & Industries." },
    ],
    industryCallouts: [
      { name: "Tech HQ", description: "Amazon, Microsoft, Meta campuses." },
      { name: "Aerospace", description: "Boeing and suppliers." },
    ],
  },
  "field-inspection-software-arizona": {
    slug: "field-inspection-software-arizona",
    city: "Arizona",
    state: "Arizona",
    stateCode: "AZ",
    country: "USA",
    countryCode: "US",
    latitude: 33.7712,
    longitude: -111.3877,
    heroTitle: "Field Inspection Software in Arizona",
    heroSubtitle:
      "ICA, ADEQ, and OSHA-Arizona compliance for Arizona construction and heat-safety.",
    metaTitle: "Field Inspection Software Arizona | SpaceCapture",
    metaDescription:
      "AI field inspection software for Arizona construction. ICA, ADEQ, and OSHA-Arizona compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software arizona",
      "arizona ica inspection app",
      "adeq inspection software",
      "phoenix construction software",
      "tucson construction software",
    ],
    image: "/images/locations/arizona.jpg",
    features: [
      {
        title: "ICA Compliance",
        description:
          "Templates aligned with Arizona's Industrial Commission of Arizona (ICA) construction standards.",
      },
      {
        title: "Heat Safety",
        description:
          "Like Texas, Arizona summers are brutal. SpaceCapture tracks water breaks, shade access, and acclimatization for OSHA-Arizona compliance.",
      },
    ],
    contentSections: [
      {
        title: "From Phoenix to Tucson",
        content:
          "Arizona's construction market is booming — from Phoenix's data center alley to Tucson's logistics hub. SpaceCapture handles the scale and the heat.",
      },
    ],
    compliance: [
      { name: "ICA", description: "Industrial Commission of Arizona." },
      { name: "ADEQ", description: "Arizona Dept. of Environmental Quality." },
    ],
    industryCallouts: [
      { name: "Data centers", description: "Phoenix-area hyperscale." },
      { name: "Semiconductor", description: "TSMC and supplier fabs." },
    ],
  },
  "field-inspection-software-massachusetts": {
    slug: "field-inspection-software-massachusetts",
    city: "Massachusetts",
    state: "Massachusetts",
    stateCode: "MA",
    country: "USA",
    countryCode: "US",
    latitude: 42.378,
    longitude: -72.0326,
    heroTitle: "Field Inspection Software in Massachusetts",
    heroSubtitle:
      "Mass Building Code, DEP, and Boston-specific compliance for Massachusetts construction.",
    metaTitle: "Field Inspection Software Massachusetts | SpaceCapture",
    metaDescription:
      "AI field inspection software for Massachusetts construction. Mass Building Code, DEP, and Boston-specific compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software massachusetts",
      "massachusetts building code inspection",
      "boston construction software",
      "boston building inspection app",
    ],
    image: "/images/locations/massachusetts.jpg",
    features: [
      {
        title: "Mass Building Code (780 CMR)",
        description:
          "Pre-built inspection templates aligned with the Massachusetts State Building Code (780 CMR).",
      },
      {
        title: "MassDEP Compliance",
        description:
          "Environmental inspections (wetlands, Title 5 septic, brownfields) ready for MassDEP submittal.",
      },
    ],
    contentSections: [
      {
        title: "From Boston to Biotech",
        content:
          "Massachusetts construction is dominated by life sciences, healthcare, and dense urban infill. SpaceCapture handles the strict regulatory environment and the high-quality expectations.",
      },
    ],
    compliance: [
      { name: "780 CMR", description: "Mass State Building Code." },
      { name: "MassDEP", description: "Department of Environmental Protection." },
    ],
    industryCallouts: [
      { name: "Life sciences", description: "Cambridge and Boston lab facilities." },
      { name: "Healthcare", description: "Major hospital systems." },
    ],
  },
  "field-inspection-software-tennessee": {
    slug: "field-inspection-software-tennessee",
    city: "Tennessee",
    state: "Tennessee",
    stateCode: "TN",
    country: "USA",
    countryCode: "US",
    latitude: 35.7478,
    longitude: -86.6923,
    heroTitle: "Field Inspection Software in Tennessee",
    heroSubtitle:
      "State Fire Marshal, TDEC, and TN DOL compliance for Tennessee construction.",
    metaTitle: "Field Inspection Software Tennessee | SpaceCapture",
    metaDescription:
      "AI field inspection software for Tennessee construction. State Fire Marshal, TDEC, and TN DOL compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software tennessee",
      "tennessee construction software",
      "nashville construction software",
      "memphis construction software",
    ],
    image: "/images/locations/tennessee.jpg",
    features: [
      {
        title: "State Fire Marshal Compliance",
        description:
          "Templates for the TN Department of Commerce and Insurance, including fire alarm and sprinkler tests.",
      },
      {
        title: "TDEC Environmental",
        description:
          "Erosion prevention, sediment control, and water-quality inspections ready for TDEC submittal.",
      },
    ],
    contentSections: [
      {
        title: "From Nashville's Boom to Memphis's Riverfront",
        content:
          "Tennessee is one of the fastest-growing states for construction. SpaceCapture scales from a single homebuilder in Nashville to a multi-state GC.",
      },
    ],
    compliance: [
      { name: "State Fire Marshal", description: "TN Dept. of Commerce & Insurance." },
      { name: "TDEC", description: "TN Department of Environment & Conservation." },
    ],
    industryCallouts: [
      { name: "Music & entertainment", description: "Nashville studio and venue builds." },
      { name: "Auto", description: "Nissan, GM, VW supplier facilities." },
    ],
  },
  "field-inspection-software-indiana": {
    slug: "field-inspection-software-indiana",
    city: "Indiana",
    state: "Indiana",
    stateCode: "IN",
    country: "USA",
    countryCode: "US",
    latitude: 39.8647,
    longitude: -86.2604,
    heroTitle: "Field Inspection Software in Indiana",
    heroSubtitle:
      "Indiana Building Code, IDEM, and IOSHA compliance for Indiana construction and life sciences.",
    metaTitle: "Field Inspection Software Indiana | SpaceCapture",
    metaDescription:
      "AI field inspection software for Indiana construction. Indiana Building Code, IDEM, and IOSHA compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software indiana",
      "indiana construction software",
      "indianapolis construction software",
      "iosha inspection app",
    ],
    image: "/images/locations/indiana.jpg",
    features: [
      {
        title: "IOSHA Compliance",
        description:
          "Pre-built inspection templates aligned with Indiana OSHA's most-cited construction standards.",
      },
      {
        title: "IDEM Environmental",
        description:
          "Stormwater, erosion, and wetland inspection templates ready for IDEM submittal.",
      },
    ],
    contentSections: [
      {
        title: "From Indianapolis to Elkhart",
        content:
          "Indiana's construction is dominated by advanced manufacturing, life sciences (Eli Lilly's $20B+ buildout), and logistics. SpaceCapture handles plant and warehouse work at scale.",
      },
    ],
    compliance: [
      { name: "IOSHA", description: "Indiana OSHA." },
      { name: "IDEM", description: "Indiana Department of Environmental Management." },
    ],
    industryCallouts: [
      { name: "Life sciences", description: "Eli Lilly and supplier facilities." },
      { name: "Manufacturing", description: "Heavy industrial across the state." },
    ],
  },
  "field-inspection-software-missouri": {
    slug: "field-inspection-software-missouri",
    city: "Missouri",
    state: "Missouri",
    stateCode: "MO",
    country: "USA",
    countryCode: "US",
    latitude: 38.4623,
    longitude: -92.302,
    heroTitle: "Field Inspection Software in Missouri",
    heroSubtitle:
      "Missouri Building Code, MDNR, and MoDOL compliance for Missouri construction.",
    metaTitle: "Field Inspection Software Missouri | SpaceCapture",
    metaDescription:
      "AI field inspection software for Missouri construction. Missouri Building Code, MDNR, and MoDOL compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software missouri",
      "missouri construction software",
      "st louis construction software",
      "kansas city construction software",
    ],
    image: "/images/locations/missouri.jpg",
    features: [
      {
        title: "Missouri Building Code",
        description:
          "Pre-built inspection templates aligned with the Missouri Building Code.",
      },
      {
        title: "MDNR Environmental",
        description:
          "Stormwater, erosion, and wetland inspections ready for MDNR submittal.",
      },
    ],
    contentSections: [
      {
        title: "From St. Louis to Kansas City",
        content:
          "Missouri's two major metros anchor a $20B+ construction market. SpaceCapture handles commercial, healthcare, and industrial work in both.",
      },
    ],
    compliance: [
      { name: "Missouri Building Code", description: "State building code." },
      { name: "MDNR", description: "Missouri Dept. of Natural Resources." },
    ],
    industryCallouts: [
      { name: "Healthcare", description: "BJC, Mercy, and hospital systems." },
      { name: "Agriculture", description: "Agtech and processing facilities." },
    ],
  },
  "field-inspection-software-maryland": {
    slug: "field-inspection-software-maryland",
    city: "Maryland",
    state: "Maryland",
    stateCode: "MD",
    country: "USA",
    countryCode: "US",
    latitude: 39.0639,
    longitude: -76.8021,
    heroTitle: "Field Inspection Software in Maryland",
    heroSubtitle:
      "Maryland Building Code, MDE, and MOSH compliance for Maryland construction.",
    metaTitle: "Field Inspection Software Maryland | SpaceCapture",
    metaDescription:
      "AI field inspection software for Maryland construction. Maryland Building Code, MDE, and MOSH compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software maryland",
      "maryland construction software",
      "baltimore construction software",
      "mosh inspection app",
    ],
    image: "/images/locations/maryland.jpg",
    features: [
      {
        title: "Maryland Building Code",
        description:
          "Pre-built inspection templates aligned with the Maryland Building Performance Code (based on IBC 2018).",
      },
      {
        title: "MDE Environmental",
        description:
          "Stormwater, erosion, and sediment control inspections ready for MDE submittal.",
      },
    ],
    contentSections: [
      {
        title: "From Baltimore to the BioCapital",
        content:
          "Maryland is a hub for biotech (NIH, FDA), federal contracting, and dense urban infill around the DC beltway. SpaceCapture handles the strict regulatory environment.",
      },
    ],
    compliance: [
      { name: "Maryland Building Code", description: "Based on IBC 2018." },
      { name: "MDE", description: "Maryland Dept. of the Environment." },
      { name: "MOSH", description: "Maryland Occupational Safety & Health." },
    ],
    industryCallouts: [
      { name: "BioCapital", description: "NIH, FDA, biotech." },
      { name: "Federal", description: "DC-area federal contracts." },
    ],
  },
  "field-inspection-software-colorado": {
    slug: "field-inspection-software-colorado",
    city: "Colorado",
    state: "Colorado",
    stateCode: "CO",
    country: "USA",
    countryCode: "US",
    latitude: 39.0593,
    longitude: -105.3111,
    heroTitle: "Field Inspection Software in Colorado",
    heroSubtitle:
      "Colorado Building Code, CDPHE, and OSHA-aligned inspections for Colorado construction.",
    metaTitle: "Field Inspection Software Colorado | SpaceCapture",
    metaDescription:
      "AI field inspection software for Colorado construction. Colorado Building Code, CDPHE, and OSHA-aligned inspections, with offline mobile capture.",
    metaKeywords: [
      "field inspection software colorado",
      "colorado construction software",
      "denver construction software",
      "cdphe inspection app",
    ],
    image: "/images/locations/colorado.jpg",
    features: [
      {
        title: "Colorado Building Code",
        description:
          "Pre-built templates aligned with the adopted International Codes (IBC, IRC, IECC, IFGC).",
      },
      {
        title: "CDPHE Environmental",
        description:
          "Stormwater (CDPS) and remediation inspection templates ready for CDPHE submittal.",
      },
    ],
    contentSections: [
      {
        title: "From Denver's Skyline to the Rockies",
        content:
          "Colorado's construction market is diverse — from Denver high-rises to mountain resort builds. SpaceCapture handles the elevation, weather, and strict energy code requirements.",
      },
    ],
    compliance: [
      { name: "Colorado Building Code", description: "Adopted International Codes." },
      { name: "CDPHE", description: "Colorado Dept. of Public Health & Environment." },
    ],
    industryCallouts: [
      { name: "Energy", description: "NREL, oil & gas, renewable." },
      { name: "Tourism", description: "Ski resort and hospitality." },
    ],
  },
  // -------- International metros --------
  "field-inspection-software-dubai": {
    slug: "field-inspection-software-dubai",
    city: "Dubai",
    country: "UAE",
    countryCode: "AE",
    latitude: 25.2048,
    longitude: 55.2708,
    heroTitle: "Field Inspection Software in Dubai",
    heroSubtitle:
      "Dubai Municipality and Trakhees-compliant field inspections for UAE construction and real estate.",
    metaTitle: "Field Inspection Software Dubai | SpaceCapture",
    metaDescription:
      "AI field inspection software for Dubai construction. DM and Trakhees compliance, heat-stress tracking, multilingual support, and offline mobile capture.",
    metaKeywords: [
      "field inspection software dubai",
      "construction management software dubai",
      "dubai construction app",
      "field inspection dubai",
      "construction software uae",
      "trakhees inspection software",
    ],
    image: "/images/locations/dubai.jpg",
    features: [
      {
        title: "Dubai Municipality (DM) Compliance",
        description:
          "Templates aligned with DM's third-party inspection requirements, including high-rise and villa workflows.",
      },
      {
        title: "Heat Stress & Worker Welfare",
        description:
          "Track summer work-rest cycles, water breaks, and shade compliance. Mandatory in UAE summer months.",
      },
      {
        title: "Multilingual Field Teams",
        description:
          "Capture inspections in Arabic, English, Hindi, Urdu, Tagalog, and more. Same report, every language.",
      },
    ],
    contentSections: [
      {
        title: "Built for the UAE",
        content:
          "From the Burj Khalifa district to Expo City, SpaceCapture handles the scale and complexity of Dubai's mega-projects. Our offline-first mobile app keeps your team connected even in remote desert sites or high-rise basements.",
      },
    ],
    compliance: [
      { name: "Dubai Municipality", description: "DM third-party inspection." },
      { name: "Trakhees", description: "Ports, Customs & Free Zone Authority." },
    ],
    industryCallouts: [
      { name: "Mega-projects", description: "Burj district, Expo City, Dubai South." },
      { name: "Hospitality", description: "Hotels, resorts, theme parks." },
    ],
  },
  "field-inspection-software-singapore": {
    slug: "field-inspection-software-singapore",
    city: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    latitude: 1.3521,
    longitude: 103.8198,
    heroTitle: "Field Inspection Software in Singapore",
    heroSubtitle:
      "BCA, CONQUAS, and Smart Nation-aligned field inspections for Singapore construction.",
    metaTitle: "Field Inspection Software Singapore | SpaceCapture",
    metaDescription:
      "AI field inspection software for Singapore construction. BCA, CONQUAS, and Smart Nation IDD compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software singapore",
      "bca compliance software",
      "singapore construction app",
      "conquas inspection software",
      "field inspection app singapore",
    ],
    image: "/images/locations/singapore.jpg",
    features: [
      {
        title: "BCA Compliance Ready",
        description:
          "Pre-loaded templates aligned with Building and Construction Authority (BCA) standards for seamless inspections.",
      },
      {
        title: "CONQUAS Quality Benchmarks",
        description:
          "Maintain high Construction Quality Assessment System (CONQUAS) scores with rigorous digital quality controls.",
      },
      {
        title: "Smart Nation IDD Integration",
        description:
          "Aligns with Singapore's Integrated Digital Delivery (IDD) roadmap — BIM, digital twins, and field-first workflows.",
      },
    ],
    contentSections: [
      {
        title: "Digitalizing Singapore's Built Environment",
        content:
          "As Singapore pushes towards a smarter, more sustainable built environment, manual paper forms are obsolete. SpaceCapture offers a fast, reliable mobile solution for site supervisors and Resident Technical Officers (RTOs) across the island.",
      },
    ],
    compliance: [
      { name: "BCA", description: "Building and Construction Authority." },
      { name: "CONQUAS", description: "Construction Quality Assessment System." },
    ],
    industryCallouts: [
      { name: "Public housing", description: "HDB flats and BTOs." },
      { name: "Commercial", description: "CBD and Marina Bay." },
    ],
  },
  "field-inspection-software-london": {
    slug: "field-inspection-software-london",
    city: "London",
    country: "UK",
    countryCode: "GB",
    latitude: 51.5074,
    longitude: -0.1278,
    heroTitle: "Field Inspection Software in London",
    heroSubtitle:
      "Building Regulations, CDM 2015, and BREEAM-compliant field inspections for UK construction.",
    metaTitle: "Field Inspection Software London | SpaceCapture",
    metaDescription:
      "AI field inspection software for London and UK construction. Building Regulations, CDM 2015, and BREEAM compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software london",
      "uk construction software",
      "building regulations inspection app",
      "cdm 2015 software",
      "breeam inspection software",
    ],
    image: "/images/locations/london.jpg",
    features: [
      {
        title: "Building Regulations Compliance",
        description:
          "Pre-built templates aligned with Approved Documents A–S, including Part B (fire safety), Part F (ventilation), and Part L (conservation of fuel and power).",
      },
      {
        title: "CDM 2015 Principal Designer Support",
        description:
          "Capture pre-construction information, health & safety file, and ongoing risk assessments for the principal contractor role.",
      },
      {
        title: "BREEAM UK New Construction",
        description:
          "Track evidence for BREEAM credits across the categories — energy, health & wellbeing, materials, waste, water, pollution, transport, land use, innovation.",
      },
    ],
    contentSections: [
      {
        title: "Built for UK Construction",
        content:
          "From the Square Mile's high-rise office builds to suburban housing, SpaceCapture handles the unique UK regulatory stack — Building Regulations, CDM, BREEAM, and the Considerate Constructors Scheme.",
      },
    ],
    compliance: [
      { name: "Building Regulations", description: "Approved Documents A–S." },
      { name: "CDM 2015", description: "Construction Design & Management Regs." },
      { name: "BREEAM", description: "Building Research Establishment Environmental Assessment." },
    ],
    industryCallouts: [
      { name: "Commercial", description: "City of London towers." },
      { name: "Residential", description: "Estate regeneration." },
    ],
  },
  "field-inspection-software-toronto": {
    slug: "field-inspection-software-toronto",
    city: "Toronto",
    country: "Canada",
    countryCode: "CA",
    latitude: 43.65107,
    longitude: -79.347015,
    heroTitle: "Field Inspection Software in Toronto",
    heroSubtitle:
      "OBC, Toronto Green Standard, and OH&S-compliant field inspections for Canadian construction.",
    metaTitle: "Field Inspection Software Toronto | SpaceCapture",
    metaDescription:
      "AI field inspection software for Toronto and Canadian construction. OBC, Toronto Green Standard, and OH&S compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software toronto",
      "canadian construction software",
      "obc inspection app",
      "toronto construction software",
      "ontario construction software",
    ],
    image: "/images/locations/toronto.jpg",
    features: [
      {
        title: "Ontario Building Code (OBC)",
        description:
          "Pre-built templates aligned with the OBC, including the latest energy efficiency and accessibility requirements.",
      },
      {
        title: "Toronto Green Standard",
        description:
          "Track Tier 1–4 TGS compliance, including energy, water, ecology, and indoor environment requirements.",
      },
    ],
    contentSections: [
      {
        title: "From Condos to Civic",
        content:
          "Toronto is one of the fastest-growing cities in North America, with a construction boom in residential high-rise, transit-oriented development, and civic infrastructure.",
      },
    ],
    compliance: [
      { name: "OBC", description: "Ontario Building Code." },
      { name: "Toronto Green Standard", description: "Tier 1–4 sustainability." },
    ],
    industryCallouts: [
      { name: "Residential high-rise", description: "Condo boom in the GTA." },
      { name: "Transit", description: "Eglinton Crosstown, Ontario Line." },
    ],
  },
  "field-inspection-software-sydney": {
    slug: "field-inspection-software-sydney",
    city: "Sydney",
    country: "Australia",
    countryCode: "AU",
    latitude: -33.8688,
    longitude: 151.2093,
    heroTitle: "Field Inspection Software in Sydney",
    heroSubtitle:
      "NCC, SafeWork NSW, and Green Star-compliant field inspections for Australian construction.",
    metaTitle: "Field Inspection Software Sydney | SpaceCapture",
    metaDescription:
      "AI field inspection software for Sydney and Australian construction. NCC, SafeWork NSW, and Green Star compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software sydney",
      "australian construction software",
      "ncc inspection app",
      "safework nsw software",
    ],
    image: "/images/locations/sydney.jpg",
    features: [
      {
        title: "National Construction Code (NCC)",
        description:
          "Pre-built templates aligned with the NCC (formerly BCA), including the latest energy efficiency and accessibility standards.",
      },
      {
        title: "SafeWork NSW Compliance",
        description:
          "Pre-loaded safety inspections for SafeWork NSW's most-cited construction standards.",
      },
    ],
    contentSections: [
      {
        title: "From Sydney Harbour to the Suburbs",
        content:
          "Sydney's construction market is dominated by high-rise residential, civic infrastructure, and major transport projects. SpaceCapture handles the strict regulatory environment.",
      },
    ],
    compliance: [
      { name: "NCC", description: "National Construction Code." },
      { name: "SafeWork NSW", description: "NSW workplace safety." },
    ],
    industryCallouts: [
      { name: "Residential", description: "High-rise apartments in the CBD." },
      { name: "Transport", description: "Sydney Metro, WestConnex." },
    ],
  },
  "field-inspection-software-mumbai": {
    slug: "field-inspection-software-mumbai",
    city: "Mumbai",
    country: "India",
    countryCode: "IN",
    latitude: 19.076,
    longitude: 72.8777,
    heroTitle: "Field Inspection Software in Mumbai",
    heroSubtitle:
      "NBC, MCGM, and BIS-compliant field inspections for Indian construction and infrastructure.",
    metaTitle: "Field Inspection Software Mumbai | SpaceCapture",
    metaDescription:
      "AI field inspection software for Mumbai and Indian construction. NBC, MCGM, and BIS compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software mumbai",
      "indian construction software",
      "mumbai construction software",
      "nbc inspection app",
      "mcgm inspection software",
    ],
    image: "/images/locations/mumbai.jpg",
    features: [
      {
        title: "National Building Code (NBC) of India",
        description:
          "Templates aligned with NBC 2016, including structural, fire, and life-safety requirements.",
      },
      {
        title: "MCGM Compliance",
        description:
          "Municipal Corporation of Greater Mumbai inspection templates for building permits, occupation, and fire NOCs.",
      },
    ],
    contentSections: [
      {
        title: "From South Mumbai to the Suburbs",
        content:
          "Mumbai's construction market is one of the largest in India, with high-rise residential, metro infrastructure, and coastal redevelopment projects driving demand for digital field tools.",
      },
    ],
    compliance: [
      { name: "NBC 2016", description: "National Building Code of India." },
      { name: "MCGM", description: "Municipal Corporation of Greater Mumbai." },
    ],
    industryCallouts: [
      { name: "High-rise residential", description: "Tallest buildings in India." },
      { name: "Transit", description: "Mumbai Metro, coastal road." },
    ],
  },
  "field-inspection-software-abu-dhabi": {
    slug: "field-inspection-software-abu-dhabi",
    city: "Abu Dhabi",
    country: "UAE",
    countryCode: "AE",
    latitude: 24.4539,
    longitude: 54.3773,
    heroTitle: "Field Inspection Software in Abu Dhabi",
    heroSubtitle:
      "DMT, ADNOC, and ADM-compliant field inspections for Abu Dhabi construction and oil & gas.",
    metaTitle: "Field Inspection Software Abu Dhabi | SpaceCapture",
    metaDescription:
      "AI field inspection software for Abu Dhabi construction. DMT, ADNOC, and ADM compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software abu dhabi",
      "abu dhabi construction app",
      "dmt inspection software",
      "adnoc inspection app",
    ],
    image: "/images/locations/abu-dhabi.jpg",
    features: [
      {
        title: "DMT (Department of Municipalities & Transport) Compliance",
        description:
          "Templates aligned with Abu Dhabi's building permits and inspection workflows.",
      },
      {
        title: "ADNOC-Grade Oil & Gas Inspections",
        description:
          "Pre-built inspection templates for upstream, midstream, and downstream assets, meeting ADNOC contractor standards.",
      },
    ],
    contentSections: [
      {
        title: "Built for Abu Dhabi's Ambitions",
        content:
          "From Saadiyat's cultural district to the industrial zones of Mussafah, Abu Dhabi's construction and energy sectors need a field tool that handles both. SpaceCapture is built for both.",
      },
    ],
    compliance: [
      { name: "DMT", description: "Dept. of Municipalities & Transport." },
      { name: "ADNOC", description: "Abu Dhabi National Oil Company." },
    ],
    industryCallouts: [
      { name: "Cultural & tourism", description: "Saadiyat, Louvre, Guggenheim." },
      { name: "Oil & gas", description: "ADNOC and suppliers." },
    ],
  },
  "field-inspection-software-riyadh": {
    slug: "field-inspection-software-riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    countryCode: "SA",
    latitude: 24.7136,
    longitude: 46.6753,
    heroTitle: "Field Inspection Software in Riyadh",
    heroSubtitle:
      "Saudi Building Code, NEOM, and ROSHN-grade field inspections for Saudi construction and giga-projects.",
    metaTitle: "Field Inspection Software Riyadh | SpaceCapture",
    metaDescription:
      "AI field inspection software for Riyadh construction. Saudi Building Code, NEOM, and ROSHN compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software riyadh",
      "saudi construction software",
      "riyadh construction app",
      "neom inspection software",
    ],
    image: "/images/locations/riyadh.jpg",
    features: [
      {
        title: "Saudi Building Code Compliance",
        description:
          "Templates aligned with the Saudi Building Code (SBC 2018, based on IBC).",
      },
      {
        title: "Giga-Project Support",
        description:
          "Inspection templates purpose-built for NEOM, ROSHN, Diriyah, Qiddiya, and other Saudi giga-projects.",
      },
    ],
    contentSections: [
      {
        title: "Built for Vision 2030",
        content:
          "Saudi Arabia is the most exciting construction market in the world right now. SpaceCapture is ready — with multi-language, multi-currency, and giga-project-ready inspection workflows.",
      },
    ],
    compliance: [
      { name: "SBC 2018", description: "Saudi Building Code." },
      { name: "NEOM", description: "Giga-project delivery." },
    ],
    industryCallouts: [
      { name: "Giga-projects", description: "NEOM, ROSHN, Diriyah." },
      { name: "Vision 2030", description: "Saudi transformation." },
    ],
  },
  "field-inspection-software-doha": {
    slug: "field-inspection-software-doha",
    city: "Doha",
    country: "Qatar",
    countryCode: "QA",
    latitude: 25.2854,
    longitude: 51.531,
    heroTitle: "Field Inspection Software in Doha",
    heroSubtitle:
      "QCS, Ashghal, and FIFA-grade field inspections for Qatar construction and infrastructure.",
    metaTitle: "Field Inspection Software Doha | SpaceCapture",
    metaDescription:
      "AI field inspection software for Doha construction. QCS, Ashghal, and FIFA-grade compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software doha",
      "qatar construction software",
      "qcs inspection app",
      "ashghal inspection software",
    ],
    image: "/images/locations/doha.jpg",
    features: [
      {
        title: "Qatar Construction Specifications (QCS)",
        description:
          "Pre-built templates aligned with the latest QCS, including civil, structural, and MEP standards.",
      },
      {
        title: "Ashghal Public Works",
        description:
          "Inspection templates for roads, drainage, and public infrastructure projects under Ashghal.",
      },
    ],
    contentSections: [
      {
        title: "From Lusail to Legacy",
        content:
          "Qatar's construction boom is anchored by the FIFA World Cup 2022 legacy, ongoing Lusail development, and Qatar National Vision 2030. SpaceCapture handles it all.",
      },
    ],
    compliance: [
      { name: "QCS", description: "Qatar Construction Specifications." },
      { name: "Ashghal", description: "Public Works Authority." },
    ],
    industryCallouts: [
      { name: "Stadiums & sports", description: "FIFA legacy venues." },
      { name: "Lusail", description: "Iconic waterfront city." },
    ],
  },
  "field-inspection-software-hong-kong": {
    slug: "field-inspection-software-hong-kong",
    city: "Hong Kong",
    country: "Hong Kong SAR",
    countryCode: "HK",
    latitude: 22.3193,
    longitude: 114.1694,
    heroTitle: "Field Inspection Software in Hong Kong",
    heroSubtitle:
      "Buildings Department, BEAM Plus, and CIC-compliant field inspections for Hong Kong construction.",
    metaTitle: "Field Inspection Software Hong Kong | SpaceCapture",
    metaDescription:
      "AI field inspection software for Hong Kong construction. Buildings Department, BEAM Plus, and CIC compliance, with offline mobile capture.",
    metaKeywords: [
      "field inspection software hong kong",
      "hong kong construction software",
      "beam plus software",
      "cic inspection app",
    ],
    image: "/images/locations/hong-kong.jpg",
    features: [
      {
        title: "Buildings Department Compliance",
        description:
          "Templates aligned with the HK Buildings Ordinance and its subsidiary regulations.",
      },
      {
        title: "BEAM Plus Tracking",
        description:
          "Capture evidence for BEAM Plus certification across all categories: site aspects, material aspects, energy use, water use, indoor environmental quality, innovations.",
      },
    ],
    contentSections: [
      {
        title: "Densely Built, Strictly Regulated",
        content:
          "Hong Kong has some of the densest construction in the world, with a strict building code and progressive sustainability standards. SpaceCapture handles the unique mix of vertical density, typhoon resilience, and BEAM Plus requirements.",
      },
    ],
    compliance: [
      { name: "BD", description: "Buildings Department." },
      { name: "BEAM Plus", description: "Building Environmental Assessment Method." },
    ],
    industryCallouts: [
      { name: "High-rise", description: "Kowloon, Hong Kong Island." },
      { name: "Transit", description: "MTR extensions." },
    ],
  },
};
