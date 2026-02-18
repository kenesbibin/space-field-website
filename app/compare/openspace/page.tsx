import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SpaceCapture vs OpenSpace — Best Construction Inspection Software Comparison 2026",
  description:
    "Compare SpaceCapture vs OpenSpace for construction inspections, AI defect detection, snagging, and site documentation. Discover which platform is best for contractors and engineers.",
  keywords: [
    "SpaceCapture vs OpenSpace",
    "OpenSpace alternative",
    "construction inspection software comparison",
    "AI construction inspection software",
    "site inspection app",
    "construction snagging software",
    "field inspection software",
    "construction defect detection app",
    "construction reporting software",
  ],
};

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* HERO */}
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
          SpaceCapture vs OpenSpace — Which Construction Software Is Better?
        </h1>

        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Choosing the right construction inspection software is critical for
          quality control, documentation, and project efficiency. This detailed
          comparison of <strong>SpaceCapture vs OpenSpace</strong> explains the
          differences in AI defect detection, site inspections, reality capture,
          reporting, and workflows for modern construction teams.
        </p>

        {/* KEY DIFFERENCE */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            🔍 Key Difference Between SpaceCapture and OpenSpace
          </h2>

          <p className="text-slate-700 leading-relaxed">
            OpenSpace specializes in 360° reality capture for documenting site
            progress, while SpaceCapture focuses on AI-powered construction
            inspections, automated defect detection, snagging workflows, and
            field reporting. Organizations prioritizing quality assurance and
            inspection automation often choose SpaceCapture as a modern
            alternative to traditional documentation tools.
          </p>
        </section>

        {/* FEATURE CARDS */}
        <section className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              🤖 SpaceCapture — AI Inspection Platform
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>AI crack & defect detection</li>
              <li>Automated inspection reports</li>
              <li>Offline site inspections</li>
              <li>Snagging & punch list workflows</li>
              <li>Quality control tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              📸 OpenSpace — Reality Capture Software
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>360° site documentation</li>
              <li>Construction progress tracking</li>
              <li>Virtual walkthrough recording</li>
              <li>Historical project visualization</li>
            </ul>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            📊 Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border rounded-xl overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">SpaceCapture</th>
                  <th className="p-4 text-left">OpenSpace</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-t">
                  <td className="p-4">AI Defect Detection</td>
                  <td className="p-4">✅ Yes</td>
                  <td className="p-4">❌ No</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">360° Site Capture</td>
                  <td className="p-4">❌ No</td>
                  <td className="p-4">✅ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Offline Inspections</td>
                  <td className="p-4">✅ Yes</td>
                  <td className="p-4">Limited</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Snagging Workflows</td>
                  <td className="p-4">✅ Yes</td>
                  <td className="p-4">❌ No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* USE CASE */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            🏗️ Best Use Cases
          </h2>

          <p className="text-slate-700 leading-relaxed">
            SpaceCapture is ideal for contractors, quality engineers, and
            inspection teams who need fast defect detection, reporting, and
            compliance documentation. OpenSpace is better suited for project
            stakeholders who want visual progress tracking and virtual site
            walkthroughs.
          </p>
        </section>

        {/* VERDICT */}
        <section className="bg-purple-50 border rounded-2xl p-8 mb-14">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            🏁 Final Verdict
          </h2>

          <p className="text-lg text-purple-900 leading-relaxed">
            If your priority is documentation and visual tracking, OpenSpace is
            a strong solution. However, for companies seeking proactive quality
            control, automated inspections, and AI-powered defect detection,
            SpaceCapture delivers a more advanced construction inspection
            platform.
          </p>
        </section>

        {/* FAQ — IMPORTANT FOR SEO */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            ❓ Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg">
                Is SpaceCapture an alternative to OpenSpace?
              </h3>
              <p>
                Yes. SpaceCapture focuses on AI-based inspections and defect
                detection, making it a strong alternative for quality control
                workflows.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Which software is better for construction inspections?
              </h3>
              <p>
                SpaceCapture is better for inspections, snagging, and reporting,
                while OpenSpace excels in site documentation and visualization.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
