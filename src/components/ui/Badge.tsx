import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-clay/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-clay',
        className,
      )}
    >
      {children}
    </span>
  )
}
