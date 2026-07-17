import { type FormEvent, useState } from 'react'
import { motion } from '@/lib/motion-ui'
import { Button } from '@/components/ui/Button'
import { BRAND, CONSULTATION_OPTIONS } from '@/lib/constants'
import { fadeUp, scrollReveal } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function ConsultationCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-pigment py-20 lg:py-28" aria-labelledby="contact-heading">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...scrollReveal} variants={fadeUp}>
            <p className="text-sm font-medium uppercase tracking-wider text-white/70">
              Get In Touch
            </p>
            <h2 id="contact-heading" className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl text-balance">
              Connect With Us in Nashik
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Ready for a free color consultation or onsite painting estimate in Nashik?
              Contact us for interior &amp; exterior painting, texture finishes, waterproofing,
              and wall design services.
            </p>
            <div className="mt-8 space-y-3 text-white/80">
              <p>
                <span className="font-medium text-white">{BRAND.founder}</span>
                <span className="text-white/60"> — Founder</span>
              </p>
              <p>
                <a href={BRAND.phoneHref} className="hover:text-white transition-colors">
                  {BRAND.phone}
                </a>
              </p>
              <p>
                <a href={BRAND.emailHref} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </p>
              <p>
                <a
                  href={BRAND.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BRAND.instagram}
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div {...scrollReveal} variants={fadeUp}>
            {submitted ? (
              <div
                className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm"
                role="status"
              >
                <p className="font-display text-2xl text-white">Thank you!</p>
                <p className="mt-2 text-white/75">
                  We&apos;ll reach out shortly with direct material rates or to schedule
                  your onsite project estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" id="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Your full name"
                    />
                  </Field>
                  <Field label="Phone" id="phone" required>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={inputClass}
                      placeholder={BRAND.phone}
                    />
                  </Field>
                  <Field label="Email" id="email" required className="sm:col-span-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder={BRAND.email}
                    />
                  </Field>
                  <Field label="Pincode / City" id="location" required>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Project location"
                    />
                  </Field>
                  <Field label="What are you looking for?" id="service" required>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={cn(inputClass, 'appearance-none')}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {CONSULTATION_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full">
                  Request Free Nashik Consultation
                </Button>
                <p className="mt-4 text-center text-xs text-warm-gray">
                  Your information stays private. No spam — just a direct follow-up from our team.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/60 transition-colors focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20'

function Field({
  label,
  id,
  children,
  required,
  className,
}: {
  label: string
  id: string
  children: React.ReactNode
  required?: boolean
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-clay"> *</span>}
      </label>
      {children}
    </div>
  )
}
