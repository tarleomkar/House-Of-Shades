import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { BRAND, FOUNDER_QUOTE } from '@/lib/constants'
import { fadeUp, scrollReveal } from '@/lib/motion'

export function About() {
  return (
    <section id="about" className="bg-cream-dark/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div {...scrollReveal} variants={fadeUp}>
            <p className="text-sm font-medium uppercase tracking-wider text-clay">
              About Our Firm
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
              Welcome to {BRAND.name}
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal-light">
              Founded and led by <strong className="font-medium text-charcoal">{BRAND.founder}</strong>,
              our firm delivers premium paint coatings, expert color coordination, and
              end-to-end execution support tailored for all types of spaces.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-light">
              We design our operations to perfectly support the specialized needs of
              builders, site engineers, commercial contractors, and retail property
              owners alike. We believe that high-end structural finishing should be
              completely streamlined, long-lasting, and highly economical.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-light">
              Our core commitment centers on bringing total operational ease to your
              sites. We manage the heavy lifting on your behalf — from managing bulk
              direct-to-site supply logistics to deploying reliable execution labor force.
            </p>
          </motion.div>

          <motion.div {...scrollReveal} variants={fadeUp}>
            <blockquote className="relative rounded-2xl border border-border bg-white/70 p-8 shadow-sm lg:p-10">
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-clay/20"
                aria-hidden
              />
              <p className="font-display text-xl italic leading-relaxed text-charcoal sm:text-2xl">
                &ldquo;{FOUNDER_QUOTE}&rdquo;
              </p>
              <footer className="mt-8 border-t border-border pt-6">
                <cite className="not-italic">
                  <span className="font-display text-2xl text-clay">{BRAND.founder}</span>
                  <span className="mt-1 block text-sm text-warm-gray">
                    Founder, {BRAND.name}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
