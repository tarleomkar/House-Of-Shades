import { useEffect } from 'react'

/** Prefetch below-fold chunks during browser idle time */
export function usePrefetchSections() {
  useEffect(() => {
    const prefetch = () => {
      void import('@/components/layout/BelowFold')
    }

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(prefetch, { timeout: 4000 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(prefetch, 2000)
    return () => window.clearTimeout(timeoutId)
  }, [])
}
