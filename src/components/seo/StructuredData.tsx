import { BRAND } from '@/lib/constants'
import {
  BREADCRUMBS,
  FAQ_SEO,
  getSchemaAreaServed,
  LOCATION,
  SEO,
  SERVICE_COVERAGE_LABEL,
  SERVICE_SEO,
  SITE_URL,
} from '@/lib/seo'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function StructuredData() {
  const areaServed = getSchemaAreaServed()

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BRAND.name,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo}`,
    description: SEO.description,
    email: BRAND.email,
    telephone: BRAND.phone,
    founder: {
      '@type': 'Person',
      name: BRAND.founder,
    },
    sameAs: [BRAND.instagramHref],
    areaServed,
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HousePainter',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BRAND.name,
    url: SITE_URL,
    image: `${SITE_URL}${BRAND.logo}`,
    description: SEO.description,
    telephone: BRAND.phone,
    email: BRAND.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: LOCATION.city,
      addressRegion: LOCATION.state,
      postalCode: LOCATION.postalCode,
      addressCountry: LOCATION.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LOCATION.geo.latitude,
      longitude: LOCATION.geo.longitude,
    },
    areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting & Consultancy Services',
      itemListElement: SERVICE_SEO.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          areaServed: SERVICE_COVERAGE_LABEL,
        },
      })),
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  }

  const contactPoint = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    '@id': `${SITE_URL}/#contactpoint`,
    contactType: 'customer service',
    telephone: BRAND.phone,
    email: BRAND.email,
    areaServed: LOCATION.countryCode,
    availableLanguage: ['English', 'Hindi', 'Marathi'],
    url: `${SITE_URL}/#contact`,
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQ_SEO.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/#breadcrumb`,
    itemListElement: BREADCRUMBS.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BRAND.name,
    url: SITE_URL,
    description: SEO.description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: SEO.defaultTitle,
    description: SEO.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#localbusiness` },
    inLanguage: 'en-IN',
  }

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={localBusiness} />
      <JsonLd data={contactPoint} />
      <JsonLd data={faqPage} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={webSite} />
      <JsonLd data={webPage} />
    </>
  )
}
