import { MessageSquare, AlertTriangle, Clock, FileText, ShieldAlert, Users, HardHat, Factory, Wrench, Brain, Sparkles, Scan, Bot } from 'lucide-react';
import image from 'next/image';

export interface PersonaData {
  slug: string;
  title: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  painPoints: {
    title: string;
    items: { title: string; desc: string; icon: any }[];
  };
  benefits: {
    title: string;
    items: { title: string; desc: string }[];
  };
  aiFeatures: {
    title: string;
    items: { title: string; desc: string; icon: any }[];
  };
}

export const PERSONAS_DATA: Record<string, PersonaData> = {
  'general-contractors': {
    slug: 'general-contractors',
    title: 'Construction Software for General Contractors | SpaceCapture',
    description: 'Keep projects on schedule. Manage subs, safety, and closeouts in one app.',
    hero: {
      title: 'Command Your Jobsite',
      subtitle: 'For GCs who need to reduce risk, coordinate subcontractors, and close out projects 20% faster.',
      ctaPrimary: 'See GC Solutions',
      ctaSecondary: 'Try GC Solutions'
    },
    painPoints: {
      title: 'Stop Chasing Information',
      items: [
        { title: 'Fragmented Comms', desc: 'Stop juggling emails and texts.', icon: MessageSquare },
        { title: 'Safety Blindspots', desc: 'Identify hazards before they become incidents.', icon: AlertTriangle },
        { title: 'Slow Closeouts', desc: 'Automate punch lists to get paid faster.', icon: Clock }
      ]
    },
    benefits: {
      title: 'Why Top GCs Choose SpaceCapture',
      items: [
        { title: 'Standardize Field Data', desc: 'Get consistent reports from every superintendent.' },
        { title: 'AI-Powered Risk Detection', desc: 'Automatically flag safety issues in site photos.' },
        { title: 'Real-Time Sub Tracking', desc: 'Assign tasks and track completion instantly.' }
      ]
    },
    aiFeatures: {
      title: 'AI Site Command',
      items: [
        { title: 'Risk Predicition', desc: 'AI analyzes daily logs to predict safety incidents.', icon: Brain },
        { title: 'Auto-Scheduling', desc: 'Smart algorithms suggest optimal schedule adjustments.', icon: Sparkles },
        { title: 'Subcontractor Rating', desc: 'AI evaluates sub performance based on history.', icon: Users }
      ]
    }
  },
  'facility-managers': {
    slug: 'facility-managers',
    title: 'AI Field Inspection Module for Facility Managers',
    description: 'The ultimate AI integrated space capture field module for facility management. Automate maintenance and compliance with smart inspections.',
    hero: {
      title: 'AI-Powered Field Inspection Module',
      subtitle: 'Streamline building operations with our AI integrated space capture field module. Digitize inspections, track assets, and manage vendors intelligently.',
      ctaPrimary: 'Start AI Inspection',
      ctaSecondary: 'Try the Field App'
    },
    painPoints: {
      title: 'Stop Reactive Maintenance',
      items: [
        { title: 'Lost Asset Data', desc: 'No central history of equipment repairs.', icon: FileText },
        { title: 'Compliance Gaps', desc: 'Missed inspections causing safety risks.', icon: ShieldAlert },
        { title: 'Vendor Accountability', desc: 'Unverified work from external teams.', icon: Users }
      ]
    },
    benefits: {
      title: 'Why Facility Managers Choose SpaceCapture',
      items: [
        { title: 'AI Work Orders', desc: 'Automatically generate tasks from inspection failures.' },
        { title: 'Smart Asset Scanning', desc: 'AI object recognition for instant equipment history.' },
        { title: 'Preventative Scheduling', desc: 'Automated reminders for recurring inspections.' }
      ]
    },
    aiFeatures: {
      title: 'Smart Facility Ops',
      items: [
        { title: 'Anomaly Detection', desc: 'AI spots irregularities in equipment performance readings.', icon: Scan },
        { title: 'Predictive Maintenance', desc: 'Forecast capability to prevent breakdowns before they happen.', icon: Brain },
        { title: 'Vendor Compliance', desc: 'Auto-verify vendor insurance and certifications.', icon: ShieldAlert }
      ]
    }
  },
  'subcontractors': {
    slug: 'subcontractors',
    title: 'AI Field App for Subcontractors | SpaceCapture',
    description: 'Space Capture for subcontractors uses AI to help you get paid faster. The best AI integrated field inspection module for tracking work.',
    hero: {
      title: 'AI Integrated Space Capture for Subcontractors',
      subtitle: 'Prove your work and protect your payments with our AI field app. Document site conditions and daily progress with smart automation.',
      ctaPrimary: 'Start using Space Capture',
      ctaSecondary: 'Try AI Field App'
    },
    painPoints: {
      title: 'Eliminate Payment Disputes',
      items: [
        { title: 'Unpaid Change Orders', desc: 'Work done without approved documentation.', icon: FileText },
        { title: 'Delay Claims', desc: 'Blamed for delays caused by others.', icon: AlertTriangle },
        { title: 'Paperwork Overload', desc: 'Hours spent on daily logs after shift.', icon: Clock }
      ]
    },
    benefits: {
      title: 'Empowering Subcontractors with AI',
      items: [
        { title: 'Visual Proof', desc: 'AI-verified photo documentation of completed work.' },
        { title: 'Instant Daily Logs', desc: 'Generate smart reports in seconds on the mobile app.' },
        { title: 'Delay Notifications', desc: 'AI creates notifications to flag issues immediately.' }
      ]
    },
    aiFeatures: {
      title: 'Field Intelligence',
      items: [
        { title: 'Voice-to-Log', desc: 'Speak your daily report, AI formats it perfectly.', icon: Bot },
        { title: 'Change Detection', desc: 'Visual AI proves site readiness conflicts.', icon: Scan },
        { title: 'Auto-Time Tracking', desc: 'Smart geofencing automates crew timesheets.', icon: Clock }
      ]
    }
  },
  'property-developers': {
    slug: 'property-developers',
    title: 'Space Capture for Developers | AI Field Inspection',
    description: 'Monitor portfolio progress with AI integrated Space Capture. The essential field app for real estate development tracking.',
    hero: {
      title: 'AI Space Capture for Property Developers',
      subtitle: 'Gain total visibility into your investments with our AI integrated field inspection module. Track milestones and quality remotely.',
      ctaPrimary: 'View AI Portfolio',
      ctaSecondary: 'Try Developer Solutions'
    },
    painPoints: {
      title: 'Avoid Construction Surprises',
      items: [
        { title: 'Blind Progress', desc: 'Relying on outdated reports from the GC.', icon: Users },
        { title: 'Quality Issues', desc: 'Defects discovered too late to fix cheaply.', icon: AlertTriangle },
        { title: 'Schedule Slippage', desc: 'Unnoticed delays affecting ROI.', icon: Clock }
      ]
    },
    benefits: {
      title: 'ROI-Driven AI Oversight',
      items: [
        { title: 'Remote Walkthroughs', desc: 'Inspect sites with 360 AI capture remotely.' },
        { title: 'Smart Milestones', desc: 'AI validates progress before releasing payments.' },
        { title: 'Standardized Quality', desc: 'Ensure brand standards across all properties.' }
      ]
    },
    aiFeatures: {
      title: 'Portfolio AI',
      items: [
        { title: 'Investment Risk', desc: 'AI flags projects with high risk of delay.', icon: AlertTriangle },
        { title: 'Progress Verification', desc: 'Visual AI confirms percentage complete.', icon: Scan },
        { title: 'Market Integration', desc: 'Contextualize delays with market data.', icon: Brain }
      ]
    }
  },
  'architects-engineers': {
    slug: 'architects-engineers',
    title: 'AI Field Inspection Module for Architects',
    description: 'Ensure design compliance with AI integrated Space Capture. The preferred field app for design teams and site visits.',
    hero: {
      title: 'AI Field App for Architects & Engineers',
      subtitle: 'Bridge the gap between design and construction. Use our AI space capture module to validate specs and resolve RFIs faster.',
      ctaPrimary: 'AI Design Collaboration',
      ctaSecondary: 'Try Field App Demo'
    },
    painPoints: {
      title: 'Protect Design Intent',
      items: [
        { title: 'Incorrect Installs', desc: 'Builders deviating from the specs.', icon: AlertTriangle },
        { title: 'Slow RFI Cycles', desc: 'Days wasted waiting for context.', icon: Clock },
        { title: 'Liability Concerns', desc: 'Lack of documentation for site visits.', icon: ShieldAlert }
      ]
    },
    benefits: {
      title: 'AI-Powered Design Confidence',
      items: [
        { title: 'Visual RFIs', desc: 'Attach photos and plans to questions instantly.' },
        { title: 'Smart Site Reports', desc: 'Automate field observation reports with AI.' },
        { title: 'As-Built Validation', desc: 'AI compares reality to BIM/CAD models.' }
      ]
    },
    aiFeatures: {
      title: 'Design AI',
      items: [
        { title: 'BIM Compare', desc: 'Overlay BIM on site photos to spot deviations.', icon: Scan },
        { title: 'Auto-RFI Context', desc: 'AI suggests relevant specs for each RFI.', icon: Sparkles },
        { title: 'Code Compliance', desc: 'Smart checks for common code violations.', icon: ShieldAlert }
      ]
    }
  }
};

