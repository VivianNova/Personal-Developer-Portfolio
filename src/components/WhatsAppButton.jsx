import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { X } from 'lucide-react'
import { profile } from '../data/site'

// Floating WhatsApp bubble. Set `whatsapp` in data/site.js; until then it scrolls to the contact section.
export default function WhatsAppButton() {
  const [tip, setTip] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => setTip(true), 4000)
    const hide = setTimeout(() => setTip(false), 14000)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [])

  const hasNumber = Boolean(profile.whatsapp)
  const href = hasNumber
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Vivian, I saw your portfolio and I'd like to talk.")}`
    : '#contact'

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-3">
      <div
        className={`relative max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm text-brand-black shadow-xl transition-all duration-500 ${
          tip ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={() => setTip(false)}
          aria-label="Dismiss"
          className="absolute -right-2 -top-2 rounded-full bg-brand-black p-1 text-white"
        >
          <X className="h-3 w-3" />
        </button>
        <p className="font-semibold">Need a website or a design?</p>
        <p className="text-neutral-600">Chat with me on WhatsApp.</p>
      </div>

      <a
        href={href}
        {...(hasNumber ? { target: '_blank', rel: 'noreferrer' } : {})}
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 [animation-iteration-count:4]" />
        <FaWhatsapp className="relative h-8 w-8" />
      </a>
    </div>
  )
}
