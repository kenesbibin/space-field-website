import Link from 'next/link';
import { ArrowRight, Check, ClipboardCheck, Eye, Layers3, Scale, Workflow } from 'lucide-react';

const comparisonRows = [
  { feature: 'Primary focus', space: 'Field inspections, visual evidence, and AI-assisted workflows', procore: 'Broad construction project management and collaboration' },
  { feature: 'Inspection forms', space: 'Build mobile field forms and capture structured observations', procore: 'Construction workflows and tools across the Procore platform' },
  { feature: 'Visual review', space: 'AI-assisted analysis of field photos for supported defect workflows', procore: 'Project documentation and photo workflows; confirm current capabilities by plan' },
  { feature: 'Project operations', space: 'Inspection findings, tasks, and field reporting', procore: 'Project-management workflows spanning construction teams' },
  { feature: 'Deployment and pricing', space: 'Discuss current plans and hosting requirements with SpaceCapture', procore: 'Request current commercial and deployment details from Procore' },
];

const considerations = [
  {
    title: 'Choose by the work you need to improve',
    body: 'If inspections, photo evidence, and repeatable field capture are the main challenge, evaluate SpaceCapture against that workflow. If you need broad project administration, evaluate the breadth of Procore’s platform.',
    icon: ClipboardCheck,
  },
  {
    title: 'Check the workflow end to end',
    body: 'Run a representative site walk: capture an issue, assign follow-up, review evidence, and share a report. Include field staff and project leads in the evaluation.',
    icon: Workflow,
  },
  {
    title: 'Validate requirements directly',
    body: 'Plans, integrations, AI features, hosting, and pricing change. Confirm the current details with both vendors and compare against your own acceptance criteria.',
    icon: Eye,
  },
];

export default function ProcoreComparisonPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(99,102,241,0.2),transparent_35%)]" />
        <div className="container relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
            <Scale className="h-4 w-4" /> Platform comparison
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            SpaceCapture vs Procore: choose the right field workflow.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            These platforms serve different needs and may fit together. Compare their areas of focus, then validate the workflows and capabilities that matter to your projects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/request-a-demo" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500">
              See SpaceCapture in action <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/compare" className="rounded-xl border border-white/20 px-5 py-3 font-bold text-white transition hover:bg-white/10">All comparisons</Link>
          </div>
          <p className="mt-5 text-xs text-slate-400">Independent product names are used only to identify the comparison. No affiliation is implied.</p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <div className="flex items-center gap-3 text-slate-500"><Layers3 className="h-6 w-6" /><span className="text-xs font-bold uppercase tracking-[0.15em]">Broad project platform</span></div>
            <h2 className="mt-5 text-3xl font-extrabold">Procore</h2>
            <p className="mt-3 leading-7 text-slate-600">A construction project-management platform with tools for coordinating project teams and project information. Review the current product plans to identify the modules that match your workflows.</p>
          </article>
          <article className="rounded-3xl border-2 border-blue-600 bg-white p-7 shadow-lg shadow-blue-900/5 sm:p-9">
            <div className="flex items-center gap-3 text-blue-700"><Eye className="h-6 w-6" /><span className="text-xs font-bold uppercase tracking-[0.15em]">Field inspection focus</span></div>
            <h2 className="mt-5 text-3xl font-extrabold">SpaceCapture</h2>
            <p className="mt-3 leading-7 text-slate-600">A field-operations platform for mobile capture, inspections, structured observations, reporting, and AI-assisted visual workflows.</p>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-9 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">At a glance</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Compare the job each platform is built to do.</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th scope="col" className="w-1/4 p-5 text-sm font-bold">Workflow</th>
                    <th scope="col" className="w-[37.5%] p-5 text-sm font-bold">SpaceCapture</th>
                    <th scope="col" className="w-[37.5%] p-5 text-sm font-bold">Procore</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-t border-slate-100 align-top">
                      <th scope="row" className="bg-slate-50 p-5 text-sm font-bold text-slate-800">{row.feature}</th>
                      <td className="p-5 text-sm leading-6 text-slate-700"><span className="mb-2 flex items-center gap-2 font-semibold text-blue-800"><Check className="h-4 w-4" /> SpaceCapture</span>{row.space}</td>
                      <td className="p-5 text-sm leading-6 text-slate-600">{row.procore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">This is a high-level guide, not a feature-by-feature certification. Capabilities and availability vary by product version, plan, configuration, and integration. Confirm current details with each provider.</p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">Evaluation checklist</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Compare with your own site workflow.</h2>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {considerations.map(({ title, body, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue-700 py-14 text-white sm:py-16">
        <div className="container mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold">See how SpaceCapture fits your inspections.</h2>
            <p className="mt-3 leading-7 text-blue-100">Bring a real field workflow to a walkthrough and evaluate the fit with your team.</p>
          </div>
          <Link href="/request-a-demo" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50">
            Request a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
