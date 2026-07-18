import { motion } from '@/lib/motion-ui'
import { MapPin } from 'lucide-react'
import { SAMPLE_WORK } from '@/lib/portfolio'
import { fadeUp, scrollReveal, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function SampleWork() {
  return (
    <section
      id="sample-work"
      className="border-t border-border/60 bg-cream py-20 lg:py-28"
      aria-labelledby="sample-work-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...scrollReveal} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-clay">Sample Work</p>
          <h2
            id="sample-work-heading"
            className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl"
          >
            Recent Projects Across Nashik
          </h2>
          <p className="mt-4 text-charcoal-light">
            A selection of interior, exterior, texture, and commercial finishes — showcasing
            the quality and range of work we deliver for homes, villas, and businesses.
          </p>
        </motion.div>

        <motion.div
          {...scrollReveal}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SAMPLE_WORK.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              className={cn(
                'group overflow-hidden rounded-2xl border border-border bg-white/70 shadow-sm transition-shadow hover:shadow-lg',
                index === 0 && 'sm:col-span-2 lg:col-span-2 lg:row-span-1',
              )}
            >
              <div
                className={cn(
                  'relative overflow-hidden bg-cream-dark',
                  index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]',
                )}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-charcoal/75 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-charcoal sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-warm-gray">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-clay" aria-hidden />
                  {item.location}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
