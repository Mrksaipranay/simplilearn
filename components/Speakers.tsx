import Image from 'next/image';

const SPEAKERS = [
    {
        name: "Rob Lauber",
        role: "Former CLO, McDonald's",
        bio: "Rob Lauber is a global workforce and capability building leader with over 30 years of experience helping organizations improve outcomes.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Krishna Kumar",
        role: "Founder & CEO, Simplilearn",
        bio: "Krishna Kumar is the Founder and CEO of Simplilearn. Just looking ahead of the curve in terms of technology, engaging business leaders.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Sudipto Mitra",
        role: "CHRO, Tech Mahindra",
        bio: "Sudipto Mitra is a senior human resources and growth leader with over 20 years of experience helping companies navigate transformations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
    }
];

export function Speakers() {
    return (
        <section className="bg-simplilearn-blue bg-noise text-white py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-16 text-[#FDB931]">Featured Speakers</h2>

                <div className="flex flex-col gap-10 max-w-4xl">
                    {SPEAKERS.map((speaker, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 hover:bg-white/5 p-4 rounded-xl transition-colors">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#FDB931] shrink-0 shadow-lg">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{speaker.name}</h3>
                                <p className="text-sm text-blue-200 mb-3 font-medium uppercase tracking-wider">{speaker.role}</p>
                                <p className="text-base text-blue-100 leading-relaxed opacity-90 max-w-2xl">
                                    {speaker.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Banner Strip - kept but refined */}
            <div className="container mx-auto px-4 mt-20">
                <div className="bg-[#003B95]/50 backdrop-blur-sm rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-400/30 shadow-xl">
                    <div>
                        <h4 className="font-bold text-xl text-white mb-2">Additional Expert Perspectives</h4>
                        <p className="text-sm text-blue-200">Social experts from leading consulting and enterprise training organizations will facilitate breakout discussions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
