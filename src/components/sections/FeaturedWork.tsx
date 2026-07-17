import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from '@/lib/motion-ui'
import {
  ArrowLeftRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Home,
  Layers,
} from 'lucide-react'
import { fadeUp, scrollReveal } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  name: string
  type: string
  room: string
  scope: string
  duration: string
  services: string[]
  palette: { name: string; color: string }[]
  before: { wall: string; accent: string; mood: string }
  after: { wall: string; accent: string; mood: string }
  summary: string
  outcome: string
}

const projects: Project[] = [
  {
    id: 'linden',
    name: 'The Linden Residence',
    type: 'Residential',
    room: 'Living & Dining',
    scope: '2,400 sq ft',
    duration: '12 days',
    services: ['Colour Plan', 'Premium Finishes', 'Turnkey Execution'],
    palette: [
      { name: 'Warm Linen', color: '#e8dcc8' },
      { name: 'Terracotta', color: '#c4785a' },
      { name: 'Deep Olive', color: '#3d4a3e' },
    ],
    before: { wall: '#c4c0b8', accent: '#a8a4a0', mood: 'Flat · dated · uneven tone' },
    after: { wall: '#e8dcc8', accent: '#c4785a', mood: 'Warm · layered · cohesive flow' },
    summary:
      'A full living and dining repaint with surface correction, accent wall planning, and premium matte finishes across open-plan zones.',
    outcome: 'Delivered on schedule with zero rework — client signed off after first walkthrough.',
  },
  {
    id: 'parkview',
    name: 'Park View Apartment',
    type: 'Residential',
    room: 'Master Suite',
    scope: '680 sq ft',
    duration: '5 days',
    services: ['Colour Consultation', 'Sample & Approve', 'Expert Application'],
    palette: [
      { name: 'Blush Clay', color: '#d4a596' },
      { name: 'Soft Sage', color: '#b8c4b0' },
      { name: 'Ivory', color: '#f5f0e8' },
    ],
    before: { wall: '#b0b0b0', accent: '#999999', mood: 'Cold · generic · poor light balance' },
    after: { wall: '#f5f0e8', accent: '#b8c4b0', mood: 'Calm · restful · soft contrast' },
    summary:
      'Bedroom and ensuite colour refresh with moisture-resistant coatings and a curated two-tone palette matched to natural light.',
    outcome: 'Palette approved on-site after sample boards — finished ahead of handover date.',
  },
  {
    id: 'cedar',
    name: 'Cedar Lane Commercial',
    type: 'Commercial',
    room: 'Retail Interior',
    scope: '4,100 sq ft',
    duration: '18 days',
    services: ['Direct Paint Supply', 'Vendor Management', 'Site Cleaning'],
    palette: [
      { name: 'Charcoal', color: '#3a3632' },
      { name: 'Warm White', color: '#f2ebe3' },
      { name: 'Brass Accent', color: '#c9956a' },
    ],
    before: { wall: '#d4cfc4', accent: '#bfbab0', mood: 'Worn · inconsistent · high-traffic fatigue' },
    after: { wall: '#f2ebe3', accent: '#3a3632', mood: 'Premium · durable · brand-ready finish' },
    summary:
      'Bulk material supply and coordinated crew deployment for a boutique retail fit-out with strict opening-deadline delivery.',
    outcome: 'Project-scale pricing saved ~22% vs retail procurement on materials alone.',
  },
]

function RoomScene({
  wall,
  accent,
  variant,
}: {
  wall: string
  accent: string
  variant: 'before' | 'after'
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[28%]"
        style={{
          background: variant === 'before'
            ? 'linear-gradient(180deg, #a8a4a0 0%, #8e8a86 100%)'
            : 'linear-gradient(180deg, #d4c4b0 0%, #b8a896 100%)',
        }}
      />
      {/* Left wall */}
      <div
        className="absolute bottom-[28%] left-0 top-0 w-[22%] origin-bottom-right skew-y-0"
        style={{
          background: `linear-gradient(90deg, ${accent}dd, ${accent})`,
          transform: 'skewX(6deg) translateX(-8%)',
        }}
      />
      {/* Back wall */}
      <div
        className="absolute bottom-[28%] left-[12%] right-[12%] top-[18%] rounded-sm shadow-inner"
        style={{ backgroundColor: wall }}
      />
      {/* Accent strip */}
      <div
        className="absolute bottom-[28%] left-[12%] top-[18%] w-[35%] rounded-sm"
        style={{ backgroundColor: accent, opacity: variant === 'after' ? 0.85 : 0.35 }}
      />
      {/* Window / light */}
      <div className="absolute left-[58%] top-[24%] h-[32%] w-[22%] rounded border-4 border-white/40 bg-gradient-to-br from-sky-100/80 to-sky-200/40 shadow-inner" />
      <div
        className={cn(
          'absolute inset-0',
          variant === 'after'
            ? 'bg-gradient-to-br from-amber-100/25 via-transparent to-transparent'
            : 'bg-gradient-to-br from-gray-400/20 via-transparent to-gray-500/10',
        )}
      />
      {/* Furniture hint */}
      <div
        className="absolute bottom-[30%] left-[20%] h-[18%] w-[28%] rounded-t-lg"
        style={{ backgroundColor: variant === 'before' ? '#9a9690' : accent }}
      />
      {variant === 'before' && (
        <>
          <div className="absolute left-[18%] top-[22%] h-1 w-[40%] rotate-[-2deg] bg-white/30" />
          <div className="absolute left-[20%] top-[30%] h-1 w-[25%] rotate-[1deg] bg-white/20" />
        </>
      )}
    </div>
  )
}

