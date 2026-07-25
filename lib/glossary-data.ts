export type GlossaryTerm = {
  term: string;
  definition: string;
  category: string;
  slug: string;
  details: string;
  relatedSlugs?: string[];
};

// --- Inspection Terms ---
const inspectionTerms: GlossaryTerm[] = [
  {
    term: "Field Inspection",
    slug: "field-inspection",
    definition:
      "A documented on-site check of physical conditions, performed by an inspector using a mobile device at the location of the work.",
    category: "Inspection",
    details: `## What is a Field Inspection?

A **field inspection** is a documented check of physical conditions performed on-site by an inspector, engineer, or qualified technician. Field inspections are the most common form of construction and property QA/QC.

### Common Types
- **Pre-pour** — formwork, rebar, and embedment checks before concrete
- **Pre-drywall** — mechanical, electrical, and plumbing rough-in
- **QA/QC** — verify work matches specifications
- **Safety** — OSHA-aligned hazard identification
- **Final** — closeout and turnover

### Digital Field Inspections
Modern field inspections are captured on mobile apps that work offline, attach photos, and auto-generate reports. This eliminates the lost-paperwork problem of legacy paper-based inspections.`,
    relatedSlugs: ["site-inspection", "construction-defect", "punch-list"],
  },
  {
    term: "Site Inspection",
    slug: "site-inspection",
    definition:
      "A documented walk-through of a job site to verify safety compliance, identify hazards, and document progress.",
    category: "Inspection",
    details: `## What is a Site Inspection?

A **site inspection** is a documented walk-through of a construction or industrial site. It serves two primary purposes: verifying compliance with safety regulations (especially OSHA in the US) and documenting the current state of the work.

### Who Performs Site Inspections?
- **Site supervisors** — daily walks to identify hazards
- **Safety officers** — periodic compliance audits
- **Third-party inspectors** — independent verification
- **Owner's representatives** — progress verification

### What is Captured
- Hazards (fall risk, electrical, housekeeping)
- PPE compliance
- Tool and equipment condition
- Environmental conditions (weather, drainage)
- Photo evidence of every observation
- Sign-off from the inspector and the responsible party

### Digital Site Inspections
Mobile apps like SpaceCapture let site supervisors complete a daily safety walk in 10–15 minutes — replacing the 30–60 minute paper-based process.`,
    relatedSlugs: ["field-inspection", "toolbox-talk", "ppe"],
  },
  {
    term: "Building Inspection",
    slug: "building-inspection",
    definition:
      "A documented check of a building's structural, mechanical, electrical, plumbing, and life-safety systems to verify compliance with code and specifications.",
    category: "Inspection",
    details: `## What is a Building Inspection?

A **building inspection** is a comprehensive check of a building's physical and functional condition. It covers structural elements, mechanical systems, electrical, plumbing, fire safety, and accessibility.

### When Are Building Inspections Required?
- Pre-purchase (residential and commercial)
- Pre-listing
- Periodic condition surveys (often every 5 years for commercial)
- Post-incident (fire, flood, earthquake)
- Pre-renovation

### Who Performs Them?
- Licensed home inspectors (residential)
- Structural engineers (commercial / structural issues)
- Building envelope consultants (facade, cladding)
- Fire safety inspectors (life safety)
- Code officials (regulatory)

### What a Modern Building Inspection Includes
- Photo evidence of every finding, pinned to a floor plan
- AI-assisted defect detection
- Severity ratings
- Branded PDF report
- E-signature from inspector and client
- Optional: integration with warranty and FM systems`,
    relatedSlugs: ["cladding-inspection", "structural-inspection", "fire-safety-inspection"],
  },
  {
    term: "Property Inspection",
    slug: "property-inspection",
    definition:
      "A documented check of a residential or commercial property's condition, used by landlords, property managers, real estate agents, and tenants.",
    category: "Inspection",
    details: `## What is a Property Inspection?

A **property inspection** is a check of a property's condition, typically performed at specific moments: move-in, move-out, periodic, pre-listing, or pre-purchase. It is used to record the state of the property, document damage, and resolve disputes.

### Common Use Cases
- **Move-in inspection** — capture condition before a new tenant
- **Move-out inspection** — compare to the move-in baseline
- **Periodic inspection** — quarterly or annual check-ins
- **Pre-listing inspection** — for sellers preparing for market
- **Pre-purchase inspection** — for buyers

### What a Modern Property Inspection Produces
- Side-by-side, photo-annotated condition report
- Tenant and landlord signatures
- Branded PDF deliverable
- Optional: tenant self-inspection via a portal link`,
    relatedSlugs: ["home-inspection", "move-in-inspection", "move-out-inspection"],
  },
  {
    term: "Home Inspection",
    slug: "home-inspection",
    definition:
      "A documented check of a residential property's condition, typically performed before sale or purchase, by a licensed home inspector.",
    category: "Inspection",
    details: `## What is a Home Inspection?

A **home inspection** is a visual assessment of a residential property's condition, performed by a licensed inspector before a sale or purchase. It typically covers structural, exterior, roofing, plumbing, electrical, heating, cooling, insulation, interior, and built-in appliances.

### Standards
In the US, the major standards bodies are:
- **InterNACHI** — International Association of Certified Home Inspectors
- **ASHI** — American Society of Home Inspectors
- State-specific licensing boards

### Reports
A modern home inspection report includes:
- 50–200+ photos
- Condition ratings per system
- Recommendations
- Inspector credentials
- E-signature

Most home inspectors deliver the report the same day.`,
    relatedSlugs: ["house-inspection", "pre-purchase-inspection", "pre-listing-inspection"],
  },
  {
    term: "House Inspection",
    slug: "house-inspection",
    definition:
      "Synonym for home inspection — a documented check of a residential house's condition, typically performed before sale or purchase.",
    category: "Inspection",
    details: `## What is a House Inspection?

A **house inspection** is the same as a home inspection — a check of a single-family or townhouse property's condition, performed by a licensed home inspector before a sale or purchase.

### What is Inspected
- Structure (foundation, framing, walls)
- Exterior (siding, windows, doors)
- Roof
- Plumbing
- Electrical
- HVAC
- Insulation
- Interior (walls, ceilings, floors)
- Built-in appliances

### Output
A comprehensive PDF report with photos, condition ratings, and recommendations.`,
    relatedSlugs: ["home-inspection"],
  },
  {
    term: "Pre-Construction Inspection",
    slug: "pre-construction-inspection",
    definition:
      "A documented survey of existing site conditions before construction begins, used to establish a baseline against damage claims.",
    category: "Inspection",
    details: `## What is a Pre-Construction Inspection?

A **pre-construction inspection** (also called a pre-building or pre-site inspection) is a documented survey of the site as it exists before construction begins. It captures photos, measurements, and observations of adjacent structures, utilities, vegetation, drainage, and access.

### Why is it Important?
Without a baseline, the project is exposed to claims from neighbours, insurers, and regulators for damage that pre-existed the work. A pre-construction inspection establishes a clear, photo-anchored record of the site as it exists before the project starts.

### What it Covers
- Adjacent structures (cracks, weather-tightness)
- Sidewalks, curbs, paving
- Utilities (manholes, hydrants, poles, signs)
- Vegetation (trees, root zones)
- Drainage and outfalls
- Pre-existing hazards (asbestos, mould)`,
    relatedSlugs: ["dilapidation-report", "site-inspection"],
  },
  {
    term: "Pre-Building Inspection",
    slug: "pre-building-inspection",
    definition:
      "Synonym for pre-construction inspection — a documented survey of existing conditions before building work begins.",
    category: "Inspection",
    details: `## What is a Pre-Building Inspection?

A **pre-building inspection** is another name for a pre-construction inspection. It documents the existing condition of a site before any building work begins, creating a baseline for damage-claim disputes.

### Process
1. Walk the site with a structured checklist
2. Photograph every adjacent structure, utility, and feature
3. Geo-tag and time-stamp every finding
4. Generate a signed PDF report
5. Distribute to owner, neighbours, insurer, and contractor`,
    relatedSlugs: ["pre-construction-inspection", "dilapidation-report"],
  },
  {
    term: "Pre-Site Inspection",
    slug: "pre-site-inspection",
    definition:
      "An inspection performed before mobilization to verify site readiness, access, and existing conditions.",
    category: "Inspection",
    details: `## What is a Pre-Site Inspection?

A **pre-site inspection** is performed before a contractor mobilizes to a site. It verifies access, lay-down areas, existing utilities, ground conditions, and any site-specific hazards.

### Common Items
- Access roads and gates
- Lay-down and storage areas
- Existing utilities (water, power, sewer)
- Ground conditions (wet, soft, contaminated)
- Neighbouring property considerations
- Security requirements`,
    relatedSlugs: ["pre-construction-inspection"],
  },
  {
    term: "Construction Site Inspection",
    slug: "construction-site-inspection",
    definition:
      "A daily or periodic walk-through of a job site to verify safety compliance, identify hazards, and document progress.",
    category: "Inspection",
    details: `## What is a Construction Site Inspection?

A **construction site inspection** is the daily or periodic walk-through of a job site. It is required by OSHA in the US and is the single most effective way to prevent incidents.

### Common Types
- Daily safety walk
- Weekly supervisor walk
- Monthly compliance audit
- Quarterly safety audit
- Annual fire-safety inspection

### Captured With
- OSHA-aligned safety checklist
- Photo evidence of every observation
- E-signature from the inspector
- Auto-distribution to the safety director`,
    relatedSlugs: ["site-inspection", "toolbox-talk", "ppe"],
  },
  {
    term: "Cladding Inspection",
    slug: "cladding-inspection",
    definition:
      "A documented check of a building's external envelope — including EIFS, stucco, brick veneer, curtain wall, and rainscreen systems — for defects, water ingress, and fire risk.",
    category: "Inspection",
    details: `## What is Cladding Inspection?

A **cladding inspection** is a documented check of a building's external envelope. Cladding systems (EIFS, stucco, brick veneer, curtain wall, metal panel, rainscreen) protect the building from weather and provide fire resistance.

### Why is it Important?
- **Fire safety** — defective cladding has been the cause of major building fires
- **Water ingress** — failed cladding lets water into the wall assembly
- **Energy performance** — degraded cladding reduces insulation value
- **Aesthetics** — defects reduce property value

### What it Covers
- Cracks, spalling, delamination
- Sealant failure
- Staining and biological growth
- Corrosion of fixings
- Drainage and weeps`,
    relatedSlugs: ["building-inspection", "facade-inspection", "fire-safety-inspection"],
  },
  {
    term: "Facade Inspection",
    slug: "facade-inspection",
    definition:
      "An inspection of a building's exterior face, often from rope access or a swing stage, used to document condition and identify safety hazards.",
    category: "Inspection",
    details: `## What is a Facade Inspection?

A **facade inspection** is a close-up visual inspection of a building's exterior, often performed by rope-access technicians on high-rise buildings. It is used to identify deterioration, safety hazards, and code violations.

### Common Methods
- **Rope access** (industrial climbing)
- **Swing stage / suspended scaffold**
- **Cherry picker / boom lift**
- **Drone** (for hard-to-reach areas)
- **Ground-level** (with telephoto lens)

### Legal Requirements
Many jurisdictions (notably NYC Local Law 11 / FISP) require periodic facade inspections of mid- and high-rise buildings.`,
    relatedSlugs: ["cladding-inspection", "building-inspection"],
  },
  {
    term: "Structural Inspection",
    slug: "structural-inspection",
    definition:
      "An inspection of a building's load-bearing elements — foundations, framing, walls, beams, columns, and roof — to verify integrity and safety.",
    category: "Inspection",
    details: `## What is a Structural Inspection?

A **structural inspection** is performed by a structural engineer to verify that a building's load-bearing elements are sound. It is required for older buildings, after seismic events, before renovations, and when structural defects are suspected.

### Common Triggers
- Visible cracks in load-bearing walls
- Sagging floors or roof
- Building addition or renovation
- After fire, flood, or earthquake
- Pre-purchase of an older home

### What is Captured
- Crack mapping
- Deflection measurements
- Material condition (concrete, steel, timber)
- Load-path analysis
- Repair recommendations`,
    relatedSlugs: ["building-inspection", "foundation-inspection"],
  },
  {
    term: "Fire Safety Inspection",
    slug: "fire-safety-inspection",
    definition:
      "An inspection of a building's fire-protection systems — alarms, sprinklers, extinguishers, exits, fire doors — to verify compliance with fire codes.",
    category: "Inspection",
    details: `## What is a Fire Safety Inspection?

A **fire safety inspection** verifies that a building's fire-protection systems are in working order and that the building complies with fire codes. It is required annually for most commercial buildings.

### What it Covers
- Fire alarm systems (test, batteries, sound levels)
- Sprinkler systems (valves, heads, pressures)
- Fire extinguishers (inspection tags, pressures)
- Means of egress (exits, signage, lighting)
- Fire doors (self-closing, ratings)
- Emergency lighting
- Fire dampers
- Storage of flammable materials`,
    relatedSlugs: ["building-inspection", "site-safety-inspection"],
  },
  {
    term: "Move-In Inspection",
    slug: "move-in-inspection",
    definition:
      "A documented check of a rental property's condition at the start of a tenancy, used as a baseline for the move-out inspection.",
    category: "Inspection",
    details: `## What is a Move-In Inspection?

A **move-in inspection** is performed before a new tenant takes possession of a rental property. It documents the property's condition, with photos, and is signed by both landlord and tenant.

### Why is it Important?
- Establishes the baseline for the move-out inspection
- Protects the landlord from false damage claims
- Protects the tenant from being charged for pre-existing damage
- Required in many jurisdictions to withhold a security deposit

### Modern Move-In Inspections
Tenants can complete a self-inspection via a portal link on their phone. The landlord reviews and signs, and a copy is stored in the cloud for the entire tenancy.`,
    relatedSlugs: ["move-out-inspection", "property-inspection"],
  },
  {
    term: "Move-Out Inspection",
    slug: "move-out-inspection",
    definition:
      "A documented check of a rental property at the end of a tenancy, used to determine security-deposit deductions.",
    category: "Inspection",
    details: `## What is a Move-Out Inspection?

A **move-out inspection** is performed when a tenant vacates a property. It is compared to the move-in inspection to identify tenant-caused damage, and is used to determine security-deposit deductions.

### Process
1. Inspect the property using the same template as the move-in
2. Compare to the move-in record (side-by-side photos)
3. Document any new damage
4. Calculate repair / replacement costs
5. Sign by landlord and tenant
6. Return the deposit (less lawful deductions) within the legal timeframe

### Modern Tools
A digital system that diffs the move-in and move-out reports automatically saves hours and reduces disputes.`,
    relatedSlugs: ["move-in-inspection", "property-inspection"],
  },
  {
    term: "Pre-Purchase Inspection",
    slug: "pre-purchase-inspection",
    definition:
      "An inspection performed before a buyer closes on a property, to identify defects and inform the purchase decision.",
    category: "Inspection",
    details: `## What is a Pre-Purchase Inspection?

A **pre-purchase inspection** (also called a buyer's inspection) is performed before a buyer closes on a property. The inspector documents the property's condition, identifies defects, and provides a report the buyer can use to negotiate repairs or walk away.

### Common Items
- Structural integrity
- Roof condition
- Plumbing and electrical
- HVAC
- Foundation
- Water and mold
- Pest infestation

### What is Recommended
- Schedule within the inspection contingency period (typically 7–10 days)
- Attend the inspection
- Use a licensed, insured inspector
- Get specialty inspections (pest, sewer, etc.) as needed`,
    relatedSlugs: ["home-inspection", "pre-listing-inspection"],
  },
  {
    term: "Pre-Listing Inspection",
    slug: "pre-listing-inspection",
    definition:
      "An inspection performed before a property is listed for sale, allowing the seller to address issues in advance.",
    category: "Inspection",
    details: `## What is a Pre-Listing Inspection?

A **pre-listing inspection** is performed before a property goes on the market. The seller uses the report to address issues, set a realistic asking price, and reduce surprises during the buyer's inspection.

### Benefits
- Avoids last-minute price reductions
- Reduces the risk of deals falling through
- Speeds up the sale
- Builds buyer confidence

### What's Typically Inspected
Same scope as a buyer's inspection.`,
    relatedSlugs: ["home-inspection", "pre-purchase-inspection"],
  },
  {
    term: "Inspection Report",
    slug: "inspection-report",
    definition:
      "A written, photo-anchored record of an inspection's findings, including condition ratings, recommendations, and signatures.",
    category: "Inspection",
    details: `## What is an Inspection Report?

An **inspection report** is the deliverable from any inspection. It includes photos, condition ratings, findings, recommendations, and signatures from the inspector and (often) the client.

### Modern Inspection Reports
- Generated automatically from a mobile app
- Include AI-flagged defects with severity ratings
- Branded with the inspector's logo
- E-signed on-device
- Delivered as PDF and via a client portal
- Tamper-evident (timestamped, geo-tagged)

### Common Report Types
- Home inspection report
- Building condition report
- Property condition report
- Dilapidation report
- Daily site safety report`,
    relatedSlugs: ["home-inspection", "punch-list", "dilapidation-report"],
  },
  {
    term: "Inspection Company",
    slug: "inspection-company",
    definition:
      "A business that provides inspection services, typically employing multiple inspectors and serving multiple clients.",
    category: "Inspection",
    details: `## What is an Inspection Company?

An **inspection company** is a business that provides professional inspection services — typically home, building, or property inspections. Inspection companies may specialize in a vertical (residential real estate, oil & gas, telecom) or be a generalist multi-inspector firm.

### What Software Does an Inspection Company Use?
- Scheduling and dispatch
- Mobile inspection apps
- Branded PDF report generation
- Client portal for report delivery
- Invoicing and payment
- Operations dashboards`,
    relatedSlugs: ["field-inspection", "home-inspection"],
  },
  {
    term: "Quality Control (QC)",
    slug: "quality-control",
    definition:
      "The operational techniques and activities used to verify that construction work meets specified quality requirements.",
    category: "Inspection",
    details: `## What is Quality Control (QC)?

**Quality control (QC)** is the systematic process of verifying that construction work, materials, and deliverables meet the project's specified quality standards. QC is performed by the contractor's own team to ensure workmanship and compliance before external inspections.

### QC vs QA
- **QC** is reactive — it checks the output
- **QA** is proactive — it ensures the process prevents defects

### Common QC Activities
- Material testing and verification
- Workmanship inspections
- Dimensional checks
- Weld inspections
- Concrete slump and cylinder tests
- MEP rough-in verification

### Why QC Matters
Effective QC reduces rework, prevents costly delays, and minimizes the risk of defects reaching the punch list phase.`,
    relatedSlugs: ["quality-assurance", "non-conformance", "construction-defect"],
  },
  {
    term: "Quality Assurance (QA)",
    slug: "quality-assurance",
    definition:
      "A systematic process of ensuring that construction activities and deliverables meet quality standards through planned and systematic activities.",
    category: "Inspection",
    details: `## What is Quality Assurance (QA)?

**Quality assurance (QA)** is the proactive, process-oriented approach to ensuring that construction work meets quality standards. Rather than inspecting the final product, QA focuses on the processes and systems that produce the work.

### QA vs QC
- **QA** prevents defects by ensuring processes are correct
- **QC** catches defects by inspecting the output

### QA Elements
- Quality management plans
- Inspection and test plans (ITPs)
- Procedure reviews
- Training and competency verification
- Document control
- Non-conformance reporting

### How SpaceCapture Helps
SpaceCapture provides structured inspection checklists and automated reporting that support both QA and QC workflows, ensuring every inspection follows a consistent, auditable process.`,
    relatedSlugs: ["quality-control", "non-conformance", "corrective-action"],
  },
  {
    term: "Non-Conformance Report (NCR)",
    slug: "non-conformance",
    definition:
      "A formal document issued when work, materials, or processes fail to meet specified requirements, triggering a corrective action process.",
    category: "Inspection",
    details: `## What is a Non-Conformance Report (NCR)?

A **non-conformance report (NCR)** is a formal document that records any instance where work, materials, or processes do not conform to the specified requirements. It is the starting point for the corrective action process.

### NCR Process
1. **Identification** — non-conformance is discovered
2. **Documentation** — NCR issued with photos and details
3. **Disposition** — engineering review determines fate (rework, accept-as-is, reject)
4. **Corrective Action** — root cause identified and addressed
5. **Verification** — corrective action confirmed effective
6. **Closure** — NCR closed

### What to Include
- Reference to the specification or standard violated
- Description of the non-conformance
- Photo evidence
- Affected area or quantity
- Disposition decision
- Responsible party`,
    relatedSlugs: ["corrective-action", "preventive-action", "quality-control"],
  },
  {
    term: "Corrective Action",
    slug: "corrective-action",
    definition:
      "An action taken to eliminate the root cause of a non-conformance or undesirable situation to prevent recurrence.",
    category: "Inspection",
    details: `## What is Corrective Action?

**Corrective action** is the process of identifying and addressing the root cause of a non-conformance, defect, or safety incident. It goes beyond fixing the symptom — it ensures the underlying issue is resolved so the problem does not recur.

### Corrective vs Preventive Action
- **Corrective** — reacts to an existing non-conformance
- **Preventive** — proactively eliminates potential causes before an issue occurs

### The Process
1. Identify the non-conformance or incident
2. Investigate root cause (5 Whys, fishbone diagram)
3. Develop and implement corrective action plan
4. Verify the action was effective
5. Update procedures as needed
6. Close the NCR`,
    relatedSlugs: ["non-conformance", "preventive-action", "quality-control"],
  },
  {
    term: "Preventive Action",
    slug: "preventive-action",
    definition:
      "An action taken to eliminate the potential cause of a non-conformance or undesirable situation before it occurs.",
    category: "Inspection",
    details: `## What is Preventive Action?

**Preventive action** is the proactive process of identifying and eliminating potential causes of non-conformances, defects, or safety incidents before they occur. It is a core element of any quality management system.

### Preventive vs Corrective Action
- **Preventive** — before the problem occurs
- **Corrective** — after the problem occurs

### Examples
- Updating procedures based on lessons learned from other projects
- Additional training for a new trade or process
- Modifying inspection checklists based on industry trends
- Introducing new material testing requirements
- Adding hold points in the inspection and test plan

### How SpaceCapture Helps
SpaceCapture's inspection templates and checklist library can be updated based on lessons learned, helping teams institutionalize preventive actions across all projects.`,
    relatedSlugs: ["corrective-action", "non-conformance", "quality-assurance"],
  },
  {
    term: "Construction Audit",
    slug: "audit",
    definition:
      "A systematic, independent examination of a construction project's processes, documents, and deliverables to determine compliance and effectiveness.",
    category: "Inspection",
    details: `## What is a Construction Audit?

A **construction audit** is a systematic, independent examination of a construction project to evaluate whether processes, documents, and deliverables comply with the contract, specifications, and applicable regulations.

### Types of Construction Audits
- **Quality audit** — verifies compliance with quality standards
- **Safety audit** — verifies OSHA and site safety compliance
- **Financial audit** — reviews costs, invoices, and payment applications
- **Procurement audit** — verifies material sourcing and sub qualification
- **Environmental audit** — verifies EPA and environmental compliance

### Benefits
- Identifies gaps before they become issues
- Ensures regulatory compliance
- Validates the effectiveness of management systems
- Provides documentation for legal and insurance purposes`,
    relatedSlugs: ["compliance", "quality-assurance", "osha"],
  },
  {
    term: "Regulatory Compliance",
    slug: "compliance",
    definition:
      "The act of adhering to laws, regulations, standards, and specifications applicable to a construction project.",
    category: "Inspection",
    details: `## What is Regulatory Compliance?

**Regulatory compliance** in construction means ensuring that all project activities, processes, and deliverables adhere to applicable laws, regulations, codes, and standards. Non-compliance can result in fines, stop-work orders, litigation, and project delays.

### Key Regulatory Areas
- **Building codes** (IBC, local amendments)
- **OSHA** (safety and health)
- **EPA** (environmental)
- **ADA** (accessibility)
- **Fire codes** (NFPA)
- **Energy codes** (ASHRAE 90.1, IECC)
- **Electrical codes** (NEC)
- **Plumbing codes** (IPC, UPC)

### How SpaceCapture Helps
SpaceCapture provides pre-built inspection checklists aligned with major regulatory frameworks, ensuring every inspection covers compliance requirements and generates audit-ready documentation.`,
    relatedSlugs: ["audit", "osha", "quality-assurance"],
  },
  {
    term: "Construction Warranty",
    slug: "warranty",
    definition:
      "A contractor's obligation to repair or replace defective work within a specified period after project completion.",
    category: "Inspection",
    details: `## What is a Construction Warranty?

A **construction warranty** is a contractual obligation by the contractor to repair or replace defective work within a specified period after substantial completion. Warranties protect the owner against defects in materials, workmanship, and design.

### Common Warranty Periods
- **General contractor warranty** — 1–2 years
- **Structural warranty** — 10 years
- **Roofing warranty** — 5–20 years
- **HVAC warranty** — 1–5 years
- **Appliance warranties** — manufacturer-specific

### Warranty Inspections
- **30-day warranty inspection** — initial defect identification
- **11-month warranty inspection** — before the 1-year general warranty expires

### Digital Warranty Management
Modern construction software tracks warranty periods, automates inspection scheduling, and manages claims digitally.`,
    relatedSlugs: ["construction-defect", "punch-list", "deficiency"],
  },
  {
    term: "Construction Deficiency",
    slug: "deficiency",
    definition:
      "A shortcoming or inadequacy in the work that fails to meet the contract requirements, specifications, or applicable standards.",
    category: "Inspection",
    details: `## What is a Construction Deficiency?

A **deficiency** is any shortcoming, inadequacy, or deviation in the completed work from what was specified in the contract documents, applicable standards, or accepted industry practice.

### Deficiency vs Defect
- **Deficiency** — work does not meet the specification
- **Defect** — a flaw that affects performance, safety, or appearance

### Common Deficiencies
- Work not installed per the approved shop drawings
- Materials not matching the specification
- Dimensional errors
- Missing components
- Inadequate finish quality

### Tracking Deficiencies
Digital tools allow deficiencies to be logged with photos, assigned to responsible parties, and tracked through resolution — providing a clear audit trail for closeout.`,
    relatedSlugs: ["construction-defect", "punch-list", "non-conformance"],
  },
  {
    term: "Final Inspection",
    slug: "final-inspection",
    definition:
      "The last inspection performed before a certificate of occupancy is issued, verifying that the completed work meets all code and specification requirements.",
    category: "Inspection",
    details: `## What is a Final Inspection?

A **final inspection** is the last formal inspection performed before a certificate of occupancy (or completion) is issued. It verifies that the completed work meets all applicable building codes, fire codes, and contract specifications.

### What is Checked
- All permit-required inspections are complete
- Building code compliance
- Fire code compliance (alarms, sprinklers, extinguishers)
- Electrical and plumbing final
- Mechanical final
- Accessibility compliance
- Site and landscaping
- Signage and addresses
- Final grading and drainage

### Final Inspection vs Punch List
- **Final inspection** — regulatory (code compliance)
- **Punch list** — contractual (specification compliance)

### How SpaceCapture Helps
SpaceCapture's final inspection templates ensure every required item is checked, photographed, and signed off, creating a complete record for the building department and the owner.`,
    relatedSlugs: ["building-inspection", "punch-list", "inspection-report"],
  },
];

