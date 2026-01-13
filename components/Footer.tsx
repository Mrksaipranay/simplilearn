import { Button } from './ui/button';
import { Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden py-24">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Space is limited.</h2>
                <p className="text-xl text-gray-300 mb-8">
                    February 20, 2024 • Chamberlain's Steak & Fish House
                </p>

                <Button variant="rsvp" size="lg" className="mb-16">
                    RSVP NOW <Mail className="ml-2 w-4 h-4" />
                </Button>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8 mt-8 opacity-70">
                    <div className="font-bold text-2xl tracking-tighter mb-4 md:mb-0">simplilearn</div>
                    <div className="text-sm text-gray-400">
                        &copy; 2024 Simplilearn. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