function BeforeAfterSlider({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  useEffect(() => {
    setPosition(50)
  }, [project.id])

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = clientX - rect.left
    setPosition(Math.min(100, Math.max(0, (x / rect.width) * 100)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }

  const onPointerUp = () => {
    dragging.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5))
  }

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        tabIndex={0}
        className="relative aspect-[16/10] cursor-col-resize select-none overflow-hidden rounded-2xl ring-1 ring-border shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        role="slider"
        aria-label={`Before and after comparison for ${project.name}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <RoomScene wall={project.before.wall} accent={project.before.accent} variant="before" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <RoomScene wall={project.after.wall} accent={project.after.accent} variant="after" />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.25)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-charcoal text-white shadow-xl">
            <ArrowLeftRight className="h-4 w-4" aria-hidden />
          </div>
        </div>

        <span className="absolute left-4 top-4 z-10 rounded-full bg-charcoal/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          Before · {project.before.mood.split(' · ')[0]}
        </span>
        <span className="absolute right-4 top-4 z-10 rounded-full bg-clay/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          After · {project.after.mood.split(' · ')[0]}
        </span>
      </div>

      <p className="flex items-center justify-center gap-2 text-center text-xs text-warm-gray">
        <ArrowLeftRight className="h-3.5 w-3.5" aria-hidden />
        Drag the handle or use arrow keys to compare the transformation
      </p>
    </div>
  )
}

export function FeaturedWork() {
  const [active, setActive] = useState(0)
  const project = projects[active]
  const TypeIcon = project.type === 'Commercial' ? Building2 : Home

  const prev = () => setActive((i) => (i === 0 ? projects.length - 1 : i - 1))
  const next = () => setActive((i) => (i === projects.length - 1 ? 0 : i + 1))

  return (
    <section id="portfolio" className="bg-cream-dark/50 py-20 lg:py-28" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...scrollReveal} variants={fadeUp} className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-clay">
            Portfolio
          </p>
          <h2 id="portfolio-heading" className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Featured Transformations
          </h2>
          <p className="mt-4 text-charcoal-light">
            Real project outcomes — surface prep, colour planning, and premium
            execution. Slide to compare the space before and after our work.
          </p>
        </motion.div>

        <motion.div
          {...scrollReveal}
          variants={fadeUp}
          className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
        >
          <div id="featured-panel" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <BeforeAfterSlider project={project} />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col rounded-2xl border border-border bg-white/70 p-6 lg:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-warm-gray">
                    <TypeIcon className="h-4 w-4 text-clay" aria-hidden />
                    {project.type} · {project.room}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal">
                    {project.name}
                  </h3>
                </div>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous project"
                    className="rounded-full border border-border p-2 transition-colors hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next project"
                    className="rounded-full border border-border p-2 transition-colors hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-charcoal-light">
                {project.summary}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-warm-gray">
                    Scope
                  </p>
                  <p className="mt-1 font-medium text-charcoal">{project.scope}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-warm-gray">
                    Timeline
                  </p>
                  <p className="mt-1 font-medium text-charcoal">{project.duration}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-warm-gray">
                  <Layers className="h-3.5 w-3.5" aria-hidden />
                  Colour Palette
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.palette.map((swatch) => (
                    <div key={swatch.name} className="flex items-center gap-2">
                      <span
                        className="h-8 w-8 rounded-full ring-2 ring-white shadow-sm"
                        style={{ backgroundColor: swatch.color }}
                        aria-hidden
                      />
                      <span className="text-sm text-charcoal">{swatch.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-clay/10 px-3 py-1 text-xs font-medium text-clay"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <p className="mt-auto pt-6 text-sm font-medium text-pigment">
                {project.outcome}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div
          className="mt-8 flex flex-wrap gap-3"
          role="tablist"
          aria-label="Project selection"
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="featured-panel"
              onClick={() => setActive(i)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40',
                i === active
                  ? 'bg-charcoal text-white shadow-md'
                  : 'border border-border bg-white/60 text-charcoal-light hover:border-clay/40 hover:text-charcoal',
              )}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
