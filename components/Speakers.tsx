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
        <section className="bg-primary text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-yellow-400">Featured Speakers</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SPEAKERS.map((speaker, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400 shrink-0">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-100">{speaker.name}</h3>
                                <p className="text-sm text-blue-300 mb-3 font-medium uppercase tracking-wide">{speaker.role}</p>
                                <p className="text-sm text-blue-50 leading-relaxed opacity-90">
                                    {speaker.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Banner Strip */}
            <div className="container mx-auto px-4 mt-16">
                <div className="bg-[#003B95] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-400/30">
                    <div>
                        <h4 className="font-bold text-lg text-blue-100">Additional Expert Perspectives</h4>
                        <p className="text-sm text-blue-300">Social experts from leading consulting and enterprise training organizations will facilitate breakout discussions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
