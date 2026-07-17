import { useState } from 'react'
import { AnimatePresence, motion } from '@/lib/motion-ui'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { fadeUp, scrollReveal } from '@/lib/motion'
import { MOTION } from '@/lib/constants'

const testimonials = [
  {
    name: 'Priya & Rahul M.',
    city: 'Nashik',
    quote:
      'They understood our home before we did. The palette feels warm, layered, and completely us — not a catalogue look.',
    rating: 5,
  },
  {
    name: 'Ananya S.',
    city: 'Panchavati, Nashik',
    quote:
      'From sample boards to the final coat, every step felt considered. Our living room finally has the depth we wanted.',
    rating: 5,
  },
  {
    name: 'David & Meera K.',
    city: 'Gangapur, Nashik',
    quote:
      'Professional, unhurried, and genuinely expert. The exterior refresh changed how our home feels from the street in.',
    rating: 5,
  },
  {
    name: 'Sneha R.',
    city: 'CIDCO, Nashik',
    quote:
      'The consultation alone was worth it — they helped us see colour in relation to light in a way we never had before.',
    rating: 5,
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section className="py-20 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...scrollReveal} variants={fadeUp} className="text-center">
          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
          >
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div {...scrollReveal} variants={fadeUp} className="relative mx-auto mt-14 max-w-3xl">
          <Card className="overflow-hidden p-8 sm:p-12">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: MOTION.duration, ease: MOTION.ease }}
              >
                <div className="flex gap-1 text-clay" aria-label={`${current.rating} out of 5 stars`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-6 font-display text-2xl leading-relaxed text-charcoal sm:text-3xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span className="font-medium text-charcoal">{current.name}</span>
                    <span className="text-warm-gray"> · {current.city}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </Card>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border border-border bg-white p-2 transition-colors hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" aria-hidden>
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-clay' : 'bg-border'}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-border bg-white p-2 transition-colors hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
