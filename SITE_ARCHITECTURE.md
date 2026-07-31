# Site Architecture

> **Project:** SpaceCapture (spacecapture.ai)
> **Goal:** Plan page structure, URLs, internal linking
> **Current Pages:** 88 routes
> **Created:** July 29, 2026
> **Skill Used:** site-architecture

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Current Pages | 88 routes |
| Page Depth | 2-3 levels (good) |
| Site Type | Hybrid SaaS + Content |
| Primary Goal | Conversions (demo requests) |
| Secondary Goal | SEO traffic |

---

## Current Site Structure

### Existing Pages (88 routes)

```
Homepage (/)
├── Solutions
│   ├── Construction Software (/construction-software)
│   ├── BIM Construction Software (/bim-construction-software)
│   ├── Field Inspection Software (/field-inspection-software)
│   ├── Building Inspection Software (/building-inspection-software)
│   ├── Construction Management Software (/construction-management-software)
│   ├── Site Inspection Software (/site-inspection-software)
│   └── [More solutions...]
├── Industries
│   ├── Construction (/industries/construction)
│   └── [More industries...]
├── Alternatives
│   ├── Procore (/alternatives/procore)
│   ├── Fieldwire (/alternatives/fieldwire)
│   └── [More competitors...]
├── Blog (/blog)
├── Pricing (/pricing)
├── Resources
│   ├── Glossary (/glossary)
│   ├── FAQ (/faq)
│   └── Tools (/tools)
├── About Us (/about-us)
├── Contact (/request-a-demo)
└── Trust (/trust)
```

---

## New Page Hierarchy (Proposed)

### ASCII Tree Format

```
Homepage (/)
├── Solutions
│   ├── Construction Software (/construction-software)
│   ├── Construction Management Software (/construction-management-software)
│   ├── BIM Software (/bim-construction-software)
│   ├── Field Inspection Software (/field-inspection-software)
│   ├── Project Management Software (/project-management-software)
│   ├── Contractor Management Software (/contractor-management-software)
│   └── Scheduling Software (/construction-scheduling-software)
├── Industries
│   ├── Construction (/industries/construction)
│   ├── Real Estate (/industries/real-estate)
│   └── Oil & Gas (/industries/oil-and-gas)
├── Alternatives
│   ├── Procore (/alternatives/procore)
│   ├── Buildertrend (/alternatives/buildertrend)
│   ├── Revizto (/alternatives/revizto)
│   └── [More competitors...]
├── Blog (/blog)
│   ├── BIM Guide (/blog/what-is-bim)
│   ├── Construction Software Guide (/blog/construction-software-guide)
│   └── [More blog posts...]
├── Pricing (/pricing)
├── Resources
│   ├── Glossary (/glossary)
│   ├── FAQ (/faq)
│   └── Tools (/tools)
├── About Us (/about-us)
├── Request a Demo (/request-a-demo)
└── Trust (/trust)
```

---

## New Pages to Create

### From Phase 1 Keyword Strategy

| Page URL | Target Keywords | Volume | Priority |
|----------|-----------------|--------|----------|
| `/construction-management-software` | construction management software | 5,000 | HIGH |
| `/bim-construction-software` | bim software | 5,000 | HIGH |
| `/project-management-software` | project management software | 50,000 | HIGH |
| `/contractor-management-software` | contractor management software | 5,000 | HIGH |
| `/field-inspection-software` | field inspection software | - | HIGH |
| `/construction-scheduling-software` | construction scheduling software | 500 | MEDIUM |

---

## URL Structure

### Design Principles Applied

1. **Readable by humans** - `/construction-management-software` not `/cms/123`
2. **Hyphens, not underscores** - `/bim-software` not `/bim_software`
3. **Reflect the hierarchy** - URL path matches site structure
4. **Consistent trailing slash policy** - Without trailing slash
5. **Lowercase always** - All URLs lowercase
6. **Short but descriptive** - `/construction-software` not `/software-for-construction-companies`

### URL Patterns by Page Type

| Page Type | Pattern | Example |
|-----------|---------|---------|
| Homepage | `/` | `spacecapture.ai` |
| Solution page | `/{solution}` | `/construction-software` |
| Industry page | `/industries/{industry}` | `/industries/construction` |
| Alternative page | `/alternatives/{competitor}` | `/alternatives/procore` |
| Blog post | `/blog/{slug}` | `/blog/what-is-bim` |
| Pricing | `/pricing` | `/pricing` |
| Glossary | `/glossary/{term}` | `/glossary/bim` |
| FAQ | `/faq` | `/faq` |

---

## Navigation Design

### Header Navigation (4-7 items max)

```
┌─────────────────────────────────────────────────────────────┐
│ Logo    Solutions ▾   Industries ▾   Pricing   Blog   [CTA]│
└─────────────────────────────────────────────────────────────┘
```

