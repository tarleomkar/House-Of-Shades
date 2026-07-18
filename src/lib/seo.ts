/**
 * Central SEO configuration — single source of truth for metadata and schema.
 * Set VITE_SITE_URL in production (e.g. https://houseofshades.in).
 */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://houseofshades.in'

/** Headquarters — used for LocalBusiness schema & geo tags */
export const MAHARASHTRA_CITIES = [
  'Mumbai',
  'Pune',
  'Nashik',
  'Nagpur',
  'Thane',
  'Navi Mumbai',
  'Aurangabad',
  'Kolhapur',
  'Solapur',
  'Amravati',
  'Sangli',
  'Jalgaon',
  'Akola',
  'Latur',
  'Dhule',
  'Ahmednagar',
  'Chandrapur',
  'Ratnagiri',
  'Satara',
  'Panvel',
] as const

export const INDIA_METRO_CITIES = [
  'Delhi NCR',
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Surat',
  'Jaipur',
  'Lucknow',
  'Indore',
  'Bhopal',
  'Coimbatore',
  'Kochi',
  'Visakhapatnam',
  'Chandigarh',
  'Goa',
  'Patna',
  'Raipur',
  'Bhubaneswar',
  'Guwahati',
] as const

export const SERVICE_COVERAGE_LABEL =
  'Maharashtra & major cities across India'

export const SEO = {
  siteName: 'House Of Shades',
  defaultTitle:
    'House Of Shades | Premium Paint Consultancy & Painting Services in Maharashtra & India',
  titleTemplate: '%s | House Of Shades India',
  description:
    'House Of Shades — premium paint consultancy, interior & exterior painting, texture finishes, waterproofing, and wall design. Headquartered in Nashik, Maharashtra with project delivery across Mumbai, Pune, Nashik, and major cities pan-India. Free color consultation for homes, villas, offices & commercial projects.',
  keywords: [
    'paint consultancy India',
    'painting services Maharashtra',
    'interior painting Mumbai',
    'interior painting Pune',
    'interior painting Nashik',
    'exterior painting India',
    'commercial painting Maharashtra',
    'texture paint finishes India',
    'wall design services',
    'color consultation India',
    'waterproofing contractors Maharashtra',
    'premium paint contractor India',
    'turnkey painting execution',
    'direct paint supply India',
    'House Of Shades',
    'Pooja Ahire',
    ...MAHARASHTRA_CITIES.slice(0, 8).flatMap((city) => [
      `painting services ${city}`,
      `paint consultancy ${city}`,
    ]),
    ...INDIA_METRO_CITIES.slice(0, 6).map((city) => `painting services ${city}`),
  ].join(', '),
  locale: 'en_IN',
  themeColor: '#e8956f',
  twitterHandle: '@house_of_shadessss',
  ogImage: `${SITE_URL}/images/logo-og.webp`,
  ogImageAlt:
    'House Of Shades — premium paint consultancy and painting services across Maharashtra and India',
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
  /** Nashik neighbourhoods + statewide + pan-India metros for schema */
  areaServed: [
    'Nashik',
    'Nashik Road',
    'Panchavati',
    'Gangapur',
    'Satpur',
    'CIDCO',
    'Deolali',
    'Sinnar',
    ...MAHARASHTRA_CITIES,
    ...INDIA_METRO_CITIES,
  ],
} as const

export const HERO_SEO = {
  eyebrow: 'Premium Paint Consultancy · Maharashtra & India',
  h1: 'Beyond colors, we design experiences',
  subheading:
    'Interior & exterior painting, texture finishes, waterproofing, wall designs, and expert color consultation — serving Mumbai, Pune, Nashik, Maharashtra, and major cities across India for homeowners, builders, architects, and commercial property owners.',
  ctaPrimary: 'Book Free Consultation',
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
  'Pan-India Project Execution',
] as const

export const FAQ_SEO = [
  {
    question: 'Do you provide paint consultancy and painting services across India?',
    answer:
      'Yes. House Of Shades is headquartered in Nashik, Maharashtra and delivers premium paint consultancy, interior and exterior painting, texture finishes, waterproofing, and wall design across Maharashtra — including Mumbai, Pune, and Nashik — as well as major cities pan-India for residential, commercial, and turnkey projects.',
  },
  {
    question: 'Which cities in Maharashtra do you serve?',
    answer:
      'We actively serve Mumbai, Pune, Nashik, Nagpur, Thane, Navi Mumbai, Aurangabad, Kolhapur, Solapur, and other key cities across Maharashtra. Our integrated model covers direct paint supply, vendor management, surface preparation, and full project execution for homes, villas, offices, and commercial sites.',
  },
  {
    question: 'What interior and exterior painting services do you offer?',
    answer:
      'We offer complete interior painting, exterior painting, texture finishes, waterproofing coatings, custom wall designs, and professional color consultation. Our team handles surface preparation, premium paint application, and site cleaning for residential homes, offices, villas, and commercial projects across India.',
  },
  {
    question: 'Who does House Of Shades work with?',
    answer:
      'We serve homeowners, builders, interior designers, architects, commercial property owners, office owners, and villa owners across Maharashtra and India. Our integrated model supports project-scale paint supply, vendor management, and turnkey execution — whether you need a single room or a full commercial fit-out.',
  },
  {
    question: 'How does direct paint supply work?',
    answer:
      'We procure high-grade commercial coatings and finishes at project-scale rates, significantly below standard retail pricing. Materials are delivered direct-to-site with bulk logistics managed on your behalf, passing corporate margins straight to your project anywhere in Maharashtra or India.',
  },
  {
    question: 'What is included in turnkey painting execution?',
    answer:
      'Turnkey execution covers hands-free project management — from site mapping and product deployment through skilled painting crews, surface preparation, protective masking, post-paint cleaning, and final handover for interior, exterior, and texture finish projects nationwide.',
  },
  {
    question: 'Do you offer texture paint and wall design services?',
    answer:
      'Yes. We provide texture paint finishes, decorative wall designs, and feature wall treatments alongside standard interior and exterior painting. Every finish is planned with expert color coordination to suit your space, lighting, and design goals.',
  },
  {
    question: 'How do I get a painting project estimate?',
    answer:
      'Contact us via the form on this page, call +91 70587 15845, email houseofshadessss@gmail.com, or connect on Instagram @house_of_shadessss. We provide free color consultations and onsite project estimates for homes, offices, and commercial sites across Maharashtra and India.',
  },
  {
    question: 'What makes House Of Shades pricing different?',
    answer:
      'We offer market-disruptive pricing by sourcing paint materials at wholesale project rates rather than retail markups. This allows us to pass direct savings to builders, engineers, and property owners across Maharashtra and India without compromising on premium finish quality or warranty-backed application.',
  },
] as const

export const BREADCRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Portfolio', path: '/#portfolio' },
  { name: 'Sample Work', path: '/#sample-work' },
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

/** Build schema.org areaServed entries from location config */
export function getSchemaAreaServed() {
  const maharashtraAreas = new Set<string>([
    ...MAHARASHTRA_CITIES,
    'Nashik Road',
    'Panchavati',
    'Gangapur',
    'Satpur',
    'CIDCO',
    'Deolali',
    'Sinnar',
  ])
  const uniqueCities = [...new Set(LOCATION.areaServed)]

  return [
    { '@type': 'Country', name: LOCATION.country },
    { '@type': 'State', name: LOCATION.state },
    ...uniqueCities.map((city) => ({
      '@type': 'City' as const,
      name: maharashtraAreas.has(city) ? `${city}, ${LOCATION.state}` : city,
    })),
  ]
}
