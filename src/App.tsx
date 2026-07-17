import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { ConsultationCTA } from '@/components/sections/ConsultationCTA'
import { FAQ } from '@/components/sections/FAQ'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Hero } from '@/components/sections/Hero'
import { Process } from '@/components/sections/Process'
import { ServiceExplorer } from '@/components/sections/ServiceExplorer'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustBar } from '@/components/sections/TrustBar'
import { useLenis } from '@/lib/useLenis'

export default function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TrustBar />
        <ServiceExplorer />
        <Process />
        <FeaturedWork />
        <Testimonials />
        <FAQ />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  )
}
