import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import ImageSlot from './ImageSlot'
import { gallery } from '../data/gallery'

const getVisible = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)

export default function Gallery() {
  const [visible, setVisible] = useState(getVisible)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [open, setOpen] = useState(null)
  const touchX = useRef(null)

  const max = Math.max(0, gallery.length - visible)
  const pos = Math.min(index, max)
  const go = useCallback((i) => setIndex(i > max ? 0 : i < 0 ? max : i), [max])

  useEffect(() => {
    const onResize = () => setVisible(getVisible())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (paused || open !== null) return
    const t = setInterval(() => go(pos + 1), 4000)
    return () => clearInterval(t)
  }, [paused, open, pos, go])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(pos + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  const arrow = 'absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-brand-black shadow-lg transition hover:bg-brand-red hover:text-white'

  return (
    <Section id="gallery" tone="dark" className="pb-12">
      <SectionTitle plain="Moments &" accent="Community" eyebrow="Gallery" dark subtitle="Learning. Collaborating. Giving Back." description="A look at the training sessions, events and outreach that shape my work. Every photo reminds me why I teach and give back." />

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${pos * (100 / visible)}%)` }}
          >
            {gallery.map((g, i) => (
              <div key={g.caption} className="flex-none px-2" style={{ width: `${100 / visible}%` }}>
                <button type="button" onClick={() => setOpen(i)} className="relative block w-full overflow-hidden rounded-3xl text-left shadow-md">
                  <ImageSlot src={g.image} alt={g.caption} label={`Photo: ${g.caption}`} className="aspect-[4/3] w-full transition duration-500 hover:scale-105" />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-sm font-semibold text-white">
                    {g.caption}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => go(pos - 1)} aria-label="Previous" className={`${arrow} left-0 -translate-x-1/3`}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => go(pos + 1)} aria-label="Next" className={`${arrow} right-0 translate-x-1/3`}>
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: max + 1 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${i === pos ? 'w-6 bg-brand-red' : 'w-2.5 bg-neutral-600'}`}
          />
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button type="button" aria-label="Close" onClick={() => setOpen(null)} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-brand-red">
            <X className="h-6 w-6" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl">
            <ImageSlot src={gallery[open].image} alt={gallery[open].caption} label={`Photo: ${gallery[open].caption}`} className="aspect-[4/3] w-full rounded-3xl" />
            <figcaption className="mt-3 text-center text-white">{gallery[open].caption}</figcaption>
          </figure>
        </div>
      )}
    </Section>
  )
}
