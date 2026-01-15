import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#000511] text-white w-full">

            {/* Background Art Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-v3.png"
                    alt="Digital Background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>

            {/* Premium Blue Gradient Overlay with Blend Effect */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'linear-gradient(180deg, #1C4EF1 0%, #1A3CB6 100%)',
                    mixBlendMode: 'multiply',
                    opacity: 0.5
                }}
            />

            {/* Dark contrast overlay layer */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'rgba(2, 6, 23, 0.55)'
                }}
            />


            <div className="relative z-20 w-full mx-auto px-6 md:px-12 lg:px-24 flex flex-col pt-12 pb-16 md:pt-16 md:pb-24 max-w-[1440px]">
                {/* Logo */}
                <div className="relative mb-12 md:mb-20 w-[200px] h-[46px] md:w-[280px] md:h-[65px]">
                    <Image
                        src="/logo-white.png"
                        alt="Simplilearn Logo"
                        fill
                        sizes="(max-width: 768px) 200px, 280px"
                        className="object-contain object-left"
                        priority
                    />
                </div>


                {/* Content Wrapper */}
                <div className="flex flex-col gap-6 md:gap-8 max-w-[1100px]">
                    {/* Badge and Tagline */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 items-start">
                        <span className="bg-[#00FFFF] text-black font-black px-4 py-2 md:px-6 md:py-2.5 rounded-sm text-sm md:text-xl uppercase tracking-wider inline-block">
                            Invite-Only
                        </span>
                        <span className="text-[#00FFFF] font-semibold text-lg md:text-2xl">
                            An Executive Roundtable · Lunch
                        </span>
                    </div>

                    {/* Mixed Color Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-[62px] font-black leading-[1.2] md:leading-[1.15] tracking-tight">
                        <span className="text-[#F5AB40] block mb-2 md:mb-0">The Skills That Matter Next:</span>
                        <span className="text-white">Preparing Your Workforce<br className="hidden md:block" />
                            & Leaders for the AI Era</span>
                    </h1>

                    {/* Details */}
                    <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
                        <div className="flex items-center gap-3 md:gap-4 text-lg md:text-3xl font-black">
                            <Calendar className="text-white w-6 h-6 md:w-8 md:h-8 shrink-0" strokeWidth={3} />
                            <span>February 20, 2026</span>
                        </div>
                        <div className="flex items-start md:items-center gap-3 md:gap-4 text-lg md:text-3xl font-black">
                            <MapPin className="text-white w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1 md:mt-0" strokeWidth={3} />
                            <span>Chamberlain&apos;s Steak & Fish House, Dallas</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
