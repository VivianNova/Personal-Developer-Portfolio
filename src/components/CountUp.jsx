import { useEffect, useRef, useState } from 'react'

export default function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to])

  return <span ref={ref}>{n}{suffix}</span>
}
