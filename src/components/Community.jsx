import { Code, Store, Venus, HeartHandshake, Users } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import Stripe from './Stripe'

const cards = [
  {
    icon: Code,
    name: 'DravTech',
    text: 'An IT services company I co-founded with fellow engineers. We build software and web solutions and take on real client projects.',
    color: 'text-brand-green',
  },
  {
    icon: Store,
    name: 'Huduma Kenya Cyber',
    text: 'A cyber cafe that combines everyday cafe services with software engineering. Our vision is to grow it into a major tech brand.',
    color: 'text-brand-green',
  },
  {
    icon: Venus,
    name: 'SheCodeAfrica Chuka Chapter',
    text: 'I serve as an Event Manager for the Chuka chapter. We organize events that inspire and equip women to learn and lead in tech.',
    color: 'text-pink-400',
  },
  {
    icon: HeartHandshake,
    name: 'Mercy Sisters',
    text: 'A community initiative aimed at lifting the less fortunate and giving them hope. We want everyone to feel a sense of belonging in society.',
    color: 'text-brand-red',
  },
]

export default function Community() {
  return (
    <>
      <Section id="community" tone="dark" className="pt-8">
        <SectionTitle
          plain="Community &"
          accent="Leadership"
          dark
          description="I lead and contribute to initiatives that grow tech skills and lift others. These are the teams and causes I'm proud to be part of."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ icon: Icon, name, text, color }, i) => (
            <Reveal key={name} delay={i * 100} className="h-full">
              <div className="group h-full rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-brand-red/60">
                <Icon className={`h-10 w-10 transition duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`} />
                <h3 className="mt-4 text-lg font-bold">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-14 flex items-center justify-center gap-3 text-center italic text-neutral-300">
            <Users className="h-5 w-5 flex-none text-brand-green" />
            Together, we build a more inclusive and tech-driven community.
          </p>
        </Reveal>
      </Section>
      <Stripe />
    </>
  )
}
