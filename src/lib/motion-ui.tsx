import type { PropsWithChildren } from 'react'
import {
  AnimatePresence,
  domMax,
  LazyMotion,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'

/** Tree-shaken motion component — use instead of `motion` from framer-motion */
export const motion = m

export { AnimatePresence, useScroll, useTransform }

export function MotionProvider({ children }: PropsWithChildren) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  )
}
