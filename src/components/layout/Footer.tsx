import { Mail, Phone, Share2 } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const footerLinks = {
  Offerings: [
    { label: 'Direct Paint Supply', href: '#services' },
    { label: 'Vendor Management', href: '#services' },
    { label: 'Surface & Site Cleaning', href: '#services' },
    { label: 'Turnkey Execution', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
  ],
  Connect: [
    {
      label: BRAND.email,
      href: BRAND.emailHref,
      icon: Mail,
    },
    {
      label: BRAND.phone,
      href: BRAND.phoneHref,
      icon: Phone,
    },
    {
      label: BRAND.instagram,
      href: BRAND.instagramHref,
      icon: Share2,
    },
  ],
}

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border bg-cream-dark/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-semibold text-charcoal">
              {BRAND.name}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-clay">
              {BRAND.tagline}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal-light">
              Premium paint consultancy, interior &amp; exterior painting, texture
              finishes, and color coordination in {BRAND.location} — founded by{' '}
              {BRAND.founder}.
            </p>
            <a
              href={BRAND.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-charcoal-light transition-colors hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            >
              <Share2 className="h-4 w-4" aria-hidden />
              Connect on Instagram
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'icon' in link && link.icon ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-sm text-charcoal-light transition-colors hover:text-charcoal"
                      >
                        <link.icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        {link.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => scrollTo(link.href)}
                        className="text-sm text-charcoal-light transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-warm-gray">
            {BRAND.founder} · {BRAND.phone}
          </p>
        </div>
      </div>
    </footer>
  )
}
