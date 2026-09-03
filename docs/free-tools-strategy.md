# SpaceCapture Free Tools Strategy — Audit & Recommendations

> Generated using the `free-tools` skill from the marketingskills repository.
> Goal: audit existing tools, evaluate lead-capture options, and recommend high-traffic free tools for SpaceCapture.ai.

---

## 1. Existing Tools Audit

| Tool | Type | Audience Match | Product Adjacency | Lead Capture | Biggest Issue |
|------|------|----------------|-------------------|--------------|---------------|
| **Asphalt Calculator** | Calculator | 2/5 (homeowners + contractors) | 1/5 | None | Weak tie to SpaceCapture |
| **Concrete Calculator** | Calculator | 2/5 (DIY + contractors) | 1/5 | None | Weak tie to SpaceCapture |
| **Construction Cost Calculator** | Estimator | 4/5 (GCs, PMs) | 3/5 | ✅ Yes (modal) | Best lead-capture tool already |
| **Free Online CAD Viewer** | Viewer | 5/5 (engineers, BIM) | 5/5 | None | **Redirects externally — not a real viewer** |
| **Labor Cost Calculator** | Calculator | 4/5 (contractors) | 3/5 | ✅ Yes (modal) | Solid overall |
| **Paint Calculator** | Calculator | 1/5 (homeowners) | 1/5 | None | Wrong audience for SpaceCapture |
| **Switching Calculator** | ROI Calculator | 5/5 (inspectors) | 5/5 | CTA button | Low search volume, needs SEO |

### Detailed Findings

**Asphalt Calculator**
- Clean UI with multi-unit input and compaction factor.
- Good Article schema but could use `SoftwareApplication` schema.
- Weak link to field inspection/BIM core product.

**Concrete Calculator**
- Excellent functionality: cubic yards + 80lb/60lb bag counts.
- High search volume but mostly DIY/homeowner audience.
- Low conversion potential for SpaceCapture.

**Construction Cost Calculator** ⭐ Best in class
- Line-item budget builder with categories.
- Has lead capture modal: “Email Me This Estimate.”
- Strong path to demo request.
- Recommendation: Keep and optimize.

**Free Online CAD Viewer** ⚠️ Critical issue
- Claims to view DWG/DXF in browser.
- Actually simulates upload progress, then redirects to `amspace.ai` login.
- Misleading UX that can damage trust and SEO.
- **Fix or remove immediately.**

**Labor Cost Calculator**
- Role-based calculator with markup and burden.
- Has lead capture modal.
- Decent audience match.
- Recommendation: Keep and optimize.

**Paint Calculator**
- Nice UI and visual wireframe.
- Audience is almost entirely homeowners.
- Very weak link to B2B construction SaaS.
- **Recommendation: Deprioritize or remove.**

**Switching Calculator**
- Direct ROI calculator for SpaceCapture.
- Highest conversion intent but low search volume.
- Title and metadata need searchable keywords.
- Recommendation: Keep but optimize SEO.

---

## 2. Lead Capture: Gated vs. Ungated

### Option A: Fully Ungated

**Pros**
- Maximum traffic and shareability.
- Best for SEO and backlinks.
- Lower bounce rate.
- Builds brand goodwill.
- Faster viral loop among contractors.

**Cons**
- No direct lead capture.
- Harder to attribute ROI.
- Competitors can copy easily.
- Wasted traffic if users never convert.

### Option B: Partially Gated (recommended)

**Pros**
- Captures emails for high-value actions (save report, download PDF, email results).
- Still allows tool usage and SEO traffic.
- Creates clear value exchange.
- Enables remarketing and nurture campaigns.
- Best for Construction Cost Calculator and Labor Cost Calculator.

**Cons**
- Some users drop off at the gate.
- Adds friction.
- Requires email backend (Resend, Kit, Mailchimp, etc.).
- Must handle privacy and consent.

### Recommended Hybrid
- **Ungated calculation** for all users.
- **Optional gated save/export** for valuable outputs:
  - Email me this estimate.
  - Download PDF report.
  - Save project for later.
  - Get 3 related templates.

---

## 3. Free Tools Evaluation Scorecard

Scored 1–5 across the `free-tools` skill factors:

| Tool | Search Demand | Audience Match | Product Fit | Build Feasibility | Maintenance | Link/Share Potential | Lead Quality | **Total** |
|------|---------------|----------------|-------------|-------------------|-------------|----------------------|--------------|-----------|
| **Construction Cost Calculator** | 4 | 4 | 3 | 4 | 4 | 3 | 5 | **27** |
| **Labor Cost Calculator** | 3 | 4 | 3 | 4 | 4 | 3 | 4 | **25** |
| **Switching Calculator** | 2 | 5 | 5 | 5 | 5 | 2 | 5 | **29** |
| **Free Online CAD Viewer** | 5 | 5 | 5 | 1 | 2 | 4 | 4 | **26** |
| **Concrete Calculator** | 5 | 2 | 1 | 5 | 5 | 4 | 2 | **24** |
| **Asphalt Calculator** | 3 | 2 | 1 | 5 | 5 | 3 | 2 | **21** |
| **Paint Calculator** | 4 | 1 | 1 | 5 | 5 | 2 | 1 | **19** |

