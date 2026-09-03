# Keyword Implementation Workflow

> **Project:** SpaceCapture (spacecapture.ai)
> **Goal:** Filter keywords and implement SEO strategy using marketingskills
> **Approach:** One skill at a time, sequential execution
> **Timeline:** 8-10 weeks
> **Created:** July 29, 2026

---

## Overview

| Metric         | Value                                    |
| -------------- | ---------------------------------------- |
| Total Keywords | 907 (from 9 CSV files)                   |
| Skills Used    | 6 (sequential)                           |
| Timeline       | 8-10 weeks                               |
| Approach       | One skill at a time, review after each   |
| Resources      | Solo developer (text-focused, no design) |

---

## Phase 1: content-strategy (Week 1-2)

**Goal:** Filter keywords, create clusters, prioritize content

**Skill Location:** `marketingskills/skills/content-strategy/SKILL.md`

### Steps

1. **Load the skill** - Read content-strategy SKILL.md
2. **Deduplicate keywords** - Consolidate 907 keywords across 9 CSV files
3. **Create topic clusters** - Group into 5 categories:
   - Construction Software
   - BIM & Design
   - Field Inspection
   - Project Management
   - Competitor Terms
4. **Map to buyer stages** - Awareness, Consideration, Decision, Implementation
5. **Prioritize keywords** - Score on Customer Impact (40%), Content-Market Fit (30%), Search Potential (20%), Resources (10%)

### Output

- [x] `KEYWORD_STRATEGY.md` with prioritized keyword table, topic clusters, buyer stage mapping

### Review Checklist

- [x] Keywords are deduplicated
- [x] Clusters make logical sense
- [x] Buyer stages are accurate
- [x] Priority scores are reasonable

---

## Phase 2: site-architecture (Week 3)

**Goal:** Plan page structure, URLs, internal linking

**Skill Location:** `marketingskills/skills/site-architecture/SKILL.md`

### Steps

1. **Load the skill** - Read site-architecture SKILL.md
2. **Audit current structure** - Map existing 90+ pages, identify gaps
3. **Design new structure** - Add new pages from Phase 1
4. **Plan URL patterns** - Clean, readable URLs
5. **Create visual sitemap** - ASCII tree format
6. **Internal linking plan** - Hub-and-spoke model

### Output

- [x] `SITE_ARCHITECTURE.md` with page hierarchy, URL map, navigation spec, internal linking plan

### Review Checklist

- [x] URL structure is clean and consistent
- [x] Hierarchy is max 3 levels deep
- [x] All new pages are included
- [x] Internal linking strategy is clear

---

## Phase 3: programmatic-seo (Week 4-5)

**Goal:** Create landing pages at scale using templates

**Skill Location:** `marketingskills/skills/programmatic-seo/SKILL.md`

### Steps

1. **Load the skill** - Read programmatic-seo SKILL.md
2. **Choose playbooks** - Use Personas, Locations, Glossary playbooks
3. **Design templates** - Reusable landing page, location page, glossary templates
4. **Create pages** - Build 5-10 pages using templates
5. **Quality checks** - Ensure unique value, search intent match, proper headings

### Pages to Create

| Page URL                            | Target Keyword                   | Volume | Competition |
| ----------------------------------- | -------------------------------- | ------ | ----------- |
| `/construction-management-software` | construction management software | 5,000  | Low         |
| `/bim-construction-software`        | bim software                     | 5,000  | Low         |
| `/project-management-software`      | project management software      | 50,000 | Low         |
| `/construction-scheduling-software` | construction scheduling software | 5,000  | Low         |
| `/contractor-management-software`   | contractor management software   | 5,000  | Low         |

### Output

- [x] 5-10 new landing pages
- [x] Updated `app/sitemap.ts`

### Review Checklist

- [x] Each page has unique value
- [x] Answers search intent
- [x] Proper heading structure (H1, H2, H3)
- [x] Internal links added
- [x] No thin content

---

## Phase 4: copywriting (Week 6)

**Goal:** Write compelling copy for all new pages

**Skill Location:** `marketingskills/skills/copywriting/SKILL.md`

### Steps

1. **Load the skill** - Read copywriting SKILL.md
2. **Write page copy** - Headline, subheadline, features, CTAs, FAQ
3. **Apply principles** - Clarity over cleverness, benefits over features, specific over vague

### Copy Template

```markdown
## Hero Section

- Headline: [Clear, benefit-focused]
- Subheadline: [Specific outcome]
- CTA: [Action-oriented button text]

## Features

- Feature 1: [Benefit-focused description]
- Feature 2: [Benefit-focused description]
- Feature 3: [Benefit-focused description]

## FAQ

- Question 1: [Answer]
- Question 2: [Answer]
```

### Output

- [x] Updated page content for all new pages
- [x] Consistent tone and messaging

### Review Checklist

- [x] Headlines are clear and benefit-focused
- [x] CTAs are action-oriented
- [x] No jargon or marketing buzzwords
- [x] Written in customer language

---

## Phase 5: schema (Week 7)

**Goal:** Add structured data for rich results

**Skill Location:** `marketingskills/skills/schema/SKILL.md`

### Steps

1. **Load the skill** - Read schema SKILL.md
2. **Identify schema types** - Match page types to schema
3. **Implement schema** - Add JSON-LD to each page
4. **Validate** - Test with Google Rich Results Test

