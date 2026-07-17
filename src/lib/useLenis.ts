import { useEffect } from 'react'

export function useLenis() {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null
    let rafId = 0
    let cancelled = false

    const init = async () => {
      const { default: Lenis } = await import('@studio-freight/lenis')
      if (cancelled) return

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      const raf = (time: number) => {
        lenis?.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    const cleanup = () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      lenis?.destroy()
    }

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(() => init(), { timeout: 2500 })
      return () => {
        window.cancelIdleCallback(idleId)
        cleanup()
      }
    }

    const timeoutId = window.setTimeout(init, 100)
    return () => {
      window.clearTimeout(timeoutId)
      cleanup()
    }
  }, [])
}
