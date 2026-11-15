import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative grid h-9 w-[72px] grid-cols-2 items-center rounded-full bg-neutral-800 p-1 ring-1 ring-white/10"
    >
      <span className={`absolute left-1 top-1 h-7 w-[32px] rounded-full bg-brand-red transition-transform ${dark ? 'translate-x-[32px]' : ''}`} />
      <Sun className="relative z-10 mx-auto h-4 w-4 text-white" />
      <Moon className="relative z-10 mx-auto h-4 w-4 text-white" />
    </button>
  )
}
