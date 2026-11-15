import Reveal from './Reveal'

export default function SectionTitle({ plain, accent, eyebrow, subtitle, description, dark = false, left = false }) {
  const muted = dark ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-300'
  return (
    <Reveal className={`mb-12 ${left ? '' : 'text-center'}`}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</p>}
      <h2 className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${dark ? 'text-white' : 'text-brand-black dark:text-white'}`}>
        {plain} <span className="text-brand-red">{accent}</span>
      </h2>
      <div className={`mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-brand-red to-brand-green ${left ? '' : 'mx-auto'}`} />
      {subtitle && <p className={`mt-5 text-xl font-medium italic ${muted}`}>{subtitle}</p>}
      {description && <p className={`mt-3 max-w-2xl text-base ${muted} ${left ? '' : 'mx-auto'}`}>{description}</p>}
    </Reveal>
  )
}
