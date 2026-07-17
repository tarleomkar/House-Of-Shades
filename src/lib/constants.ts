export const BRAND = {
  name: 'House Of Shades',
  tagline: 'Paint | Design | Deliver',
  logo: '/images/logo.png',
  founder: 'Pooja Ahire',
  phone: '+91 70587 15845',
  phoneHref: 'tel:+917058715845',
  email: 'houseofshadessss@gmail.com',
  emailHref: 'mailto:houseofshadessss@gmail.com',
  instagram: '@house_of_shadessss',
  instagramHref: 'https://instagram.com/house_of_shadessss',
} as const

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Offerings', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
] as const

export const MOTION = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: 0.6,
  stagger: 0.1,
} as const

export const CONSULTATION_OPTIONS = [
  'Direct Paint Supply',
  'Vendor Management',
  'Surface & Site Cleaning',
  'Turnkey Execution',
  'Onsite Project Estimate',
] as const

export const FOUNDER_QUOTE =
  'At HouseofShades, we bridge the gap between material procurement and flawless onsite execution, delivering unmatched value directly to your projects.'

export const OFFERINGS = [
  {
    title: 'Direct Paint Supply',
    description:
      'Direct procurement of high-grade commercial coatings and finishes at unprecedented project-scale rates.',
  },
  {
    title: 'Vendor Management',
    description:
      'End-to-end handling, supervision, and coordination of skilled application crews and site painters.',
  },
  {
    title: 'Surface & Site Cleaning',
    description:
      'Meticulous surface preparation prior to application, protective masking, and deep post-paint site cleaning protocols.',
  },
  {
    title: 'Turnkey Execution',
    description:
      'Completely hands-free management from initial mapping and product deployment to your absolute final site handover.',
  },
] as const

export const VALUE_PROPS = [
  { title: 'Premium Paints', description: 'High-grade commercial coatings at project-scale rates.' },
  { title: 'Expert Design', description: 'Expert color coordination tailored for every space.' },
  { title: 'Flawless Delivery', description: 'End-to-end execution support from supply to handover.' },
] as const
