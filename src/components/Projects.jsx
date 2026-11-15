import { useCallback, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { categories, projects } from '../data/projects'
import { profile } from '../data/site'

export default function Projects() {
  const [filter, setFilter] = useState('All Projects')
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  const visible = filter === 'All Projects' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="projects" tone="light">
      <SectionTitle plain="Featured" accent="Projects" eyebrow="My work" subtitle="Real solutions. Impactful solutions." description="Here are some of the projects I've built and contributed to, from web solutions to tech platforms." />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === c
                ? 'bg-brand-red text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <ProjectCard project={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-500">More projects in this category are coming soon.</p>
      )}

      <div className="mt-12 text-center">
        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red px-8 py-3 font-semibold text-brand-black transition hover:bg-brand-red hover:text-white dark:text-white">
          View All Projects <ArrowRight className="h-5 w-5 text-brand-red" />
        </a>
      </div>

      {selected && <ProjectModal project={selected} onClose={close} />}
    </Section>
  )
}
