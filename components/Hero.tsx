'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#003380] via-[#001D4A] to-[#000F26] bg-noise text-white pt-12 pb-40 overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Logo Area */}
                <div className="flex justify-between items-center mb-16 px-4">
                    <div className="font-bold text-2xl tracking-tighter">simplilearn</div>
                    <div className="hidden md:block text-sm font-medium text-blue-200">Result-Driven. Global.</div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl px-4 text-center md:text-left"
                >
                    <div className="inline-block bg-[#0050D8] border border-blue-400/30 rounded-full px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest mb-8 text-white shadow-lg shadow-blue-900/20">
                        Invitation Only
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-[1.15] mb-8 tracking-tight">
                        <span className="text-gradient-gold font-extrabold">The Skills That Matter Next:</span><br />
                        Preparing Your Workforce<br />
                        & Leaders for the AI Era
                    </h1>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-blue-100 font-medium text-lg">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[#FDB931]" />
                            <span>February 20, 2024</span>
                        </div>
                        <div className="hidden md:block h-1.5 w-1.5 bg-blue-400 rounded-full mt-2"></div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-[#FDB931]" />
                            <span>Chamberlain's Steak & Fish House, Dallas</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
