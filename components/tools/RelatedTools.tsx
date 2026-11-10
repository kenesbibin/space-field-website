import React from 'react';
import Link from 'next/link';
import {
    Truck,
    HardHat,
    BarChart3,
    Ruler,
    Users,
    Palette,
    Zap,
    ArrowRight,
    ArrowLeftRight,
    BrickWall,
    Home,
    Mountain
} from 'lucide-react';

const ALL_TOOLS = [
    {
        name: "Asphalt Calculator",
        href: "/tools/asphalt-calculator",
        icon: Truck,
        color: "amber"
    },
    {
        name: "Concrete Calculator",
        href: "/tools/concrete-calculator",
        icon: HardHat,
        color: "slate"
    },
    {
        name: "Construction Cost Calculator",
        href: "/tools/construction-cost-calculator",
        icon: BarChart3,
        color: "blue"
    },
    {
        name: "Free Online CAD Viewer",
        href: "/tools/free-online-cad-viewer",
        icon: Ruler,
        color: "indigo"
    },
    {
        name: "Labor Cost Calculator",
        href: "/tools/labor-cost-calculator",
        icon: Users,
        color: "purple"
    },
    {
        name: "Paint Calculator",
        href: "/tools/paint-calculator",
        icon: Palette,
        color: "rose"
    },
    {
        name: "Switching Calculator",
        href: "/tools/switching-calculator",
        icon: Zap,
        color: "yellow"
    },
    {
        name: "Rebar Calculator",
        href: "/tools/rebar-calculator",
        icon: BrickWall,
        color: "orange"
    },
    {
        name: "Gravel Calculator",
        href: "/tools/gravel-calculator",
        icon: Mountain,
        color: "stone"
    },
    {
        name: "Roofing Shingle Calculator",
        href: "/tools/roofing-shingle-calculator",
        icon: Home,
        color: "red"
    },
    {
        name: "Construction Unit Converter",
        href: "/tools/unit-converter",
        icon: ArrowLeftRight,
        color: "cyan"
    }
];

const COLORS = {
    amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-600",
    slate: "bg-slate-50 text-slate-600 group-hover:bg-slate-600",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
    indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600",
    rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-600",
    yellow: "bg-yellow-50 text-yellow-600 group-hover:bg-yellow-600",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600",
    stone: "bg-stone-50 text-stone-600 group-hover:bg-stone-600",
    red: "bg-red-50 text-red-600 group-hover:bg-red-600",
    cyan: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600",
};

interface RelatedToolsProps {
    currentToolName: string;
}

export default function RelatedTools({ currentToolName }: RelatedToolsProps) {
    const filteredTools = ALL_TOOLS.filter(tool => tool.name !== currentToolName).slice(0, 3);

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-purple-600 pl-4">
                        Other Free Tools You Might Like
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filteredTools.map((tool) => (
                            <Link
                                key={tool.name}
                                href={tool.href}
                                className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:text-white transition-colors duration-300 ${COLORS[tool.color as keyof typeof COLORS]}`}>
                                    <tool.icon className="w-5 h-5" />
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                                    {tool.name}
                                </h4>
                                <div className="flex items-center text-xs font-bold text-slate-400 group-hover:text-purple-600 transition-colors">
                                    Try Now <ArrowRight className="ml-1 w-3 h-3" />
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            href="/tools"
                            className="text-purple-600 font-bold hover:underline inline-flex items-center gap-2"
                        >
                            View All Tools <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
