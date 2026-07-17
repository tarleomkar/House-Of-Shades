import { motion } from 'framer-motion'
import { Accordion, type AccordionItem } from '@/components/ui/Accordion'
import { fadeUp, scrollReveal } from '@/lib/motion'

const faqItems: AccordionItem[] = [
  {
    question: 'Who does House Of Shades work with?',
    answer:
      'We serve builders, site engineers, commercial contractors, and retail property owners. Our integrated model is designed for project-scale procurement and professional onsite execution — whether you need materials only or a full turnkey solution.',
  },
  {
    question: 'How does direct paint supply work?',
    answer:
      'We procure high-grade commercial coatings and finishes at project-scale rates, significantly below standard retail pricing. Materials are delivered direct-to-site with bulk logistics managed on your behalf, passing corporate margins straight to your project.',
  },
  {
    question: 'What is included in turnkey execution?',
    answer:
      'Turnkey execution covers completely hands-free management — from initial site mapping and product deployment through skilled application crews, surface preparation, protective masking, post-paint cleaning, and final site handover.',
  },
  {
    question: 'Do you manage vendor and labour coordination?',
    answer:
      'Yes. Our vendor management service handles end-to-end supervision and coordination of skilled application crews and site painters, so you do not have to manage multiple contractors on your own.',
  },
  {
    question: 'How do I get a project estimate?',
    answer:
      'Contact us via the form below, call us directly, or connect on Instagram. We provide direct material rate quotes and onsite project estimates tailored to your scope — from single-site supply to full execution packages.',
  },
  {
    question: 'What makes your pricing different?',
    answer:
      'We offer market-disruptive pricing by sourcing paint materials at wholesale project rates rather than retail markups. This allows us to pass direct corporate margins to builders, engineers, and property owners without compromising on finish quality.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-cream-dark/50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div {...scrollReveal} variants={fadeUp} className="text-center">
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-charcoal-light">
            Common questions about our offerings, pricing, and project support.
          </p>
        </motion.div>

        <motion.div {...scrollReveal} variants={fadeUp} className="mt-12">
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}
