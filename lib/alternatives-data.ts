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
};
