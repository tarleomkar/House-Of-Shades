/**
 * Central SEO configuration — single source of truth for metadata and schema.
 * Set VITE_SITE_URL in production (e.g. https://houseofshades.in).
 */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://houseofshades.in'

export const SEO = {
  siteName: 'House Of Shades',
  defaultTitle:
    'House Of Shades | Premium Paint Consultancy & Painting Services in Nashik',
  titleTemplate: '%s | House Of Shades Nashik',
  description:
    'House Of Shades — premium paint consultancy, interior & exterior painting, texture finishes, waterproofing, and wall design in Nashik, Maharashtra. Free color consultation for homes, villas, offices & commercial projects.',
  keywords: [
    'paint consultancy Nashik',
    'interior painting Nashik',
    'exterior painting Nashik',
    'home painting Nashik',
    'commercial painting Nashik',
    'texture paint services Nashik',
    'wall design Nashik',
    'color consultation Nashik',
    'waterproofing Nashik',
    'premium paint contractor Nashik',
    'House Of Shades',
    'Pooja Ahire',
  ].join(', '),
  locale: 'en_IN',
  themeColor: '#e8956f',
  twitterHandle: '@house_of_shadessss',
  ogImage: `${SITE_URL}/images/logo-og.webp`,
  ogImageAlt:
    'House Of Shades — premium paint consultancy and painting services logo, Nashik Maharashtra',
} as const

export const LOCATION = {
  city: 'Nashik',
  state: 'Maharashtra',
  stateCode: 'MH',
  country: 'India',
  countryCode: 'IN',
  region: 'Nashik District',
  postalCode: '422001',
  address: 'Nashik, Maharashtra, India',
  geo: {
    latitude: 19.9975,
    longitude: 73.7898,
  },
  areaServed: [
    'Nashik',
    'Nashik Road',
    'Panchavati',
    'Gangapur',
    'Satpur',
    'CIDCO',
    'Deolali',
    'Sinnar',
  ],
} as const

export const HERO_SEO = {
  eyebrow: 'Premium Paint Consultancy · Nashik',
  h1: 'Beyond colors, we design experiences',
  subheading:
    'Interior & exterior painting, texture finishes, waterproofing, wall designs, and expert color consultation in Nashik — for homeowners, builders, architects, and commercial property owners.',
  ctaPrimary: 'Book Free Consultation in Nashik',
  ctaSecondary: 'Explore Our Services',
} as const

export const SERVICE_SEO = [
  'Paint Consultancy',
  'Interior Painting',
  'Exterior Painting',
  'Texture Paint Finishes',
  'Waterproofing',
  'Wall Design',
  'Color Consultation',
  'Commercial Painting',
  'Home Painting',
] as const

export const FAQ_SEO = [
  {
    question: 'Do you provide paint consultancy and painting services in Nashik?',
    answer:
      'Yes. House Of Shades is based in Nashik, Maharashtra and serves homeowners, builders, interior designers, architects, villa owners, and commercial property owners across Nashik and nearby areas with premium paint consultancy, interior and exterior painting, texture finishes, waterproofing, and wall design services.',
  },
  {
    question: 'What interior and exterior painting services do you offer in Nashik?',
    answer:
      'We offer complete interior painting, exterior painting, texture finishes, waterproofing coatings, custom wall designs, and professional color consultation. Our team handles surface preparation, premium paint application, and site cleaning for residential homes, offices, villas, and commercial projects in Nashik.',
  },
  {
    question: 'Who does House Of Shades work with?',
    answer:
      'We serve homeowners, builders, interior designers, architects, commercial property owners, office owners, and villa owners in Nashik. Our integrated model supports project-scale paint supply, vendor management, and turnkey execution — whether you need a single room or a full commercial fit-out.',
  },
  {
    question: 'How does direct paint supply work?',
    answer:
      'We procure high-grade commercial coatings and finishes at project-scale rates, significantly below standard retail pricing in Nashik. Materials are delivered direct-to-site with bulk logistics managed on your behalf, passing corporate margins straight to your project.',
  },
  {
    question: 'What is included in turnkey painting execution?',
    answer:
      'Turnkey execution covers hands-free project management — from site mapping and product deployment through skilled painting crews, surface preparation, protective masking, post-paint cleaning, and final handover for interior, exterior, and texture finish projects.',
  },
  {
    question: 'Do you offer texture paint and wall design services?',
    answer:
      'Yes. We provide texture paint finishes, decorative wall designs, and feature wall treatments alongside standard interior and exterior painting. Every finish is planned with expert color coordination to suit your space, lighting, and design goals.',
  },
  {
    question: 'How do I get a painting project estimate in Nashik?',
    answer:
      'Contact us via the form on this page, call +91 70587 15845, email houseofshadessss@gmail.com, or connect on Instagram @house_of_shadessss. We provide free color consultations and onsite project estimates for homes, offices, and commercial sites in Nashik.',
  },
  {
    question: 'What makes House Of Shades pricing different?',
    answer:
      'We offer market-disruptive pricing by sourcing paint materials at wholesale project rates rather than retail markups. This allows us to pass direct savings to builders, engineers, and property owners in Nashik without compromising on premium finish quality or warranty-backed application.',
  },
] as const

export const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Portfolio', path: '/#portfolio' },
  { name: 'FAQ', path: '/#faq' },
  { name: 'Contact', path: '/#contact' },
] as const

export const PAGE_SEO = {
  home: {
    title: SEO.defaultTitle,
    description: SEO.description,
    path: '/',
  },
} as const