### Schema Map

| Page Type     | Schema                           |
| ------------- | -------------------------------- |
| Landing Pages | `SoftwareApplication`, `Service` |
| Blog Posts    | `Article`, `BlogPosting`         |
| FAQ Sections  | `FAQPage`                        |
| All Pages     | `BreadcrumbList`                 |

### Output

- [x] Schema code for each page
- [x] Validation report (no errors)

### Review Checklist

- [x] Schema validates in Rich Results Test
- [x] No errors or warnings
- [x] Matches page content
- [x] All required properties included

---

## Phase 6: cro (Week 8)

**Goal:** Optimize pages for conversions

**Skill Location:** `marketingskills/skills/cro/SKILL.md`

### Steps

1. **Load the skill** - Read cro SKILL.md
2. **Analyze each page** - Value proposition, headline, CTA, trust signals, friction
3. **Make improvements** - Simplify headlines, strengthen CTAs, add social proof

### Optimization Checklist

| Element           | Check                      |
| ----------------- | -------------------------- |
| Value Proposition | Clear within 5 seconds?    |
| Headline          | Communicates core benefit? |
| CTA               | Visible, action-oriented?  |
| Trust Signals     | Social proof near CTAs?    |
| Friction          | Minimal form fields?       |

### Output

- [x] Optimized page versions
- [x] A/B test recommendations (`AB_TEST_RECOMMENDATIONS.md`)

### Review Checklist

- [x] Value proposition is clear
- [x] CTAs are prominent
- [x] Trust signals are present
- [x] Friction is minimized

---

## Phase 7: competitors (Week 9-10) - OPTIONAL

**Goal:** Create comparison/alternative pages

**Skill Location:** `marketingskills/skills/competitors/SKILL.md`

### Steps

1. **Load the skill** - Read competitors SKILL.md
2. **Choose competitors** - Buildertrend, Revizto
3. **Create pages** - `/alternatives/buildertrend`, `/alternatives/revizto`

### Pages to Create

| Page URL                     | Target Keyword           |
| ---------------------------- | ------------------------ |
| `/alternatives/buildertrend` | buildertrend alternative |
| `/alternatives/revizto`      | revizto alternative      |

### Output

- [x] 2-3 competitor pages
- [x] Updated sitemap

### Review Checklist

- [x] Comparisons are accurate and honest
- [x] Includes competitor strengths
- [x] Clear "who should choose" sections
- [x] Schema markup added

---

## Tracking

### Implementation Tracker

| Phase | Skill             | Status       | Start Date    | End Date      | Notes                                         |
| ----- | ----------------- | ------------ | ------------- | ------------- | --------------------------------------------- |
| 1     | content-strategy  | ✅ Completed | July 29, 2026 | July 29, 2026 | KEYWORD_STRATEGY.md created                   |
| 2     | site-architecture | ✅ Completed | July 29, 2026 | July 29, 2026 | SITE_ARCHITECTURE.md created                  |
| 3     | programmatic-seo  | ✅ Completed | July 29, 2026 | July 29, 2026 | 5 landing pages created                       |
| 4     | copywriting       | ✅ Completed | July 30, 2026 | July 30, 2026 | All 5 pages optimized                         |
| 5     | schema            | ✅ Completed | July 30, 2026 | July 30, 2026 | SoftwareApplication schema added to all pages |
| 6     | cro               | ✅ Completed | July 30, 2026 | July 30, 2026 | CRO optimizations applied                     |
| 7     | competitors       | ✅ Completed | July 30, 2026 | July 30, 2026 | Buildertrend & Revizto pages created          |

### Status Legend

- ⏳ Pending
- 🔄 In Progress
- ✅ Completed
- ❌ Blocked

---

## Files to Create

| File                         | Phase | Purpose                                 |
| ---------------------------- | ----- | --------------------------------------- |
| `KEYWORD_STRATEGY.md`        | 1     | Filtered keywords, clusters, priorities |
| `SITE_ARCHITECTURE.md`       | 2     | Page hierarchy, URLs, linking           |
| `AB_TEST_RECOMMENDATIONS.md` | 6     | A/B test plan for landing pages         |

---

## Skills Reference

| Skill             | Location                                            | Purpose                             |
| ----------------- | --------------------------------------------------- | ----------------------------------- |
| content-strategy  | `marketingskills/skills/content-strategy/SKILL.md`  | Keyword filtering, content planning |
| site-architecture | `marketingskills/skills/site-architecture/SKILL.md` | Page structure, URLs, linking       |
| programmatic-seo  | `marketingskills/skills/programmatic-seo/SKILL.md`  | Scale page creation                 |
| copywriting       | `marketingskills/skills/copywriting/SKILL.md`       | Write compelling copy               |
| schema            | `marketingskills/skills/schema/SKILL.md`            | Structured data                     |
| cro               | `marketingskills/skills/cro/SKILL.md`               | Conversion optimization             |
| competitors       | `marketingskills/skills/competitors/SKILL.md`       | Comparison pages                    |

---

## Notes

- **Solo developer approach:** Focus on text content, use existing templates, add visuals later
- **One skill at a time:** Avoids errors, easier to track
- **Review after each phase:** Catch issues early
- **Optional Phase 7:** Can be skipped or done later

---

_Document version: 1.0 - Created July 29, 2026_