**Header Items:**
1. **Solutions** (dropdown)
   - Construction Software
   - BIM Software
   - Field Inspection
   - Project Management
   - Contractor Management
2. **Industries** (dropdown)
   - Construction
   - Real Estate
   - Oil & Gas
3. **Pricing** (/pricing)
4. **Blog** (/blog)
5. **Request a Demo** (/request-a-demo) - CTA button

### Footer Navigation

```
┌─────────────────────────────────────────────────────────────┐
│ Product          Resources        Company        Legal      │
│ ├─ Solutions     ├─ Blog          ├─ About Us    ├─ Privacy │
│ ├─ Pricing       ├─ Glossary      ├─ Careers     └─ Terms   │
│ ├─ Integrations  ├─ FAQ           └─ Contact               │
│ └─ Changelog     └─ Tools                                   │
└─────────────────────────────────────────────────────────────┘
```

### Breadcrumbs

```
Home > Solutions > Construction Management Software
Home > Blog > What is BIM?
Home > Alternatives > Procore
```

---

## Internal Linking Plan

### Hub-and-Spoke Model

**Hub 1: Construction Software**
```
Hub: /construction-software
├── Spoke: /construction-management-software
├── Spoke: /construction-scheduling-software
├── Spoke: /contractor-management-software
└── Spoke: /blog/construction-software-guide
```

**Hub 2: BIM**
```
Hub: /bim-construction-software
├── Spoke: /blog/what-is-bim
├── Spoke: /glossary/bim
└── Spoke: /blog/bim-vs-traditional
```

**Hub 3: Field Inspection**
```
Hub: /field-inspection-software
├── Spoke: /building-inspection-software
├── Spoke: /site-inspection-software
└── Spoke: /blog/field-inspection-checklist
```

### Cross-Section Links

| From | To | Anchor Text |
|------|----|-------------|
| /construction-software | /blog/construction-software-guide | "Learn more about construction software" |
| /bim-construction-software | /blog/what-is-bim | "What is BIM?" |
| /field-inspection-software | /blog/field-inspection-checklist | "Download our checklist" |
| /pricing | /request-a-demo | "See it in action" |
| /blog/what-is-bim | /bim-construction-software | "Try our BIM software" |

### Internal Linking Rules

1. **No orphan pages** - Every page has at least one internal link
2. **Descriptive anchor text** - "our BIM software" not "click here"
3. **5-10 internal links per 1000 words** - Approximate guideline
4. **Link to important pages more often** - Homepage, Pricing, Demo
5. **Use breadcrumbs** - Free internal links on every page
6. **Related content sections** - "Related Posts" at bottom of blog posts

---

## Page Priority

### High Priority (Create First)
| Page | URL | Why |
|------|-----|-----|
| Construction Management Software | `/construction-management-software` | 5,000 volume, low competition |
| BIM Software | `/bim-construction-software` | 5,000 volume, low competition |
| Project Management Software | `/project-management-software` | 50,000 volume, low competition |
| Contractor Management Software | `/contractor-management-software` | 5,000 volume, low competition |

### Medium Priority (Create Second)
| Page | URL | Why |
|------|-----|-----|
| Field Inspection Software | `/field-inspection-software` | Core product function |
| Construction Scheduling Software | `/construction-scheduling-software` | 500 volume, low competition |

### Low Priority (Create Later)
| Page | URL | Why |
|------|-----|-----|
| Alternative Buildertrend | `/alternatives/buildertrend` | Competitor page |
| Alternative Revizto | `/alternatives/revizto` | Competitor page |

---

## Implementation Checklist

### New Pages to Create
- [ ] `/construction-management-software`
- [ ] `/bim-construction-software`
- [ ] `/project-management-software`
- [ ] `/contractor-management-software`
- [ ] `/field-inspection-software`
- [ ] `/construction-scheduling-software`

### Navigation Updates
- [ ] Update header navigation
- [ ] Update footer navigation
- [ ] Add breadcrumbs to all pages

### Internal Linking
- [ ] Add hub-and-spoke links
- [ ] Add cross-section links
- [ ] Add related content sections to blog posts

---

## Review Checklist

- [ ] URL structure is clean and consistent
- [ ] Hierarchy is max 3 levels deep
- [ ] All new pages are included
- [ ] Internal linking strategy is clear
- [ ] Navigation is intuitive
- [ ] Breadcrumbs are implemented

---

## Next Steps

1. **Review this document** - Confirm structure and URLs
2. **Approve Phase 2** - Get sign-off on site architecture
3. **Move to Phase 3** - programmatic-seo skill

---

*Document version: 1.0 - Created July 29, 2026*
*Skill used: site-architecture*
