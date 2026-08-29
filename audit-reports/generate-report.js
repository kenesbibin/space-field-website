const fs = require('fs');
const path = require('path');

const SUMMARY_PATH = path.join(__dirname, 'mobile-audit', 'summary.json');
const REPORT_PATH = path.join(__dirname, 'MOBILE_AUDIT_REPORT.md');

const summary = JSON.parse(fs.readFileSync(SUMMARY_PATH, 'utf8'));

// Static code-level issues mapped by slug used in the audit script.
const STATIC_ISSUES = {
  'home': [
    'Uses HeroSection/Features/CallToAction with hardcoded device mockups.',
    'Uses undefined animation classes (animate-blob, hero-text-animate).',
    'app/page.tsx has overflow-x-hidden (L39).',
  ],
  'pricing': [
    'Uses CallToAction component (undefined animations, hardcoded mockups).',
    'app/pricing/page.tsx uses flex-shrink-0 (L117, L162).',
  ],
  'request-a-demo': [
    'Uses CallToAction component.',
  ],
  'app-download': [
    'app/app-download/page.tsx: fixed background element (L24), w-[50%] images, max-w-[1200px], flex-shrink-0 (L121).',
  ],
  'playstore-app-download': [
    'app/playstore-app-download/page.tsx: fixed background (L103), many absolute offsets, hidden md:/sm: elements, flex-shrink-0, max-w-[1200px].',
  ],
  'core-functions': [
    'app/core-functions/page.tsx overflow-x-hidden (L26).',
    'Uses CoreFunctionSection + SolutionDetails.',
  ],
  'visual-form-builder': [
    'app/visual-form-builder/page.tsx overflow-x-hidden (L30).',
    'Uses VisualFormBuilderSection.',
  ],
  'ai-detection': [
    'app/ai-detection/page.tsx overflow-x-hidden (L30).',
    'Uses AiDectectionSection + SolutionDetails.',
  ],
  'ai-detection-api': [
    'Uses AiDetectionApiSection (hardcoded max-w, absolute offsets).',
  ],
  'field-inspection-software': [
    'Uses SeoLandingPage template; inherits missing prose-* typography.',
  ],
  'construction-inspection-software': [
    'Uses SeoLandingPage template; inherits missing prose-* typography.',
  ],
  'site-inspection-software': [
    'Uses SeoLandingPage template; inherits missing prose-* typography.',
  ],
  'digitize-paper-forms': [
    'app/digitize-paper-forms/page.tsx overflow-x-hidden (L27).',
    'Uses DigitizePaperSection (absolute left-10/right-10 cards).',
  ],
  'reports': [
    'app/reports/page.tsx overflow-x-hidden (L26).',
    'Uses ReportSection.',
  ],
  'access-control': [
    'app/access-control/page.tsx overflow-x-hidden (L29).',
    'Uses AcessControlSection.',
  ],
  'integrations': [
    'app/integrations/page.tsx overflow-x-hidden (L45).',
    'Uses IntegrationSection.',
  ],
  'hosting': [
    'app/hosting/page.tsx overflow-x-hidden (L27).',
    'Uses HostingSection.',
  ],
  'offline-field-inspection-app': [
    'Uses OfflineModeSection.',
  ],
  'construction-software': [
    'Uses SeoLandingPage template; inherits missing prose-* typography.',
  ],
  'field-data-capture-software': [
    'Uses SeoLandingPage template; inherits missing prose-* typography.',
  ],
  'compare_procore': [
    'Hardcoded compare page layout; absolute -right-10 decorative element (L102).',
  ],
  'compare_fieldwire': [
    'Hardcoded compare page layout; absolute -right-10 decorative element (L102).',
  ],
  'alternatives_revizto': [
    'Uses AlternativesTemplate (hardcoded w-[600px] h-[600px] decorative images).',
  ],
  'industries_construction': [
    'Uses ConstructionSection + IndustryDetails; inherits missing prose-* typography and template image sizing.',
  ],
  'who-we-serve_general-contractors': [
    'Uses PersonaTemplate (hardcoded w-[600px] h-[600px] decorative images).',
  ],
  'tools_construction-cost-calculator': [
    'Uses ConstructionCostCalculator (table min-w-[600px] forces horizontal scroll).',
  ],
  'tools_labor-cost-calculator': [
    'Uses LaborCostCalculator (table min-w-[700px] forces horizontal scroll).',
  ],
  'blog_ai-in-construction': [
    'Uses BlogPostLayout; inherits missing prose-* typography.',
    'app/blog/ai-in-construction/page.tsx max-w-[1200px] (L95).',
  ],
  'glossary_field-inspection': [
    'Uses BlogPostLayout-like prose; inherits missing prose-* typography.',
  ],
  'locations_field-inspection-software-california': [
    'Uses SeoLandingPage/location template; inherits missing prose-* typography.',
    'app/locations/[slug]/page.tsx overflow-x-hidden (L119).',
  ],
  'lab_mobile-performance': [
    'Horizontal overflow detected on all viewports (scrollWidth > clientWidth).',
    'app/lab/mobile-performance/page.tsx: w-64 h-[500px] mockup, absolute -right-10.',
  ],
  'lab_privacy': [
    'app/lab/privacy/page.tsx: w-[100vw] (critical overflow risk), multiple absolute offsets.',
  ],
  'technology_computer-vision': [
    'app/technology/computer-vision/page.tsx: w-64 h-64 image.',
  ],
  'about-us': [
    'app/about-us/page.tsx: w-96 h-96 images (L74-75).',
    'Uses AboutUs component with hardcoded widths/absolute offsets.',
  ],
  'customers': [
    'app/customers/page.tsx: w-64 h-64 image (L111).',
  ],
  'social-media': [
    'app/social-media/page.tsx: w-96 h-96 images (L287-288).',
  ],
};

