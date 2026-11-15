import Stripe from './Stripe'

export default function ValuesBar({ items, light = false }) {
  return (
    <div className={light ? 'bg-neutral-50 text-brand-black dark:bg-neutral-900 dark:text-white' : 'bg-neutral-950 text-white'}>
      <Stripe />
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 text-sm font-medium sm:px-8">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon className="h-6 w-6 text-brand-green" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
