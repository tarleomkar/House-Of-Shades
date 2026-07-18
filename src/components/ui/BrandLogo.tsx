import { BRAND } from '@/lib/constants'
import { cn } from '@/lib/utils'

const sizeMap = {
  sm: { className: 'h-10 w-10', width: 40, height: 40 },
  md: { className: 'h-10 w-10 lg:h-11 lg:w-11', width: 44, height: 44 },
} as const

interface BrandLogoProps {
  size?: keyof typeof sizeMap
  className?: string
  priority?: boolean
}

export function BrandLogo({ size = 'md', className, priority = false }: BrandLogoProps) {
  const { className: sizeClass, width, height } = sizeMap[size]

  return (
    <img
      src={BRAND.logo}
      srcSet={`${BRAND.logo} 1x, ${BRAND.logo2x} 2x`}
      alt={BRAND.logoAlt}
      width={width}
      height={height}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      loading={priority ? 'eager' : 'lazy'}
      className={cn(
        'shrink-0 rounded-full object-contain ring-1 ring-border/60',
        sizeClass,
        className,
      )}
    />
  )
}
