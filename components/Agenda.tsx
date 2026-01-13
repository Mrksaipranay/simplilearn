export function Agenda() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#00C6FF] to-[#0050D8]">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl font-bold text-white mb-16 text-center">Event Agenda</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-8 shadow-xl border-t-8 border-yellow-400 flex flex-col h-full hover:transform hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-[#001D4A] font-bold text-2xl mb-3 leading-tight">Welcome & Opening</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Sudipto Mitra / Rob Lauber</p>
                        <p className="text-gray-600 text-base leading-relaxed mt-auto">
                            Setting the stage for the AI workforce revolution. Why capability is the new currency.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl p-8 shadow-xl border-t-8 border-yellow-400 flex flex-col h-full hover:transform hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-[#001D4A] font-bold text-2xl mb-3 leading-tight">Keynote: What Enterprise Leaders Are Seeing On The Ground</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Market Trends & Data</p>
                        <p className="text-gray-600 text-base leading-relaxed mt-auto">
                            A data-driven look at how roles are changing and what leaders are prioritizing.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl p-8 shadow-xl border-t-8 border-yellow-400 flex flex-col h-full hover:transform hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-[#001D4A] font-bold text-2xl mb-3 leading-tight">Lunch & Executive Conversation</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Industry Experts Invited</p>
                        <p className="text-gray-600 text-base leading-relaxed mt-auto">
                            Open discussion on prompt engineering, ethics, and sustainable AI adoption.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
