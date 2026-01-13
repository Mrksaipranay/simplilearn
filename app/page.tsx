import { Hero } from '@/components/Hero'
import { RsvpForm } from '@/components/RSVPForm'
import { Exploration } from '@/components/Exploration'
import { Speakers } from '@/components/Speakers'
import { BehindCurtain } from '@/components/BehindCurtain'
import { Agenda } from '@/components/Agenda'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Hero />
      <div className="container mx-auto px-4 relative z-20">
        <RsvpForm />
      </div>
      <Exploration />
      <Speakers />
      <BehindCurtain />
      <Agenda />
      <Footer />
    </main>
  )
}
