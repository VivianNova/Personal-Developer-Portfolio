const tones = {
  light: 'bg-white text-brand-black dark:bg-neutral-900 dark:text-white',
  dark: 'bg-neutral-950 text-white',
}

// tone="light" or tone="dark": alternate them down the page.
export default function Section({ id, tone = 'light', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 overflow-x-clip py-24 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  )
}
