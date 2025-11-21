"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HIGHLIGHTS = [
	{
		label: "Deep field wisdom",
		value: "Seasoned crews",
		description: "Relentless focus on teams operating in unforgiving environments."
	},
	{
		label: "Global reach",
		value: "Across continents",
		description: "A command layer trusted by infrastructure, energy, and telecom leaders worldwide."
	},
	{
		label: "Decisions transformed",
		value: "Immediate clarity",
		description: "Coordinated responses powered by live site evidence."
	},
	{
		label: "Customer relationships",
		value: "Partners for life",
		description: "Built on rigor, speed, and measurable outcomes."
	}
];

const VALUES = [
	"Every deployment is co-designed with the crews that rely on it.",
	"We obsess over clarity, context, and confidence for every stakeholder.",
	"Security-first architecture so insights can freely move, not leak."
];

const EXPERTISE = [
	"Dedicated field strategists instead of ticket queues.",
	"Direct escalation paths to product engineering when you need it.",
	"Adaptive playbooks for shutdowns, inspections, and incident response."
];

const IMMERSION_TRACKS = [
	{
		title: "Signal Rehearsal",
		detail: "Ops leads + product",
		description: "We map the chain of events during simulated outages to uncover blind spots."
	},
	{
		title: "Blueprint Remix",
		detail: "Designers + inspectors",
		description: "Artifacts from real jobsites are reworked into living playbooks."
	},
	{
		title: "Calm-in-the-Storm",
		detail: "Coaching pods",
		description: "Teams practice decisive comms using our decision theater wall."
	}
];

const LAB_ARTIFACTS = [
	"Live decision theater with multi-cam playback",
	"Physical kits that pair tablets, sensors, and tactile boards",
	"Narrative briefs that make ops data feel cinematic"
];

const CLIENTS = [
	"Northwind Infrastructure",
	"Helios Energy",
	"BlueRiver Transit",
	"Vertex Telecom",
	"Atlas Manufacturing",
	"Luma Health Systems",
	"Orchid Facilities",
	"Polar Research Labs"
];

const CONSTELLATIONS = [
	{
		name: "Atlantic Mesh",
		focus: "Energy + Transit",
		narrative: "Storm belts across the Atlantic corridor rely on our redundant playbooks to keep trains and turbines in motion.",
		tags: ["Storm-proof briefings", "Dual-language runbooks"]
	},
	{
		name: "Equator Pulse",
		focus: "Agritech + Utilities",
		narrative: "Sensor-rich plantations and grid inspectors stream humidity, soil, and load data into a single calm dashboard.",
		tags: ["Edge-ready AI", "Satellite handoffs"]
	},
	{
		name: "Northern Lights",
		focus: "Mining + Public Works",
		narrative: "Remote crews in polar climates lean on offline-first rituals so nothing stalls when the aurora steals bandwidth.",
		tags: ["Cold-start kits", "Voice-to-ops"]
	}
];

const MISSION_LOG = [
	{
		title: "Solar belt rail upgrade",
		region: "APAC · GCC",
		outcome: "Unified drone sweeps, weld inspections, and customs reports inside one sprint cadence."
	},
	{
		title: "Coastal resilience audit",
		region: "LATAM · US East",
		outcome: "Digital twins captured from mobile LiDAR fed regulators the evidence to fast-track permits."
	},
	{
		title: "Hyperloop maintenance rehearsal",
		region: "EU · MENA",
		outcome: "Mixed reality checklists let multilingual crews hand off shifts without losing intent."
	}
];

const TESTIMONIALS = [
	{
		quote:
			"SPACE CAPTURE gives our site leaders complete certainty. Photos, sign-offs, and punch-list status flow to HQ before the dust settles.",
		name: "Chris Larkin",
		role: "VP of Field Operations, Ironpath"
	},
	{
		quote:
			"The editor is so intuitive that onboarding our entire maintenance fleet felt effortless.",
		name: "Mary Beth Flores",
		role: "Director of Transformation, Meridian Utilities"
	},
	{
		quote:
			"The cadence of insights keeps our quality team proactive. We anticipate issues instead of reacting to them.",
		name: "Breah Talan",
		role: "Chief Quality Officer, Horizon Care"
	}
];

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" }
	}
};

