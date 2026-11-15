import { useEffect, useRef, useState } from 'react'

const hidden = {
  up: 'opacity-0 translate-y-10',
  left: 'opacity-0 -translate-x-10',
  right: 'opacity-0 translate-x-10',
  zoom: 'opacity-0 scale-95',
}

// Fades an element in when it scrolls into view.
export default function Reveal({ children, direction = 'up', delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : hidden[direction]
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
