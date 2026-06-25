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