const GLOBAL_ISSUES = [
  'No explicit viewport export in app/layout.tsx (relying on Next.js default).',
  'Navbar mobile drawer z-30 is below fixed header z-50, so header is not dimmed.',
  'Mobile nav menu is very long; renders full Products/Industries/Contact tree.',
  'Breadcrumbs uses hardcoded mt-[72px] offset and undefined no-scrollbar utility.',
  'WhatsApp + Email fixed buttons may overlap on short viewports.',
  'SpaceCaptureCopilot popup has no mobile max-width or safe-area handling.',
  'Undefined Tailwind utilities used site-wide: no-scrollbar, animate-blob, animation-delay-2000, hero-text-animate, animate-in, rounded-2xs, bg-slate-750, custom-scrollbar, line-clamp-2.',
  '@tailwindcss/typography plugin is missing; all prose-* classes are ignored on blog/SeoLandingPage/Industry pages.',
];

const TEMPLATE_ISSUES = {
  'SeoLandingPage': 'Used by ~39 product/solution pages. Missing prose-* typography; hardcoded decorative images.',
  'BlogPostLayout': 'Used by ~23 blog posts. Missing prose-* typography.',
  'IndustryTemplate/IndustryDetails': 'Used by ~10 industry pages. Missing prose-* typography; hardcoded decorative images.',
  'PersonaTemplate': 'Used by 5 who-we-serve pages. Hardcoded decorative images.',
  'AlternativesTemplate': 'Used by alternatives pages. Hardcoded decorative images.',
  'CallToAction': 'Used by 72+ pages. Hardcoded mockups; undefined animate-blob.',
  'Features': 'Used on homepage + feature pages. w-[370px] h-[750px] phone mockup overflows narrow viewports.',
  'HeroSection': 'Homepage only. w-[280px] phone frame; undefined hero-text-animate.',
  'BeforeAfterSlider': 'Uses w-[100vw] which can trigger horizontal scroll.',
};

function avg(arr) {
  const valid = arr.filter(v => typeof v === 'number');
  return valid.length ? Math.round(valid.reduce((a, b) => a + b, 0) / valid.length) : 'N/A';
}

function formatMs(v) {
  return typeof v === 'number' ? `${Math.round(v)} ms` : 'N/A';
}

function formatCls(v) {
  return typeof v === 'number' ? v.toFixed(4) : 'N/A';
}

const perfScores = summary.map(s => s.lighthouse?.performance);
const a11yScores = summary.map(s => s.lighthouse?.accessibility);
const bpScores = summary.map(s => s.lighthouse?.bestPractices);
const seoScores = summary.map(s => s.lighthouse?.seo);

