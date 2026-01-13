import { Database, GitMerge, Briefcase, Rocket, Users, Trophy } from 'lucide-react';

const ITEMS = [
    {
        icon: Database,
        title: "Skills Data",
        desc: "Need for currency/fidelity"
    },
    {
        icon: GitMerge,
        title: "Manage Style Shift",
        desc: "Rapid unlearning & re-learning"
    },
    {
        icon: Briefcase,
        title: "Leaders -> AI Portfolio",
        desc: "Requiring new operating mindset"
    },
    {
        icon: Rocket,
        title: "Frontier Capability",
        desc: "New pockets of opportunity"
    },
    {
        icon: Users,
        title: "User-Centric Capabilities",
        desc: "Individual resiliency and digital fluency"
    },
    {
        icon: Trophy,
        title: "Winning Organizations",
        desc: "Create value at speed"
    }
];

export function Exploration() {
    return (
        <section className="py-20 bg-gray-50 pt-32">
            <div className="container mx-auto px-4">
                <div className="mb-10 text-left">
                    <h2 className="text-xl font-bold uppercase tracking-widest text-orange-500 mb-2">What We'll Explore</h2>
                    <p className="text-3xl font-bold text-[#001D4A] max-w-2xl">The critical shifts every enterprise faces this year</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ITEMS.map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all h-full flex items-center gap-4">
                            <div className="p-2.5 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#001D4A] text-base leading-snug">{item.title}</h4>
                                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
