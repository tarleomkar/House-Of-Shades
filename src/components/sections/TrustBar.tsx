import { motion } from '@/lib/motion-ui'
import { Paintbrush, Palette, Truck } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { VALUE_PROPS } from '@/lib/constants'
import { fadeUp, scrollReveal, staggerContainer } from '@/lib/motion'

const icons = [Paintbrush, Palette, Truck]

export function TrustBar() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          {...scrollReveal}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            id="trust-heading"
            className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
          >
            Why House Of Shades
          </h2>
          <p className="mt-4 text-charcoal-light">
            A completely integrated service model covering premium wholesale paint
            supply and professional application teams.
          </p>
        </motion.div>

        <motion.div
          {...scrollReveal}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-3"
        >
          {VALUE_PROPS.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={item.title} variants={fadeUp}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <Card className="h-full p-6 text-center transition-shadow hover:shadow-lg sm:text-left">
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-clay/10 text-clay sm:mx-0">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-medium text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          {...scrollReveal}
          variants={fadeUp}
          className="mt-10 rounded-2xl border border-clay/30 bg-gradient-to-r from-clay/10 via-peach/20 to-clay-light/10 p-8 text-center lg:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-pigment">
            Market Disruptive Pricing
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-charcoal-light leading-relaxed">
            We supply paint materials at rates significantly lower than standard retail
            market pricing, passing direct corporate margins straight to builders,
            engineers, and owners.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
