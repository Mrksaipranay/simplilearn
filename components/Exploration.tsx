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
        <section className="py-20 bg-gray-50 pt-32"> {/* pt-32 to account for overlap if needed, but Rsvp is -mt-24 so we need space below it */}
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-[#001D4A] mb-3 text-orange-500">What We'll Explore</h2>
                    <p className="text-gray-600 text-lg">The critical shifts every enterprise faces this year:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ITEMS.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
