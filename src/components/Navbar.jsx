import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { navLinks } from '../data/site'

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const linkClass = (id) =>
    `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
      active === id ? 'bg-brand-red text-white' : 'text-neutral-200 hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="flex flex-col leading-none text-white" aria-label="Home">
          <span className="text-2xl font-extrabold tracking-tight">VNM</span>
          <span className="mt-1 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-red to-brand-green" />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)}>
                <Icon className="h-4 w-4" /> {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <button
            type="button"
            className="text-white xl:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-green" style={{ width: `${progress}%` }} />

      {open && (
        <ul className="grid gap-1 border-t border-white/10 px-5 pb-4 pt-2 xl:hidden">
          {navLinks.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={linkClass(id)}>
                <Icon className="h-4 w-4" /> {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
