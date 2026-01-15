import { RefreshCcw, Network, BarChart3, ShieldCheck, Layout, Rocket } from 'lucide-react';

const capabilities = [
    {
        title: 'Skills Decay',
        description: 'every 2-3 years\nfaster for technical skills',
        icon: RefreshCcw,
    },
    {
        title: 'Manager Role Shift',
        description: 'orchestrating\npeople + AI agents',
        icon: Network,
    },
    {
        title: 'Leaders + AI Co-Pilots',
        description: 'requires sensemaking\nand systems thinking',
        icon: BarChart3,
    },
    {
        title: 'Frontline Capability',
        description: 'now depends\non digital fluency',
        icon: ShieldCheck,
    },
    {
        title: 'Core Human Capabilities',
        description: 'analytical reasoning\nand scenario planning',
        icon: Layout,
    },
    {
        title: 'Winning Organizations',
        description: 'predict skills\nahead of demand',
        icon: Rocket,
    },
];

const Capabilities = () => {
    return (
        <section className="py-16 md:py-24 bg-[#E8F0FF] px-6">
            <div className="mx-auto max-w-[1240px]">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 px-2">What We&apos;ll Explore</h2>
                <p className="text-xl md:text-2xl text-black font-semibold mb-12 px-2">
                    The critical shifts every enterprise must plan for:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center md:justify-items-start">
                    {capabilities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white px-6 py-8 md:px-8 md:py-10 rounded-lg w-full shadow-[0px_4px_34px_0px_#00000026] flex flex-col items-start transition-transform hover:scale-[1.02] h-full min-h-[200px]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <item.icon className="w-8 h-8 text-blue-600 shrink-0" />
                                <h3 className="text-xl md:text-[25px] font-bold text-black leading-tight">{item.title}</h3>
                            </div>
                            <p className="text-lg md:text-[19px] text-gray-800 leading-snug font-medium whitespace-pre-line">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Capabilities;
