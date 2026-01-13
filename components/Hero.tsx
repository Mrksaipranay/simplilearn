'use client';

import { motion } from 'framer-motion';
// import { Calendar, MapPin } from 'lucide-react'; // Icons not strictly requested in locked spec text but kept if needed or replaced by text per spec

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden mx-auto" style={{ maxWidth: '1440px', height: '693px' }}>
            {/* Background Container Locked */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            287.08deg,
                            rgba(28, 78, 241, 0.45) -11.11%,
                            rgba(26, 60, 182, 0.45) 106.32%
                        ),
                        url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")
                    `,
                    backgroundBlendMode: 'plus-darker, normal',
                    filter: 'blur(0.5px)',
                    transform: 'rotate(180deg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}
            />

            {/* Overlay Gradient Locked */}
            <div
                className="absolute"
                style={{
                    width: '1440px',
                    height: '503px',
                    top: '375px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.2%, rgba(0, 0, 0, 0.6) 127.97%)',
                    zIndex: 1
                }}
            />

            {/* Content Container - Rotated back or just placed on top? The bg is rotated. Content should be normal. */}
            <div className="relative z-10 w-full h-full flex flex-col items-center pt-[80px]">

                {/* Badge */}
                <div className="flex flex-col items-center mb-8">
                    <span className="text-white text-[12px] font-bold uppercase tracking-widest bg-[#0050D8] px-3 py-1 rounded-full mb-2">
                        Invite-Only
                    </span>
                    <span className="text-blue-200 text-[12px] uppercase tracking-widest">
                        An Executive Roundtable · Lunch
                    </span>
                </div>

                {/* Headline Locked */}
                <h1 className="text-white text-center font-bold text-[64px] leading-[1.15] mb-6">
                    The Skills That Matter Next:<br />
                    Preparing Your Workforce<br />
                    & Leaders for the AI Era
                </h1>

                {/* Meta Line */}
                <div className="text-white text-[18px] font-medium flex gap-2 items-center">
                    <span>February 20, 2026</span>
                    <span className="mx-2">•</span>
                    <span>Chamberlain’s Steak & Fish House, Dallas</span>
                </div>
            </div>
        </section>
    )
}
