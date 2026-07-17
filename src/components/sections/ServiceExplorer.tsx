import { motion } from '@/lib/motion-ui'
import {
  Brush,
  HardHat,
  Sparkles,
  Truck,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { OFFERINGS } from '@/lib/constants'
import { fadeUp, scrollReveal, staggerContainer } from '@/lib/motion'

const icons = [Truck, HardHat, Sparkles, Brush]

export function ServiceExplorer() {
  return (
    <section id="services" className="bg-cream-dark/50 py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          {...scrollReveal}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-clay">
            Services & Advantage
          </p>
          <h2 id="services-heading" className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Our Offerings
          </h2>
          <p className="mt-4 text-charcoal-light">
            Integrated paint consultancy and painting services in Nashik — premium
            wholesale supply and professional application teams for every project scale.
          </p>
        </motion.div>

        <motion.div
          {...scrollReveal}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {OFFERINGS.map((offering, i) => {
            const Icon = icons[i]
            return (
              <motion.article key={offering.title} variants={fadeUp}>
                <Card className="group h-full p-8 transition-shadow hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/15 text-clay transition-colors group-hover:bg-clay group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-charcoal">
                    {offering.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                    {offering.description}
                  </p>
                </Card>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