// --- Construction Methodology ---
const constructionTerms: GlossaryTerm[] = [
  {
    term: "Construction",
    slug: "construction",
    definition:
      "The process of building, repairing, or maintaining physical infrastructure including buildings, roads, bridges, and utilities.",
    category: "Construction",
    details: `## What is Construction?

**Construction** is the process of creating or assembling physical infrastructure. It covers residential, commercial, industrial, civil, and infrastructure projects and includes the planning, design, financing, and execution phases.

### Major Sectors
- **Building construction** — residential, commercial, mixed-use
- **Heavy civil construction** — roads, bridges, utilities
- **Industrial construction** — factories, plants, refineries
- **Modular / prefab** — factory-built components

### Key Activities
- Project planning and scheduling
- Procurement
- Site preparation
- Foundation, framing, and shell
- Mechanical, electrical, plumbing (MEP)
- Finishes
- Commissioning and handover`,
    relatedSlugs: ["building-construction", "civil-construction", "construction-management"],
  },
  {
    term: "Building Construction",
    slug: "building-construction",
    definition:
      "The process of creating buildings, including residential, commercial, industrial, and mixed-use structures.",
    category: "Construction",
    details: `## What is Building Construction?

**Building construction** is the largest segment of the construction industry, covering the design and assembly of buildings.

### Phases
1. **Pre-construction** — design, permits, bidding
2. **Site work** — excavation, foundations
3. **Superstructure** — framing, walls, roof
4. **MEP rough-in** — mechanical, electrical, plumbing
5. **Enclosure** — windows, doors, weather barrier
6. **Finishes** — drywall, flooring, paint
7. **Commissioning** — system startup, testing
8. **Handover** — owner walkthrough, training`,
    relatedSlugs: ["construction", "construction-management"],
  },
  {
    term: "Civil Construction",
    slug: "civil-construction",
    definition:
      "Construction of public infrastructure including roads, bridges, water systems, sewers, and utilities.",
    category: "Construction",
    details: `## What is Civil Construction?

**Civil construction** (also called heavy civil) is the construction of public infrastructure — roads, bridges, water systems, sewers, utilities, airports, ports, and rail.

### Key Differences from Building Construction
- Owner is typically a government agency
- Strict regulatory and inspection requirements (DOT, EPA)
- Longer project durations
- More complex environmental and right-of-way issues
- Specialised equipment and crews

### Common Software
Civil construction requires field inspection, daily reports, and compliance documentation specific to DOT and municipal standards.`,
    relatedSlugs: ["construction", "heavy-civil", "infrastructure"],
  },
  {
    term: "Residential Construction",
    slug: "residential-construction",
    definition:
      "Construction of housing — single-family homes, multi-family developments, townhouses, and apartments.",
    category: "Construction",
    details: `## What is Residential Construction?

**Residential construction** is the building of housing. It includes:

- **Single-family** — detached houses
- **Multi-family** — townhomes, duplexes, fourplexes
- **Apartments and condos** — mid- and high-rise
- **Custom homes** — bespoke builds for individual clients
- **Production homes** — repeatable plans at scale

### Key Software Needs
- Customer selections and approvals
- Pre-pour, pre-drywall, and final inspections
- Punch lists
- Warranty tracking
- 30-day and 11-month warranty inspections`,
    relatedSlugs: ["construction", "building-construction"],
  },
  {
    term: "Modular Construction",
    slug: "modular-construction",
    definition:
      "A construction method where buildings are produced as prefabricated modules in a factory and assembled on site.",
    category: "Construction",
    details: `## What is Modular Construction?

**Modular construction** is a method of building where the structure is produced as prefabricated modules in a factory, then transported to the site for assembly.

### Types
- **Volumetric** — whole 3D units (bathroom pods, hotel rooms)
- **Panelised** — wall, floor, and roof panels
- **Hybrid** — combination of volumetric and panelised

### Benefits
- Faster project completion
- Higher quality (factory-controlled)
- Less waste
- Less weather dependency
- Safer working conditions`,
    relatedSlugs: ["prefab-construction", "offsite-construction"],
  },
  {
    term: "Prefab Construction",
    slug: "prefab-construction",
    definition:
      "A construction method where building components are manufactured off-site and assembled on-site. Short for prefabricated construction.",
    category: "Construction",
    details: `## What is Prefab Construction?

**Prefab construction** (prefabricated construction) is the practice of assembling building components in a factory, then transporting them to the site for installation.

### Common Prefab Elements
- Wall panels
- Floor cassettes
- Roof trusses
- Bathroom pods
- MEP risers
- Structural steel members
- Concrete panels

### Industries
- Modular housing
- Hotels
- Schools
- Hospitals
- Data centres
- Worker accommodation`,
    relatedSlugs: ["modular-construction", "offsite-construction"],
  },
  {
    term: "Offsite Construction",
    slug: "offsite-construction",
    definition:
      "Construction methods where components are produced away from the final building site, then transported and assembled in place.",
    category: "Construction",
    details: `## What is Offsite Construction?

**Offsite construction** is a broad term covering any construction method where significant portions of the building are manufactured in a factory rather than at the final site. This includes modular, prefab, panelised, and pre-engineered building methods.

### Benefits
- Predictable schedules
- Higher quality
- Less site disruption
- Lower environmental impact
- Safer working conditions`,
    relatedSlugs: ["modular-construction", "prefab-construction"],
  },
  {
    term: "Sustainable Construction",
    slug: "sustainable-construction",
    definition:
      "Construction practices that reduce environmental impact through energy efficiency, water conservation, material selection, and waste reduction.",
    category: "Construction",
    details: `## What is Sustainable Construction?

**Sustainable construction** is the practice of designing and building in ways that reduce environmental impact. It is certified by programs like:
- **LEED** (US, by USGBC)
- **BREEAM** (UK)
- **WELL** (focused on occupant health)
- **Passive House** (energy performance)
- **Net Zero** (energy balance)

### Key Practices
- Energy-efficient design
- Water conservation
- Material selection with low embodied carbon
- Waste reduction and recycling
- Indoor environmental quality
- Sustainable site development`,
    relatedSlugs: ["green-building", "leed-certification"],
  },
  {
    term: "Green Building",
    slug: "green-building",
    definition:
      "A building designed, constructed, and operated to reduce environmental impact and improve occupant health. Often certified under LEED, BREEAM, or similar programs.",
    category: "Construction",
    details: `## What is a Green Building?

A **green building** is designed to reduce environmental impact across its lifecycle — from construction to operation to demolition.

### Common Features
- High-performance insulation and air-sealing
- Efficient HVAC and lighting
- Solar or other renewable energy
- Low-VOC finishes
- Water-efficient fixtures
- Stormwater management
- Native landscaping`,
    relatedSlugs: ["sustainable-construction", "leed-certification"],
  },
  {
    term: "BIM (Building Information Modeling)",
    slug: "bim",
    definition:
      "A digital representation of a building's physical and functional characteristics, used for design, construction, and operation.",
    category: "Technology",
    details: `## What is BIM?

**Building Information Modeling (BIM)** is a process involving the generation and management of digital representations of physical and functional characteristics of places.

### Benefits
- **3D visualisation** of the building before construction
- **Clash detection** — find where pipes hit ducts before construction
- **4D scheduling** — link the model to the project schedule
- **5D cost** — extract quantities and costs from the model
- **Facility management** — use the model for operations after handover

### Common Tools
- Autodesk Revit
- Bentley OpenBuildings
- ArchiCAD
- Tekla Structures (for steel)`,
    relatedSlugs: ["digital-twin", "bim-360"],
  },
  {
    term: "4D BIM",
    slug: "4d-bim",
    definition:
      "Building Information Modeling with the fourth dimension — time — added. Links the 3D model to the project schedule.",
    category: "Technology",
    details: `## What is 4D BIM?

**4D BIM** is the integration of 3D BIM with the project schedule. Each model element is linked to a schedule activity, so the project can be visualized over time.

### Benefits
- Improved sequencing
- Better logistics planning
- Earlier identification of schedule conflicts
- Better communication with stakeholders

### Common Tools
- Autodesk Navisworks
- Synchro
- Vico Office`,
    relatedSlugs: ["bim", "bim-360"],
  },
  {
    term: "Construction Management",
    slug: "construction-management",
    definition:
      "The planning, coordination, and control of a construction project from inception to completion.",
    category: "Construction",
    details: `## What is Construction Management?

**Construction management** is the overall planning, coordination, and control of a construction project from inception to completion. It is performed by a construction manager (CM), general contractor (GC), or program manager.

### Key Responsibilities
- Project planning and scheduling
- Budget management
- Procurement
- Subcontractor management
- Quality management
- Safety management
- Risk management
- Communication with the owner

### Software
Modern construction management software is mobile-first, AI-powered, and built around the field workflows that GCs run every day.`,
    relatedSlugs: ["project-management", "construction"],
  },
  {
    term: "Construction Project Manager",
    slug: "construction-project-manager",
    definition:
      "The person responsible for planning, executing, and closing a construction project on time, on budget, and to spec.",
    category: "Roles",
    details: `## What Does a Construction Project Manager Do?

A **construction project manager** is responsible for:
- Defining the project scope and schedule
- Managing the budget
- Selecting and managing subcontractors
- Coordinating with the owner, architect, and engineers
- Managing risks and changes
- Reporting on progress
- Closing out the project

### Skills
- Leadership and communication
- Technical construction knowledge
- Contract and claims management
- Scheduling and budgeting
- Software proficiency (project management, BIM, scheduling)`,
    relatedSlugs: ["construction-management", "general-contractor"],
  },
  {
    term: "General Contractor",
    slug: "general-contractor",
    definition:
      "The party responsible for the day-to-day oversight of a construction site and the management of trade contractors.",
    category: "Roles",
    details: `## What is a General Contractor?

A **general contractor** (GC) is the party responsible for the day-to-day management of a construction site, including:
- Hiring and managing subcontractors
- Ordering materials
- Scheduling inspections
- Maintaining safety
- Communicating with the owner and architect

### GC vs CM
A GC is contracted to deliver a project at a guaranteed maximum price or lump sum. A construction manager (CM) is contracted to manage the process on behalf of the owner, often with a fee structure rather than a fixed price.`,
    relatedSlugs: ["construction-management", "subcontractor"],
  },
  {
    term: "Subcontractor",
    slug: "subcontractor",
    definition:
      "A trade contractor hired by the general contractor to perform a specific portion of the work (e.g., electrical, plumbing, framing).",
    category: "Roles",
    details: `## What is a Subcontractor?

A **subcontractor** (sub) is a trade contractor hired by the general contractor to perform a specific scope of work. Common trades include:
- Electrical
- Plumbing
- HVAC
- Framing
- Drywall
- Concrete
- Roofing
- Tile
- Painting
- Glazing

### Subcontractor Management
Gcs manage subs through:
- Pre-qualification
- Contract and scope clarity
- Schedule coordination
- Quality inspections
- Safety compliance
- Pay applications`,
    relatedSlugs: ["general-contractor", "construction-management"],
  },
  {
    term: "Construction Defect",
    slug: "construction-defect",
    definition:
      "A deficiency in the design, materials, or workmanship of a building that affects its performance, safety, or appearance.",
    category: "Quality",
    details: `## What is a Construction Defect?

A **construction defect** is any deficiency in the building that reduces its value, performance, or safety. Defects can be:
- **Patent** — visible on inspection
- **Latent** — hidden, discovered later

### Common Defects
- Cracking (concrete, drywall, plaster)
- Water ingress (roof, walls, foundation)
- Structural movement
- Inadequate insulation
- Electrical issues
- Plumbing leaks
- Poor finishes (paint, tile, trim)
- Window / door failure
- HVAC performance

### Detection
Modern defect detection uses AI and computer vision to flag issues from site photos — replacing manual review.`,
    relatedSlugs: ["defect-detection", "punch-list", "warranty"],
  },
  {
    term: "Punch List",
    slug: "punch-list",
    definition:
      "A document listing work that does not conform to contract specifications, typically created near the end of a project.",
    category: "Quality",
    details: `## What is a Punch List?

A **punch list** (or snag list in the UK) is a document prepared near the end of a construction project listing items that do not conform to contract specifications. The general contractor must complete or correct these items before final payment.

### Common Items
- Cosmetic defects (scratches, scuffs, paint issues)
- Missing or incorrect hardware
- Performance issues (sticking windows, leaking faucets)
- Incomplete installations
- Cleanup and touch-up

### Digital Punch Lists
Modern punch lists are created from a mobile app during the inspection, with each item geo-tagged, photo-evidenced, and assigned to the responsible sub. Status is tracked to closeout.`,
    relatedSlugs: ["construction-defect", "snag-list", "defect-detection"],
  },
  {
    term: "Snag List",
    slug: "snag-list",
    definition:
      "UK term for a punch list — a document listing items that need to be corrected before project handover.",
    category: "Quality",
    details: `## What is a Snag List?

A **snag list** is the UK and Australian term for what Americans call a **punch list** — a document listing items that need to be corrected or completed before project handover.

### Common Items
- Cosmetic defects
- Missing hardware
- Performance issues
- Incomplete installations
- Final cleanup`,
    relatedSlugs: ["punch-list"],
  },
  {
    term: "Defect Detection",
    slug: "defect-detection",
    definition:
      "The process of identifying construction errors, often using AI or computer vision to spot issues like cracks or misalignments automatically.",
    category: "AI & Quality",
    details: `## AI-Powered Defect Detection

**Defect detection** in modern construction often leverages Artificial Intelligence and Computer Vision to automatically identify quality issues from site imagery.

### How it Works
1. Camera or drone captures site imagery
2. AI model analyzes the image
3. Likely defects are flagged with severity and type
4. Inspector reviews and confirms
5. Punch list is auto-generated

### Common Defect Types Detected
- Cracks in concrete, drywall, plaster
- Spalling
- Corrosion of steel
- Water stains and moisture
- Missing or incorrect components
- PPE non-compliance
- Surface defects (paint, tile)`,
    relatedSlugs: ["construction-defect", "computer-vision"],
  },
  {
    term: "AI Defect Analysis",
    slug: "ai-defect-analysis",
    definition:
      "The use of AI to analyze detected defects for patterns, severity, and root causes — enabling data-driven decisions.",
    category: "AI & Quality",
    details: `## AI-Driven Defect Analysis

**AI defect analysis** goes beyond simple detection. It categorizes issues, predicts potential future failures based on historical data, and helps prioritize repairs.

### Capabilities
- **Trend analysis** — recurring issues across multiple projects
- **Severity scoring** — auto-grading defects based on potential impact
- **Predictive maintenance** — suggesting interventions before failure
- **Root cause analysis** — connecting defects to upstream causes`,
    relatedSlugs: ["defect-detection", "computer-vision"],
  },
  {
    term: "Computer Vision",
    slug: "computer-vision",
    definition:
      "A field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs.",
    category: "AI & Technology",
    details: `## Computer Vision in Construction

**Computer vision** allows machines to "see" and understand the construction site. It is the core technology behind:
- Automated progress tracking
- Safety monitoring (PPE, falls, geofencing)
- Defect detection
- Quality control
- Asset recognition

### Common Applications
- **Drone imagery** — site progress, facade inspection
- **Fixed cameras** — safety monitoring
- **Smartphone photos** — inspection capture
- **360° cameras** — interior and exterior walkthroughs
- **Body cameras** — first-person inspection`,
    relatedSlugs: ["defect-detection", "ai-defect-analysis"],
  },
  {
    term: "Predictive Analytics",
    slug: "predictive-analytics",
    definition:
      "The use of data, statistical algorithms, and machine learning to identify the likelihood of future outcomes based on historical data.",
    category: "AI & Data",
    details: `## Predictive Analytics in Construction

**Predictive analytics** helps construction managers foresee risks such as:
- Schedule delays
- Safety incidents
- Budget overruns
- Equipment failures
- Weather impacts
- Defect rates

By using historical data from past projects, the models can flag early warning signs and recommend interventions.`,
    relatedSlugs: ["computer-vision", "ai-defect-analysis"],
  },
  {
    term: "Construction Blueprint",
    slug: "blueprint",
    definition:
      "A detailed technical drawing that shows the design, dimensions, and specifications of a building or structure before construction begins.",
    category: "Construction",
    details: `## What is a Construction Blueprint?

A **construction blueprint** is a detailed technical drawing that serves as the primary communication tool between the design team and the construction team. Despite the name, modern blueprints are no longer blue — they are printed in black and white or viewed digitally.

### What Blueprints Show
- Floor plans, elevations, and sections
- Dimensions and tolerances
- Material specifications
- Structural details
- MEP layouts
- Detail drawings and schedules

### Blueprint Revisions
Blueprints go through multiple revisions during design. The contractor must always verify they are working from the latest revision. Digital plan rooms and BIM models have largely replaced paper blueprints.

### How SpaceCapture Helps
SpaceCapture's inspection checklists can be linked directly to blueprint references, ensuring inspectors verify work against the correct specification and revision.`,
    relatedSlugs: ["specification", "shop-drawing", "as-built"],
  },
  {
    term: "Construction Specification",
    slug: "specification",
    definition:
      "A written document that describes the materials, workmanship, and standards required for a construction project.",
    category: "Construction",
    details: `## What is a Construction Specification?

A **specification** (or spec) is the written component of the contract documents that describes the materials, products, workmanship standards, and installation requirements for the project.

### Specification Formats
- **MasterFormat** (CSI) — most common in the US, organized by division
- **UniFormat** — system-based, used for early-stage estimating
- **NRM** — UK quantity surveying standard

### Key Divisions
- Division 01 — General Requirements
- Division 02 — Existing Conditions
- Division 03 — Concrete
- Division 04 — Masonry
- Division 05 — Metals
- Division 06 — Wood, Plastics, Composites
- Division 21 — Fire Suppression
- Division 22 — Plumbing
- Division 23 — HVAC
- Division 26 — Electrical

### Specifications vs Drawings
Drawings show what to build; specifications describe how to build it. Both are contract documents and equally binding.`,
    relatedSlugs: ["blueprint", "shop-drawing", "submittal"],
  },
  {
    term: "Shop Drawing",
    slug: "shop-drawing",
    definition:
      "Detailed drawings prepared by a subcontractor, fabricator, or supplier showing how a specific component will be manufactured and installed.",
    category: "Construction",
    details: `## What is a Shop Drawing?

A **shop drawing** is a detailed drawing, diagram, schedule, or other data specially prepared for the work by the contractor or any subcontractor, manufacturer, supplier, or distributor to illustrate some portion of the work.

### Shop Drawings vs Design Drawings
- **Design drawings** — show what is to be built (by the architect/engineer)
- **Shop drawings** — show how it will be fabricated and installed (by the contractor)

### Common Shop Drawings
- Structural steel detailing
- Precast concrete panels
- Curtain wall and glazing systems
- MEP coordination drawings
- Cabinetry and millwork
- Fire protection layouts

### Approval Process
Shop drawings go through a review cycle: contractor prepares, architect/engineer reviews, and either approves, returns for revision, or rejects.`,
    relatedSlugs: ["blueprint", "specification", "submittal", "as-built"],
  },
  {
    term: "Pay Application",
    slug: "pay-application",
    definition:
      "A formal request for payment submitted by the contractor to the owner, documenting work completed during a billing period.",
    category: "Construction",
    details: `## What is a Pay Application?

A **pay application** (or application for payment) is the formal document a contractor submits to the owner requesting payment for work completed during a specific billing period. It is typically prepared monthly and follows a standardized format.

### AIA G702/G703 Format
The most common format in the US:
- **G702** — Application and Certificate for Payment (summary)
- **G703** — Continuation Sheet (detailed breakdown by line item)

### What's Included
- Original contract sum
- Change orders (approved and pending)
- Total contract sum
- Work completed to date
- Materials stored (stored materials)
- Retainage
- Current payment due

### Digital Pay Applications
Modern construction software automates pay application calculations, tracks retainage, and integrates with accounting systems.`,
    relatedSlugs: ["retainage", "change-order", "construction-contract"],
  },
  {
    term: "Retainage",
    slug: "retainage",
    definition:
      "A portion of the contract price withheld by the owner until the work is substantially complete, ensuring the contractor fulfills all obligations.",
    category: "Construction",
    details: `## What is Retainage?

**Retainage** is a portion (typically 5–10%) of the contract price withheld by the owner from each pay application. It serves as leverage to ensure the contractor completes all work, corrects deficiencies, and fulfills closeout obligations.

### How Retainage Works
1. Contractor submits pay application
2. Owner pays 90–95% of the certified amount
3. The retainage is held in escrow
4. Upon substantial completion, a portion is released
5. Final retainage is released after all closeout items are complete

### Retainage Release
- **Partial release** — upon substantial completion
- **Final release** — after punch list completion, final inspections, and submittal of closeout documents

### State Laws
Many states have retainage laws that limit the amount and timing of retainage, especially on public projects.`,
    relatedSlugs: ["pay-application", "punch-list", "construction-contract"],
  },
  {
    term: "Unit Price Contract",
    slug: "unit-price",
    definition:
      "A contract where the contractor is paid a fixed price per unit of work, with the final cost determined by the actual quantity of work performed.",
    category: "Construction",
    details: `## What is a Unit Price Contract?

A **unit price contract** is a contract structure where the contractor bids a fixed price per unit of work (per cubic yard of concrete, per linear foot of pipe, per square yard of paving), and the total cost is determined by the actual quantities installed.

### When to Use
- Work quantities are uncertain at the time of bidding
- Civil and infrastructure projects (roads, utilities, earthwork)
- Projects where significant quantities changes are expected

### Advantages
- Fair pricing when quantities are uncertain
- Reduced risk for both parties
- Easy to adjust for actual conditions

### Disadvantages
- Requires accurate quantity measurement
- Can incentivize over-measurement
- More administrative overhead

### Key Considerations
- Unit prices must include all labor, materials, equipment, overhead, and profit
- The engineer's estimate of quantities is typically used as the baseline`,
    relatedSlugs: ["lump-sum", "cost-plus", "construction-contract"],
  },
  {
    term: "Lump Sum Contract",
    slug: "lump-sum",
    definition:
      "A contract where the contractor agrees to perform the entire scope of work for a fixed price, regardless of actual costs incurred.",
    category: "Construction",
    details: `## What is a Lump Sum Contract?

A **lump sum contract** (or fixed-price contract) is the most common contract type in construction. The contractor agrees to complete the entire scope of work for a single, fixed price.

### Advantages
- Price certainty for the owner
- Simpler administration
- Contractor has incentive to control costs

### Disadvantages
- Higher risk for the contractor
- May include higher contingency in the bid
- Less flexibility for changes

### When to Use
- Well-defined scope and drawings
- Minimal design changes expected
- Competitive bidding environment

### Common Forms
- AIA A101 — Standard Form of Agreement Between Owner and Contractor (Stipulated Sum)
- ConsensusDocs 200`,
    relatedSlugs: ["unit-price", "cost-plus", "construction-contract"],
  },
  {
    term: "Cost Plus Contract",
    slug: "cost-plus",
    definition:
      "A contract where the owner pays the contractor for actual costs plus an agreed-upon fee for overhead and profit.",
    category: "Construction",
    details: `## What is a Cost Plus Contract?

A **cost plus contract** is a contract structure where the owner reimburses the contractor for all allowable costs incurred during the work, plus an additional fee for overhead and profit.

### Fee Structures
- **Cost + Fixed Fee** — predetermined fee regardless of actual cost
- **Cost + Percentage** — fee is a percentage of actual cost
- **Cost + Incentive** — fee adjusted based on performance targets (schedule, cost savings)

### When to Use
- Scope is not well defined
- Urgent or fast-track projects
- Design-build delivery
- Complex or unique projects

### Advantages
- Flexibility for changes
- Lower risk for the contractor
- Faster mobilization

### Disadvantages
- Less cost certainty for the owner
- Requires detailed cost tracking
- Potential for cost overruns without incentives`,
    relatedSlugs: ["unit-price", "lump-sum", "construction-contract"],
  },
];

