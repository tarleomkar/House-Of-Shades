import { motion } from '@/lib/motion-ui'
import { Accordion } from '@/components/ui/Accordion'
import { FAQ_SEO } from '@/lib/seo'
import { fadeUp, scrollReveal } from '@/lib/motion'

export function FAQ() {
  return (
    <section id="faq" className="bg-cream-dark/50 py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div {...scrollReveal} variants={fadeUp} className="text-center">
          <h2
            id="faq-heading"
            className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-charcoal-light">
            Common questions about painting, consultancy, and project support in Nashik.
          </p>
        </motion.div>

        <motion.div {...scrollReveal} variants={fadeUp} className="mt-12">
          <Accordion items={[...FAQ_SEO]} />
        </motion.div>
      </div>
    </section>
  )
}