const staggerParent: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 }
	}
};

export default function AboutUs() {
	return (
		<main className="bg-white text-slate-900">
			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-24">
				<div className="absolute inset-0 pointer-events-none select-none">
					<div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-blue-200 opacity-30 blur-[120px]" />
					<div className="absolute -left-16 bottom-4 h-80 w-80 rounded-full bg-indigo-100 opacity-40 blur-[110px]" />
					<div className="absolute left-1/2 top-1/3 h-32 w-[480px] -translate-x-1/2 rounded-full border border-dashed border-slate-200" />
				</div>

				<div className="container mx-auto max-w-[1200px] px-4 relative z-10">
					<div className="grid gap-14 lg:grid-cols-2 lg:items-center">
						<motion.div
							variants={staggerParent}
							initial="hidden"
							animate="visible"
							className="space-y-8"
						>

							<motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
								Welcome to SPACE CAPTURE: Your Insight Partner For Every Site
							</motion.h1>

							<motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
								Over the last decade, we have paired field-tested hardware integrations with an intelligence layer that surfaces the right evidence, at the right second. Our mission is to make every crew feel backed by an on-site command center.
							</motion.p>

							<motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2">
								{HIGHLIGHTS.map((item) => (
									<div key={item.label} className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm">
										<p className="text-4xl font-black text-blue-600">{item.value}</p>
										<p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-400">{item.label}</p>
										<p className="mt-3 text-sm text-slate-500">{item.description}</p>
									</div>
								))}
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							className="relative"
						>
							<div className="relative rounded-[32px] border border-slate-100 bg-white/80 p-4 shadow-2xl backdrop-blur">
								<div className="aspect-[4/3] w-full rounded-[28px] bg-gradient-to-br from-blue-100 via-white to-indigo-50 p-8 text-center text-slate-500">
									<Image
										src="/images/about/field-team.jpg"
										alt="Field engineers collaborating around tablets and drones"
										width={1200}
										height={900}
										className="h-full w-full rounded-2xl object-cover"
										priority
									/>
								</div>

								<div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-xl">
									<div className="rounded-2xl bg-blue-50 p-3">
										<MapPin className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Live Site Command</p>
										<p className="text-base font-bold text-slate-900">Multiple crews guided in parallel</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Origin Story */}
			<section className="py-24">
				<div className="container mx-auto max-w-[1100px] px-4">
					<div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Delivering insights that drive success</p>
							<h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900">
								We began as a tight-knit crew frustrated by analog workflows. Today, SPACE CAPTURE anchors mission-critical decisions for enterprises that refuse to leave accuracy to chance.
							</h2>
							<p className="mt-6 text-lg text-slate-600">
								Since launching in a converted warehouse, we have worked shoulder-to-shoulder with project managers, inspectors, and safety directors. Together, we crafted a platform that mirrors the urgency of real operations and adapts to every discipline from renewable energy to transportation.
							</p>

							<div className="mt-10 grid gap-6 sm:grid-cols-2">
								<div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
									<p className="text-xl font-black text-slate-900">Field-first DNA</p>
									<p className="mt-3 text-sm text-slate-600">Every release is validated on-site with our customer advisory council before it ships.</p>
								</div>
								<div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
									<p className="text-xl font-black text-slate-900">Human-centered automation</p>
									<p className="mt-3 text-sm text-slate-600">Automations stay transparent so crews trust the data guiding their next moves.</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-7 rounded-3xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.45)] relative overflow-hidden">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.3),transparent_55%)]" />
							<div className="relative z-10 space-y-4">
								<p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">Immersion Lab</p>
								<h3 className="text-3xl font-extrabold leading-snug">A playground where prototypes breathe and field rituals are choreographed.</h3>
								<p className="text-sm text-indigo-100/90">
									Instead of presentation decks, we build scenes. Crews walk through fog machines, sirens, and tactile boards until the next release feels inevitable.
								</p>
							</div>

							<div className="relative z-10 grid gap-4">
								{IMMERSION_TRACKS.map((track) => (
									<div key={track.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
										<div className="flex items-center justify-between">
											<p className="text-sm font-bold uppercase tracking-widest text-indigo-200">{track.title}</p>
											<p className="text-xs text-indigo-100/80">{track.detail}</p>
										</div>
										<p className="mt-2 text-sm text-slate-100/90">{track.description}</p>
									</div>
								))}
							</div>

							<div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-5">
								<p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">Artifacts on the table</p>
								<ul className="mt-3 space-y-2 text-sm text-indigo-50">
									{LAB_ARTIFACTS.map((artifact) => (
										<li key={artifact} className="flex items-start gap-2">
											<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-300" aria-hidden />
											<span>{artifact}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="relative z-10 rounded-2xl border border-white/10 bg-white/10 p-5 flex flex-col gap-3">
								<p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">Want in?</p>
								<p className="text-base text-indigo-50/90">We rotate a handful of partners through the lab every quarter. Bring your toughest workflow and leave with a cinematic playbook.</p>
								<Link
									href="/request-a-demo"
									className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
								>
									Request a lab slot
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* People Section */}
			<section className="bg-slate-50 py-24">
				<div className="container mx-auto max-w-[1200px] px-4">
					<div className="grid items-center gap-16 lg:grid-cols-2">
						<div className="relative">
							<div className="rounded-[36px] border border-slate-100 bg-white p-4 shadow-2xl">
								<div className="aspect-[4/3] w-full rounded-[28px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6">
									<Image
										src="/images/about/team-collab.jpg"
										alt="SPACE CAPTURE teammates strategizing in a mission control-style space"
										width={1200}
										height={900}
										className="h-full w-full rounded-3xl object-cover"
									/>
								</div>
							</div>

							<div className="absolute -right-6 top-10 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-4 text-indigo-800 shadow-lg">
								<p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Team Pulse</p>
								<p className="text-2xl font-black">Thriving</p>
								<p className="text-xs text-indigo-700">Teammates champion SPACE CAPTURE as the place to build their career.</p>
							</div>
						</div>

						<div>
							<p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Our power is people</p>
							<h2 className="mt-4 text-4xl font-extrabold text-slate-900">A multidisciplinary team aligned around impact.</h2>
							<p className="mt-6 text-lg text-slate-600">
								We blend product thinkers, site coordinators, AI researchers, and safety specialists. That diversity lets us simulate real-world chaos inside every design decision.
							</p>

							<ul className="mt-8 space-y-4 text-base text-slate-700">
								{VALUES.map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-blue-600" aria-hidden />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Experts Section */}
			<section className="py-24">
				<div className="container mx-auto max-w-[1100px] px-4">
					<div className="grid gap-16 lg:grid-cols-2 lg:items-center">
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Empowered experts</p>
							<h2 className="mt-4 text-4xl font-extrabold text-slate-900">Compact by design so we stay agile and accountable.</h2>
							<p className="mt-6 text-lg text-slate-600">
								You partner directly with the decision-makers who can unblock your project. No endless tiers, no scripts—just practitioners who understand critical infrastructure and the stakes behind every dispatch.
							</p>

							<ul className="mt-8 space-y-4 text-base text-slate-700">
								{EXPERTISE.map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-indigo-600" aria-hidden />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-[36px] border border-slate-100 bg-gradient-to-br from-white via-blue-50 to-indigo-100 p-8 shadow-2xl">
							<div className="rounded-3xl bg-white p-6 shadow-xl">
								<p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">Field Ops Hotline</p>
								<p className="mt-3 text-3xl font-black text-slate-900">Rapid response</p>
								<p className="text-sm text-slate-500">You connect directly with a SPACE CAPTURE solutions architect when it matters most.</p>

								<div className="mt-8 grid gap-4 sm:grid-cols-2">
									<div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
										<p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Incident Scripts</p>
										<p className="text-lg font-black text-blue-600">Battle-tested playbooks</p>
										<p className="text-xs text-slate-500">Runbooks crafted alongside our partners.</p>
									</div>
									<div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
										<p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Expert Hours</p>
										<p className="text-lg font-black text-indigo-600">Always-on guidance</p>
										<p className="text-xs text-slate-500">Strategists immersed in your quarterly reviews.</p>
									</div>
								</div>

								<div className="mt-8 overflow-hidden rounded-2xl border border-dashed border-slate-200 bg-slate-50/70">
									<Image
										src="/images/about/expert-illustrate.jpg"
										alt="Subject-matter expert guiding a crew over live video with annotated checklists"
										width={1000}
										height={700}
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Signal Atlas */}
			<section className="bg-gradient-to-b from-white to-slate-50 py-24">
				<div className="container mx-auto max-w-[1200px] px-4">
					<div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
						<div className="rounded-[36px] border border-slate-900/5 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-8 text-white shadow-2xl relative overflow-hidden">
							<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.4),transparent_65%)]" />
							<div className="relative z-10">
								<p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-200">Signal atlas</p>
								<h2 className="mt-4 text-4xl font-extrabold leading-tight">Field constellations we activate every single week.</h2>
								<p className="mt-4 text-sm text-indigo-100/90">Instead of dots on a map, we orchestrate constellations—clusters of partners that share weather patterns, compliance hurdles, and cultural rhythms.</p>

								<div className="mt-10 space-y-5">
									{CONSTELLATIONS.map((con) => (
										<div key={con.name} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
											<div className="flex flex-col gap-1 text-left">
												<p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">{con.name}</p>
												<p className="text-lg font-bold">{con.focus}</p>
											</div>
											<p className="mt-3 text-sm text-indigo-100/90">{con.narrative}</p>
											<div className="mt-4 flex flex-wrap gap-3">
												{con.tags.map((tag) => (
													<span key={tag} className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-indigo-100">
														{tag}
													</span>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="rounded-[36px] border border-slate-100 bg-white p-8 shadow-xl">
							<p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 text-center">Mission log</p>
							<h3 className="mt-4 text-3xl font-extrabold text-slate-900 text-center">Recent field narratives</h3>
							<p className="mt-4 text-base text-slate-600 text-center">Each log is a snapshot of how SPACE CAPTURE choreographs multi-region crews without ever reaching for a globe.</p>

							<div className="mt-10 space-y-5">
								{MISSION_LOG.map((mission) => (
									<div key={mission.title} className="rounded-3xl border border-slate-100 bg-slate-50/70 p-5">
										<div className="flex flex-col gap-1 text-left">
											<p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">{mission.region}</p>
											<p className="text-lg font-bold text-slate-900">{mission.title}</p>
										</div>
										<p className="mt-3 text-sm text-slate-600">{mission.outcome}</p>
									</div>
								))}
							</div>

							<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
								{CLIENTS.map((client) => (
									<span key={client} className="rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 bg-white">
										{client}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-slate-50 py-24">
				<div className="container mx-auto max-w-[1200px] px-4">
					<div className="text-center">
						<p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Reviews from customers</p>
						<h2 className="mt-4 text-4xl font-extrabold text-slate-900">Proof from the field.</h2>
					</div>

					<div className="mt-12 grid gap-6 md:grid-cols-3">
						{TESTIMONIALS.map((testimonial) => (
							<div key={testimonial.name} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
								<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-blue-600">“</div>
								<p className="text-base text-slate-600">{testimonial.quote}</p>
								<div className="mt-6 border-t border-slate-100 pt-4 text-sm">
									<p className="font-bold text-slate-900">{testimonial.name}</p>
									<p className="text-slate-500">{testimonial.role}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24">
				<div className="container mx-auto max-w-[1000px] px-4">
					<div className="rounded-[36px] bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 px-8 py-16 text-center text-white shadow-2xl">
						<h2 className="text-3xl font-extrabold sm:text-4xl">Join the companies unlocking precise field intelligence with SPACE CAPTURE.</h2>
						<p className="mt-4 text-lg text-orange-50">Let’s co-design the command center your teams deserve.</p>
						<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link
								href="/request-a-demo"
								className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-600 shadow-lg shadow-orange-600/30 transition hover:-translate-y-0.5"
							>
								Contact us
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}