// --- Documentation & Reporting ---
const documentationTerms: GlossaryTerm[] = [
  {
    term: "Daily Report",
    slug: "daily-report",
    definition:
      "A daily record of job site activity, including weather, workforce, equipment, materials, and progress.",
    category: "Documentation",
    details: `## What is a Daily Report?

A **daily report** (or daily log) is the official record of what happened on a construction site on any given day. It is often the first document referenced in legal disputes.

### Typical Contents
- Date and weather
- Workforce counts (by trade)
- Equipment on site
- Materials delivered
- Work completed
- Visitors and inspections
- Incidents and delays
- Photos`,
    relatedSlugs: ["daily-log", "construction-defect"],
  },
  {
    term: "Daily Log",
    slug: "daily-log",
    definition:
      "A daily record of job site activity, weather, workforce counts, and progress. Often digitized to improve accuracy.",
    category: "Documentation",
    details: `## What is a Daily Log?

A **daily log** is a record of activity on a construction site for a given day. It serves as the official, contemporaneous record of what happened, and is often the first document referenced in disputes.

### What it Captures
- Weather
- Manpower (by trade)
- Equipment
- Materials delivered
- Work completed
- Visitors
- Inspections
- Issues and delays

### Digital Daily Logs
Modern daily logs are created from a mobile app, with photos, GPS, and auto-fill. The log is signed by the superintendent and distributed to the team.`,
    relatedSlugs: ["daily-report"],
  },
  {
    term: "Dilapidation Report",
    slug: "dilapidation-report",
    definition:
      "A documented survey of a property's condition, typically performed before and after construction work that may cause damage.",
    category: "Documentation",
    details: `## What is a Dilapidation Report?

A **dilapidation report** (or condition report) is a documented survey of a property's condition, used to record pre-existing damage before construction begins and to identify any new damage after.

### Common Uses
- Before construction near a neighbouring property
- Before a tenant moves out (rental)
- Before a lease ends
- For insurance purposes

### What it Captures
- Existing cracks, stains, damage
- Pre-existing conditions
- Photo evidence of every item
- Sign-off by inspector and property owner`,
    relatedSlugs: ["pre-construction-inspection", "property-condition-report"],
  },
  {
    term: "Property Condition Report",
    slug: "property-condition-report",
    definition:
      "A documented record of a property's condition at a specific point in time, often used for rentals, sales, and insurance.",
    category: "Documentation",
    details: `## What is a Property Condition Report?

A **property condition report** (PCR) is a documented record of a property's condition, used in:
- **Rental move-in and move-out** — protect both landlord and tenant
- **Real estate sales** — disclose known defects
- **Insurance underwriting** — assess risk
- **Property management** — track condition over time

### What it Captures
- Every room and major system
- Existing damage with photos
- Working order of appliances, fixtures, HVAC
- Sign-off`,
    relatedSlugs: ["dilapidation-report", "property-inspection"],
  },
  {
    term: "Building Condition Report",
    slug: "building-condition-report",
    definition:
      "A comprehensive assessment of a building's physical condition, often used for capital planning, due diligence, and compliance.",
    category: "Documentation",
    details: `## What is a Building Condition Report?

A **building condition report** (BCR or PCA) is a comprehensive assessment of a building's physical condition. It is commonly used for:
- **Property due diligence** (pre-purchase)
- **Capital planning** (multi-year capital expenditure)
- **Insurance underwriting**
- **Compliance** with safety and accessibility codes

### What it Covers
- Site and grounds
- Structure and building envelope
- Roofing
- Mechanical and electrical systems
- Plumbing
- Vertical transportation (elevators)
- Life safety and accessibility

### Standards
- **ASTM E2018** — Standard Guide for Property Condition Assessments
- **Bank PCA format**`,
    relatedSlugs: ["building-inspection", "property-condition-report"],
  },
  {
    term: "As-Built",
    slug: "as-built",
    definition:
      "Drawings or models that show the dimensions, geometry, and location of all elements of the work as actually constructed.",
    category: "Documentation",
    details: `## As-Built Documentation

**As-built** drawings are the final set of drawings (or BIM model) that show the building as it was actually constructed — accounting for all changes, field adjustments, and substitutions.

### Why They Matter
- Operations and maintenance reference
- Future renovation planning
- Code and permit closure
- Insurance documentation
- Dispute resolution

### How Modern As-Builts Are Created
- BIM updated with field changes
- Laser scans and 360° photos overlaid on the model
- Punch-list sign-off drives final as-built closure`,
    relatedSlugs: ["bim", "digital-twin"],
  },
  {
    term: "RFI (Request for Information)",
    slug: "rfi",
    definition:
      "A formal process used in construction to clarify details in the plans or specifications.",
    category: "Project Management",
    details: `## What is an RFI?

A **Request for Information (RFI)** is a standard business process whose purpose is to collect written information needed to clarify the plans, drawings, or specifications.

### Why RFIs Matter
- **Clarity** — resolve ambiguities in the contract documents
- **Documentation** — paper trail of decisions
- **Cost control** — prevent rework from unresolved questions

### The RFI Process
1. **Identification** — sub or GC identifies a gap
2. **Drafting** — the question is formally documented
3. **Submission** — sent to the architect / engineer
4. **Response** — the answer is provided
5. **Distribution** — shared with all affected parties`,
    relatedSlugs: ["submittal", "change-order"],
  },
  {
    term: "Submittal",
    slug: "submittal",
    definition:
      "Shop drawings, material data, samples, and product data. Submittals are required primarily for the architect and engineer to verify that the correct products will be installed.",
    category: "Project Management",
    details: `## Understanding Submittals

**Submittals** involve shop drawings, material data, samples, and product data. They are required primarily for the architect and engineer to verify that the correct products will be installed.

### Types
- **Product data** — manufacturer specifications
- **Shop drawings** — fabrication and installation details
- **Samples** — physical material examples
- **Mock-ups** — for materials that need on-site verification`,
    relatedSlugs: ["rfi"],
  },
  {
    term: "Change Order",
    slug: "change-order",
    definition:
      "Work that is added to or deleted from the original scope, which alters the original contract amount and/or completion date.",
    category: "Contracts",
    details: `## Managing Change Orders

A **change order** is a standard industry document that amends the construction contract. It describes the new work, the price change, and any schedule adjustment.

### Process
1. Identify the change
2. Price the change (sub quotes, labor, materials)
3. Submit to the owner for approval
4. Get signed change order
5. Execute the work
6. Bill per the change order

### Software
Modern change-order management is built into field-first construction software. Photos, signatures, and pricing are captured in the same platform.`,
    relatedSlugs: ["rfi", "construction-contract"],
  },
  {
    term: "Construction Contract",
    slug: "construction-contract",
    definition:
      "A legally binding agreement between the owner and the contractor that defines the scope, schedule, price, and terms of a construction project.",
    category: "Contracts",
    details: `## What is a Construction Contract?

A **construction contract** is a legally binding agreement between the owner (or the owner's representative) and the contractor that defines:
- **Scope** — what work is included and excluded
- **Schedule** — start, finish, and milestone dates
- **Price** — lump sum, GMP, cost-plus, or unit price
- **Terms** — payment, retainage, change orders, disputes

### Common Forms
- **AIA** — American Institute of Architects contract family
- **ConsensusDocs** — industry-standard contract family
- **EJCDC** — Engineers Joint Contract Documents Committee
- **Custom** — owner-drafted`,
    relatedSlugs: ["change-order"],
  },
  {
    term: "Daily Safety Report",
    slug: "daily-safety-report",
    definition:
      "A daily record of safety observations, hazards identified, and corrective actions taken on a construction site.",
    category: "Safety",
    details: `## What is a Daily Safety Report?

A **daily safety report** is a contemporaneous record of the safety walk conducted each day on a construction site. It includes:
- Hazards identified
- PPE compliance
- Near-misses and incidents
- Corrective actions taken
- Toolbox talk topics and attendance
- Sign-off by the safety officer`,
    relatedSlugs: ["site-inspection", "toolbox-talk"],
  },
];