const worstPerf = [...summary].sort((a, b) => (a.lighthouse?.performance ?? 100) - (b.lighthouse?.performance ?? 100)).slice(0, 5);
const worstA11y = [...summary].sort((a, b) => (a.lighthouse?.accessibility ?? 100) - (b.lighthouse?.accessibility ?? 100)).slice(0, 5);

const lines = [];
lines.push('# Mobile Responsiveness Audit Report');
lines.push('');
lines.push(`**Generated:** ${new Date().toISOString()}`);
lines.push(`**Base URL:** http://localhost:3000 (production build)`);
lines.push(`**Pages audited:** ${summary.length}`);
lines.push('**Tools:** Lighthouse (mobile), Playwright (iPhone SE, iPhone 14, iPhone Max, iPad)');
lines.push('');

lines.push('## Executive summary');
lines.push('');
lines.push('| Metric | Average |');
lines.push('|---|---|');
lines.push(`| Performance | ${avg(perfScores)} |`);
lines.push(`| Accessibility | ${avg(a11yScores)} |`);
lines.push(`| Best Practices | ${avg(bpScores)} |`);
lines.push(`| SEO | ${avg(seoScores)} |`);
lines.push('');
lines.push('### Key findings');
lines.push('- **Performance is poor across the board** (average ~38/100). Largest Contentful Paint ranges from ~8.7s to ~21s, and Total Blocking Time is very high (up to 18.5s on the cost calculator). This is the biggest mobile UX problem.');
lines.push('- **Accessibility is generally good** (average ~91/100), but the homepage scores 85 and the cost-calculator tool scores 83 due to form/table issues.');
lines.push('- **Best Practices scores are mostly 75/100**, pulled down by browser errors logged to the console (likely CopilotKit / third-party scripts). The homepage scores 0 because Lighthouse detected a large layout-affecting issue or error; its report HTML should be inspected.');
lines.push('- **Horizontal overflow was detected only on `/lab/mobile-performance`** across all four viewports. Other pages do not show measured overflow, but several contain code patterns that are at risk.');
lines.push('- **The missing `@tailwindcss/typography` plugin** means `prose-*` classes are ignored on blog posts, product pages, and industry pages. This is a silent styling regression.');
lines.push('');

lines.push('## Worst performing pages');
lines.push('');
lines.push('### Lowest Performance scores');
lines.push('| Page | Performance | LCP | TBT |');
lines.push('|---|---|---|---|');
for (const s of worstPerf) {
  lines.push(`| ${s.url.replace('http://localhost:3000', '')} | ${s.lighthouse?.performance ?? 'N/A'} | ${formatMs(s.lighthouse?.largestContentfulPaint)} | ${formatMs(s.lighthouse?.totalBlockingTime)} |`);
}
lines.push('');
lines.push('### Lowest Accessibility scores');
lines.push('| Page | Accessibility |');
lines.push('|---|---|');
for (const s of worstA11y) {
  lines.push(`| ${s.url.replace('http://localhost:3000', '')} | ${s.lighthouse?.accessibility ?? 'N/A'} |`);
}
lines.push('');

lines.push('## Global issues (affect every page)');
lines.push('');
for (const issue of GLOBAL_ISSUES) {
  lines.push(`- ${issue}`);
}
lines.push('');

lines.push('## Template-level issues');
lines.push('');
for (const [name, desc] of Object.entries(TEMPLATE_ISSUES)) {
  lines.push(`- **${name}:** ${desc}`);
}
lines.push('');

