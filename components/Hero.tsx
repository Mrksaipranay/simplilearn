'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative bg-simplilearn-blue text-white pt-12 pb-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Logo Area */}
                <div className="flex justify-between items-center mb-16 opacity-90">
                    <div className="font-bold text-2xl tracking-tighter">simplilearn</div>
                    <div className="hidden md:block text-sm font-medium text-blue-200">Result-Driven. Global.</div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider mb-6 text-blue-100">
                        Invitation Only
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                        <span className="text-gradient-gold">The Skills That Matter Next:</span><br />
                        Preparing Your Workforce<br />
                        & Leaders for the AI Era
                    </h1>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-blue-100 font-medium text-lg">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-yellow-400" />
                            <span>February 20, 2024</span>
                        </div>
                        <div className="hidden md:block h-1 w-1 bg-blue-400 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-yellow-400" />
                            <span>Chamberlain's Steak & Fish House, Dallas</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