### Interpretation
- **25+ = Strong candidate** → Keep and optimize.
- **15–24 = Promising with fixes.**
- **<15 = Reconsider.**

### Keep & Double Down
- Construction Cost Calculator
- Labor Cost Calculator
- Switching Calculator

### Fix or Replace
- Free Online CAD Viewer (currently misleading)

### Deprioritize / Remove
- Paint Calculator
- Asphalt Calculator (unless targeting general construction traffic)

### Keep for Raw Traffic Only
- Concrete Calculator

---

## 4. Recommended New Free Tools for Maximum Traffic

Ranked by expected traffic + relevance to SpaceCapture.

### Tier 1: High Traffic + High Relevance (build first)

| Tool | Why It Wins | Estimated Traffic Value | Product Tie-In |
|------|-------------|------------------------|----------------|
| **Construction Cost Calculator v2** (expand) | Already exists, high search volume | High | Bid and estimate management |
| **Free DWG/DXF CAD Viewer** (real implementation) | Huge search volume, core audience | Very High | BIM + defect detection |
| **Field Inspection Checklist Generator** | Directly solves SpaceCapture use case | High | Core product feature |
| **Construction Punch List Template Generator** | High search volume, project closeout | High | Defect tracking and closeout |

### Tier 2: Moderate Traffic + Strong Relevance

| Tool | Why It Wins | Product Tie-In |
|------|-------------|----------------|
| **Change Order Template Generator** | Contractors love this | Cost + project management |
| **Safety Inspection Checklist Generator** | OSHA/compliance angle | Field inspection |
| **QA/QC Checklist Template Generator** | Directly tied to defect detection | Core product |
| **Construction Schedule Template Generator** | Project management traffic | Project management |
| **Roofing Calculator** | High homeowner + contractor traffic | Building inspection |
| **Drywall Calculator** | High DIY + contractor traffic | Building inspection |

### Tier 3: Niche but High-Intent

| Tool | Why It Wins | Product Tie-In |
|------|-------------|----------------|
| **BIM File Viewer / IFC Viewer** | Niche but perfect audience | BIM core feature |
| **Defect Report Template Generator** | Directly adjacent to product | Core feature |
| **Site Inspection Report Template** | Directly adjacent to product | Core feature |
| **ROI Calculator for Digital Inspections** | High conversion, low traffic | Switching to SpaceCapture |

### Top 5 Recommendations for Maximum Traffic

1. **Real Free CAD Viewer (DWG/DXF/IFC)** — Massive search volume, perfect audience, but requires real implementation or third-party embed.
2. **Construction Cost Calculator** — Already built, just needs promotion and lead-capture optimization.
3. **Field Inspection Checklist Generator** — Generates downloadable PDF/Word checklists. Highly relevant.
4. **Punch List Template Generator** — Huge contractor audience, natural link to defect tracking.
5. **Safety Inspection Checklist Generator** — Compliance-driven, high link potential, strong brand fit.

---

## 5. Implementation Plan

### Phase 1: Fix Critical Issues
1. Fix or remove the CAD Viewer — currently redirects externally.
2. Standardize schema — all calculator tools should use `SoftwareApplication` schema.

### Phase 2: Optimize Existing Tools
1. Add optional lead capture to Asphalt, Concrete, and Paint calculators (if kept).
2. Add “Download PDF” / “Email results” to all calculators.
3. Optimize Switching Calculator metadata for search.
4. Improve CTA copy from generic “Request Demo” to outcome-focused copy.

### Phase 3: Add New High-Value Tools
1. Field Inspection Checklist Generator
2. Punch List Template Generator
3. Safety Inspection Checklist Generator
4. Change Order Template Generator
5. Real CAD Viewer (if feasible)

### Phase 4: SEO & Internal Linking
1. Add `/tools` to main navigation.
2. Cross-link tools from relevant product pages.
3. Add “Related Tools” modules to product pages.
4. Create a hub page for templates and checklists.

---

## 6. Final Recommendation

**For maximum qualified traffic + leads:**

1. **Fix the CAD Viewer** — it is currently a liability.
2. **Double down on Construction Cost Calculator and Labor Cost Calculator** — both already have lead capture.
3. **Add Field Inspection Checklist Generator** — highest relevance + SEO potential.
4. **Add Punch List Template Generator** — high traffic with strong product link.
5. **Remove or deprioritize Paint Calculator** — wrong audience.

---

*Generated with the marketingskills `free-tools` skill.*
*Project: SpaceCapture (spacecapture.ai)*
