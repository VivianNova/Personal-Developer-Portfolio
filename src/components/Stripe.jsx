export default function Stripe({ className = '' }) {
  return (
    <div className={`flex h-1 w-full ${className}`}>
      <span className="flex-1 bg-brand-red" />
      <span className="flex-1 bg-neutral-800 dark:bg-neutral-600" />
      <span className="flex-1 bg-brand-green" />
    </div>
  )
}
