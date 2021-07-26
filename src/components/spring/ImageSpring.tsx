import { a, config, useSpring } from '@react-spring/web'
import { ReactNode } from 'react'

export default function ImageSpring({ inView, delay, children }:{ inView?: boolean, delay?: number, children: ReactNode }) {
  const styles = useSpring({
    from: {
      opacity: inView ? 0 : 1,
    },
    to: {
      opacity: inView ? 1 : 0,
    },
    config: config.molasses,
    delay: delay ? delay : 0
  })
  return (
    <a.div style={styles}>
      {children}
    </a.div>
  )
}