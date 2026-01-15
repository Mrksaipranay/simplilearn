import Hero from '@/components/Hero';
import RSVPForm from "@/components/RSVPForm";
import Capabilities from '@/components/Capabilities';
import Speakers from '@/components/Speakers';
import React from 'react';
import Image from 'next/image';


export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />

      <section className="relative z-30 w-full bg-[#F8F8F8] py-8 md:py-16">
        <div className="mx-auto px-6 md:px-12 lg:px-24 max-w-360">
          <RSVPForm />
        </div>
      </section>

      <section className="relative z-20 w-full bg-white">
        <div className="mx-auto pt-2 pb-16 md:pb-24 max-w-360">
          <div className="px-6 mx-auto space-y-10 md:space-y-16 text-left max-w-310">

            <p className="text-xl md:text-[26px] text-gray-800 font-medium leading-relaxed md:leading-9.75">
              AI is accelerating change across every operational layer. Roles are shifting.
              Leadership models are collapsing and reforming. Frontline and mid-level managers
              will soon lead teams of people and intelligent agents.
            </p>

            <div className="space-y-6 md:space-y-10">
              <p className="text-xl md:text-[26px] text-gray-800 font-medium leading-relaxed md:leading-9.75">
                But even the most advanced enterprises are asking the same question:
              </p>

              <h3 className="text-3xl md:text-[64px] font-black text-black tracking-tight leading-tight">
                Which capabilities will matter most,<br />
                and how do we build them at scale?
              </h3>
            </div>

            <p className="text-xl md:text-[26px] text-gray-800 font-medium leading-relaxed md:leading-9.75">
              This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders
              for a candid, senior-level discussion on what’s coming next.
            </p>

          </div>
        </div>
      </section>

      <div className="mt-24">
        <Capabilities />
      </div>

      <Speakers />

      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-360">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 lg:gap-x-16 items-start">

            <div className="order-1 lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-3 w-full flex justify-center lg:justify-end mb-8 lg:mb-0">
              <div className="relative w-full mx-auto
                max-w-[420px]
                sm:max-w-[480px]
                md:max-w-[520px]
                lg:max-w-[570px]
                aspect-[570/611]
                lg:mx-0">
                <Image
                  src="/chess-pieces.png"
                  alt="Strategic Insights"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 570px"
                  priority
                  unoptimized
                />
              </div>
            </div>

            <h2 className="order-2 lg:col-span-7 lg:row-start-1 text-3xl md:text-[40px] font-black text-[#F5AB40] mb-8 lg:mb-12 leading-[1.1] max-w-171.75">
              Go behind the curtain with real examples and high-scale insights
            </h2>

            <div className="order-3 lg:col-span-7 space-y-6 md:space-y-8 mb-12 md:mb-16 mt-8 lg:mt-0">
              <h3 className="text-2xl font-bold text-black mb-8 md:mb-10">You&apos;ll walk away with:</h3>
              <ul className="space-y-6 md:space-y-8">
                {[
                  'A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.',
                  'Insights from high-scale operating environments including the former CLO of McDonald\'s on what truly scales and what breaks under pressure.',
                  'Signals for where capability gaps may already be forming in your organization.',
                  'Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.',
                  'Actionable insights you can take straight into your next exec meeting.'
                ].map((item: string, i: number) => (
                  <li key={i} className="flex gap-4 md:gap-8 items-start">
                    <div className="bg-[#F5AB40] shrink-0 w-0.75 min-h-10 py-1 self-stretch" />
                    <span className="text-lg md:text-[20px] text-black font-medium py-1 leading-relaxed md:leading-7.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-4 lg:col-span-7 flex flex-col items-start w-full">
              <RSVPForm />
            </div>

          </div>
        </div>
      </section>


      {/* Agenda Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#00FFFF] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-10 md:mb-16">Event Agenda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Welcome & Opening",
                speaker: "Sudipto Mitra, CRO Simplilearn",
                description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape."
              },
              {
                title: "Keynote: What Enterprise Leaders Are Seeing on the Ground",
                speaker: "Rob Lauber, Former CLO McDonald’s",
                description: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
              },
              {
                title: "Lunch & Executive Conversation",
                speaker: "Industry Experts Invited",
                description: "What large enterprise talent ecosystems are learning about capability-building at scale."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-xl shadow-sm h-full flex flex-col">
                <h4 className="text-[26px] font-bold text-blue-600 mb-8 leading-tight">
                  {item.title}
                </h4>
                <p className="text-lg font-bold text-black mb-6">
                  {item.speaker}
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-between overflow-hidden min-h-118.75">
        <div className="absolute inset-0 z-0">
          <Image
            src="/restaurant-footer.png"
            alt="Chamberlain's Steak & Fish House"
            fill
            sizes="100vw"
            className="object-cover brightness-50"
          />
        </div>

        {/* Top Content: Heading & Form */}
        <div className="relative z-10 pt-16 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-2xl md:text-[30px] font-black text-white mb-8 md:mb-10 tracking-tight leading-none"
              style={{ fontWeight: 900 }}
            >
              Space is limited.
            </h2>
            <div className="flex justify-start w-full">
              <RSVPForm />
            </div>
          </div>
        </div>

        {/* Bottom Overlay: Logo & Copyright */}
        <div className="relative z-10 pb-12 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col">
              <div className="relative w-62.5 aspect-[250/60]">
                <Image
                  src="/logo-white.png"
                  alt="Simplilearn Logo"
                  fill
                  sizes="(max-width: 768px) 200px, 250px"
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-white/80 text-lg font-medium">
              © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}