// --- Safety & PPE ---
const safetyTerms: GlossaryTerm[] = [
  {
    term: "PPE (Personal Protective Equipment)",
    slug: "ppe",
    definition:
      "Protective clothing, helmets, goggles, or other equipment designed to protect the wearer from injury or infection.",
    category: "Safety",
    details: `## Personal Protective Equipment (PPE)

**PPE** refers to protective clothing, helmets, goggles, or other garments designed to protect the wearer's body from injury or infection.

### Common Construction PPE
- Hard hat
- Safety glasses
- High-visibility vest
- Steel-toe boots
- Gloves
- Hearing protection
- Respiratory protection
- Fall arrest harness

### AI PPE Detection
Modern computer-vision systems can detect PPE compliance from site photos and video streams, alerting supervisors to non-compliance in real time.`,
    relatedSlugs: ["site-inspection", "toolbox-talk", "osha"],
  },
  {
    term: "Toolbox Talk",
    slug: "toolbox-talk",
    definition:
      "A short safety meeting held on the job site to discuss specific hazards and safe work practices.",
    category: "Safety",
    details: `## What is a Toolbox Talk?

A **toolbox talk** is an informal group discussion that focuses on a particular safety issue. These meetings are usually short (5–15 minutes) and held at the job site before the work day begins.

### Topics
- Working at heights
- Lifting and ergonomics
- Electrical safety
- Confined spaces
- Hot work
- PPE compliance
- Seasonal hazards (heat, cold)

### Modern Toolbox Talks
Pre-loaded templates, attendance tracking with on-device signatures, and a record of which talks each worker has attended.`,
    relatedSlugs: ["ppe", "site-inspection"],
  },
  {
    term: "OSHA",
    slug: "osha",
    definition:
      "Occupational Safety and Health Administration. The US federal agency that sets and enforces workplace safety standards.",
    category: "Safety",
    details: `## What is OSHA?

The **Occupational Safety and Health Administration (OSHA)** is the US federal agency that sets and enforces workplace safety standards. Most construction sites are subject to OSHA regulations.

### Key Construction Standards
- **29 CFR 1926** — Safety and Health Regulations for Construction
- Fall protection
- Scaffolding
- Electrical
- Excavations
- PPE
- Hazard communication

### Compliance
Construction software like SpaceCapture includes pre-built OSHA-aligned safety checklists, making compliance and audit-readiness much easier.`,
    relatedSlugs: ["ppe", "toolbox-talk", "site-safety-inspection"],
  },
  {
    term: "Site Safety Inspection",
    slug: "site-safety-inspection",
    definition:
      "A documented walk-through of a job site to identify safety hazards and verify OSHA compliance.",
    category: "Safety",
    details: `## What is a Site Safety Inspection?

A **site safety inspection** is a documented walk-through of a job site. It is required by OSHA and is the single most effective way to prevent incidents.

### Process
1. Walk the site with a structured safety checklist
2. Capture photos of every observation
3. Severity-rate each hazard
4. Assign corrective actions
5. Sign-off by the safety officer and the responsible party
6. Track to closure`,
    relatedSlugs: ["osha", "ppe", "toolbox-talk", "site-inspection"],
  },
  {
    term: "Job Safety Analysis (JSA)",
    slug: "jsa",
    definition:
      "A systematic process of identifying potential hazards associated with each step of a job task and developing safe work procedures.",
    category: "Safety",
    details: `## What is a Job Safety Analysis (JSA)?

A **job safety analysis (JSA)** is a procedure that breaks down a job into individual steps, identifies potential hazards in each step, and determines safe work procedures to control those hazards.

### JSA Process
1. Select the job to be analyzed
2. Break the job into individual steps
3. Identify hazards associated with each step
4. Determine preventive measures for each hazard
5. Communicate the JSA to all workers
6. Monitor compliance

### When to Perform a JSA
- Before starting a new or unfamiliar task
- When conditions change
- After an incident or near miss
- When reviewing procedures

### How SpaceCapture Helps
SpaceCapture provides JSA templates that can be completed on-site with photos, signatures, and real-time review by the safety team.`,
    relatedSlugs: ["sds", "fall-protection", "confined-space", "toolbox-talk"],
  },
  {
    term: "Safety Data Sheet (SDS)",
    slug: "sds",
    definition:
      "A document that provides information on the properties of hazardous chemicals, including safe handling, storage, and emergency procedures.",
    category: "Safety",
    details: `## What is a Safety Data Sheet (SDS)?

A **safety data sheet (SDS)** is a standardized document that provides comprehensive information about a hazardous chemical, including its properties, hazards, protective measures, and safety precautions for handling, storing, and transporting the chemical.

### The 16 Sections
1. Identification
2. Hazard(s) identification
3. Composition / information on ingredients
4. First-aid measures
5. Fire-fighting measures
6. Accidental release measures
7. Handling and storage
8. Exposure controls / PPE
9. Physical and chemical properties
10. Stability and reactivity
11. Toxicological information
12. Ecological information
13. Disposal considerations
14. Transport information
15. Regulatory information
16. Other information

### GHS Compliance
The Globally Harmonized System (GHS) standardized SDS formatting internationally, making them consistent across countries.`,
    relatedSlugs: ["jsa", "ppe", "osha", "lockout-tagout"],
  },
  {
    term: "Incident Report",
    slug: "incident-report",
    definition:
      "A formal document that records the details of an accident, injury, near miss, or other safety-related event on a construction site.",
    category: "Safety",
    details: `## What is an Incident Report?

An **incident report** is a formal document that records all details of an accident, injury, near miss, property damage, or other safety-related event on a construction site. It is the foundation of incident investigation and corrective action.

### What to Include
- Date, time, and location
- Names and roles of involved parties
- Description of what happened
- Injuries sustained (if any)
- Property damage
- Witnesses
- Photos and evidence
- Root cause analysis
- Corrective actions

### Reporting Timeline
- **Immediate** — first aid incidents
- **Within 24 hours** — recordable incidents
- **Within 8 hours** — fatalities (OSHA requirement)
- **Within 30 days** — hospitalizations, amputations, eye loss (OSHA)

### Digital Incident Reporting
Mobile apps enable immediate capture of incident details, photos, and signatures at the scene, eliminating the delay and lost information of paper-based reporting.`,
    relatedSlugs: ["near-miss", "jsa", "osha", "site-safety-inspection"],
  },
  {
    term: "Near Miss Report",
    slug: "near-miss",
    definition:
      "A documentation of an event that could have resulted in injury or damage but did not, used to prevent future incidents.",
    category: "Safety",
    details: `## What is a Near Miss?

A **near miss** is an event that could have resulted in injury, death, or property damage but did not, usually due to chance or timely intervention. Near-miss reporting is a critical component of a proactive safety culture.

### Why Near-Miss Reporting Matters
- For every serious incident, there are typically 300 near misses (Heinrich's pyramid)
- Near misses are free lessons — learning from them prevents future injuries
- Reporting near misses builds a culture of safety awareness

### What to Report
- Close calls with equipment
- Objects falling from height without hitting anyone
- Workers narrowly avoiding struck-by incidents
- Electrical near contacts
- Trips and stumbles in hazardous areas

### How SpaceCapture Helps
SpaceCapture makes near-miss reporting fast and easy from the field, with structured templates that capture the essentials needed for analysis and corrective action.`,
    relatedSlugs: ["incident-report", "jsa", "site-safety-inspection"],
  },
  {
    term: "Fall Protection",
    slug: "fall-protection",
    definition:
      "Systems and practices designed to prevent workers from falling from heights, including guardrails, personal fall arrest systems, and safety nets.",
    category: "Safety",
    details: `## Fall Protection in Construction

**Fall protection** is the use of systems, practices, and equipment to prevent workers from falling from heights. Falls are the leading cause of death in the construction industry.

### OSHA Requirements
- **1926.501** — fall protection required at 6 feet (construction)
- **1926.502** — fall protection systems criteria
- **1926.503** — training requirements

### Types of Fall Protection
- **Guardrails** — passive fall protection
- **Personal Fall Arrest System (PFAS)** — harness, lanyard, anchor
- **Safety nets** — catch falls below
- **Positioning devices** — hold worker in place
- **Warning line systems** — alert workers to roof edge
- **Controlled access zones** — limited access areas

### The Hierarchy
1. Eliminate the fall hazard (prefabrication, guardrails)
2. Guard against the hazard (passive protection)
3. Fall restraint (prevent the worker from reaching the edge)
4. Fall arrest (stop the fall in progress)
5. Administrative controls (safety monitors, warning lines)`,
    relatedSlugs: ["scaffolding-safety", "confined-space", "ppe", "osha"],
  },
  {
    term: "Lockout/Tagout (LOTO)",
    slug: "lockout-tagout",
    definition:
      "A safety procedure ensuring that dangerous machines are properly shut off and not restarted before maintenance is completed.",
    category: "Safety",
    details: `## What is Lockout/Tagout (LOTO)?

**Lockout/tagout (LOTO)** is a safety procedure used in industry and construction to ensure that dangerous machines and energy sources are properly shut off, isolated, and not re-energized before maintenance or service work is completed.

### The Six Steps
1. **Preparation** — identify all energy sources
2. **Shutdown** — turn off the machine
3. **Isolation** — isolate the machine from energy sources
4. **Lockout/Tagout** — apply locks and tags
5. **Stored energy verification** — verify zero energy state
6. **Verification** — test that the machine cannot be started

### OSHA Standard
29 CFR 1910.147 — The Control of Hazardous Energy (Lockout/Tagout)

### Common Energy Sources
- Electrical
- Hydraulic
- Pneumatic
- Thermal
- Chemical
- Gravitational
- Stored mechanical energy`,
    relatedSlugs: ["jsa", "sds", "electrical-safety", "osha"],
  },
  {
    term: "Confined Space Entry",
    slug: "confined-space",
    definition:
      "Entry into a space that is not designed for continuous occupancy, has limited access and egress, and may contain hazardous atmospheres.",
    category: "Safety",
    details: `## What is Confined Space Entry?

A **confined space** is a space that is large enough for a worker to enter, has limited or restricted means of entry/exit, and is not designed for continuous occupancy. Entry into these spaces is regulated by OSHA due to the serious hazards they present.

### Common Confined Spaces in Construction
- Tanks and vessels
- Vaults and manholes
- Trenches and excavations
- Silos and hoppers
- Ductwork and piping
- Attic and crawl spaces

### Permit-Required Confined Space
A confined space that contains or has the potential to contain a hazardous atmosphere, material with engulfment potential, converging walls, or any other serious safety hazard.

### Entry Requirements
1. Entry permit signed by authorized person
2. Atmospheric testing before and during entry
3. Ventilation
4. Attendant stationed outside
5. Rescue plan in place
6. Communication procedures established
7. PPE and rescue equipment available`,
    relatedSlugs: ["jsa", "lockout-tagout", "excavation-safety", "osha"],
  },
  {
    term: "Excavation Safety",
    slug: "excavation-safety",
    definition:
      "Safety measures and practices designed to protect workers from hazards associated with excavations, trenches, and earthwork operations.",
    category: "Safety",
    details: `## Excavation Safety

**Excavation safety** encompasses the practices, procedures, and equipment used to protect workers from the hazards of working in or near excavations and trenches. Cave-ins are one of the most dangerous construction hazards.

### OSHA Requirements
29 CFR 1926 Subpart P — Excavations

### Key Requirements
- **Soil classification** — Type A, B, or C
- **Protective systems** — sloping, shoring, or shielding
- **Daily inspections** — before each shift and after rain
- **Competent person** — designated to inspect and authorize entry
- **Access/egress** — ladders, ramps, or stairs within 25 feet
- **Utilities** — locate and mark before digging
- **Spoil piles** — kept at least 2 feet from the edge

### Protective Systems
- **Sloping/benching** — cut the trench walls at a safe angle
- **Shoring** — hydraulic or timber supports
- **Shielding** — trench box or trench shield`,
    relatedSlugs: ["confined-space", "jsa", "scaffolding-safety", "osha"],
  },
  {
    term: "Scaffolding Safety",
    slug: "scaffolding-safety",
    definition:
      "Safety standards and practices for the erection, use, and dismantling of scaffolds to protect workers at heights.",
    category: "Safety",
    details: `## Scaffolding Safety

**Scaffolding safety** covers the standards, practices, and equipment requirements for working on scaffolds. Scaffolds are used extensively in construction and are regulated by OSHA.

### OSHA Requirements
29 CFR 1926.451–454 — Scaffolds

### Key Requirements
- Designed by a qualified person for loads and configuration
- Erected and dismantled under supervision of a competent person
- Inspected before each shift by a competent person
- Guardrails, midrails, and toeboards on open sides
- Full planking or decking on working levels
- Access provided (ladders, stairs, or ramps)
- Base plates and mud sills on stable surfaces
- Ties and braces to prevent tipping

### Scaffold Types
- **Supported scaffolds** — platforms supported by legs (frame, system)
- **Suspended scaffolds** — platforms hung from overhead supports
- **Mobile scaffolds** — supported on wheels or casters
- **Aerial lifts** — cherry pickers, boom lifts`,
    relatedSlugs: ["fall-protection", "excavation-safety", "ppe", "osha"],
  },
  {
    term: "Electrical Safety",
    slug: "electrical-safety",
    definition:
      "Safety practices and standards designed to protect workers from electrical hazards including shock, electrocution, burns, and fires.",
    category: "Safety",
    details: `## Electrical Safety in Construction

**Electrical safety** encompasses the practices, procedures, and equipment designed to protect workers from electrical hazards on construction sites. Electrocution is one of OSHA's "Fatal Four" — the leading causes of construction deaths.

### OSHA Requirements
29 CFR 1926 Subpart K — Electrical

### Key Hazards
- **Electrocution** — death from electrical contact
- **Electrical burns** — from arc flash or direct contact
- **Electrical fires** — from faulty wiring or overloaded circuits
- **Arc flash** — explosion from short circuit

### Key Requirements
- Ground-fault circuit interrupters (GFCI) on all 120V outlets
- Assured equipment grounding conductor program
- Assured grounding program
- Only qualified persons work on energized equipment
- Lockout/tagout before servicing
- Proper cable and cord management
- Temporary wiring standards

### The "Fatal Four"
According to OSHA, the four leading causes of construction worker deaths are:
1. Falls
2. Struck-by objects
3. Electrocutions
4. Caught-in/between`,
    relatedSlugs: ["lockout-tagout", "jsa", "ppe", "osha"],
  },
];

