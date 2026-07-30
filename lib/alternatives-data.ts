export type AlternativesData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  competitor: string;
  tagline: string;
  intro: string;
  heroBadge: string;
  pains: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  comparisons: {
    feature: string;
    competitor: string;
    spacecapture: string;
  }[];
  faqs: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const ALTERNATIVES_DATA: Record<string, AlternativesData> = {
  iauditor: {
    slug: 'iauditor',
    competitor: 'iAuditor',
    metaTitle: 'iAuditor Alternative | SpaceCapture AI',
    metaDescription:
      'iAuditor is great for safety checklists. SpaceCapture adds AI defect detection, field inspections, and offline mobile capture. Compare features side-by-side.',
    metaKeywords: [
      'iauditor alternative',
      'safetyculture iauditor alternative',
      'iauditor vs spacecapture',
      'safety inspection app',
      'safety checklist software',
    ],
    heroBadge: 'iAuditor Alternative',
    tagline:
      'iAuditor revolutionized safety checklists. SpaceCapture is the next generation — adding AI defect detection, photo-driven workflows, and offline-first field inspections.',
    intro:
      'iAuditor (now SafetyCulture) is a beloved safety inspection tool. But for construction and field-intensive operations, you need more than digital checklists — you need AI-assisted inspections, advanced reporting, and integrations with the rest of your project stack.',
    pains: [
      {
        title: 'Manual photo review',
        desc: 'Inspectors take photos but iAuditor does not analyze them — review is still manual and slow.',
      },
      {
        title: 'Limited workflow logic',
        desc: 'iAuditor forms are basic. Complex workflows (punch lists, change orders) need more.',
      },
      {
        title: 'Cost scales fast',
        desc: 'Per-user pricing gets expensive as you add crews, especially with subcontractors.',
      },
    ],
    benefits: [
      {
        title: 'AI defect detection',
        desc: 'Every photo is auto-analyzed for cracks, corrosion, PPE, and 50+ other defect types.',
      },
      {
        title: 'Punch lists, RFIs, and change orders',
        desc: 'Full construction workflow — not just safety checklists.',
      },
      {
        title: 'Free subcontractor seats',
        desc: 'Subcontractors can use SpaceCapture for free. You only pay for core team seats.',
      },
    ],
    comparisons: [
      { feature: 'Core focus', competitor: 'Safety checklists', spacecapture: 'AI field inspections' },
      { feature: 'AI on photos', competitor: 'No', spacecapture: 'Yes (built-in)' },
      { feature: 'Punch lists', competitor: 'Limited', spacecapture: 'Full workflow' },
      { feature: 'Offline support', competitor: 'Yes', spacecapture: 'Yes' },
      { feature: 'Subcontractor seats', competitor: 'Paid', spacecapture: 'Free' },
      { feature: 'Mobile experience', competitor: 'Good', spacecapture: 'Native, AI-first' },
    ],
    faqs: [
      {
        q: 'Is SpaceCapture a SafetyCulture iAuditor replacement?',
        a: 'Yes for many teams — SpaceCapture covers all iAuditor safety use cases and adds AI defect detection, more advanced reporting, and construction-specific workflows. Teams that rely only on simple safety checklists can migrate in days.',
      },
      {
        q: 'Can I import my iAuditor templates?',
        a: 'Yes. Upload your existing iAuditor spreadsheets or PDFs and the visual form builder will digitize them. Or start from our pre-built safety and construction templates.',
      },
      {
        q: 'Do you support the same compliance frameworks (ISO 45001, OSHA)?',
        a: 'Yes. Our templates are aligned with ISO 45001, OSHA 1926, and most major frameworks. We also support custom compliance for ISO 9001, ISO 14001, and more.',
      },
    ],
    related: [
      { label: 'Procore alternative', href: '/alternatives/procore' },
      { label: 'Fieldwire alternative', href: '/alternatives/fieldwire' },
      { label: 'GoCanvas alternative', href: '/alternatives/gocanvas' },
      { label: 'SafetyCulture alternative', href: '/alternatives/safetyculture' },
      { label: 'PlanRadar alternative', href: '/alternatives/planradar' },
    ],
  },

  buildertrend: {
    slug: 'buildertrend',
    competitor: 'Buildertrend',
    metaTitle: 'Buildertrend Alternative | SpaceCapture AI',
    metaDescription:
      'Buildertrend is built for home builder scheduling. SpaceCapture adds AI field inspections, mobile-first QA/QC, and customer selections. Compare features.',
    metaKeywords: [
      'buildertrend alternative',
      'buildertrend vs spacecapture',
      'home builder software',
      'residential construction software',
      'buildertrend replacement',
    ],
    heroBadge: 'Buildertrend Alternative',
    tagline:
      'Buildertrend is the home builder standard for scheduling and customer management. SpaceCapture is the AI-native choice for the field — inspections, defect detection, and warranty tracking.',
    intro:
      'Buildertrend handles office workflows. SpaceCapture handles the physical build — from pre-pour inspection to 11-month warranty walks. Use both, or use SpaceCapture for an AI-first approach.',
    pains: [
      {
        title: 'Limited mobile field tools',
        desc: 'Buildertrend’s mobile app is functional but lacks AI assistance and modern UX.',
      },
      {
        title: 'No AI defect detection',
        desc: 'Photos taken in Buildertrend are not auto-analyzed — QC remains manual.',
      },
      {
        title: 'Customer portal is dated',
        desc: 'The customer-facing experience is functional but not best-in-class.',
      },
    ],
    benefits: [
      {
        title: 'AI defect detection',
        desc: 'Auto-flag defects in framing, drywall, paint, tile, and finish work.',
      },
      {
        title: 'Modern customer portal',
        desc: 'Beautiful client-facing portal for selections, photos, and progress.',
      },
      {
        title: 'Free tier for solo builders',
        desc: 'Use SpaceCapture for free up to a generous usage limit. Buildertrend starts at $99/mo.',
      },
    ],
    comparisons: [
      { feature: 'Field mobile app', competitor: 'Functional', spacecapture: 'AI-native' },
      { feature: 'AI on photos', competitor: 'No', spacecapture: 'Yes' },
      { feature: 'Pre-pour / pre-drywall', competitor: 'Manual forms', spacecapture: 'Smart templates' },
      { feature: 'Customer selections', competitor: 'Yes', spacecapture: 'Yes + portal' },
      { feature: 'Warranty tracking', competitor: 'Add-on', spacecapture: 'Built in' },
      { feature: 'Free tier', competitor: 'No', spacecapture: 'Yes' },
    ],
    faqs: [
      {
        q: 'Can I switch from Buildertrend?',
        a: 'Yes. Most teams migrate in 1–2 weeks. We help with templates, customer data, and training.',
      },
      {
        q: 'Is SpaceCapture better for production home builders?',
        a: 'For production builders who need cycle-time tracking across many communities, SpaceCapture’s multi-community dashboards are purpose-built. For custom-home builders, the customer portal is a major upgrade.',
      },
    ],
    related: [
      { label: 'Procore alternative', href: '/alternatives/procore' },
      { label: 'CoConstruct alternative', href: '/alternatives/coconstruct' },
    ],
  },

  smartsheet: {
    slug: 'smartsheet',
    competitor: 'Smartsheet',
    metaTitle: 'Smartsheet Alternative for Construction | SpaceCapture AI',
    metaDescription:
      'Smartsheet is a great project tracker. SpaceCapture is purpose-built for construction field teams with AI defect detection and offline mobile capture.',
    metaKeywords: [
      'smartsheet alternative',
      'smartsheet vs spacecapture',
      'construction project management',
      'smartsheet for construction',
    ],
    heroBadge: 'Smartsheet Alternative for Construction',
    tagline:
      'Smartsheet is a flexible project tracker. SpaceCapture is purpose-built for construction field teams — with AI, offline mobile, and ready-made templates.',
    intro:
      'If you use Smartsheet to manage construction projects, you already know the limits: no AI, no field app, no built-in construction workflows. SpaceCapture is the construction-first choice.',
    pains: [
      {
        title: 'Generic workflows',
        desc: 'Smartsheet is horizontal — you build every construction workflow yourself.',
      },
      {
        title: 'No mobile field app',
        desc: 'Smartsheet is web-first. The mobile experience is a fallback, not a feature.',
      },
      {
        title: 'No AI assistance',
        desc: 'Every photo, every entry, every report is still manual.',
      },
    ],
    benefits: [
      {
        title: 'Pre-built construction templates',
        desc: 'QA/QC, safety, punch lists, RFIs, change orders — ready to use on day one.',
      },
      {
        title: 'Native mobile app',
        desc: 'iOS and Android with offline-first capture, photo, and signature.',
      },
      {
        title: 'AI on every photo',
        desc: 'Defect detection, progress validation, and trend analysis built in.',
      },
    ],
    comparisons: [
      { feature: 'Construction templates', competitor: 'Build your own', spacecapture: '100+ ready' },
      { feature: 'Mobile app', competitor: 'Web-first', spacecapture: 'Native, offline-first' },
      { feature: 'AI features', competitor: 'None', spacecapture: 'Built in' },
      { feature: 'Punch lists', competitor: 'Manual sheets', spacecapture: 'Smart workflow' },
      { feature: 'Pricing', competitor: 'Per seat, per sheet', spacecapture: 'Transparent' },
    ],
    faqs: [
      {
        q: 'Can I import my Smartsheet data?',
        a: 'Yes. We support CSV import for projects, tasks, and contacts. Most teams migrate in days.',
      },
      {
        q: 'Can I keep using Smartsheet for some workflows?',
        a: 'Absolutely. Many teams use SpaceCapture for the field and Smartsheet for finance, HR, or marketing. Our public API supports both.',
      },
    ],
    related: [
      { label: 'Microsoft Project alternative', href: '/alternatives/microsoft-project' },
      { label: 'Procore alternative', href: '/alternatives/procore' },
    ],
  },

  'microsoft-project': {
    slug: 'microsoft-project',
    competitor: 'Microsoft Project',
    metaTitle: 'Microsoft Project Alternative for Construction | SpaceCapture',
    metaDescription:
      'Microsoft Project is a powerful desktop scheduler. SpaceCapture is a modern, mobile-first, AI-native construction platform. Compare features.',
    metaKeywords: [
      'microsoft project alternative',
      'ms project alternative',
      'construction scheduling software',
      'ms project vs spacecapture',
    ],
    heroBadge: 'MS Project Alternative',
    tagline:
      'Microsoft Project is the classic desktop scheduler. SpaceCapture is the modern, mobile-first, AI-native choice for construction teams.',
    intro:
      'MS Project has its place — for complex CPM schedules on the desktop. But today’s construction teams work from the field, not the office. SpaceCapture is built for that reality.',
    pains: [
      {
        title: 'Desktop-only experience',
        desc: 'MS Project is a Windows desktop app. Field teams cannot use it on a phone.',
      },
      {
        title: 'No field workflows',
        desc: 'No inspections, no daily reports, no punch lists, no AI.',
      },
      {
        title: 'Steep learning curve',
        desc: 'Powerful but complex. Most users only learn a fraction of features.',
      },
    ],
    benefits: [
      {
        title: 'Mobile-first',
        desc: 'iOS, Android, and web — every workflow runs from a phone.',
      },
      {
        title: 'AI-native',
        desc: 'Photo defect detection, progress validation, and trend analysis built in.',
      },
      {
        title: 'Modern UX',
        desc: 'Intuitive, fast, and designed for non-technical field users.',
      },
    ],
    comparisons: [
      { feature: 'Platform', competitor: 'Windows desktop', spacecapture: 'Web + iOS + Android' },
      { feature: 'Field workflows', competitor: 'None', spacecapture: 'Built in' },
      { feature: 'AI features', competitor: 'None', spacecapture: 'Built in' },
      { feature: 'CPM scheduling', competitor: 'Yes (advanced)', spacecapture: 'Yes (Gantt, deps)' },
      { feature: 'Pricing', competitor: 'Per seat, per month', spacecapture: 'Transparent' },
    ],
    faqs: [
      {
        q: 'Can I keep my MS Project schedules?',
        a: 'Yes. Import MPP files or sync via the API. Most teams use MS Project for master CPM and SpaceCapture for day-to-day field execution.',
      },
      {
        q: 'Is SpaceCapture a Gantt chart tool?',
        a: 'It has Gantt views, dependencies, and critical-path analysis — but its strength is the mobile field workflows that MS Project cannot do.',
      },
    ],
    related: [
      { label: 'Smartsheet alternative', href: '/alternatives/smartsheet' },
      { label: 'Oracle Primavera alternative', href: '/alternatives/oracle-primavera' },
    ],
  },

  'oracle-primavera': {
    slug: 'oracle-primavera',
    competitor: 'Oracle Primavera',
    metaTitle: 'Oracle Primavera Alternative for Construction | SpaceCapture',
    metaDescription:
      'Primavera P6 is the gold standard for mega-project scheduling. SpaceCapture adds the AI-native field workflows that P6 cannot do.',
    metaKeywords: [
      'oracle primavera alternative',
      'primavera p6 alternative',
      'mega project scheduling',
      'primavera vs spacecapture',
    ],
    heroBadge: 'Primavera P6 Alternative',
    tagline:
      'Primavera P6 is the scheduling gold standard for mega-projects. SpaceCapture is the AI-native field layer that turns P6 plans into real-time jobsite reality.',
    intro:
      'P6 is excellent at CPM scheduling for the office. But it cannot tell you what is actually happening on the jobsite. SpaceCapture is the mobile-first, AI-driven field layer that closes that loop.',
    pains: [
      {
        title: 'Office-only scheduling',
        desc: 'P6 lives on a scheduler’s desktop, not on a foreman’s phone.',
      },
      {
        title: 'No field workflows',
        desc: 'No inspections, no daily reports, no AI.',
      },
      {
        title: 'Heavy implementation',
        desc: 'Weeks of training and configuration before value.',
      },
    ],
    benefits: [
      {
        title: 'AI field execution',
        desc: 'Daily progress, inspections, and AI defect detection from a phone.',
      },
      {
        title: 'Real-time vs plan',
        desc: 'Compare P6’s planned progress to actual field-captured progress — in real time.',
      },
      {
        title: 'Faster time to value',
        desc: 'Run your first inspection the same day. No weeks of setup.',
      },
    ],
    comparisons: [
      { feature: 'CPM scheduling', competitor: 'Best in class (P6)', spacecapture: 'Yes (Gantt, CPM)' },
      { feature: 'Field mobile app', competitor: 'None', spacecapture: 'Native, offline-first' },
      { feature: 'AI features', competitor: 'None', spacecapture: 'Built in' },
      { feature: 'Daily reports', competitor: 'Manual', spacecapture: '1-tap from mobile' },
      { feature: 'Implementation', competitor: 'Weeks-months', spacecapture: 'Same day' },
    ],
    faqs: [
      {
        q: 'Should I replace P6 entirely?',
        a: 'No — most teams keep P6 for the master CPM and use SpaceCapture for the field. The two systems integrate via API.',
      },
      {
        q: 'Can SpaceCapture handle multi-project portfolios?',
        a: 'Yes. Multi-project dashboards with status, milestones, and KPIs across your entire portfolio.',
      },
    ],
    related: [
      { label: 'Microsoft Project alternative', href: '/alternatives/microsoft-project' },
      { label: 'Smartsheet alternative', href: '/alternatives/smartsheet' },
    ],
  },

  coconstruct: {
    slug: 'coconstruct',
    competitor: 'CoConstruct',
    metaTitle: 'CoConstruct Alternative | SpaceCapture AI',
    metaDescription:
      'CoConstruct is a custom-home builder tool. SpaceCapture is the modern, AI-native alternative for custom builders and remodelers.',
    metaKeywords: [
      'coconstruct alternative',
      'custom home builder software',
      'remodeler software',
      'coconstruct vs spacecapture',
    ],
    heroBadge: 'CoConstruct Alternative',
    tagline:
      'CoConstruct has been a custom-home builder favorite for years. SpaceCapture is the modern, AI-native choice — with mobile-first inspections, AI defect detection, and customer selections.',
    intro:
      'If you use CoConstruct for custom home or remodeling work, you already know the strengths. SpaceCapture matches those strengths and adds modern AI features that CoConstruct cannot do.',
    pains: [
      {
        title: 'No AI features',
        desc: 'CoConstruct has no AI defect detection or smart automation.',
      },
      {
        title: 'Web-first experience',
        desc: 'The mobile app is functional but not a true field tool.',
      },
      {
        title: 'Limited punch lists',
        desc: 'Punch lists are basic forms — not a smart, photo-anchored workflow.',
      },
    ],
    benefits: [
      {
        title: 'AI defect detection',
        desc: 'Auto-flag defects in framing, drywall, paint, and finish work.',
      },
      {
        title: 'Mobile-first inspections',
        desc: 'iOS and Android with offline-first capture, photo, and signature.',
      },
      {
        title: 'Customer selections portal',
        desc: 'Beautiful client-facing experience for selections, photos, and progress.',
      },
    ],
    comparisons: [
      { feature: 'AI on photos', competitor: 'No', spacecapture: 'Yes' },
      { feature: 'Mobile experience', competitor: 'Functional', spacecapture: 'AI-native' },
      { feature: 'Punch lists', competitor: 'Basic', spacecapture: 'Smart workflow' },
      { feature: 'Customer selections', competitor: 'Yes', spacecapture: 'Yes + modern portal' },
      { feature: 'Free tier', competitor: 'No', spacecapture: 'Yes' },
    ],
    faqs: [
      {
        q: 'Can I migrate from CoConstruct?',
        a: 'Yes. We help with templates, customer data, and project migration. Most teams complete the move in 2–4 weeks.',
      },
    ],
    related: [
      { label: 'Buildertrend alternative', href: '/alternatives/buildertrend' },
      { label: 'Procore alternative', href: '/alternatives/procore' },
    ],
  },

  'autodesk-bim-360': {
    slug: 'autodesk-bim-360',
    competitor: 'Autodesk BIM 360',
    metaTitle: 'Autodesk BIM 360 Alternative | SpaceCapture AI',
    metaDescription:
      'BIM 360 is the design and document hub. SpaceCapture is the AI-native field layer that brings BIM to the jobsite.',
    metaKeywords: [
      'autodesk bim 360 alternative',
      'bim 360 alternative',
      'bim field app',
      'bim vs spacecapture',
    ],
    heroBadge: 'BIM 360 / ACC Alternative',
    tagline:
      'BIM 360 / Autodesk Construction Cloud is the design hub. SpaceCapture is the AI-native field layer that brings the model to the jobsite — with mobile capture, AI defect detection, and offline access.',
    intro:
      'BIM 360 is excellent for design coordination. But it stops at the office. SpaceCapture extends the model into the field: every photo, every finding, every deviation is captured against a specific BIM element.',
    pains: [
      {
        title: 'Office-centric',
        desc: 'BIM 360 is web-first. Field teams cannot use it well on a phone.',
      },
      {
        title: 'No AI field tools',
        desc: 'No defect detection or progress validation from site photos.',
      },
      {
        title: 'Limited offline',
        desc: 'Most features require connectivity.',
      },
    ],
    benefits: [
      {
        title: 'Mobile-first',
        desc: 'iOS, Android, and web with full offline capture.',
      },
      {
        title: 'AI on BIM',
        desc: 'Compare model to as-built, flag deviations, auto-generate RFIs.',
      },
      {
        title: 'Complements BIM 360',
        desc: 'Use both: BIM 360 for design, SpaceCapture for the field.',
      },
    ],
    comparisons: [
      { feature: 'Field mobile app', competitor: 'Web-first', spacecapture: 'Native, offline-first' },
      { feature: 'AI features', competitor: 'Limited', spacecapture: 'Built in' },
      { feature: 'Offline support', competitor: 'Limited', spacecapture: 'Full' },
      { feature: 'BIM model viewing', competitor: 'Yes (design)', spacecapture: 'Yes (field)' },
      { feature: 'Pricing', competitor: 'Per user, complex tiers', spacecapture: 'Transparent' },
    ],
    faqs: [
      {
        q: 'Should I replace BIM 360?',
        a: 'No. Most customers use both: BIM 360 for design and document control, SpaceCapture for the field.',
      },
      {
        q: 'Does SpaceCapture integrate with BIM 360?',
        a: 'Yes. We support both file-based sync and ACC APIs.',
      },
    ],
    related: [
      { label: 'Procore alternative', href: '/alternatives/procore' },
      { label: 'Oracle Primavera alternative', href: '/alternatives/oracle-primavera' },
    ],
  },

  jobsite: {
    slug: 'jobsite',
    competitor: 'JobSite',
    metaTitle: 'JobSite Software Alternative | SpaceCapture AI',
    metaDescription:
      'JobSite is a basic construction management tool. SpaceCapture is the modern, AI-native alternative for GCs and field teams.',
    metaKeywords: [
      'jobsite alternative',
      'jobsite software alternative',
      'construction management software',
    ],
    heroBadge: 'JobSite Alternative',
    tagline:
      'JobSite has been a basic option for GCs. SpaceCapture is the modern, AI-native choice — with mobile field workflows, AI defect detection, and modern UX.',
    intro:
      'If you are on JobSite, you have likely outgrown it. SpaceCapture is the modern replacement with AI, mobile, and integrations.',
    pains: [
      {
        title: 'Dated UI',
        desc: 'JobSite’s interface feels a generation behind.',
      },
      {
        title: 'No mobile field app',
        desc: 'Most workflows are desktop-only.',
      },
      {
        title: 'No AI features',
        desc: 'No AI defect detection or smart automation.',
      },
    ],
    benefits: [
      {
        title: 'Modern UX',
        desc: 'Intuitive, fast, designed for non-technical field users.',
      },
      {
        title: 'Mobile-first',
        desc: 'iOS, Android, and web with full offline capture.',
      },
      {
        title: 'AI-native',
        desc: 'Photo defect detection, progress validation, and trend analysis built in.',
      },
    ],
    comparisons: [
      { feature: 'Mobile experience', competitor: 'Desktop-first', spacecapture: 'Native, offline-first' },
      { feature: 'AI features', competitor: 'None', spacecapture: 'Built in' },
      { feature: 'Modern UI', competitor: 'No', spacecapture: 'Yes' },
      { feature: 'Integrations', competitor: 'Limited', spacecapture: 'QuickBooks, Xero, Procore' },
    ],
    faqs: [
      {
        q: 'Can I migrate from JobSite?',
        a: 'Yes. Most teams complete the migration in 1–2 weeks.',
      },
    ],
    related: [
      { label: 'Procore alternative', href: '/alternatives/procore' },
    ],
  },

  plangrid: {
    slug: 'plangrid',
    competitor: 'PlanGrid',
    metaTitle: 'PlanGrid Alternative | SpaceCapture AI',
    metaDescription:
      'PlanGrid is a sheet-markup and document tool. SpaceCapture adds AI field inspections, native mobile capture, and modern reporting.',
    metaKeywords: [
      'plangrid alternative',
      'plangrid vs spacecapture',
      'drawing markup software',
      'construction document management',
    ],
    heroBadge: 'PlanGrid Alternative',
    tagline:
      'PlanGrid pioneered sheet markup on iPad. SpaceCapture is the next generation — combining drawing markup with AI field inspections, native mobile, and modern reporting.',
    intro:
      'If you are still on PlanGrid, you already know the limitations. SpaceCapture combines drawing markup with full field inspection and AI features.',
    pains: [
      {
        title: 'Acquired by Autodesk',
        desc: 'PlanGrid is now part of Autodesk — pricing and roadmap are uncertain.',
      },
      {
        title: 'Limited inspections',
        desc: 'PlanGrid does sheets, not inspections or punch lists.',
      },
      {
        title: 'No AI',
        desc: 'No AI defect detection or smart automation.',
      },
    ],
    benefits: [
      {
        title: 'AI defect detection',
        desc: 'Auto-flag defects from site photos.',
      },
      {
        title: 'Modern UX',
        desc: 'Intuitive, fast, designed for non-technical field users.',
      },
      {
        title: 'Full construction workflows',
        desc: 'Inspections, punch lists, RFIs, change orders in one app.',
      },
    ],
    comparisons: [
      { feature: 'Sheet markup', competitor: 'Yes', spacecapture: 'Yes + native' },
      { feature: 'AI features', competitor: 'None', spacecapture: 'Built in' },
      { feature: 'Field inspections', competitor: 'Limited', spacecapture: 'Full workflow' },
      { feature: 'Punch lists', competitor: 'Basic', spacecapture: 'Smart' },
      { feature: 'Autodesk integration', competitor: 'Native', spacecapture: 'API' },
    ],
    faqs: [
      {
        q: 'Can I keep my PlanGrid sheets?',
        a: 'Yes. Import via PDF or sync via ACC / BIM 360. Most teams migrate in days.',
      },
    ],
    related: [
      { label: 'Procore alternative', href: '/alternatives/procore' },
      { label: 'Autodesk BIM 360 alternative', href: '/alternatives/autodesk-bim-360' },
    ],
  },

  buildern: {
    slug: 'buildern',
    competitor: 'Buildern',
    metaTitle: 'Buildern Alternative | SpaceCapture AI',
    metaDescription:
      'Buildern is a home builder project management tool. SpaceCapture is the AI-native alternative for home builders with mobile inspections.',
    metaKeywords: [
      'buildern alternative',
      'home builder software',
      'buildern vs spacecapture',
    ],
    heroBadge: 'Buildern Alternative',
    tagline:
      'Buildern is a solid home builder tool. SpaceCapture is the AI-native alternative — with mobile-first inspections, AI defect detection, and modern customer portal.',
    intro:
      'If you are considering Buildern, also consider SpaceCapture — modern UX, AI features, and a free tier.',
    pains: [
      {
        title: 'No AI features',
        desc: 'Buildern has no AI defect detection or smart automation.',
      },
      {
        title: 'Web-first',
        desc: 'Mobile experience is functional but not best-in-class.',
      },
    ],
    benefits: [
      {
        title: 'AI defect detection',
        desc: 'Auto-flag defects in framing, drywall, paint, tile, and finish work.',
      },
      {
        title: 'Mobile-first',
        desc: 'iOS, Android, and web with full offline capture.',
      },
      {
        title: 'Free tier',
        desc: 'Generous free plan for solo builders.',
      },
    ],
    comparisons: [
      { feature: 'AI on photos', competitor: 'No', spacecapture: 'Yes' },
      { feature: 'Mobile experience', competitor: 'Functional', spacecapture: 'AI-native' },
      { feature: 'Free tier', competitor: 'No', spacecapture: 'Yes' },
    ],
    faqs: [
      {
        q: 'How does SpaceCapture compare to Buildern?',
        a: 'Buildern focuses on home builder project management. SpaceCapture adds AI field inspections, modern mobile UX, and a free tier.',
      },
    ],
    related: [
      { label: 'Buildertrend alternative', href: '/alternatives/buildertrend' },
      { label: 'CoConstruct alternative', href: '/alternatives/coconstruct' },
    ],
  },

  revizto: {
    slug: 'revizto',
    competitor: 'Revizto',
    metaTitle: 'Revizto Alternative | SpaceCapture',
    metaDescription:
      'Looking for a Revizto alternative? SpaceCapture offers mobile-first field inspections, AI defect detection, and offline capability for construction teams.',
    metaKeywords: [
      'revizto alternative',
      'alternative to revizto',
      'revizto vs spacecapture',
      'switch from revizto',
    ],
    heroBadge: 'Revizto Alternative',
    tagline:
      'Revizto excels at BIM coordination and issue tracking. But if your field team needs fast inspections, AI defect detection, and offline capability — SpaceCapture is the specialized tool they actually want to use.',
    intro:
      'We hear from construction teams every week: "We use Revizto for BIM coordination, but our field team struggles with the mobile experience." SpaceCapture solves this by being the dedicated field execution layer that works the way your team actually works — fast, mobile-first, and offline-capable.',
    pains: [
      {
        title: 'Mobile experience is limited',
        desc: "Revizto's mobile app is designed for BIM coordination, not field inspections. Field teams struggle with slow performance and limited offline capability.",
      },
      {
        title: 'No AI defect detection',
        desc: 'Your inspectors take photos but have to manually identify and document every issue. No automation, no intelligence — just more work for your field team.',
      },
      {
        title: 'Complex setup for field teams',
        desc: 'Revizto requires BIM integration and technical setup that\'s overkill for simple field inspections. Your field team needs something that works out of the box.',
      },
    ],
    benefits: [
      {
        title: '5-minute inspections, not 50',
        desc: 'Purpose-built forms designed for speed. Your field team completes inspections in minutes, not hours.',
      },
      {
        title: 'AI catches what humans miss',
        desc: 'Our AI detects cracks, corrosion, and defects automatically from photos — saving time and reducing costly rework.',
      },
      {
        title: 'Works offline, syncs later',
        desc: 'Full offline capability means your field team never stops working, even in basements, tunnels, or remote sites.',
      },
      {
        title: 'Real-time dashboards',
        desc: 'See project status instantly — no waiting for weekly reports. Office and field teams stay in sync.',
      },
      {
        title: '5-minute setup, no training',
        desc: 'Download the app, create a project, start inspecting. No weeks of onboarding or expensive consultants.',
      },
      {
        title: 'Free tier, forever',
        desc: 'Start with our free plan. No credit card, no time limit. Upgrade when you need more.',
      },
    ],
    comparisons: [
      { feature: 'Field inspections', competitor: 'Basic mobile app', spacecapture: '5-minute inspections with AI' },
      { feature: 'BIM integration', competitor: 'Deep BIM coordination', spacecapture: 'Field data capture (complements BIM)' },
      { feature: 'AI defect detection', competitor: 'Not available', spacecapture: 'Built-in, auto-detects cracks & corrosion' },
      { feature: 'Offline capability', competitor: 'Limited offline', spacecapture: 'Full offline with sync' },
      { feature: 'Setup time', competitor: 'Days/weeks with BIM setup', spacecapture: '5 minutes, no training' },
      { feature: 'Daily reports', competitor: 'Manual compilation', spacecapture: 'Auto-generated from field data' },
      { feature: 'Pricing', competitor: 'Per user, often expensive', spacecapture: 'Per user, free tier available' },
    ],
    faqs: [
      {
        q: 'Why switch from Revizto to SpaceCapture?',
        a: 'Teams switch because their field crews need fast inspections and AI defect detection — not BIM coordination. SpaceCapture is purpose-built for field execution, while Revizto excels at BIM clash detection and issue tracking.',
      },
      {
        q: 'Can I use SpaceCapture alongside Revizto?',
        a: 'Absolutely. Many teams use Revizto for BIM coordination and design issues, while using SpaceCapture for field inspections, daily reports, and defect documentation. They complement each other well.',
      },
      {
        q: 'What does SpaceCapture do better than Revizto?',
        a: 'Field execution. SpaceCapture excels at fast inspections, AI-powered defect detection, offline capability, and real-time field-to-office sync. Revizto is stronger for BIM coordination and design issue tracking.',
      },
      {
        q: 'Is SpaceCapture really free?',
        a: 'Yes. Our free tier includes core inspection and reporting features — no credit card required, no time limit. Upgrade to paid plans for advanced features like multi-project dashboards and AI detection.',
      },
      {
        q: 'How long does migration take?',
        a: 'Most teams are up and running in 5 minutes. Download the app, create your first project, and start inspecting. No data migration needed — SpaceCapture is a field execution tool, not a BIM platform.',
      },
    ],
    related: [
      { label: 'Procore alternative', href: '/alternatives/procore' },
      { label: 'SafetyCulture alternative', href: '/alternatives/safetyculture' },
      { label: 'FieldWire alternative', href: '/alternatives/fieldwire' },
      { label: 'GoCanvas alternative', href: '/alternatives/gocanvas' },
    ],
  },

  fieldwire: {
    slug: 'fieldwire',
    competitor: 'Fieldwire',
    metaTitle: 'Fieldwire Alternative for Small Teams | SpaceCapture',
    metaDescription:
      'The right Fieldwire alternative for small construction teams. Simple pricing, zero learning curve, and powerful AI features without the enterprise bloat.',
    metaKeywords: [
      'fieldwire alternative',
      'alternative to fieldwire',
      'fieldwire vs spacecapture',
      'switch from fieldwire',
    ],
    heroBadge: 'Fieldwire Alternative',
    tagline:
      'Fieldwire is great for skyscrapers. But if you are a specialty sub or a small general contractor, you need speed, not complex plan management.',
    intro:
      'Fieldwire is built for enterprise GCs with complex plan management needs. SpaceCapture is built for small teams that need fast inspections, AI defect detection, and simple pricing without the enterprise bloat.',
    pains: [
      {
        title: 'Enterprise-focused pricing',
        desc: 'Fieldwire charges per user with tiered features. Small teams pay for capabilities they never use.',
      },
      {
        title: 'Complex setup',
        desc: 'Fieldwire requires plan uploads and configuration before you can start. Small teams need to inspect on day one.',
      },
      {
        title: 'No AI defect detection',
        desc: 'Fieldwire manages plans and tasks but does not analyze photos for defects or safety issues.',
      },
    ],
    benefits: [
      {
        title: 'Simple flat-rate pricing',
        desc: 'One price, all features. No per-user fees, no tiered feature gates.',
      },
      {
        title: 'Instant setup',
        desc: 'Download the app, create a project, start inspecting. No plan uploads required.',
      },
      {
        title: 'AI defect detection',
        desc: 'Every photo is auto-analyzed for cracks, corrosion, PPE compliance, and 50+ defect types.',
      },
      {
        title: 'Mobile-first design',
        desc: 'Built for phones, not adapted from desktop. Fast, intuitive, works offline.',
      },
      {
        title: 'Direct WhatsApp support',
        desc: 'Talk to a real person, not a ticket system. Get answers in minutes, not days.',
      },
    ],
    comparisons: [
      { feature: 'Target audience', competitor: 'Enterprise / Large GCs', spacecapture: 'Small teams & subs' },
      { feature: 'Setup time', competitor: 'Complex (plans required)', spacecapture: 'Instant (start scanning)' },
      { feature: 'Pricing model', competitor: 'Per user / tiered features', spacecapture: 'Simple flat rate' },
      { feature: 'Plan views', competitor: 'Heavy PDF rendering', spacecapture: 'Fast mobile-first view' },
      { feature: 'Task management', competitor: 'Ticket-based', spacecapture: 'Visual & AI-driven' },
      { feature: 'Support', competitor: 'Ticket system', spacecapture: 'Direct WhatsApp support' },
    ],
    faqs: [
      {
        q: 'Why switch from Fieldwire to SpaceCapture?',
        a: 'Small teams switch because Fieldwire is built for enterprise GCs with complex plan management. SpaceCapture is built for small teams that need fast inspections, simple pricing, and AI defect detection.',
      },
      {
        q: 'Can I use SpaceCapture alongside Fieldwire?',
        a: 'Absolutely. Many teams use Fieldwire for plan management and complex projects, while using SpaceCapture for fast field inspections and AI defect detection.',
      },
      {
        q: 'What does SpaceCapture do better than Fieldwire?',
        a: 'Field execution. SpaceCapture excels at fast inspections, AI-powered defect detection, offline capability, and simple pricing. Fieldwire is stronger for plan management and enterprise project coordination.',
      },
      {
        q: 'Is SpaceCapture really free?',
        a: 'Yes. Our free tier includes core inspection and reporting features — no credit card required, no time limit. Upgrade to paid plans for advanced features.',
      },
    ],
    related: [
      { label: 'Procore alternative', href: '/alternatives/procore' },
      { label: 'SafetyCulture alternative', href: '/alternatives/safetyculture' },
      { label: 'GoCanvas alternative', href: '/alternatives/gocanvas' },
    ],
  },

  gocanvas: {
    slug: 'gocanvas',
    competitor: 'GoCanvas',
    metaTitle: 'GoCanvas Alternative | SpaceCapture AI',
    metaDescription:
      'Eliminate form fatigue. SpaceCapture replaces manual typing with AI visual capture. The right GoCanvas alternative for speed and accuracy.',
    metaKeywords: [
      'gocanvas alternative',
      'alternative to gocanvas',
      'gocanvas vs spacecapture',
      'switch from gocanvas',
    ],
    heroBadge: 'GoCanvas Alternative',
    tagline:
      'GoCanvas improved on paper, but it did not solve the core problem: Manual data entry is slow, error-prone, and hated by field workers.',
    intro:
      'Form fatigue leads to bad data. When inspectors are tired of typing, they start copy-pasting or entering minimum viable data. SpaceCapture removes the keyboard from the equation with visual-first automation that creates records 10x faster.',
    pains: [
      {
        title: 'Form fatigue and burnout',
        desc: 'Inspectors spend more time typing than inspecting. The more forms they fill out, the worse the data gets.',
      },
      {
        title: 'Manual data entry',
        desc: 'GoCanvas requires typing detailed descriptions, selecting dropdowns, and filling fields manually. It is slow and error-prone.',
      },
      {
        title: 'No AI assistance',
        desc: 'GoCanvas does not analyze photos or auto-detect defects. Every observation must be manually documented.',
      },
    ],
    benefits: [
      {
        title: 'Visual AI capture',
        desc: 'Point your camera and let AI auto-fill the form based on what it sees. No typing required.',
      },
      {
        title: 'Voice-to-text',
        desc: 'Speak your observations and watch them transcribed instantly into the form.',
      },
      {
        title: 'AI defect detection',
        desc: 'Every photo is auto-analyzed for cracks, corrosion, PPE compliance, and 50+ defect types.',
      },
      {
        title: 'PDF template import',
        desc: 'Upload your existing GoCanvas PDFs and our AI rebuilds the logic, fields, and tables automatically.',
      },
      {
        title: 'Context-aware forms',
        desc: 'Forms adapt based on what the AI sees — not just linear if/then rules.',
      },
    ],
    comparisons: [
      { feature: 'Data entry method', competitor: 'Heavy typing required', spacecapture: 'Visual & voice-to-text' },
      { feature: 'Inspector experience', competitor: 'Form fatigue & burnout', spacecapture: 'Streamlined & fast' },
      { feature: 'Defect classification', competitor: 'Manual dropdowns', spacecapture: 'Auto-detected by AI' },
      { feature: 'Rich media support', competitor: 'Photo attachments only', spacecapture: 'AR overlays & measurements' },
      { feature: 'Workflow logic', competitor: 'Linear if/then rules', spacecapture: 'Context-aware adaptation' },
      { feature: 'Cost model', competitor: 'Per user / per form fees', spacecapture: 'Value-based pricing' },
    ],
    faqs: [
      {
        q: 'Why switch from GoCanvas to SpaceCapture?',
        a: 'Teams switch because form fatigue leads to bad data. SpaceCapture removes the keyboard with visual AI capture, voice-to-text, and auto-defect detection — creating records 10x faster than manual typing.',
      },
      {
        q: 'Can I import my GoCanvas templates?',
        a: 'Yes. Upload your existing GoCanvas PDFs and our Vision Engine reads the PDF and rebuilds the logic, fields, and tables automatically. Most teams migrate in days.',
      },
      {
        q: 'What does SpaceCapture do better than GoCanvas?',
        a: 'Speed and accuracy. SpaceCapture uses multimodal AI to capture data visually, while GoCanvas relies on manual typing. SpaceCapture also adds AI defect detection that GoCanvas does not have.',
      },
      {
        q: 'Is SpaceCapture really free?',
        a: 'Yes. Our free tier includes core inspection and reporting features — no credit card required, no time limit.',
      },
    ],
    related: [
      { label: 'SafetyCulture alternative', href: '/alternatives/safetyculture' },
      { label: 'FieldWire alternative', href: '/alternatives/fieldwire' },
      { label: 'Procore alternative', href: '/alternatives/procore' },
    ],
  },

  procore: {
    slug: 'procore',
    competitor: 'Procore',
    metaTitle: 'Procore Alternative | SpaceCapture AI',
    metaDescription:
      'Procore handles the office. SpaceCapture handles the field. Switch to the specialized tool for field data capture, visual automation, and defects.',
    metaKeywords: [
      'procore alternative',
      'alternative to procore',
      'procore vs spacecapture',
      'switch from procore',
    ],
    heroBadge: 'Procore Alternative',
    tagline:
      'Do not force a Project Management tool to do Field Management work. Give your inspectors the specialized AI tool they need to capture reality fast.',
    intro:
      'We hear from construction teams every week: "We use Procore for office management, but our field team hates using it on-site." SpaceCapture solves this by being the dedicated field execution layer that works the way your team actually works — fast, mobile-first, and offline-capable.',
    pains: [
      {
        title: 'The ERP trap',
        desc: 'Procore is great for executives — dashboards, budgets, and schedules look great from the office. But field teams struggle with complex menus, endless tapping, and slow syncing.',
      },
      {
        title: 'No AI defect detection',
        desc: 'Procore manages photos but does not analyze them. Your inspectors still have to manually identify and document every issue.',
      },
      {
        title: 'Expensive per-user pricing',
        desc: 'Procore charges based on construction volume or per-user fees. Small teams and subcontractors get priced out quickly.',
      },
    ],
    benefits: [
      {
        title: 'Field-first design',
        desc: 'Built for inspectors wearing gloves in sunlight. Large buttons, minimal typing, works 100% offline.',
      },
      {
        title: 'AI defect detection',
        desc: 'Every photo is auto-analyzed for cracks, corrosion, PPE compliance, and 50+ defect types.',
      },
      {
        title: 'Complements Procore',
        desc: 'Use both: Procore for office management, SpaceCapture for field execution. They integrate via API.',
      },
      {
        title: 'Simple pricing',
        desc: 'Per-user pricing that does not scale with construction volume. Free tier available.',
      },
      {
        title: 'Instant setup',
        desc: 'Download the app, create a project, start inspecting. No months of configuration.',
      },
    ],
    comparisons: [
      { feature: 'Core focus', competitor: 'Office & project mgmt', spacecapture: 'Field execution & capture' },
      { feature: 'Data entry speed', competitor: 'Slow (forms & menus)', spacecapture: 'Instant (visual AI)' },
      { feature: 'Defect detection', competitor: 'Manual photos only', spacecapture: 'AI auto-detection' },
      { feature: 'Implementation time', competitor: 'Months (heavy config)', spacecapture: 'Days (plug & play)' },
      { feature: 'Cost model', competitor: '% of construction vol.', spacecapture: 'Simple user/site lic.' },
      { feature: 'Offline capabilities', competitor: 'Limited sync', spacecapture: 'Full edge processing' },
    ],
    faqs: [
      {
        q: 'Why switch from Procore to SpaceCapture?',
        a: 'Teams switch because Procore is an office tool forced into field use. SpaceCapture is purpose-built for field execution — fast inspections, AI defect detection, offline capability, and simple pricing.',
      },
      {
        q: 'Can I use SpaceCapture alongside Procore?',
        a: 'Absolutely. Most customers use both: Procore for office management and project tracking, SpaceCapture for field inspections and defect documentation. They complement each other well.',
      },
      {
        q: 'What does SpaceCapture do better than Procore?',
        a: 'Field execution. SpaceCapture excels at fast inspections, AI-powered defect detection, offline capability, and real-time field-to-office sync. Procore is stronger for project management, budgeting, and contract administration.',
      },
      {
        q: 'Is SpaceCapture really free?',
        a: 'Yes. Our free tier includes core inspection and reporting features — no credit card required, no time limit.',
      },
      {
        q: 'How long does migration take?',
        a: 'Most teams are up and running in 5 minutes. Download the app, create your first project, and start inspecting. No data migration needed — SpaceCapture is a field execution tool, not a project management system.',
      },
    ],
    related: [
      { label: 'SafetyCulture alternative', href: '/alternatives/safetyculture' },
      { label: 'FieldWire alternative', href: '/alternatives/fieldwire' },
      { label: 'GoCanvas alternative', href: '/alternatives/gocanvas' },
    ],
  },

  safetyculture: {
    slug: 'safetyculture',
    competitor: 'SafetyCulture',
    metaTitle: 'SafetyCulture Alternative | SpaceCapture AI',
    metaDescription:
      'Stop manually filling specialized forms. Switch to SpaceCapture for automated defect detection, real-time risk quantification, and generative checklists.',
    metaKeywords: [
      'safetyculture alternative',
      'iauditor alternative',
      'safetyculture vs spacecapture',
      'switch from safetyculture',
    ],
    heroBadge: 'SafetyCulture Alternative',
    tagline:
      'SafetyCulture digitized your forms. SpaceCapture automates your decisions. Stop paying for static digital paper — upgrade to AI that sees defects and quantifies risks.',
    intro:
      'Digital forms are just paper on a screen. They rely entirely on the workers diligence. If a worker is tired, rushing, or inexperienced, a checklist on a screen will not stop a mistake. SpaceCapture uses Computer Vision to validate reality.',
    pains: [
      {
        title: 'Static templates',
        desc: 'SafetyCulture forms are digital paper. They do not adapt to what the AI sees or learn from past inspections.',
      },
      {
        title: 'Subjective severity grading',
        desc: 'Severity ratings depend on the inspector experience. Two inspectors can rate the same defect differently.',
      },
      {
        title: 'Pencil-whipping is easy',
        desc: 'Tired inspectors can check boxes without actually inspecting. There is no visual verification required.',
      },
    ],
    benefits: [
      {
        title: 'AI defect detection',
        desc: 'Computer Vision validates reality. It measures corrosion, checks PPE, and verifies protocols — not just asks "Is this safe?"',
      },
      {
        title: 'ISO standard grading',
        desc: 'Severity is quantified using ISO 4628 standards, not subjective opinion. Consistent across all inspectors.',
      },
      {
        title: 'Generative checklists',
        desc: 'Forms adapt based on what the AI sees. Context-aware, not static templates.',
      },
      {
        title: 'Visual proof required',
        desc: 'Completion requires photo evidence. No more pencil-whipping.',
      },
      {
        title: 'Full offline AI',
        desc: 'AI processing happens on-device. Works in basements, tunnels, and remote sites with no signal.',
      },
      {
        title: 'PDF template import',
        desc: 'Upload your existing SafetyCulture templates and our AI rebuilds them automatically.',
      },
    ],
    comparisons: [
      { feature: 'Data capture method', competitor: 'Manual typing & tapping', spacecapture: 'Visual AI automation' },
      { feature: 'Checklist type', competitor: 'Static templates', spacecapture: 'Generative & context-aware' },
      { feature: 'Defect detection', competitor: 'Human eye dependent', spacecapture: 'Computer Vision verification' },
      { feature: 'Severity grading', competitor: 'Subjective opinion', spacecapture: 'ISO standard quantification' },
      { feature: 'Offline capability', competitor: 'Basic form caching', spacecapture: 'Full edge AI processing' },
      { feature: 'Setup time', competitor: 'Weeks of template building', spacecapture: 'Instant via PDF import' },
    ],
    faqs: [
      {
        q: 'Why switch from SafetyCulture to SpaceCapture?',
        a: 'Teams switch because digital forms are just paper on a screen. SpaceCapture adds AI that validates reality — measuring corrosion, checking PPE, and quantifying risks using ISO standards.',
      },
      {
        q: 'Can I import my SafetyCulture templates?',
        a: 'Yes. Upload your existing SafetyCulture spreadsheets or PDFs and our visual form builder will digitize them. Or start from our pre-built construction templates.',
      },
      {
        q: 'What does SpaceCapture do better than SafetyCulture?',
        a: 'Active AI vs static forms. SpaceCapture uses Computer Vision to validate reality, quantify risks, and prevent failures. SafetyCulture digitizes forms but relies on human diligence.',
      },
      {
        q: 'Is SpaceCapture really free?',
        a: 'Yes. Our free tier includes core inspection and reporting features — no credit card required, no time limit.',
      },
      {
        q: 'Do you support the same compliance frameworks?',
        a: 'Yes. Our templates are aligned with ISO 45001, OSHA 1926, and most major frameworks. We also support custom compliance for ISO 9001, ISO 14001, and more.',
      },
    ],
    related: [
      { label: 'Procore alternative', href: '/alternatives/procore' },
      { label: 'FieldWire alternative', href: '/alternatives/fieldwire' },
      { label: 'GoCanvas alternative', href: '/alternatives/gocanvas' },
    ],
  },
};
