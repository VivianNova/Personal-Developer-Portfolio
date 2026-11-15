import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

// Shows your image when `src` loads. Otherwise shows a placeholder.
// If a file is missing, the placeholder tells you which path it looked for.
export default function ImageSlot({ src, alt = '', label = 'Image', fit = 'cover', className = '' }) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`${fit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
      />
    )
  }

  const text = failed ? `Not found: ${src}` : label
  return (
    <div
      role="img"
      aria-label={alt || label}
      title={text}
      className={`flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-300 to-neutral-400 text-neutral-600 dark:from-neutral-700 dark:to-neutral-800 dark:text-neutral-300 ${className}`}
    >
      <div className="flex flex-col items-center gap-1 px-2 text-center text-xs font-medium">
        <ImageIcon className="h-6 w-6 flex-none" />
        <span className="break-all">{text}</span>
      </div>
    </div>
  )
}
