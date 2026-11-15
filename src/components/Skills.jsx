import { Check, Lightbulb, Rocket, ShieldCheck } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import ImageSlot from './ImageSlot'
import ValuesBar from './ValuesBar'
import Reveal from './Reveal'
import { skillGroups } from '../data/skills'
import { profile } from '../data/site'

const tones = {
  red: { head: 'bg-brand-red', check: 'text-brand-red' },
  green: { head: 'bg-brand-green', check: 'text-brand-green' },
}

const values = [
  { icon: Lightbulb, label: 'Always Learning' },
  { icon: Rocket, label: 'Driven by Innovation' },
  { icon: ShieldCheck, label: 'Committed to Security' },
]

export default function Skills() {
  return (
    <>
      <Section id="skills" tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="relative">
              <ImageSlot src={profile.skillsPhoto} label="Skills photo" alt="Hands-on work" className="aspect-[4/5] w-full rounded-[2.5rem]" />
              <div className="absolute inset-x-0 bottom-0 rounded-b-[2.5rem] bg-gradient-to-t from-black/90 to-transparent p-6 pt-16">
                <p className="text-2xl font-extrabold italic">
                  Learn <span className="text-brand-red">·</span> Build <span className="text-brand-red">·</span>{' '}
                  <span className="text-brand-green">Innovate</span>
                </p>
                <p className="text-sm italic text-neutral-200">Turning knowledge into impact.</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <SectionTitle
              plain="My"
              accent="Skills"
              eyebrow="What I do"
              dark
              left
              subtitle="Building. Innovating. Empowering with Technology."
              description="A versatile skill set across development, systems, security and digital services, backed by hands-on experience and continuous learning."
            />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map(({ title, icon: Icon, tone, items }, i) => (
                <Reveal key={title} delay={i * 90} className="h-full">
                  <div className="h-full overflow-hidden rounded-2xl bg-white text-brand-black shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                    <div className={`flex items-center gap-3 px-4 py-3 text-white ${tones[tone].head}`}>
                      <Icon className="h-6 w-6" />
                      <h3 className="font-bold leading-tight">{title}</h3>
                    </div>
                    <ul className="space-y-2 p-4 text-sm">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className={`mt-0.5 h-4 w-4 flex-none ${tones[tone].check}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <ValuesBar items={values} />
    </>
  )
}
