import { Suspense, lazy } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SEOHead } from '@/components/seo/SEOHead'
import { SkipLink } from '@/components/seo/SkipLink'
import { StructuredData } from '@/components/seo/StructuredData'
import { LazySection } from '@/components/ui/LazySection'
import { useLenis } from '@/lib/useLenis'
import { usePrefetchSections } from '@/lib/usePrefetchSections'

const BelowFold = lazy(() =>
  import('@/components/layout/BelowFold').then((m) => ({ default: m.BelowFold })),
)

export default function App() {
  useLenis()
  usePrefetchSections()

  return (
    <>
      <SEOHead />
      <StructuredData />
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Hero />
        <LazySection minHeight="36rem">
          <Suspense fallback={null}>
            <BelowFold />
          </Suspense>
        </LazySection>
      </main>
    </>
  )
}
