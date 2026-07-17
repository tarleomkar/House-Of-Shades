import { motion, useScroll, useTransform } from '@/lib/motion-ui'
import { useRef } from 'react'
import { fadeUp, scrollReveal, staggerContainer } from '@/lib/motion'

const steps = [
  {
    number: '01',
    title: 'Site Assessment',
    description:
      'We map your project scope, assess surfaces, and understand procurement and execution requirements on-site.',
  },
  {
    number: '02',
    title: 'Supply & Planning',
    description:
      'Direct procurement of premium coatings at project-scale rates, with a detailed deployment and application plan.',
  },
  {
    number: '03',
    title: 'Surface Preparation',
    description:
      'Meticulous prep, protective masking, and vendor coordination — ensuring every surface is ready for flawless application.',
  },
  {
    number: '04',
    title: 'Execution & Handover',
    description:
      'Skilled crews apply finishes, deep site cleaning follows, and your project is handed over — completely hands-free.',
  },
]

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 40%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="py-20 lg:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          {...scrollReveal}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            id="process-heading"
            className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
          >
            Our Process
          </h2>
          <p className="mt-4 text-charcoal-light">
            From first conversation to final brushstroke — a clear, collaborative journey.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mt-16">
          {/* Desktop horizontal line */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-border lg:block" aria-hidden>
            <motion.div
              className="h-full origin-left bg-clay"
              style={{ scaleX: lineScale }}
            />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-border lg:hidden" aria-hidden>
            <motion.div
              className="h-full origin-top bg-clay"
              style={{ scaleY: lineScale }}
            />
          </div>

          <motion.ol
            {...scrollReveal}
            variants={staggerContainer}
            className="grid gap-10 lg:grid-cols-4 lg:gap-8"
          >
            {steps.map((step) => (
              <motion.li key={step.number} variants={fadeUp} className="relative pl-14 lg:pl-0 lg:pt-16">
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-clay bg-cream font-display text-sm font-semibold text-clay lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
                  {step.number}
                </span>
                <div className="lg:text-center">
                  <h3 className="font-display text-xl font-medium text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