lines.push('## Per-page audit results');
lines.push('');
for (const s of summary) {
  const route = s.url.replace('http://localhost:3000', '') || '/';
  const lhDir = path.join(__dirname, 'mobile-audit', 'lighthouse', s.slug);
  const screenshotDir = path.join(__dirname, 'mobile-audit', 'screenshots', s.slug);
  const staticIssues = STATIC_ISSUES[s.slug] || [];
  const overflowViewports = s.screenshots?.filter(x => x.overflowX).map(x => x.viewport) || [];

  lines.push(`### ${route}`);
  lines.push('');
  lines.push('| Score | Value |');
  lines.push('|---|---|');
  lines.push(`| Performance | ${s.lighthouse?.performance ?? 'N/A'} |`);
  lines.push(`| Accessibility | ${s.lighthouse?.accessibility ?? 'N/A'} |`);
  lines.push(`| Best Practices | ${s.lighthouse?.bestPractices ?? 'N/A'} |`);
  lines.push(`| SEO | ${s.lighthouse?.seo ?? 'N/A'} |`);
  lines.push(`| First Contentful Paint | ${formatMs(s.lighthouse?.firstContentfulPaint)} |`);
  lines.push(`| Largest Contentful Paint | ${formatMs(s.lighthouse?.largestContentfulPaint)} |`);
  lines.push(`| Total Blocking Time | ${formatMs(s.lighthouse?.totalBlockingTime)} |`);
  lines.push(`| Cumulative Layout Shift | ${formatCls(s.lighthouse?.cumulativeLayoutShift)} |`);
  lines.push(`| Speed Index | ${formatMs(s.lighthouse?.speedIndex)} |`);
  lines.push(`| Horizontal overflow detected | ${overflowViewports.length ? overflowViewports.join(', ') : 'None'} |`);
  lines.push('');

  if (staticIssues.length) {
    lines.push('**Static-code issues:**');
    for (const issue of staticIssues) {
      lines.push(`- ${issue}`);
    }
    lines.push('');
  }

  lines.push('**Evidence:**');
  lines.push(`- Lighthouse HTML report: \`${path.relative(path.dirname(REPORT_PATH), path.join(lhDir, 'report.html')).replace(/\\/g, '/')}\``);
  lines.push(`- Screenshots: \`${path.relative(path.dirname(REPORT_PATH), screenshotDir).replace(/\\/g, '/')}\``);
  lines.push('');
}

lines.push('## Prioritised fix plan');
lines.push('');
lines.push('### Critical (do first)');
lines.push('1. **Fix performance / Total Blocking Time.** The site is loading 10–20s LCP and multi-second TBT on mobile. Investigate large JS bundles (CopilotKit, Framer Motion), unoptimized images, and render-blocking resources. Use `next/image` sizing and priority loading for hero images.');
lines.push('2. **Install `@tailwindcss/typography`** or replace `prose-*` classes with Tailwind utility classes on blog/SeoLandingPage/Industry pages. This fixes silently broken typography on ~70+ pages.');
lines.push('3. **Fix `/lab/mobile-performance` horizontal overflow.** The page is wider than the viewport on all tested devices.');
lines.push('4. **Fix `/lab/privacy` `w-[100vw]` usage** and review `BeforeAfterSlider` `w-[100vw]` to prevent horizontal scroll.');
lines.push('');
lines.push('### High');
lines.push('5. **Add explicit viewport export** in `app/layout.tsx` for audit consistency.');
lines.push('6. **Define missing utility classes** (`no-scrollbar`, `animate-blob`, etc.) or remove them from JSX.');
lines.push('7. **Make device mockups fluid:** `Features.tsx` `w-[370px] h-[750px]`, `HeroSection.tsx` `w-[280px]`, `app/oil-and-gas-inspection-software/page.tsx` `w-[600px] h-[600px]`.');
lines.push('8. **Unify and fix the mobile menu:** raise mobile drawer z-index above the fixed header, consider truncating/expanding the long menu list, and ensure body-scroll-lock cleanup.');
lines.push('');
lines.push('### Medium');
lines.push('9. **Review fixed floating buttons** (WhatsApp/Email) for overlap on small screens and add safe-area handling for the Copilot popup.');
lines.push('10. **Make calculator tables more mobile-friendly** or clearly indicate horizontal scrolling.');
lines.push('11. **Consolidate duplicated templates** (SeoLandingPage, ComparisonTable, CTAs) so fixes propagate to all pages automatically.');
lines.push('');
lines.push('## Artifacts');
lines.push('- `audit-reports/mobile-audit/summary.json` — raw scores and screenshot metadata.');
lines.push('- `audit-reports/mobile-audit/lighthouse/<page>/report.html` — full Lighthouse HTML report per page.');
lines.push('- `audit-reports/mobile-audit/screenshots/<page>/` — iPhone SE / iPhone 14 / iPhone Max / iPad full-page screenshots.');
lines.push('- `audit-logs/run-audit-v2.log` — execution log.');
lines.push('');

fs.writeFileSync(REPORT_PATH, lines.join('\n'));
console.log(`Report written to ${REPORT_PATH}`);
