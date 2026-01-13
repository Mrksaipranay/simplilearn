import Image from 'next/image';
import { Button } from './ui/button';

export function BehindCurtain() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-orange-500 mb-6">
                            Go behind the curtain with real examples and high-scale insights
                        </h2>
                        <h3 className="text-xl font-semibold mb-6 text-[#001D4A]">You'll walk away with:</h3>

                        <ul className="space-y-4 mb-8 text-gray-600">
                            <li className="flex gap-3">
                                <span className="text-orange-500 font-bold">•</span>
                                <span>A clear view of the capabilities that business leaders will demand from their organizations.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-orange-500 font-bold">•</span>
                                <span>Insights from high-performing teams who have shifted focuses and budgets delivered real value.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-orange-500 font-bold">•</span>
                                <span>Ready-to-deploy frameworks for upskilling your workforce at scale.</span>
                            </li>
                        </ul>

                        <p className="mb-6 font-medium text-gray-800">
                            You can RSVP directly by emailing <a href="mailto:attend@simplilearn.net" className="text-blue-600 underline">attend@simplilearn.net</a> or by clicking the button below to send your confirmation.
                        </p>

                        <Button className="bg-orange-400 hover:bg-orange-500 text-white font-bold uppercase tracking-wide px-8 py-6">
                            SEND RSVP EMAIL
                        </Button>
                    </div>

                    <div className="lg:w-1/2 relative h-[400px] w-full">
                        {/* Chess pieces abstract image */}
                        <Image
                            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop"
                            alt="Strategic Chess Pieces"
                            fill
                            className="object-contain" // Contain or cover? Image A shows chess pieces on white/transparent background.
                        // Better to use object-cover if it has a background, but removing background is hard.
                        // I will use a clean chess image.
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
