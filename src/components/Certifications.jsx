import { BookOpen, Lightbulb, Users, Rocket, Trophy, BadgeCheck } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import ImageSlot from './ImageSlot'
import ValuesBar from './ValuesBar'
import Reveal from './Reveal'
import { certifications } from '../data/certifications'

const values = [
  { icon: BookOpen, label: 'Learn' },
  { icon: Lightbulb, label: 'Innovate' },
  { icon: Users, label: 'Share' },
  { icon: Rocket, label: 'Grow' },
]

export default function Certifications() {
  return (
    <>
      <Section id="certifications" tone="light">
        <SectionTitle
          plain="Certifications &"
          accent="Professional Development"
          eyebrow="Always learning"
          subtitle="Continuously learning. Building expertise for greater impact."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.org} delay={(i % 3) * 100} className="h-full">
              <div className="flex h-full items-center gap-4 rounded-2xl border border-neutral-200 border-l-4 border-l-brand-red bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-700 dark:border-l-brand-red dark:bg-neutral-800">
                <ImageSlot src={c.logo} fit="contain" label="Logo" alt={`${c.org} logo`} className="h-16 w-16 flex-none rounded-2xl bg-white p-2 ring-1 ring-neutral-200" />
                <div>
                  <h3 className="font-bold text-brand-black dark:text-white">{c.org}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{c.title}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal direction="zoom" className="h-full">
            <div className="h-full rounded-2xl bg-neutral-950 p-6 text-white">
              <h3 className="flex items-center gap-2 text-lg font-bold italic">
                <Trophy className="h-6 w-6 text-yellow-400" /> My Commitment
              </h3>
              <p className="mt-3 italic text-neutral-300">“To keep learning, innovating, and contributing to the tech community.”</p>
            </div>
          </Reveal>

          <Reveal direction="zoom" delay={100} className="sm:col-span-2 lg:col-span-2">
            <div className="flex h-full items-center gap-4 rounded-2xl border border-brand-green/40 bg-brand-green/10 p-6">
              <BadgeCheck className="h-12 w-12 flex-none text-brand-green" />
              <div>
                <h3 className="text-xl font-bold italic text-brand-green">Always Learning</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Because in tech, learning never stops.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      <ValuesBar items={values} light />
    </>
  )
}