export interface SolutionData {
  slug: string;
  title: string;
  description: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    items: { title: string; desc: string; icon: any }[];
  };
  howItWorks: {
    title: string;
    steps: { step: number; title: string; desc: string }[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export const SOLUTIONS_DATA: Record<string, SolutionData> = {
  'ai-detection': {
    slug: 'ai-detection',
    title: 'AI Defect Detection Software & API | SpaceCapture',
    description: 'Automate construction inspections with Computer Vision. Detect cracks, corrosion, and safety hazards instantly from site photos.',
    hero: {
      badge: 'AI-POWERED INSPECTIONS',
      title: 'Automate Quality Control with Computer Vision',
      subtitle: 'Stop manual photo review. Our AI identifies, categorizes, and rates defects in milliseconds.',
      ctaPrimary: 'Try AI Detection',
      ctaSecondary: 'View API Docs'
    },
    features: {
      title: 'Built for Precision',
      items: [
        { title: 'Crack Detection', desc: 'Identify structural cracks and measure width automatically.', icon: 'Zap' },
        { title: 'Safety Hazards', desc: 'Flag missing PPE, blocked exits, and exposed wiring.', icon: 'ShieldAlert' },
        { title: 'Corrosion Analysis', desc: 'Detect rust levels on pipes and infrastructure.', icon: 'Droplets' }
      ]
    },
    howItWorks: {
      title: 'From Photo to Report in Seconds',
      steps: [
        { step: 1, title: 'Capture', desc: 'Take a photo with the mobile app or upload via API.' },
        { step: 2, title: 'Analyze', desc: 'Our Engine scans for 50+ types of construction defects.' },
        { step: 3, title: 'Report', desc: 'Get a JSON output or a PDF report with severity ratings.' }
      ]
    },
    faq: [
      { question: 'Does this work offline?', answer: 'Yes, the mobile app captures data offline and syncs analysis when connectivity returns.' },
      { question: 'Can I integrate this into my own app?', answer: 'Yes, we offer a full REST API for developers.' }
    ]
  },
  'visual-form-builder': {
    slug: 'visual-form-builder',
    title: 'No-Code Visual Form Builder for Construction | SpaceCapture',
    description: 'Build custom field forms in minutes. Drag-and-drop interface for safety checklists, daily logs, and inspection reports.',
    hero: {
      badge: 'NO-CODE EDITOR',
      title: 'Build Digital Forms in Mins without Coding',
      subtitle: 'Replace paper and spreadsheets. Create smart forms with logic, signatures, and photos using our visual editor.',
      ctaPrimary: 'Start Building',
      ctaSecondary: 'View Templates'
    },
    features: {
      title: 'Powerful Form Features',
      items: [
        { title: 'Drag & Drop', desc: 'Intuitive builder. No technical skills required.', icon: 'Layout' },
        { title: 'Smart Logic', desc: 'Show/hide fields based on previous answers.', icon: 'Brain' },
        { title: 'Digital Signatures', desc: 'Collect legally binding sign-offs on glass.', icon: 'PenTool' }
      ]
    },
    howItWorks: {
      title: 'Digitize Your Workflow',
      steps: [
        { step: 1, title: 'Build', desc: 'Select fields or start from a template in our visual editor.' },
        { step: 2, title: 'Deploy', desc: 'Publish instantly to the mobile app for your field teams.' },
        { step: 3, title: 'Analyze', desc: 'Data flows into dashboards for real-time insights.' }
      ]
    },
    faq: [
      { question: 'Can I import existing PDFs?', answer: 'Yes, you can upload existing PDF forms and overlay digital fields to digitize them quickly.' },
      { question: 'Is there a limit on submissions?', answer: 'We offer unlimited submissions on our Pro and Enterprise plans.' }
    ]
  }
};

export interface IndustryData {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image?: string;
  };
  stats: { value: string; label: string }[];
  chapters: {
    title: string;
    id: string; 
    paragraphs: string[]; // Simple array of strings for paragraphs
  }[];
}

export const INDUSTRIES_DATA: Record<string, IndustryData> = {
  'oil-gas': {
    slug: 'oil-gas',
    meta: { 
      title: 'Oil & Gas Field Management Software | Space Field',
      description: 'Maximize uptime and safety with offline-capable mobile solutions.' 
    },
    hero: {
      title: 'Digital Transformation for Oil & Gas',
      subtitle: 'Empower your workforce with offline-first mobile tools.',
      image: '/images/oilgas.webp'
    },
    stats: [
      { value: '40%', label: 'Efficiency' },
      { value: '100%', label: 'Offline' },
      { value: '0', label: 'Paper' }
    ],
    chapters: [
    {
      title: 'Introduction',
      id: 'intro',
      paragraphs: [
        'Oil and gas operations are among the most complex and high-risk industrial environments in the world, spanning upstream exploration, midstream transportation, and downstream refining activities.',
        'Field teams often operate in remote and hazardous locations such as offshore platforms, deserts, pipelines, and refineries where connectivity is limited or completely unavailable.',
        'Despite the critical nature of these operations, many organizations still rely on paper-based inspections, spreadsheets, and disconnected mobile tools to manage safety, maintenance, and compliance.',
        'This lack of real-time visibility leads to delayed decision-making, inconsistent reporting, increased safety risks, and costly operational downtime.',
        'As the industry faces increasing pressure to improve safety, reduce environmental impact, and optimize asset performance, digital field transformation has become a strategic necessity rather than a technological upgrade.',
        'Space Field enables oil and gas organizations to modernize field operations through an AI-powered, offline-first inspection and data capture platform built for extreme environments.'
      ]
    },
    {
      title: 'Industry Challenges',
      id: 'challenges',
      paragraphs: [
        'Safety remains the number one priority in oil and gas operations, yet traditional manual inspections are prone to human error, inconsistency, and delayed reporting.',
        'Critical safety hazards such as missing PPE, corrosion, leaks, and unsafe access conditions are often identified too late due to fragmented communication and manual documentation.',
        'Equipment reliability is another major challenge, as unplanned asset failures can result in millions of dollars in lost production and environmental risk.',
        'Regulatory compliance adds further complexity, requiring accurate documentation, audit-ready records, and traceability across inspections, maintenance actions, and incident reports.',
        'Vendor and contractor oversight is difficult to enforce consistently, especially across large-scale projects involving multiple third-party service providers.',
        'Without centralized, standardized field data, leadership teams lack the insights needed to proactively manage risk and optimize operational performance.'
      ]
    },
    {
      title: 'The Space Field Solution',
      id: 'solution',
      paragraphs: [
        'Space Field is designed specifically for the realities of oil and gas field operations, combining offline-first mobile data capture with AI-powered analysis.',
        'Field teams can conduct inspections, safety audits, equipment checks, and environmental assessments without requiring an active internet connection.',
        'All captured data—including photos, videos, checklists, and observations—is securely synchronized once connectivity is restored.',
        'AI-powered computer vision automatically analyzes site images to detect safety hazards, corrosion, leaks, and equipment anomalies that are often missed during manual reviews.',
        'Standardized digital workflows ensure inspections are performed consistently across teams, shifts, and locations.',
        'Automated reporting eliminates paperwork while creating audit-ready documentation for regulatory and internal compliance requirements.'
      ]
    },
    {
      title: 'AI-Driven Safety & Maintenance',
      id: 'ai-safety-maintenance',
      paragraphs: [
        'Space Field enhances safety management by continuously monitoring field conditions through visual and structured data.',
        'AI models identify high-risk patterns such as recurring defects, unsafe behaviors, or deteriorating equipment conditions.',
        'Predictive insights help maintenance teams transition from reactive repairs to preventative and condition-based maintenance strategies.',
        'Asset histories are automatically built over time, enabling better lifecycle management and capital planning.',
        'By identifying risks early, organizations can reduce incidents, extend asset life, and minimize costly shutdowns.'
      ]
    },
    {
      title: 'Compliance, Audits & Accountability',
      id: 'compliance',
      paragraphs: [
        'Oil and gas operators operate under strict regulatory frameworks covering safety, environmental protection, and operational integrity.',
        'Space Field ensures every inspection, observation, and corrective action is digitally documented, time-stamped, and geo-tagged.',
        'Automated reports simplify regulatory audits and reduce the administrative burden on field teams.',
        'Vendor and contractor activities are tracked within the same system, improving accountability and reducing disputes.',
        'Leadership teams gain a centralized, real-time view of compliance status across assets and regions.'
      ]
    },
    {
      title: 'Operational Intelligence at Scale',
      id: 'intelligence',
      paragraphs: [
        'Beyond data capture, Space Field transforms field data into actionable operational intelligence.',
        'AI-driven analytics identify trends across inspections, incidents, and maintenance activities at a portfolio level.',
        'Organizations can proactively address systemic risks, optimize resource allocation, and improve overall operational resilience.',
        'From offshore platforms to refineries and pipeline networks, Space Field scales seamlessly across the entire oil and gas value chain.',
        'By digitizing and standardizing field operations, Space Field enables oil and gas organizations to operate safer, smarter, and more efficiently.'
      ]
    }
  ]
  },
  'construction': {
    slug: 'construction',
    meta: { title: 'Construction Management Software', description: ' streamlining construction projects.' },
    hero: { title: 'Construction Management', subtitle: 'Build better and faster.', image: '/images/construction.webp' },
    stats: [{ value: '30%', label: 'Faster' }, { value: '50%', label: 'Less Rework' }],
    chapters: [
      {
      title: 'Introduction',
      id: 'intro',
      paragraphs: [
        'Construction projects are inherently complex, involving multiple stakeholders, tight schedules, evolving site conditions, and significant financial risk.',
        'From commercial high-rises and residential developments to infrastructure and industrial projects, construction teams must coordinate labor, materials, equipment, and compliance across every stage of the project lifecycle.',
        'Despite advances in design tools and planning software, many construction operations still rely on manual reporting, paper checklists, WhatsApp updates, and disconnected systems in the field.',
        'This disconnect between the jobsite and the office results in delayed visibility, miscommunication, and costly errors that directly impact timelines and profit margins.',
        'As project complexity increases and margins tighten, construction companies are under growing pressure to improve productivity, reduce rework, and maintain strict safety and quality standards.',
        'Space Field enables construction organizations to modernize field operations through an AI-powered, mobile-first platform that captures real-time, verified jobsite data.'
      ]
    },
    {
      title: 'Key Challenges in Construction',
      id: 'challenges',
      paragraphs: [
        'One of the biggest challenges in construction is the lack of real-time visibility into daily jobsite activities.',
        'Project managers often depend on delayed daily logs, verbal updates, or incomplete reports to understand site progress.',
        'This delay makes it difficult to identify issues early, leading to schedule slippage, cost overruns, and disputes between stakeholders.',
        'Safety management remains another critical concern, as construction sites are dynamic environments with constantly changing hazards.',
        'Manual safety inspections are inconsistent and often fail to capture visual evidence required for audits or incident investigations.',
        'Quality issues are frequently discovered late in the project lifecycle, when defects are expensive and time-consuming to correct.',
        'In addition, documentation gaps and inconsistent reporting increase the risk of claims, disputes, and payment delays.'
      ]
    },
    {
      title: 'The Space Field Solution',
      id: 'solution',
      paragraphs: [
        'Space Field is purpose-built for construction field teams, providing a single platform to capture, standardize, and analyze jobsite data.',
        'Field teams can perform inspections, daily logs, safety audits, and progress tracking using a mobile app designed for real-world site conditions.',
        'The platform works offline, ensuring uninterrupted data capture even in basements, remote sites, or early-stage developments.',
        'Once connectivity is restored, all data is securely synchronized and instantly available to project managers and stakeholders.',
        'Standardized digital workflows replace paper checklists and spreadsheets, ensuring consistent reporting across projects and teams.',
        'Automated reporting reduces administrative burden while improving data accuracy and completeness.'
      ]
    },
    {
      title: 'AI-Driven Safety & Quality',
      id: 'ai-safety-quality',
      paragraphs: [
        'Space Field enhances construction safety by combining visual documentation with AI-powered analysis.',
        'Site photos and videos are automatically analyzed to identify common safety risks such as missing PPE, unsafe access points, poor housekeeping, and incomplete edge protection.',
        'AI-assisted defect detection helps identify cracks, misalignments, surface defects, and workmanship issues early.',
        'By catching issues at the earliest stages, construction teams can significantly reduce rework and avoid cascading delays.',
        'Over time, Space Field builds a visual and data-driven record of safety and quality performance across projects.',
        'These insights help organizations continuously improve standards and reduce incident rates.'
      ]
    },
    {
      title: 'Collaboration & Accountability',
      id: 'collaboration',
      paragraphs: [
        'Construction projects involve collaboration between owners, developers, general contractors, subcontractors, and consultants.',
        'Miscommunication and lack of documentation are common sources of disputes and claims.',
        'Space Field creates a shared source of truth by ensuring all stakeholders have access to verified, time-stamped field data.',
        'Visual documentation provides clear evidence of site conditions, completed work, and responsibility boundaries.',
        'Subcontractor activities can be tracked consistently, improving accountability and performance management.',
        'This transparency reduces disputes, accelerates approvals, and supports faster payments.'
      ]
    },
    {
      title: 'Progress Tracking & Project Intelligence',
      id: 'progress-intelligence',
      paragraphs: [
        'Accurate progress tracking is essential for effective construction management and financial control.',
        'Space Field enables teams to capture real-time progress data through structured logs and visual evidence.',
        'AI-driven insights help validate percentage completion, identify bottlenecks, and flag potential delays early.',
        'Project managers gain a clear, data-backed understanding of site status without relying on subjective updates.',
        'At a portfolio level, leadership teams can compare performance across projects and regions.',
        'This operational intelligence supports better planning, forecasting, and risk mitigation.'
      ]
    },
    {
      title: 'Compliance, Audits & Risk Reduction',
      id: 'compliance',
      paragraphs: [
        'Construction projects are subject to strict safety, quality, and contractual requirements.',
        'Space Field ensures all inspections, observations, and corrective actions are digitally documented and audit-ready.',
        'Time-stamped, geo-tagged records simplify compliance verification and incident investigations.',
        'Automated reports reduce preparation time for audits and client reviews.',
        'By maintaining a complete and reliable field data trail, organizations reduce legal exposure and contractual risk.'
      ]
    },
    {
      title: 'Building the Future of Construction',
      id: 'future',
      paragraphs: [
        'The construction industry is undergoing a digital transformation driven by the need for efficiency, transparency, and resilience.',
        'Space Field acts as a bridge between the physical jobsite and digital intelligence.',
        'By transforming field data into actionable insights, the platform empowers teams to make faster, smarter decisions.',
        'From single projects to large construction portfolios, Space Field scales seamlessly to support growing organizations.',
        'With AI-powered field operations, construction companies can build safer, deliver faster, and protect profitability in an increasingly competitive industry.'
      ]
    }
    ]
  },
  'manufacturing': {
    slug: 'manufacturing',
    meta: { title: 'Manufacturing Plant Software', description: ' optimize plant operations.' },
    hero: { title: 'Smart Manufacturing', subtitle: 'Industry 4.0 ready.', image: '/images/manu.webp' },
    stats: [{ value: '25%', label: 'Productivity' }],
    chapters: [
    {
      title: 'Introduction',
      id: 'intro',
      paragraphs: [
        'Manufacturing operations operate under constant pressure to maximize production efficiency, ensure consistent product quality, and maintain strict safety and compliance standards.',
        'From discrete manufacturing and heavy industry to process manufacturing and industrial plants, organizations manage complex machinery, interconnected production lines, and large workforces operating across multiple shifts.',
        'Despite advances in automation, robotics, and industrial control systems, many manufacturers still rely on paper-based inspections, spreadsheets, and manual reporting for critical field operations.',
        'These outdated processes limit real-time visibility into plant conditions, delay issue detection, and increase the risk of unplanned downtime and safety incidents.',
        'As global competition intensifies and margins tighten, manufacturers must modernize how field data is captured, analyzed, and acted upon.',
        'Space Field enables manufacturers to transform field operations through an AI-powered, mobile-first inspection and operational intelligence platform designed for real-world plant environments.'
      ]
    },
    {
      title: 'Challenges in Modern Manufacturing',
      id: 'challenges',
      paragraphs: [
        'Equipment reliability is one of the most significant challenges in manufacturing environments, where even short periods of downtime can disrupt production schedules and supply chains.',
        'Unexpected equipment failures often lead to missed delivery commitments, overtime labor costs, and customer dissatisfaction.',
        'Traditional maintenance inspections are frequently reactive, relying on manual checks and delayed reporting that fail to identify early warning signs.',
        'Quality assurance presents another major challenge, as defects discovered late in the production cycle result in scrap, rework, and increased operational costs.',
        'Safety compliance adds further complexity, requiring consistent inspections, training records, and audit-ready documentation across all shifts and facilities.',
        'Manufacturing organizations also struggle with workforce turnover, where operational knowledge is lost and inspection consistency suffers.',
        'Without centralized, standardized, and reliable field data, leadership teams lack the insights needed to proactively manage risk and optimize plant performance.'
      ]
    },
    {
      title: 'The Space Field Platform',
      id: 'solution',
      paragraphs: [
        'Space Field provides a unified platform to digitize manufacturing inspections, maintenance checks, and safety audits across the plant floor.',
        'Field teams can capture structured data, photos, videos, and observations directly from equipment and production areas using an intuitive mobile application.',
        'The platform is designed to operate offline, ensuring uninterrupted inspections even in production zones with limited or restricted connectivity.',
        'Once connectivity is restored, all data is securely synchronized and instantly available to supervisors, plant managers, and operations leaders.',
        'Standardized digital workflows ensure inspections are performed consistently across shifts, lines, and facilities.',
        'Automated reporting eliminates manual paperwork while improving accuracy, traceability, and accountability.'
      ]
    },
    {
      title: 'AI-Driven Maintenance & Reliability',
      id: 'maintenance',
      paragraphs: [
        'Space Field strengthens maintenance strategies by combining inspection data with AI-powered analysis and pattern recognition.',
        'Visual inspections supported by AI help identify early signs of wear, corrosion, leaks, overheating, vibration issues, and misalignment.',
        'By detecting anomalies early, maintenance teams can transition from reactive repairs to preventative and condition-based maintenance.',
        'AI-driven insights highlight recurring issues and high-risk assets that require prioritized attention.',
        'Asset histories are automatically built over time, creating a comprehensive digital record of equipment health and performance.',
        'This data-driven approach reduces unplanned downtime, extends asset lifespan, and improves overall plant reliability.',
        'Maintenance teams gain greater confidence in planning shutdowns, allocating resources, and managing spare parts inventory.'
      ]
    },
    {
      title: 'Quality Control & Process Consistency',
      id: 'quality',
      paragraphs: [
        'Maintaining consistent product quality is critical for customer satisfaction, brand reputation, and regulatory compliance.',
        'Space Field supports continuous quality inspections throughout the production process, rather than relying on end-of-line checks.',
        'AI-assisted visual inspections help identify surface defects, assembly errors, and process deviations early.',
        'Standardized digital checklists ensure quality procedures are followed uniformly across teams, shifts, and facilities.',
        'Real-time visibility into quality data allows supervisors to intervene immediately when deviations occur.',
        'By catching defects early, manufacturers significantly reduce scrap, rework, and warranty claims.',
        'Over time, quality trend analysis supports continuous improvement initiatives and process optimization.'
      ]
    },
    {
      title: 'Safety, Compliance & Audits',
      id: 'compliance',
      paragraphs: [
        'Manufacturing environments must comply with strict safety, environmental, and operational regulations.',
        'Space Field ensures every safety inspection, observation, and corrective action is digitally recorded and traceable.',
        'Time-stamped and geo-tagged records simplify internal audits and external regulatory inspections.',
        'AI-powered analysis helps identify unsafe patterns, high-risk zones, and recurring safety violations.',
        'Automated compliance reports reduce administrative workload while strengthening governance and risk management.',
        'This consistent documentation helps organizations demonstrate compliance and reduce legal and financial exposure.'
      ]
    },
    {
      title: 'Operational Intelligence at Scale',
      id: 'intelligence',
      paragraphs: [
        'Beyond inspections and reporting, Space Field transforms field data into actionable operational intelligence.',
        'AI-driven dashboards reveal trends across maintenance, safety, quality, and production support activities.',
        'Plant managers gain real-time visibility into emerging risks, recurring failures, and operational bottlenecks.',
        'At an enterprise level, leadership teams can benchmark performance across multiple plants and regions.',
        'This intelligence enables better forecasting, capacity planning, and strategic investment decisions.',
        'Organizations move from reactive problem-solving to proactive operational excellence.'
      ]
    },
    {
      title: 'The Future of Manufacturing Operations',
      id: 'future',
      paragraphs: [
        'Manufacturing is rapidly evolving toward intelligent, data-driven operations aligned with Industry 4.0 principles.',
        'Disconnected field data and manual workflows are no longer sufficient in highly competitive global markets.',
        'Space Field bridges the gap between physical plant operations and digital intelligence.',
        'By digitizing inspections and applying AI-driven insights, manufacturers gain greater control and predictability.',
        'The platform scales seamlessly from single facilities to global manufacturing networks.',
        'With AI-powered field operations, manufacturers can operate safer, smarter, and more efficiently.',
        'Space Field empowers organizations to build resilient, future-ready manufacturing operations.'
      ]
    }
  ]
  },

  'utilities-energy': {
  slug: 'utilities-energy',
  meta: {
    title: 'Utilities & Energy Field Operations Software | Space Field',
    description: 'Digitize grid inspections, maintenance, and compliance with AI-powered, offline-first field operations.'
  },
  hero: {
    title: 'AI-Powered Utilities & Energy Operations',
    subtitle: 'Maintain resilient, safe, and reliable energy infrastructure at scale.',
    image: '/images/utilities-energy.jpg'
  },
  stats: [
    { value: '35%', label: 'Faster Inspections' },
    { value: '45%', label: 'Reduced Outages' },
    { value: '100%', label: 'Paperless Operations' }
  ],
  chapters: [
    {
      title: 'Introduction',
      id: 'intro',
      paragraphs: [
        'Utilities and energy providers form the backbone of modern society, delivering electricity, gas, water, and renewable energy to millions of homes and businesses.',
        'From transmission lines and substations to pipelines, wind farms, and solar plants, utility infrastructure spans vast geographic areas and operates under strict reliability requirements.',
        'Field teams are responsible for inspecting, maintaining, and repairing critical assets in environments that are often remote, hazardous, and difficult to access.',
        'Despite the critical nature of these operations, many utilities still rely on paper forms, manual inspections, and disconnected systems to manage field activities.',
        'This lack of real-time visibility increases the risk of outages, safety incidents, regulatory violations, and delayed response times.',
        'As grids become more complex and energy demand continues to grow, utilities must modernize field operations to remain resilient and compliant.',
        'Space Field enables utilities and energy providers to digitize field inspections, maintenance, and compliance through an AI-powered, offline-first platform built for critical infrastructure.'
      ]
    },
    {
      title: 'Challenges Facing Utilities & Energy Providers',
      id: 'challenges',
      paragraphs: [
        'Aging infrastructure is one of the most pressing challenges for utilities and energy companies worldwide.',
        'Power lines, substations, pipelines, and transformers require frequent inspections to prevent failures and outages.',
        'Manual inspection processes are slow, inconsistent, and difficult to scale across large service territories.',
        'Field teams often work in areas with limited connectivity, making real-time reporting and coordination difficult.',
        'Regulatory compliance adds additional complexity, requiring accurate documentation of inspections, maintenance actions, and corrective measures.',
        'Severe weather events, climate change, and increased demand place additional stress on already strained infrastructure.',
        'Without centralized, standardized field data, leadership teams struggle to proactively manage risk and ensure service reliability.'
      ]
    },
    {
      title: 'The Space Field Solution',
      id: 'solution',
      paragraphs: [
        'Space Field provides a unified platform for utilities and energy providers to digitize field inspections, asset checks, and maintenance workflows.',
        'Field technicians use a mobile-first application to capture structured data, photos, videos, and observations directly from the field.',
        'The platform operates fully offline, ensuring uninterrupted inspections in remote areas and during emergency response scenarios.',
        'Once connectivity is restored, all data is securely synchronized and immediately available to operations teams.',
        'Standardized digital workflows ensure inspections are performed consistently across regions and crews.',
        'Automated reporting replaces paper-based documentation while improving accuracy and traceability.'
      ]
    },
    {
      title: 'AI-Driven Grid Inspections & Maintenance',
      id: 'ai-inspections',
      paragraphs: [
        'Space Field leverages AI-powered analysis to enhance the accuracy and effectiveness of grid and infrastructure inspections.',
        'Visual inspections supported by AI help identify early signs of corrosion, structural damage, vegetation encroachment, and equipment wear.',
        'AI models highlight high-risk assets and recurring issues that require prioritized attention.',
        'By detecting anomalies early, utilities can move from reactive repairs to predictive maintenance strategies.',
        'This proactive approach reduces outages, extends asset lifespan, and improves overall grid reliability.',
        'Maintenance teams gain better visibility into asset health and can plan interventions more effectively.'
      ]
    },
    {
      title: 'Safety, Compliance & Regulatory Readiness',
      id: 'compliance',
      paragraphs: [
        'Utilities and energy providers operate under strict safety and regulatory frameworks designed to protect workers, customers, and the environment.',
        'Space Field ensures every inspection, observation, and corrective action is digitally documented and audit-ready.',
        'Time-stamped and geo-tagged records simplify compliance reporting and regulatory audits.',
        'AI-powered insights help identify unsafe patterns and high-risk locations across service territories.',
        'Automated compliance reports reduce administrative burden while improving governance and accountability.',
        'This comprehensive documentation helps organizations demonstrate regulatory adherence with confidence.'
      ]
    },
    {
      title: 'Operational Intelligence at Scale',
      id: 'intelligence',
      paragraphs: [
        'Beyond data capture, Space Field transforms field data into actionable operational intelligence.',
        'AI-driven dashboards reveal trends across inspections, outages, maintenance activities, and safety incidents.',
        'Operations leaders gain real-time visibility into emerging risks and system-wide performance.',
        'At an enterprise level, utilities can benchmark performance across regions and asset types.',
        'This intelligence supports better planning, investment decisions, and long-term infrastructure resilience.'
      ]
    },
    {
      title: 'The Future of Utilities & Energy Operations',
      id: 'future',
      paragraphs: [
        'The utilities and energy sector is undergoing rapid transformation driven by decentralization, renewables, and digitalization.',
        'Manual field processes are no longer sufficient to manage increasingly complex and distributed infrastructure.',
        'Space Field bridges the gap between physical assets and digital intelligence.',
        'By digitizing inspections and applying AI-driven insights, utilities gain greater control and predictability.',
        'The platform scales seamlessly from local utilities to national energy providers.',
        'With AI-powered field operations, utilities and energy companies can deliver safer, more reliable, and more resilient services for the future.'
      ]
    }
  ]
},
'telecommunications': {
  slug: 'telecommunications',
  meta: {
    title: 'Telecommunications Field Service & Network Inspection Software | Space Field',
    description: 'Digitize telecom field operations, network inspections, and maintenance with AI-powered, offline-first workflows.'
  },
  hero: {
    title: 'AI-Powered Telecom Field Operations',
    subtitle: 'Build, inspect, and maintain reliable network infrastructure at scale.',
    image: '/images/telecom.jpg'
  },
  stats: [
    { value: '40%', label: 'Faster Issue Resolution' },
    { value: '50%', label: 'Reduced Site Rework' },
    { value: '100%', label: 'Digital Field Records' }
  ],
  chapters: [
    {
      title: 'Introduction',
      id: 'intro',
      paragraphs: [
        'Telecommunications networks form the digital backbone of modern economies, enabling communication, commerce, and critical services across the globe.',
        'From mobile towers and fiber networks to data centers and last-mile connectivity, telecom infrastructure is vast, distributed, and continuously evolving.',
        'Field teams play a crucial role in building, inspecting, maintaining, and upgrading this infrastructure to meet growing demand for speed, reliability, and coverage.',
        'Despite rapid advancements in network technology, many telecom field operations still rely on manual processes, paper checklists, and disconnected reporting tools.',
        'These outdated workflows limit visibility into field activities, slow down issue resolution, and increase the risk of network downtime.',
        'As 5G, fiber expansion, and edge computing accelerate, telecom operators must modernize field operations to keep pace.',
        'Space Field enables telecommunications providers to digitize field service, inspections, and maintenance through an AI-powered, offline-first platform designed for network infrastructure.'
      ]
    },
    {
      title: 'Challenges in Telecommunications Field Operations',
      id: 'challenges',
      paragraphs: [
        'One of the biggest challenges in telecommunications is managing large-scale, geographically distributed infrastructure.',
        'Network assets such as towers, cabinets, fiber routes, and equipment rooms require frequent inspections and maintenance.',
        'Manual inspection processes are time-consuming and prone to inconsistency, especially when performed by multiple vendors and contractors.',
        'Connectivity challenges further complicate field operations, as technicians often work in remote areas, basements, rooftops, or underground environments.',
        'Network outages and service degradation can result in customer dissatisfaction, SLA penalties, and reputational damage.',
        'Compliance with safety standards and local regulations adds additional operational complexity.',
        'Without centralized, standardized field data, operations teams lack real-time insight into network health and workforce performance.'
      ]
    },
    {
      title: 'The Space Field Platform',
      id: 'solution',
      paragraphs: [
        'Space Field provides a unified platform to manage telecom field inspections, maintenance activities, and service workflows.',
        'Technicians use a mobile-first application to capture structured data, photos, videos, and site observations directly from the field.',
        'The platform operates fully offline, ensuring uninterrupted workflows in low-connectivity or no-connectivity environments.',
        'Once connectivity is restored, all captured data is securely synchronized and instantly available to network operations teams.',
        'Standardized digital forms replace paper-based checklists, ensuring consistency across regions and contractors.',
        'Automated reporting improves accuracy while reducing administrative overhead for field teams.'
      ]
    },
    {
      title: 'AI-Driven Network Inspections',
      id: 'ai-inspections',
      paragraphs: [
        'Space Field leverages AI-powered visual analysis to enhance telecom network inspections.',
        'Photos captured during site visits are automatically analyzed to detect equipment damage, improper installations, and safety risks.',
        'AI-assisted inspections help identify issues such as loose cabling, structural wear, corrosion, and unauthorized modifications.',
        'By detecting problems early, operators can prevent service disruptions and reduce costly emergency repairs.',
        'AI-driven insights also help prioritize maintenance activities based on asset condition and risk level.',
        'This approach improves network reliability while optimizing maintenance resources.'
      ]
    },
    {
      title: 'Field Service Efficiency & Workforce Productivity',
      id: 'productivity',
      paragraphs: [
        'Telecom field operations involve coordination between internal teams, contractors, and third-party service providers.',
        'Inefficient communication and incomplete documentation often lead to repeat visits and rework.',
        'Space Field improves workforce productivity by providing clear, standardized workflows and real-time task visibility.',
        'Technicians spend less time on paperwork and more time resolving issues on-site.',
        'Visual documentation ensures work is verified the first time, reducing the need for follow-up visits.',
        'Operations managers gain better visibility into crew performance and workload distribution.'
      ]
    },
    {
      title: 'Safety, Compliance & Audit Readiness',
      id: 'compliance',
      paragraphs: [
        'Telecommunications field work involves safety risks such as working at heights, electrical exposure, and confined spaces.',
        'Space Field ensures safety inspections and observations are consistently documented and traceable.',
        'Time-stamped and geo-tagged records simplify compliance reporting and regulatory audits.',
        'AI-powered analysis helps identify recurring safety issues and high-risk sites.',
        'Automated compliance reports reduce manual effort while strengthening governance.',
        'This documentation helps organizations demonstrate adherence to safety and regulatory requirements.'
      ]
    },
    {
      title: 'Operational Intelligence Across the Network',
      id: 'intelligence',
      paragraphs: [
        'Beyond inspections and service logs, Space Field transforms field data into actionable operational intelligence.',
        'AI-driven dashboards reveal trends across outages, maintenance activities, and inspection findings.',
        'Network operations teams gain early warning signals for recurring failures and infrastructure weaknesses.',
        'At an enterprise level, leadership can benchmark performance across regions, vendors, and asset types.',
        'This intelligence supports better planning, vendor management, and network investment decisions.',
        'Organizations move from reactive issue handling to proactive network optimization.'
      ]
    },
    {
      title: 'The Future of Telecom Field Operations',
      id: 'future',
      paragraphs: [
        'Telecommunications networks are expanding rapidly to support 5G, fiber, and next-generation digital services.',
        'Traditional field service models cannot scale effectively with increasing infrastructure complexity.',
        'Space Field bridges the gap between physical network assets and digital intelligence.',
        'By digitizing field workflows and applying AI-driven insights, telecom operators gain greater control and predictability.',
        'The platform scales seamlessly from regional operators to global telecom providers.',
        'With AI-powered field operations, telecommunications companies can deliver more reliable, resilient, and future-ready networks.'
      ]
    }
  ]
}
,
'hvac-plumbing': {
  slug: 'hvac-plumbing',
  meta: {
    title: 'HVAC & Plumbing Field Service Software | Space Field',
    description: 'Digitize HVAC and plumbing inspections, service calls, and maintenance with AI-powered, offline-first field operations.'
  },
  hero: {
    title: 'AI-Powered HVAC & Plumbing Operations',
    subtitle: 'Deliver faster service, fewer callbacks, and complete field visibility.',
    image: '/images/hvac-plumbing.webp'
  },
  stats: [
    { value: '45%', label: 'Faster Service Completion' },
    { value: '35%', label: 'Fewer Repeat Visits' },
    { value: '100%', label: 'Digital Job Records' }
  ],
  chapters: [
    {
      title: 'Introduction',
      id: 'intro',
      paragraphs: [
        'HVAC and plumbing services are essential to the safety, comfort, and functionality of residential, commercial, and industrial buildings.',
        'From installation and preventive maintenance to emergency repairs and compliance inspections, field technicians are the backbone of HVAC and plumbing operations.',
        'These teams work across diverse environments including homes, office buildings, hospitals, factories, and large infrastructure facilities.',
        'Despite the critical nature of their work, many HVAC and plumbing service providers still rely on paper job cards, phone calls, and disconnected systems to manage field operations.',
        'Manual processes slow down dispatch, increase administrative overhead, and make it difficult to maintain consistent service quality.',
        'As customer expectations rise and competition intensifies, HVAC and plumbing companies must modernize how they manage field service operations.',
        'Space Field enables HVAC and plumbing providers to digitize inspections, service calls, and maintenance workflows through an AI-powered, mobile-first platform.'
      ]
    },
    {
      title: 'Challenges in HVAC & Plumbing Field Services',
      id: 'challenges',
      paragraphs: [
        'One of the biggest challenges in HVAC and plumbing operations is inefficient dispatch and job tracking.',
        'Technicians are often assigned jobs with incomplete information, leading to delays, repeat visits, and customer frustration.',
        'Manual job documentation makes it difficult to verify completed work and track service history accurately.',
        'Preventive maintenance programs suffer when inspections are inconsistently recorded or skipped altogether.',
        'Emergency repairs require rapid response, yet lack of real-time visibility slows decision-making and coordination.',
        'Compliance requirements for safety, pressure testing, and environmental regulations add further operational complexity.',
        'Without standardized field data, service managers struggle to optimize technician productivity and service quality.'
      ]
    },
    {
      title: 'The Space Field Platform',
      id: 'solution',
      paragraphs: [
        'Space Field provides a unified platform to manage HVAC and plumbing field service operations end to end.',
        'Technicians use a mobile application to receive job assignments, perform inspections, and document work completed on-site.',
        'Structured digital forms replace paper job cards, ensuring consistent data capture across all service calls.',
        'The platform works fully offline, allowing technicians to operate in basements, mechanical rooms, and remote locations without connectivity.',
        'Once connectivity is restored, all job data is automatically synchronized with the central system.',
        'Service managers gain real-time visibility into job status, technician location, and service performance.'
      ]
    },
    {
      title: 'AI-Driven Inspections & Diagnostics',
      id: 'ai-inspections',
      paragraphs: [
        'Space Field enhances HVAC and plumbing inspections with AI-powered visual and data analysis.',
        'Technicians can capture photos and videos of equipment such as air handlers, chillers, boilers, piping, and fittings.',
        'AI-assisted analysis helps identify common issues such as corrosion, leaks, improper installations, and wear.',
        'Early detection of issues allows technicians to address problems before they escalate into major failures.',
        'AI-driven insights also support more accurate diagnostics, reducing guesswork and unnecessary part replacements.',
        'This results in faster fixes, higher first-time resolution rates, and improved customer satisfaction.'
      ]
    },
    {
      title: 'Preventive Maintenance & Asset History',
      id: 'maintenance',
      paragraphs: [
        'Preventive maintenance is essential for extending the life of HVAC and plumbing systems and avoiding costly breakdowns.',
        'Space Field enables service providers to schedule and document recurring maintenance tasks consistently.',
        'Each inspection automatically builds a digital service history for every asset.',
        'Technicians can review past issues, repairs, and inspection results before performing new work.',
        'AI-driven insights help identify patterns of recurring failures or underperforming equipment.',
        'This data-driven approach supports proactive maintenance strategies and long-term asset reliability.',
        'Customers benefit from fewer emergencies and more predictable system performance.'
      ]
    },
    {
      title: 'Service Quality, Accountability & Customer Trust',
      id: 'quality',
      paragraphs: [
        'Service quality and transparency are critical to building long-term customer relationships in HVAC and plumbing services.',
        'Space Field provides visual proof of work through photos and time-stamped job records.',
        'Customers gain confidence knowing inspections and repairs are thoroughly documented.',
        'Supervisors can review completed jobs remotely and ensure work meets quality standards.',
        'Standardized workflows reduce variability in service delivery across technicians and teams.',
        'This accountability leads to fewer callbacks, stronger customer trust, and improved brand reputation.'
      ]
    },
    {
      title: 'Compliance, Safety & Reporting',
      id: 'compliance',
      paragraphs: [
        'HVAC and plumbing work must comply with safety regulations, building codes, and environmental standards.',
        'Space Field ensures inspections, pressure tests, and safety checks are properly documented.',
        'Time-stamped and geo-tagged records simplify audits and regulatory reporting.',
        'AI-powered analysis helps identify unsafe practices or recurring compliance issues.',
        'Automated reports reduce administrative workload while strengthening risk management.',
        'Service providers maintain consistent compliance across all jobs and locations.'
      ]
    },
    {
      title: 'Operational Intelligence & Growth',
      id: 'intelligence',
      paragraphs: [
        'Beyond daily service operations, Space Field transforms field data into actionable business intelligence.',
        'Dashboards reveal trends in response times, repeat visits, maintenance effectiveness, and technician performance.',
        'Managers can identify training needs, optimize scheduling, and improve workforce utilization.',
        'At scale, leadership teams gain insights into service profitability and operational efficiency.',
        'This intelligence supports data-driven growth and expansion strategies.'
      ]
    },
    {
      title: 'The Future of HVAC & Plumbing Services',
      id: 'future',
      paragraphs: [
        'The HVAC and plumbing industry is evolving toward smarter, more connected service models.',
        'Customers expect faster response times, greater transparency, and proactive maintenance.',
        'Manual field processes can no longer support these expectations at scale.',
        'Space Field bridges the gap between field technicians and digital intelligence.',
        'By digitizing service workflows and applying AI-driven insights, providers gain a competitive advantage.',
        'The platform scales seamlessly from small service teams to large multi-region operations.',
        'With AI-powered field operations, HVAC and plumbing companies can deliver superior service while operating more efficiently.'
      ]
    }
  ]
}
,

'logistics': {
  slug: 'logistics',
  meta: {
    title: 'Logistics & Fleet Operations Software | Space Field',
    description: 'Digitize logistics field operations, fleet inspections, and delivery workflows with AI-powered, offline-first intelligence.'
  },
  hero: {
    title: 'AI-Powered Logistics Operations',
    subtitle: 'Gain real-time visibility across fleets, deliveries, and field teams.',
    image: '/images/logistics.jpg'
  },
  stats: [
    { value: '35%', label: 'Faster Deliveries' },
    { value: '40%', label: 'Lower Operational Costs' },
    { value: '100%', label: 'Digital Trip Records' }
  ],
  chapters: [
    {
      title: 'Introduction',
      id: 'intro',
      paragraphs: [
        'Logistics operations are the backbone of global trade, connecting manufacturers, distributors, and customers through complex transportation and delivery networks.',
        'From fleet-based transportation and last-mile delivery to warehousing and distribution, logistics organizations manage high volumes of assets, vehicles, and field personnel.',
        'Operational efficiency, reliability, and visibility are critical to meeting customer expectations and maintaining profitability.',
        'Despite the scale and importance of logistics operations, many organizations still rely on manual processes, paper logs, and fragmented systems to manage field activities.',
        'These outdated workflows reduce transparency, slow down decision-making, and increase operational risk.',
        'As supply chains become more dynamic and customer expectations rise, logistics companies must modernize how they manage field operations.',
        'Space Field enables logistics organizations to digitize inspections, fleet checks, and delivery workflows through an AI-powered, offline-first platform.'
      ]
    },
    {
      title: 'Challenges in Logistics & Fleet Operations',
      id: 'challenges',
      paragraphs: [
        'Fleet management is one of the most significant challenges in logistics operations.',
        'Vehicles require regular inspections, maintenance checks, and compliance documentation to ensure safety and reliability.',
        'Manual vehicle inspections are inconsistent and often poorly documented, increasing the risk of breakdowns and compliance violations.',
        'Delivery operations face constant pressure to meet tight schedules while managing unpredictable conditions such as traffic, weather, and route changes.',
        'Lack of real-time visibility into field activities makes it difficult to identify delays or intervene proactively.',
        'Driver communication and accountability can suffer when job updates are scattered across calls, messages, and paper records.',
        'Without centralized field data, logistics managers struggle to optimize fleet utilization and delivery performance.'
      ]
    },
    {
      title: 'The Space Field Platform',
      id: 'solution',
      paragraphs: [
        'Space Field provides a unified platform to manage logistics field operations from dispatch to delivery completion.',
        'Drivers and field personnel use a mobile-first application to perform vehicle inspections, document deliveries, and report issues.',
        'Structured digital forms replace paper-based logs, ensuring consistent and accurate data capture.',
        'The platform operates fully offline, enabling uninterrupted workflows in areas with limited or no connectivity.',
        'Once connectivity is restored, all data is automatically synchronized and available to operations teams.',
        'Managers gain real-time visibility into fleet status, delivery progress, and field activity.'
      ]
    },
    {
      title: 'AI-Driven Vehicle Inspections & Maintenance',
      id: 'ai-inspections',
      paragraphs: [
        'Space Field enhances fleet inspections with AI-powered visual analysis.',
        'Drivers can capture photos of vehicles during pre-trip and post-trip inspections.',
        'AI-assisted analysis helps identify signs of wear, damage, leaks, or safety issues.',
        'Early detection of vehicle issues reduces breakdowns and costly roadside failures.',
        'AI-driven insights help prioritize maintenance based on vehicle condition and usage patterns.',
        'This proactive maintenance approach improves fleet reliability and reduces downtime.'
      ]
    },
    {
      title: 'Delivery Verification & Field Accountability',
      id: 'delivery',
      paragraphs: [
        'Accurate delivery verification is essential for customer satisfaction and dispute resolution.',
        'Space Field provides visual proof of delivery through photos, signatures, and time-stamped records.',
        'Delivery data is automatically linked to routes, vehicles, and drivers.',
        'This transparency reduces disputes and improves trust with customers and partners.',
        'Supervisors can review delivery performance in near real time.',
        'Field accountability improves without adding administrative burden on drivers.'
      ]
    },
    {
      title: 'Compliance, Safety & Risk Management',
      id: 'compliance',
      paragraphs: [
        'Logistics operations must comply with safety regulations, vehicle standards, and labor requirements.',
        'Space Field ensures inspections, driver checks, and safety observations are digitally recorded.',
        'Time-stamped and geo-tagged records simplify audits and regulatory reporting.',
        'AI-powered insights help identify unsafe driving patterns or recurring compliance issues.',
        'Automated reports reduce administrative workload while strengthening risk management.',
        'Organizations maintain consistent compliance across fleets and regions.'
      ]
    },
    {
      title: 'Operational Intelligence & Performance Optimization',
      id: 'intelligence',
      paragraphs: [
        'Beyond daily operations, Space Field transforms field data into actionable logistics intelligence.',
        'Dashboards reveal trends across fleet utilization, delivery times, inspection findings, and incident reports.',
        'Managers gain early warning signals for operational bottlenecks and underperforming routes.',
        'At scale, leadership teams can benchmark performance across regions and business units.',
        'This intelligence supports better planning, cost optimization, and service reliability.',
        'Logistics organizations move from reactive problem-solving to proactive operational excellence.'
      ]
    },
    {
      title: 'The Future of Logistics Operations',
      id: 'future',
      paragraphs: [
        'The logistics industry is evolving rapidly in response to e-commerce growth, same-day delivery expectations, and supply chain volatility.',
        'Manual field processes are no longer sufficient to manage complex, high-volume operations.',
        'Space Field bridges the gap between physical logistics operations and digital intelligence.',
        'By digitizing inspections and delivery workflows, organizations gain greater control and predictability.',
        'The platform scales seamlessly from regional fleets to global logistics networks.',
        'With AI-powered field operations, logistics companies can operate more efficiently, safely, and competitively.',
        'Space Field enables logistics leaders to build resilient, future-ready supply chains.'
      ]
    }
  ]
}
,

'facility-management': {
  slug: 'facility-management',
  meta: {
    title: 'Facility Management Software & Field Operations Platform | Space Field',
    description: 'Digitize facility inspections, maintenance, and compliance with AI-powered, offline-first field operations.'
  },
  hero: {
    title: 'AI-Powered Facility Management',
    subtitle: 'Maintain safer, smarter, and more efficient buildings.',
    image: '/images/facility-management.jpg'
  },
  stats: [
    { value: '40%', label: 'Faster Issue Resolution' },
    { value: '35%', label: 'Lower Maintenance Costs' },
    { value: '100%', label: 'Paperless Inspections' }
  ],
  chapters: [
    {
      title: 'Introduction',
      id: 'intro',
      paragraphs: [
        'Facility management plays a critical role in ensuring that buildings operate safely, efficiently, and reliably every day.',
        'From commercial offices and residential complexes to hospitals, campuses, airports, and industrial facilities, facility teams manage a wide range of assets and services.',
        'These responsibilities include inspections, preventive maintenance, vendor coordination, safety compliance, and emergency response.',
        'Despite the importance of these operations, many facility management teams still rely on paper checklists, spreadsheets, and disconnected systems.',
        'Manual workflows make it difficult to maintain consistent standards across buildings and locations.',
        'Lack of real-time visibility leads to delayed issue resolution, higher operating costs, and increased safety risks.',
        'As buildings become more complex and user expectations rise, facility management organizations must modernize how field operations are managed.',
        'Space Field enables facility managers to digitize inspections, maintenance, and compliance workflows through an AI-powered, mobile-first platform.'
      ]
    },
    {
      title: 'Challenges in Facility Management',
      id: 'challenges',
      paragraphs: [
        'Facilities contain numerous interconnected systems such as HVAC, electrical, plumbing, fire safety, and security equipment.',
        'Keeping these systems operational requires frequent inspections and timely maintenance.',
        'Manual inspection processes are often inconsistent, especially across multiple shifts and sites.',
        'Reactive maintenance leads to higher repair costs, equipment downtime, and occupant dissatisfaction.',
        'Compliance requirements for safety, accessibility, and environmental standards add further complexity.',
        'Vendor and contractor oversight becomes difficult without standardized documentation and performance tracking.',
        'Without centralized field data, facility leaders struggle to prioritize work and allocate resources effectively.'
      ]
    },
    {
      title: 'The Space Field Platform',
      id: 'solution',
      paragraphs: [
        'Space Field provides a unified platform to manage facility inspections, maintenance tasks, and service workflows.',
        'Facility teams use a mobile application to conduct inspections, document issues, and record completed work.',
        'Structured digital forms replace paper checklists, ensuring consistency across buildings and teams.',
        'The platform operates fully offline, allowing inspections in basements, mechanical rooms, and remote areas.',
        'Once connectivity is restored, all data is securely synchronized and instantly available to facility managers.',
        'Automated workflows streamline task assignment, tracking, and reporting.'
      ]
    },
    {
      title: 'AI-Driven Inspections & Preventive Maintenance',
      id: 'ai-inspections',
      paragraphs: [
        'Space Field enhances facility inspections through AI-powered visual and data analysis.',
        'Photos captured during inspections are analyzed to detect leaks, corrosion, damage, and safety hazards.',
        'AI-assisted insights help identify issues before they escalate into major failures.',
        'Preventive maintenance schedules are informed by real-world inspection data.',
        'Asset histories are automatically built, providing a complete record of maintenance and condition.',
        'This proactive approach reduces emergency repairs and extends asset lifespan.',
        'Facilities operate more reliably with fewer unexpected disruptions.'
      ]
    },
    {
      title: 'Service Quality, Vendor Accountability & Transparency',
      id: 'quality',
      paragraphs: [
        'Facility management often involves coordination with multiple external vendors and service providers.',
        'Ensuring consistent service quality across vendors is a common challenge.',
        'Space Field provides clear documentation of work performed through photos and time-stamped records.',
        'Facility managers can review completed tasks remotely and verify service quality.',
        'Standardized workflows ensure vendors follow the same inspection and reporting standards.',
        'This transparency improves accountability and reduces disputes.',
        'Better vendor performance leads to improved building operations and occupant satisfaction.'
      ]
    },
    {
      title: 'Safety, Compliance & Audit Readiness',
      id: 'compliance',
      paragraphs: [
        'Facilities must comply with a wide range of safety, health, and regulatory requirements.',
        'Space Field ensures inspections, safety checks, and corrective actions are consistently documented.',
        'Time-stamped and geo-tagged records simplify audits and regulatory reviews.',
        'AI-powered insights help identify recurring safety issues and high-risk areas.',
        'Automated compliance reports reduce administrative burden.',
        'Facility managers gain confidence in meeting regulatory and internal standards.'
      ]
    },
    {
      title: 'Operational Intelligence & Portfolio Visibility',
      id: 'intelligence',
      paragraphs: [
        'Beyond daily maintenance, Space Field transforms facility data into actionable operational intelligence.',
        'Dashboards reveal trends in maintenance frequency, issue types, and response times.',
        'Managers can identify underperforming assets and prioritize capital investments.',
        'At a portfolio level, leadership teams gain visibility across multiple buildings and regions.',
        'This intelligence supports better budgeting, planning, and long-term asset management.',
        'Organizations move from reactive facility management to strategic operations.'
      ]
    },
    {
      title: 'The Future of Facility Management',
      id: 'future',
      paragraphs: [
        'Facility management is evolving toward smarter, more data-driven operations.',
        'Occupants expect safe, comfortable, and well-maintained environments.',
        'Manual field processes cannot scale to meet these expectations across large portfolios.',
        'Space Field bridges the gap between physical buildings and digital intelligence.',
        'By digitizing inspections and applying AI-driven insights, facility teams gain greater control and efficiency.',
        'The platform scales seamlessly from single buildings to enterprise portfolios.',
        'With AI-powered field operations, facility management organizations can deliver better outcomes at lower cost.',
        'Space Field empowers teams to operate facilities that are safer, smarter, and future-ready.'
      ]
    }
  ]
  },
  'real-estate': {
    slug: 'real-estate',
    meta: {
      title: 'Real Estate Property Management Software | Space Field',
      description: 'Streamline property inspections, tenant moved-ins/outs, and maintenance requests with AI-powered field software.'
    },
    hero: {
      title: 'Digital Property Operations',
      subtitle: 'Manage portfolios with precision. From acquisition due diligence to daily maintenance.',
      image: '/images/real.webp'
    },
    stats: [
      { value: '50%', label: 'Faster Turnovers' },
      { value: '100%', label: 'Digital Records' },
      { value: '24/7', label: 'Portfolio Visibility' }
    ],
    chapters: [
      {
        title: 'Introduction',
        id: 'intro',
        paragraphs: [
          'Real estate management involves a constant stream of inspections, maintenance tasks, and tenant interactions.',
          'Property managers juggle move-in/move-out reports, safety checks, and vendor coordination across distributed portfolios.',
          'Traditional paper-based inspections are slow, prone to errors, and difficult to search or analyze later.',
          'Delays in maintenance or turnover can lead to lost revenue and dissatisfied tenants.',
          'To maximize asset value and operational efficiency, modern real estate teams need digital tools that work as hard as they do.',
          'Space Field offers a comprehensive mobile platform designed specifically for real estate field operations.'
        ]
      },
      {
        title: 'Common Challenges',
        id: 'challenges',
        paragraphs: [
          'Property managers often struggle with fragmented communication between office staff, field teams, and vendors.',
          'Documenting property conditions relying on loose photos and handwritten notes leads to disputes over security deposits.',
          'Tracking the status of maintenance requests across hundreds of units is chaotic without a centralized system.',
          'Compliance risk increases when safety inspections (e.g., fire alarms, elevators) are missed or poorly documented.',
          'Turnover times drag on when make-ready works are not efficiently scheduled and verified.',
          'Lack of real-time data makes it hard to identify trends like recurring maintenance issues or vendor performance gaps.'
        ]
      },
      {
        title: 'The Space Field Solution',
        id: 'solution',
        paragraphs: [
          'Space Field centralizes all property operations into one intuitive mobile and web platform.',
          'Field staff can perform detailed move-in/move-out inspections directly on their mobile devices, capturing high-quality photos and notes.',
          'Digital templates ensure every inspection is consistent and comprehensive, leaving no room for ambiguity.',
          'Maintenance tickets can be created instantly from inspection findings, automatically notifying the right vendors or internal teams.',
          'The platform works offline, ensuring productivity even in basements or areas with poor signal.',
          'All data is synced to the cloud, giving property managers instant visibility into portfolio health.'
        ]
      },
      {
        title: 'AI-Enhanced Asset Management',
        id: 'ai',
        paragraphs: [
          'Leverage AI to automatically detect issues like water damage or mold from inspection photos.',
          'Smart algorithms can categorize asset conditions and predict future maintenance needs.',
          'Automated lease abstraction tools help extract critical dates and obligations from lease documents.',
          'Gain insights into utility usage patterns to identify efficiency improvements.',
          'Video-based virtual tours can be generated automatically to market vacant units faster.'
        ]
      },
      {
        title: 'Vendor & Tenant Coordination',
        id: 'coordination',
        paragraphs: [
          'Streamline communication with automated notifications giving tenants visibility into maintenance status.',
          'Vendors can receive digital work orders, upload proof of work, and submit invoices directly through the portal.',
          'Hold vendors accountable with time-stamped and geo-verified service logs.',
          'Reduce administrative overhead by automating routine scheduling and follow-ups.',
          'Improve tenant satisfaction with faster response times and transparent service history.'
        ]
      },
      {
        title: 'Conclusion',
        id: 'conclusion',
        paragraphs: [
          'Digital transformation is no longer optional for competitive real estate management.',
          'Space Field provides the robust, flexible foundation needed to optimize every aspect of property operations.',
          'By moving from reactive firefighting to proactive management, real estate leaders can drive higher NOI and asset value.',
          'Empower your teams with the tools they need to deliver exceptional tenant experiences and operational excellence.'
        ]
      }
    ]
  }
  ,
  'insurance': {
    slug: 'insurance',
    meta: {
      title: 'Insurance Field Inspection Software | Space Field',
      description: 'Accelerate claims processing and risk assessment with AI-powered, offline-capable field inspection software.'
    },
    hero: {
      title: 'AI-Powered Insurance Inspections',
      subtitle: 'Process claims faster with verifiable field data and AI damage assessment.',
      image: '/images/utilities.webp'
    },
    stats: [
      { value: '60%', label: 'Faster Claims' },
      { value: '40%', label: 'Reduced Fraud' },
      { value: '100%', label: 'Digital Evidence' }
    ],
    chapters: [
      {
        title: 'Introduction',
        id: 'intro',
        paragraphs: [
          'The insurance industry relies heavily on accurate, timely field data to assess risks, process claims, and underwrite policies.',
          'Field adjusters and inspectors often work in challenging environments, from disaster zones to remote properties, gathering critical evidence.',
          'Traditional paper-based inspections and disjointed photo management slow down the entire claims lifecycle.',
          'Delays in field reporting lead to customer dissatisfaction and increased operational costs.',
          'Space Field provides a digital solution tailored for insurance professionals, enabling rapid, accurate, and verifiable field data collection.',
          'By leveraging AI and offline capabilities, insurers can streamline assessments and make data-driven decisions faster.'
        ]
      },
      {
        title: 'Industry Challenges',
        id: 'challenges',
        paragraphs: [
          'Speed and accuracy are paramount in insurance, yet manual processes often create bottlenecks.',
          'Inconsistent damage documentation makes it difficult to validate claims and detect fraud.',
          'Catastrophic events (CAT) surge demand, overwhelming available field resources and exposing inefficiencies.',
          'Connectivity issues in damaged areas prevent real-time reporting, delaying critical approvals.',
          'Compliance and audit trails are often fragmented across emails, folders, and paper forms.',
          'Without structured data, insurers lack the insights needed to identify risk trends and optimize underwriting models.'
        ]
      },
      {
        title: 'The Space Field Solution',
        id: 'solution',
        paragraphs: [
          'Space Field empowers insurance teams with a robust mobile platform for all field inspection needs.',
          'Inspectors capture high-resolution photos, videos, and structured data directly in the app, even without internet access.',
          'Automated sync ensures that once connectivity is restored, claims handlers in the office receive complete digital files instantly.',
          'Standardized inspection templates ensure every adjuster follows the same protocols, reducing variance in claim outcomes.',
          'The platform supports rapid deployment to external adjusters during surge events, maintaining data quality and security.'
        ]
      },
      {
        title: 'AI-Driven Damage Assessment',
        id: 'ai-assessment',
        paragraphs: [
          'Space Field leverages AI to assist adjusters in identifying and quantifying damage.',
          'Computer vision algorithms can detect specific damage types (e.g., hail, water, fire) from site photos.',
          'AI-assisted measurements effectively gauge the scale of damage, improving estimate accuracy.',
          'Fraud detection models analyze metadata and image patterns to flag suspicious claims early.',
          'This technology augments the adjuster\'s expertise, allowing them to focus on complex decisions rather than manual data entry.'
        ]
      },
      {
        title: 'Risk Engineering & Underwriting',
        id: 'risk-underwriting',
        paragraphs: [
          'Beyond claims, Space Field supports risk engineering and pre-binding inspections.',
          'Inspectors can perform detailed risk assessments, capturing data on property condition, hazards, and safety systems.',
          'Structured data flows directly into underwriting systems, enabling more accurate risk pricing.',
          'Historical inspection data helps insurers track property changes over time and adjust policies proactively.',
          'By digitizing risk control, insurers can reduce loss ratios and improve portfolio health.'
        ]
      },
      {
        title: 'Compliance & Customer Trust',
        id: 'compliance-trust',
        paragraphs: [
          'Transparency is key to building trust with policyholders during the claims process.',
          'Space Field provides a clear, time-stamped visual record of all findings, reducing disputes over coverage.',
          'Comprehensive audit trails ensure every inspection and decision is documented for regulatory compliance.',
          'Faster turnaround times on claims lead to higher policyholder satisfaction and retention.',
          'Insurers can demonstrate a commitment to efficiency and fairness with verified digital evidence.'
        ]
      },
      {
        title: 'Future-Ready Insurance Operations',
        id: 'future',
        paragraphs: [
          'The insurance landscape is shifting towards proactive prevention and tech-enabled service.',
          'Space Field positions insurers to lead this transformation by digitizing the critical "last mile" of data collection.',
          'As IoT and aerial imagery integrate with field data, insurers will gain a holistic view of risk.',
          'The platform scales from daily claims to major catastrophe responses, providing resilience and agility.',
          'With Space Field, insurance carriers can deliver the speed and precision that modern customers demand.'
        ]
      }
    ]
  }
};
