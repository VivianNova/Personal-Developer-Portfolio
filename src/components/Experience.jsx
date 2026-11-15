import { Calendar, Check, Target } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import ImageSlot from './ImageSlot'
import Reveal from './Reveal'
import { experience, highlights } from '../data/experience'
import { profile } from '../data/site'

export default function Experience() {
  return (
    <Section id="experience" tone="dark">
      <SectionTitle
        plain="My"
        accent="Experience"
        eyebrow="My journey"
        dark
        subtitle="Learning. Contributing. Growing."
        description="Hands-on experience in software engineering, IT support and digital solutions."
      />

      <div className="grid gap-10 lg:grid-cols-3">
        <Reveal direction="left">
          <aside className="space-y-6">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-full border-2 border-brand-green" />
              <ImageSlot src={profile.experiencePhoto} label="Experience photo" alt="Working" className="relative aspect-square w-full rounded-full ring-4 ring-neutral-800" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
              <h3 className="flex items-center gap-3 text-xl font-bold">
                <Target className="h-7 w-7 text-brand-red" /> Key Highlights
              </h3>
              <div className="mt-2 h-0.5 w-32 bg-brand-red" />
              <ul className="mt-4 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-neutral-200">
                    <Check className="mt-0.5 h-5 w-5 flex-none rounded-full bg-brand-green p-0.5" /> {h}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>

        <ol className="relative space-y-6 border-l-2 border-brand-red pl-8 lg:col-span-2">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.org} direction="right" delay={i * 150} className="relative">
              <span className="absolute -left-[2.6rem] top-8 h-4 w-4 rounded-full border-4 border-brand-red bg-neutral-950" />
              <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-neutral-900 p-5 transition hover:border-brand-red/60 sm:flex-row">
                <ImageSlot src={e.logo} fit="contain" label="Logo" alt={`${e.org} logo`} className="h-20 w-20 flex-none rounded-2xl bg-white p-2" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl font-bold">{e.org}</h3>
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-3 py-1 text-sm font-semibold text-green-400">
                      <Calendar className="h-4 w-4" /> {e.period}
                    </span>
                  </div>
                  <p className="font-semibold italic text-green-400">{e.role}</p>
                  <p className="mt-2 text-neutral-300">{e.text}</p>
                  {e.points && (
                    <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                      {e.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-green-400" /> {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
