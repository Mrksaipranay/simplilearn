export function Agenda() {
    return (
        <section className="py-20 bg-gradient-to-r from-cyan-400 to-blue-400">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-12">Event Agenda</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-yellow-400">
                        <h3 className="text-blue-600 font-bold text-lg mb-2">Welcome & Opening</h3>
                        <p className="text-sm text-gray-500 mb-4">Sudipto Mitra / Rob Lauber</p>
                        <p className="text-gray-700 text-sm">
                            Setting the stage for the AI workforce revolution. Why capability is the new currency.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-yellow-400">
                        <h3 className="text-blue-600 font-bold text-lg mb-2">Keynote: What Enterprise Leaders Are Seeing On The Ground</h3>
                        <p className="text-sm text-gray-500 mb-4">Market Trends & Data</p>
                        <p className="text-gray-700 text-sm">
                            A data-driven look at how roles are changing and what leaders are prioritizing.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-yellow-400">
                        <h3 className="text-blue-600 font-bold text-lg mb-2">Lunch & Executive Conversation</h3>
                        <p className="text-sm text-gray-500 mb-4">Industry Experts Invited</p>
                        <p className="text-gray-700 text-sm">
                            Open discussion on prompt engineering, ethics, and sustainable AI adoption.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
