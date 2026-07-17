import { AnimatePresence, motion } from '@/lib/motion-ui'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BRAND, NAV_LINKS } from '@/lib/constants'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  onClosed: () => void
  onNavigate: (href: string) => void
}

export function MobileNav({ open, onClose, onClosed, onNavigate }: MobileNavProps) {
  return (
    <AnimatePresence onExitComplete={onClosed}>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            key="drawer"
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
                onClick={onClose}
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
                    onClick={() => onNavigate(link.href)}
                    className="font-display text-2xl text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button className="w-full" onClick={() => onNavigate('#contact')}>
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
