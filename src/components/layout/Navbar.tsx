import { useEffect, useState } from 'react'
import { AnimatePresence, motion, MotionProvider } from '@/lib/motion-ui'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BRAND, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
            className="relative z-[60] rounded-lg p-2 text-charcoal lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <MotionProvider>
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                key="mobile-nav-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden"
                onClick={() => setMobileOpen(false)}
                aria-hidden
              />
              <motion.div
                key="mobile-nav-drawer"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-cream p-8 shadow-2xl lg:hidden"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={BRAND.logo}
                      alt={BRAND.logoAlt}
                      width={40}
                      height={40}
                      decoding="async"
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover ring-1 ring-border/60"
                    />
                    <span className="font-display text-xl font-semibold text-charcoal">
                      {BRAND.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <ul className="flex flex-col gap-6">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => scrollTo(link.href)}
                        className="font-display text-2xl text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button className="w-full" onClick={() => scrollTo('#contact')}>
                    Get In Touch
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MotionProvider>
    </>
  )
}
