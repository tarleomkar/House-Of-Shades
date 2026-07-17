import { Suspense, lazy, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BRAND, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const MobileNav = lazy(() =>
  import('@/components/layout/MobileNav').then((m) => ({ default: m.MobileNav })),
)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileNavMounted, setMobileNavMounted] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const openMobileMenu = () => {
    setMobileNavMounted(true)
    setMobileOpen(true)
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border/60 bg-cream/85 shadow-sm backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#"
            aria-label={`${BRAND.name} — Home`}
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img
              src={BRAND.logo}
              alt={BRAND.logoAlt}
              width={44}
              height={44}
              decoding="async"
              fetchPriority="high"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-border/60 lg:h-11 lg:w-11"
            />
            <span className="font-display text-xl font-semibold tracking-tight text-charcoal lg:text-2xl">
              {BRAND.name}
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-charcoal-light transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button onClick={() => scrollTo('#contact')}>Get In Touch</Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-charcoal lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => (mobileOpen ? setMobileOpen(false) : openMobileMenu())}
            onPointerEnter={() => void import('@/components/layout/MobileNav')}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {mobileNavMounted && (
        <Suspense fallback={null}>
          <MobileNav
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            onClosed={() => setMobileNavMounted(false)}
            onNavigate={scrollTo}
          />
        </Suspense>
      )}
    </>
  )
}
