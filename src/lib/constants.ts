import { LOCATION } from '@/lib/seo'

export const BRAND = {
  name: 'House Of Shades',
  tagline: 'Paint | Design | Deliver',
  logo: '/images/logo.webp',
  logo2x: '/images/logo@2x.webp',
  logoPng: '/images/IMG_7802.PNG',
  logoAlt:
    'House Of Shades logo — premium paint consultancy and painting services in Nashik Maharashtra',
  founder: 'Pooja Ahire',
  phone: '+91 70587 15845',
  phoneHref: 'tel:+917058715845',
  email: 'houseofshadessss@gmail.com',
  emailHref: 'mailto:houseofshadessss@gmail.com',
  instagram: '@house_of_shadessss',
  instagramHref: 'https://instagram.com/house_of_shadessss',
  location: `${LOCATION.city}, ${LOCATION.state}`,
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
  'Interior Painting',
  'Exterior Painting',
  'Texture Finishes',
  'Waterproofing',
  'Wall Design',
  'Color Consultation',
  'Direct Paint Supply',
  'Turnkey Execution',
  'Onsite Project Estimate',
] as const

export const FOUNDER_QUOTE =
  'At HouseofShades, we bridge the gap between material procurement and flawless onsite execution, delivering unmatched value directly to your projects.'

export const OFFERINGS = [
  {
    title: 'Direct Paint Supply',
    description:
      'Direct procurement of high-grade commercial coatings and finishes at project-scale rates across Nashik — ideal for builders and commercial painting projects.',
  },
  {
    title: 'Vendor Management',
    description:
      'End-to-end supervision and coordination of skilled interior and exterior painting crews for homes, offices, and commercial sites in Nashik.',
  },
  {
    title: 'Surface & Site Cleaning',
    description:
      'Meticulous surface preparation, waterproofing prep, protective masking, and post-paint site cleaning before texture finishes or wall design application.',
  },
  {
    title: 'Turnkey Execution',
    description:
      'Hands-free painting project management in Nashik — from color consultation and material supply to final interior, exterior, or texture finish handover.',
  },
] as const

export const VALUE_PROPS = [
  {
    title: 'Premium Paints',
    description:
      'High-grade interior, exterior, and texture coatings at project-scale rates in Nashik.',
  },
  {
    title: 'Expert Design',
    description:
      'Professional color consultation and wall design planning tailored to every space.',
  },
  {
    title: 'Flawless Delivery',
    description:
      'End-to-end painting execution — from waterproofing prep to final finish handover.',
  },
] as const
