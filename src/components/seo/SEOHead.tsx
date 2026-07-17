import { Helmet } from 'react-helmet-async'
import { PAGE_SEO, SEO, SITE_URL } from '@/lib/seo'

interface SEOHeadProps {
  page?: keyof typeof PAGE_SEO
  title?: string
  description?: string
  path?: string
  noindex?: boolean
}

export function SEOHead({
  page = 'home',
  title,
  description,
  path,
  noindex = false,
}: SEOHeadProps) {
  const pageMeta = PAGE_SEO[page]
  const metaTitle = title ?? pageMeta.title
  const metaDescription = description ?? pageMeta.description
  const canonicalPath = path ?? pageMeta.path
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`
  const ogUrl = canonicalUrl

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={SEO.keywords} />
      <meta name="author" content="Pooja Ahire" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo / local */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Nashik" />
      <meta name="geo.position" content="19.9975;73.7898" />
      <meta name="ICBM" content="19.9975, 73.7898" />

      {/* Theme & PWA hints */}
      <meta name="theme-color" content={SEO.themeColor} />
      <meta name="msapplication-TileColor" content={SEO.themeColor} />
      <meta name="apple-mobile-web-app-title" content={SEO.siteName} />
      <meta name="application-name" content={SEO.siteName} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SEO.siteName} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:locale" content={SEO.locale} />
      <meta property="og:image" content={SEO.ogImage} />
      <meta property="og:image:alt" content={SEO.ogImageAlt} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={SEO.ogImage} />
      <meta name="twitter:image:alt" content={SEO.ogImageAlt} />
      <meta name="twitter:site" content={SEO.twitterHandle} />
    </Helmet>
  )
}
