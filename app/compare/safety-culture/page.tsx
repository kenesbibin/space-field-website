import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SpaceCapture vs SafetyCulture (iAuditor) — Construction Inspection Software Comparison",
  description:
    "Compare SpaceCapture and SafetyCulture (iAuditor) for construction inspections. Explore AI defect detection, snagging workflows, offline inspections, and smart reporting for construction teams.",
  keywords: [
    "SpaceCapture vs SafetyCulture",
    "iAuditor alternative",
    "SafetyCulture alternative",
    "construction inspection software",
    "AI construction inspection app",
    "site inspection app",
    "construction snagging software",
    "field inspection software",
    "defect detection software construction",
    "construction reporting software",
  ],
  alternates: {
    canonical: 'https://spacecapture.ai/compare/safety-culture',
  },
};

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* HERO */}
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
          SpaceCapture vs SafetyCulture (iAuditor)
        </h1>

        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Selecting the right construction inspection software can significantly
          improve quality control, safety compliance, and reporting efficiency.
          This comparison of <strong>SpaceCapture vs SafetyCulture</strong>
          explains how AI-powered construction inspection tools differ from
          checklist-based inspection platforms.
        </p>

        {/* KEY DIFFERENCE */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            🔍 Core Difference
          </h2>

          <p className="text-slate-700 leading-relaxed">
            SafetyCulture (iAuditor) is a versatile inspection checklist
            platform used across industries, while SpaceCapture is purpose-built
            for construction teams needing AI-driven defect detection,
            automated snagging workflows, and photo-based reporting directly
            from the field.
          </p>
        </section>

        {/* FEATURE CARDS */}
        <section className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              🤖 SpaceCapture — AI Construction Intelligence
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>AI automated crack & defect detection</li>
              <li>Photo-based smart reporting</li>
              <li>Offline inspection mode</li>
              <li>Snagging & punch list workflows</li>
              <li>Construction-focused analytics</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <h2 className="text-2xl font-bold text-amber-600 mb-4">
              📋 SafetyCulture — Checklist Platform
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>Digital inspection checklists</li>
              <li>Compliance tracking</li>
              <li>Multi-industry templates</li>
              <li>Workflow management</li>
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
                  <th className="p-4 text-left">SafetyCulture</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-t">
                  <td className="p-4">AI Defect Detection</td>
                  <td className="p-4">✅ Yes</td>
                  <td className="p-4">❌ No</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Checklist Inspections</td>
                  <td className="p-4">Limited</td>
                  <td className="p-4">✅ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Offline Inspections</td>
                  <td className="p-4">✅ Yes</td>
                  <td className="p-4">✅ Yes</td>
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
            construction inspection teams needing automated defect detection and
            reporting. SafetyCulture is suitable for organizations requiring
            standardized inspection checklists across multiple industries.
          </p>
        </section>

        {/* VERDICT */}
        <section className="bg-blue-50 border rounded-2xl p-8 mb-14">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            🚀 Final Verdict
          </h2>

          <p className="text-lg text-blue-900 leading-relaxed">
            For general inspection workflows and compliance tracking,
            SafetyCulture is a solid platform. However, for companies seeking
            next-generation AI construction inspection software capable of
            automatically detecting defects and accelerating quality assurance,
            SpaceCapture provides a more specialized solution.
          </p>
        </section>

        {/* FAQ — HUGE SEO BOOST */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            ❓ Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg">
                Is SpaceCapture an alternative to SafetyCulture?
              </h3>
              <p>
                Yes. SpaceCapture is a construction-focused alternative that
                offers AI-powered defect detection and automated reporting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Which is better for construction inspections?
              </h3>
              <p>
                SpaceCapture is better for construction-specific inspections,
                while SafetyCulture is suited for general inspection checklists.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