// --- Project Management & Methodology ---
const managementTerms: GlossaryTerm[] = [
  {
    term: "Gantt Chart",
    slug: "gantt-chart",
    definition:
      "A type of bar chart that illustrates a project schedule, showing the dependency relationships between activities and current status.",
    category: "Scheduling",
    details: `## The Gantt Chart

Named after Henry Gantt, this chart illustrates a project schedule. Modern digital Gantt charts are interactive, allowing project managers to adjust timelines and dependencies with a drag-and-drop interface.

### Benefits
- Visual schedule
- Dependency management
- Critical path identification
- Baseline vs. actual comparison`,
    relatedSlugs: ["construction-management"],
  },
  {
    term: "Lean Construction",
    slug: "lean-construction",
    definition:
      "A philosophy based on the Toyota Production System that aims to maximize value and minimize waste in construction processes.",
    category: "Methodology",
    details: `## Lean Construction Principles

**Lean construction** is a combination of operational research and practical development in design and construction with an adaptation of lean manufacturing principles.

### Key Principles
- Maximize value to the customer
- Minimize waste
- Continuous improvement
- Pull-driven scheduling
- Just-in-time delivery`,
    relatedSlugs: ["construction-management"],
  },
  {
    term: "VDC (Virtual Design and Construction)",
    slug: "vdc",
    definition:
      "The management of integrated multi-disciplinary performance models of design-construction projects.",
    category: "Technology",
    details: `## Virtual Design and Construction (VDC)

**VDC** is the management of integrated multi-disciplinary performance models of design-construction projects, including the product (facilities), work processes, and the organization of the project team.

### Components
- **3D model** — design visualization
- **4D** — schedule integration
- **5D** — cost integration
- **6D** — facility management`,
    relatedSlugs: ["bim", "lean-construction"],
  },
  {
    term: "Work Order",
    slug: "work-order",
    definition:
      "A task or job that can be scheduled or assigned to someone, used heavily in facility management.",
    category: "Operations",
    details: `## Work Orders

A **work order** is a task or job that can be scheduled or assigned. In facility management, it is the primary method of tracking maintenance requests, inspections, and corrective actions.

### Typical Work Order Flow
1. Request created (by tenant, customer, or system)
2. Triaged and prioritized
3. Assigned to a technician
4. Technician completes the work
5. Sign-off by requester
6. Closed and invoiced`,
    relatedSlugs: ["facility-management"],
  },
  {
    term: "Takeoff",
    slug: "takeoff",
    definition:
      "The process of estimating the quantities of materials required from the project plans.",
    category: "Estimation",
    details: `## Construction Takeoff

**Takeoff** (or material takeoff) is the process of estimating the quantities of materials required from the project plans to determine the cost of materials.

### Methods
- **Manual** — measure drawings with a scale ruler
- **Digital** — software extracts quantities from the digital model
- **BIM-based** — quantities auto-extracted from the BIM model`,
    relatedSlugs: ["construction-cost-estimator"],
  },
  {
    term: "Common Data Environment (CDE)",
    slug: "cde",
    definition:
      "The single source of information for the project, used to collect, manage, and disseminate documentation, the graphical model, and non-graphical data for the whole project team.",
    category: "Technology",
    details: `## What is a CDE?

A **Common Data Environment (CDE)** is the single source of information for a project. It collects, manages, and disseminates documentation, the graphical model, and non-graphical data.

### Standards
**ISO 19650** defines the CDE workflow and information management requirements.

### Key Features
- Accessibility (role-based)
- Version control
- Security
- Audit trail`,
    relatedSlugs: ["bim"],
  },
  {
    term: "Digital Twin",
    slug: "digital-twin",
    definition:
      "A virtual model designed to accurately reflect a physical object. In construction, it covers the lifecycle from design to operation.",
    category: "Technology",
    details: `## Digital Twin Technology

A **digital twin** is a virtual model designed to accurately reflect a physical object. The object is outfitted with sensors, and the twin is updated from real-world data.

### Construction Use
- **Design** — visualise the building before construction
- **Construction** — track progress against the model
- **Operations** — monitor and manage the building
- **Renovation** — accurate as-built reference`,
    relatedSlugs: ["bim", "as-built"],
  },
  {
    term: "Earned Value Management (EVM)",
    slug: "earned-value",
    definition:
      "A project management methodology that integrates scope, schedule, and cost to measure project performance and progress.",
    category: "Project Management",
    details: `## What is Earned Value Management (EVM)?

**Earned value management (EVM)** is a project management technique that measures project performance by comparing the planned work, the work actually performed, and the actual cost. It provides an objective, quantifiable view of project health.

### Key Metrics
- **PV (Planned Value)** — the authorized budget for scheduled work
- **EV (Earned Value)** — the budget value of work actually performed
- **AC (Actual Cost)** — the actual cost incurred for the work
- **CV (Cost Variance)** = EV - AC
- **SV (Schedule Variance)** = EV - PV
- **CPI (Cost Performance Index)** = EV / AC
- **SPI (Schedule Performance Index)** = EV / PV

### Interpretation
- CPI or SPI > 1.0 — project is under budget or ahead of schedule
- CPI or SPI < 1.0 — project is over budget or behind schedule

### Why EVM Matters
EVM provides early warning signs of schedule delays and budget overruns, allowing project managers to take corrective action before problems become critical.`,
    relatedSlugs: ["critical-path", "look-ahead", "gantt-chart", "construction-management"],
  },
  {
    term: "Critical Path Method (CPM)",
    slug: "critical-path",
    definition:
      "A scheduling technique that identifies the sequence of dependent activities determining the shortest possible project duration.",
    category: "Scheduling",
    details: `## What is the Critical Path Method (CPM)?

The **critical path method (CPM)** is a scheduling technique that identifies the longest sequence of dependent activities in a project plan. This sequence, the critical path, determines the shortest possible project duration.

### How CPM Works
1. List all activities
2. Identify dependencies (finish-to-start, start-to-start, etc.)
3. Determine activity durations
4. Calculate early start, early finish, late start, late finish
5. Identify the critical path (zero total float)

### Key Concepts
- **Total Float** — the amount of time an activity can be delayed without delaying the project
- **Free Float** — the amount of time an activity can be delayed without delaying the next activity
- **Critical Path** — activities with zero float
- **Crashing** — adding resources to shorten critical activities
- **Fast-tracking** — overlapping critical activities

### Why CPM Matters
Without CPM, project managers cannot determine which activities are truly critical to the project completion date.`,
    relatedSlugs: ["gantt-chart", "look-ahead", "earned-value", "construction-management"],
  },
  {
    term: "Look-Ahead Schedule",
    slug: "look-ahead",
    definition:
      "A short-term schedule (typically 2–6 weeks) that provides detailed activity planning beyond the master schedule.",
    category: "Scheduling",
    details: `## What is a Look-Ahead Schedule?

A **look-ahead schedule** is a short-term schedule, typically covering 2–6 weeks, that provides detailed activity-level planning beyond the master schedule. It is the bridge between the master schedule and daily planning.

### Purpose
- Identify upcoming activities and their prerequisites
- Flag material and equipment needs
- Coordinate subcontractor activities
- Verify that the master schedule is achievable
- Identify potential bottlenecks before they become problems

### Typical Content
- Activities planned for the next 2–6 weeks
- Predecessor and successor relationships
- Required materials and equipment
- Subcontractor responsibilities
- Inspection and test requirements
- Constraint and assumption list

### How SpaceCapture Helps
SpaceCapture's scheduling integration links look-ahead activities to inspection checklists, ensuring the field team knows exactly what inspections are coming and what needs to be ready.`,
    relatedSlugs: ["three-week-look", "critical-path", "gantt-chart"],
  },
  {
    term: "Three-Week Look-Ahead",
    slug: "three-week-look",
    definition:
      "A specific type of look-ahead schedule covering the next three weeks, used for detailed coordination and constraint resolution.",
    category: "Scheduling",
    details: `## What is a Three-Week Look-Ahead?

A **three-week look-ahead** is the most common look-ahead schedule format in construction. It provides a rolling three-week window of planned activities, updated weekly.

### Weekly Cycle
1. **Monday/Tuesday** — update the three-week look-ahead
2. **Wednesday/Thursday** — identify and resolve constraints
3. **Friday** — distribute to all trades and subcontractors
4. **Ongoing** — track completion and adjust

### What It Shows
- Week 1 — detailed daily activities
- Week 2 — detailed daily activities
- Week 3 — daily activities with more flexibility

### Constraint Resolution
The three-week look-ahead is the primary tool for identifying and resolving constraints before they become problems. If a material delivery is needed in Week 2 but hasn't been ordered, the constraint is flagged and resolved in Week 1.

### Best Practices
- Update weekly without exception
- Include all trades
- Track constraints to closure
- Link to daily reports for as-built tracking`,
    relatedSlugs: ["look-ahead", "critical-path", "gantt-chart"],
  },
  {
    term: "Daily Construction Log",
    slug: "daily-construction-log",
    definition:
      "A comprehensive daily record of all activities, conditions, and events on a construction site, serving as the official project record.",
    category: "Documentation",
    details: `## What is a Daily Construction Log?

A **daily construction log** is the official contemporaneous record of all activities, conditions, and events on a construction site for a given day. It is often the first document referenced in legal disputes, claims, and delay analyses.

### What to Record
- Date, time, and project name
- Weather conditions (temperature, precipitation, wind)
- Workforce counts by trade
- Equipment on site
- Materials delivered
- Work completed (by area and trade)
- Inspections conducted
- Visitors and meetings
- Incidents, delays, and issues
- Photos and observations

### Legal Importance
The daily log establishes the contemporaneous record of what happened on the project. Courts and arbitrators rely heavily on daily logs to resolve disputes.

### Digital Daily Logs
Modern construction apps like SpaceCapture enable daily logs to be completed in minutes from a mobile device, with auto-filled weather, photo attachments, and digital signatures.`,
    relatedSlugs: ["daily-log", "daily-report", "daily-safety-report"],
  },
  {
    term: "Meeting Minutes",
    slug: "meeting-minutes",
    definition:
      "A written record of the discussions, decisions, action items, and attendees from a construction project meeting.",
    category: "Documentation",
    details: `## What are Meeting Minutes?

**Meeting minutes** are the official written record of a construction project meeting. They document who attended, what was discussed, what decisions were made, and what action items were assigned.

### Types of Construction Meetings
- **Owner/architect/contractor (OAC)** — monthly progress meetings
- **Submittal review meetings** — design team reviews submittals
- **Safety meetings** — weekly safety coordination
- **Coordination meetings** — MEP and trade coordination
- **Punch list meetings** — closeout and deficiency review

### What Minutes Should Include
- Date, time, and location
- Attendees (and their roles)
- Agenda items discussed
- Decisions made
- Action items with responsible party and due date
- Next meeting date

### Digital Meeting Minutes
Templates, action item tracking, and automatic distribution ensure nothing falls through the cracks between meetings.`,
    relatedSlugs: ["daily-log", "rfi-log", "submittal-log", "construction-management"],
  },
  {
    term: "Submittal Log",
    slug: "submittal-log",
    definition:
      "A master list tracking all required submittals, their status, review dates, and approvals throughout a construction project.",
    category: "Documentation",
    details: `## What is a Submittal Log?

A **submittal log** is a master tracking document that lists every submittal required on a project, its current status, review dates, and approvals. It is essential for ensuring that no submittal is missed and that the project stays on schedule.

### What it Tracks
- Submittal number and description
- Required date (based on the schedule)
- Submitted date
- Review status (pending, approved, revised, rejected)
- Resubmission date
- Final approval date
- Responsible subcontractor

### Why it Matters
- Prevents delays from late submittals
- Provides a clear picture of submittal status
- Helps identify bottlenecks in the review process
- Required by most owners and architects

### How SpaceCapture Helps
SpaceCapture's submittal tracking module links submittals to schedule activities and provides real-time status dashboards for the project team.`,
    relatedSlugs: ["submittal", "rfi-log", "specification", "shop-drawing"],
  },
  {
    term: "RFI Log",
    slug: "rfi-log",
    definition:
      "A master tracking document that records all Requests for Information, their status, responses, and impacts on schedule and cost.",
    category: "Documentation",
    details: `## What is an RFI Log?

An **RFI log** is a master tracking document that records every Request for Information (RFI) issued on a project, its current status, response, and any impacts on schedule or cost.

### What it Tracks
- RFI number and date
- Subject and description
- Originator (sub, GC, architect)
- Recipient (architect, engineer, owner)
- Status (open, answered, closed)
- Response date
- Impact (time, cost, or none)
- Decision documentation

### Why it Matters
- Provides a complete audit trail of design clarifications
- Tracks response times and identifies bottlenecks
- Documents decisions that affect scope, cost, or schedule
- Critical for dispute resolution

### Best Practices
- Issue RFIs promptly — don't let questions fester
- Include all relevant context and photos
- Track response deadlines
- Document the impact of each RFI
- Distribute responses to all affected parties`,
    relatedSlugs: ["rfi", "submittal-log", "change-order", "construction-management"],
  },
  {
    term: "Punch List Tracking",
    slug: "punch-list-tracking",
    definition:
      "The systematic process of creating, assigning, monitoring, and closing out punch list items through to project completion.",
    category: "Documentation",
    details: `## What is Punch List Tracking?

**Punch list tracking** is the systematic process of managing punch list items from creation through resolution. It ensures every deficiency is documented, assigned, corrected, verified, and closed before final payment.

### The Process
1. **Create** — identify and document each item with photos
2. **Assign** — assign to the responsible subcontractor
3. **Prioritize** — severity-rate each item
4. **Schedule** — plan the correction timeline
5. **Execute** — subcontractor corrects the item
6. **Verify** — inspector confirms the correction
7. **Close** — item marked as closed

### Tracking Metrics
- Items created vs closed (trend chart)
- Items by severity (critical, major, minor)
- Items by trade/subcontractor
- Average time to close
- Outstanding items by area

### How SpaceCapture Helps
SpaceCapture provides real-time punch list tracking dashboards, automated assignment and notification, and photo-verified closure — eliminating the spreadsheets and paper-based tracking that slow down closeout.`,
    relatedSlugs: ["punch-list", "snag-list", "construction-defect", "daily-log"],
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  ...inspectionTerms,
  ...constructionTerms,
  ...documentationTerms,
  ...safetyTerms,
  ...managementTerms,
];

// Helper to lookup by slug
export const getGlossaryTerm = (slug: string): GlossaryTerm | undefined =>
  GLOSSARY_TERMS.find((t) => t.slug === slug);

// Group by category for the home page
export const GLOSSARY_BY_CATEGORY: Record<string, GlossaryTerm[]> =
  GLOSSARY_TERMS.reduce((acc, term) => {
    if (!acc[term.category]) {
      acc[term.category] = [];
    }
    acc[term.category].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);
