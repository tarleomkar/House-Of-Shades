import { Suspense, lazy } from 'react'
import { LazySection } from '@/components/ui/LazySection'
import { MotionProvider } from '@/lib/motion-ui'

const About = lazy(() =>
  import('@/components/sections/About').then((m) => ({ default: m.About })),
)
const TrustBar = lazy(() =>
  import('@/components/sections/TrustBar').then((m) => ({ default: m.TrustBar })),
)
const ServiceExplorer = lazy(() =>
  import('@/components/sections/ServiceExplorer').then((m) => ({
    default: m.ServiceExplorer,
  })),
)
const Process = lazy(() =>
  import('@/components/sections/Process').then((m) => ({ default: m.Process })),
)
const FeaturedWork = lazy(() =>
  import('@/components/sections/FeaturedWork').then((m) => ({
    default: m.FeaturedWork,
  })),
)
const Testimonials = lazy(() =>
  import('@/components/sections/Testimonials').then((m) => ({
    default: m.Testimonials,
  })),
)
const FAQ = lazy(() =>
  import('@/components/sections/FAQ').then((m) => ({ default: m.FAQ })),
)
const ConsultationCTA = lazy(() =>
  import('@/components/sections/ConsultationCTA').then((m) => ({
    default: m.ConsultationCTA,
  })),
)
const Footer = lazy(() =>
  import('@/components/layout/Footer').then((m) => ({ default: m.Footer })),
)

export function BelowFold() {
  return (
    <MotionProvider>
      <LazySection minHeight="36rem">
        <Suspense fallback={null}>
          <About />
        </Suspense>
      </LazySection>
      <LazySection minHeight="32rem">
        <Suspense fallback={null}>
          <TrustBar />
        </Suspense>
      </LazySection>
      <LazySection minHeight="36rem">
        <Suspense fallback={null}>
          <ServiceExplorer />
        </Suspense>
      </LazySection>
      <LazySection minHeight="32rem">
        <Suspense fallback={null}>
          <Process />
        </Suspense>
      </LazySection>
      <LazySection minHeight="40rem">
        <Suspense fallback={null}>
          <FeaturedWork />
        </Suspense>
      </LazySection>
      <LazySection minHeight="28rem">
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
      </LazySection>
      <LazySection minHeight="28rem">
        <Suspense fallback={null}>
          <FAQ />
        </Suspense>
      </LazySection>
      <LazySection minHeight="36rem">
        <Suspense fallback={null}>
          <ConsultationCTA />
        </Suspense>
      </LazySection>
      <LazySection minHeight="20rem">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazySection>
    </MotionProvider>
  )
}
