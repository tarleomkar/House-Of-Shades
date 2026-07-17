import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { VALUE_PROPS } from '@/lib/constants'
import { HERO_SEO } from '@/lib/seo'
import { cn } from '@/lib/utils'

export function Hero() {
  const skipAnimation = useRef(
    typeof document !== 'undefined' && !!document.getElementById('static-shell'),
  )

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const animate = (delay: 0 | 1 | 2 | 3 | 4) =>
    skipAnimation.current
      ? ''
      : cn('animate-fade-up opacity-0', delay > 0 && `hero-delay-${delay}`)

  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[480px] w-[480px] rounded-full bg-clay/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-peach/30 blur-3xl"
        aria-hidden
      />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className={animate(0)}>
          <Badge>{HERO_SEO.eyebrow}</Badge>
        </div>

        <h1
          id="hero-heading"
          className={cn(
            'mt-6 w-full font-display text-4xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-7xl uppercase',
            animate(1),
          )}
        >
          {HERO_SEO.h1}
        </h1>

        <p
          className={cn(
            'mt-6 max-w-4xl text-lg leading-relaxed text-charcoal-light lg:text-xl',
            animate(2),
          )}
        >
          {HERO_SEO.subheading}
        </p>

        <div className={cn('mt-8 flex flex-wrap gap-4', animate(3))}>
          <Button size="lg" onClick={() => scrollTo('#contact')}>
            {HERO_SEO.ctaPrimary}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('#services')}
            className="group"
          >
            {HERO_SEO.ctaSecondary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Button>
        </div>

        <div
          className={cn(
            'mt-14 grid w-full grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3',
            animate(4),
          )}
          role="list"
          aria-label="Key service highlights"
        >
          {VALUE_PROPS.map((item) => (
            <div key={item.title} role="listitem">
              <h3 className="font-display text-xl font-semibold text-charcoal lg:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray lg:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
