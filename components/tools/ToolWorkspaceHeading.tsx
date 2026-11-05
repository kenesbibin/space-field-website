import { ArrowUpRight, Layers3 } from 'lucide-react';

export default function ToolWorkspaceHeading({ label, steps }: { label: string; steps: string[] }) {
  return <div className="tool-workspace-heading">
    <div className="tool-workspace-label"><Layers3 size={15} aria-hidden="true" /><span>{label}</span><span className="tool-workspace-dot" /> Planning workspace</div>
    <ol className="tool-workspace-steps" aria-label="How to use this tool">
      {steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}{index < steps.length - 1 && <ArrowUpRight size={14} aria-hidden="true" />}</li>)}
    </ol>
  </div>;
}
