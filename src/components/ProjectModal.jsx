import { useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import ImageSlot from './ImageSlot'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-neutral-900"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-brand-red"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-3 pb-0">
          <div className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
            <ImageSlot src={project.image} fit={project.fit ?? 'contain'} alt={project.title} label={`Screenshot: ${project.title}`} className="aspect-[16/10] w-full" />
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">{project.category}</p>
          <h3 className="mt-1 text-2xl font-extrabold text-brand-black dark:text-white">{project.title}</h3>
          <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">{project.details}</p>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-semibold text-brand-black dark:text-white">My role:</span> {project.role}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green">{t}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2 font-semibold text-white hover:bg-red-700">
              <ExternalLink className="h-4 w-4" /> {project.liveLabel ?? 'Live Demo'}
            </a>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-brand-black px-4 py-2 font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-brand-black">
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
