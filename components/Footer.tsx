import { Button } from './ui/button';
import { Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden py-32">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 opacity-25">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Space is limited.</h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
                    February 20, 2024 • Chamberlain's Steak & Fish House
                </p>

                <Button variant="rsvp" size="lg" className="mb-20 px-10 py-6 text-lg font-bold tracking-widest uppercase shadow-2xl shadow-orange-500/30">
                    RSVP NOW <Mail className="ml-3 w-5 h-5" />
                </Button>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700/50 pt-8 mt-8 opacity-90">
                    <div className="font-bold text-2xl tracking-tighter mb-4 md:mb-0">simplilearn</div>
                    <div className="text-sm text-gray-400">
                        &copy; 2024 Simplilearn. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
