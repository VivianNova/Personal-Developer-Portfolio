import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import ImageSlot from './ImageSlot'

export default function ProjectCard({ project, onOpen }) {
  const stop = (e) => e.stopPropagation()
  return (
    <article
      onClick={() => onOpen(project)}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
    >
      <div className="m-3 mb-0 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <ImageSlot
          src={project.image}
          fit={project.fit ?? 'contain'}
          alt={project.title}
          label={`Screenshot: ${project.title}`}
          className="aspect-[16/10] w-full transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-brand-black dark:text-white">
          <button type="button" onClick={() => onOpen(project)} className="text-left hover:text-brand-red">
            {project.title}
          </button>
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green">{t}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          <a href={project.live} onClick={stop} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
            <ExternalLink className="h-4 w-4" /> {project.liveLabel ?? 'Live Demo'}
          </a>
          {project.github && (
            <a href={project.github} onClick={stop} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-brand-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-brand-black dark:hover:bg-neutral-200">
              <FaGithub className="h-4 w-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
