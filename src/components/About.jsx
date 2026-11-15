import { Users, Calendar, Laptop, Handshake, Check, Target, Code, Palette } from 'lucide-react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import ImageSlot from './ImageSlot'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { profile } from '../data/site'
import { certifications } from '../data/certifications'
import { projects } from '../data/projects'
import { experience } from '../data/experience'

const chips = [
  { icon: Users, top: 'Co-founder', bottom: 'DravTech', tone: 'red' },
  { icon: Calendar, top: 'Event Manager', bottom: 'SheCodeAfrica', tone: 'green' },
  { icon: Code, top: 'Software Engineer', bottom: 'Web & Backend', tone: 'green' },
  { icon: Palette, top: 'Graphic Designer', bottom: 'Canva', tone: 'red' },
  { icon: Laptop, top: 'Trainer', bottom: 'Computer Packages & AI', tone: 'green' },
  { icon: Handshake, top: 'KEMRI-Wellcome', bottom: 'IT Attachee', tone: 'red' },
]
const tones = {
  red: 'border-brand-red text-brand-red',
  green: 'border-brand-green text-brand-green',
}

const journey = [
  'Curious, hardworking and resilient',
  'Always learning and exploring new technologies',
  'Committed to creating impact in tech and beyond',
]

const stats = [
  { value: certifications.length, label: 'Certifications' },
  { value: projects.length, label: 'Featured Projects' },
  { value: experience.length, label: 'Work Experiences' },
  { value: 4, label: 'Communities & Initiatives' },
]

export default function About() {
  return (
    <Section id="about" tone="light">
      <SectionTitle plain="About" accent="Me" eyebrow="Who I am" />

      <div className="grid items-center gap-14 lg:grid-cols-5">
        <Reveal direction="left" className="lg:col-span-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border-2 border-brand-red" />
            <ImageSlot
              src={profile.aboutPhoto}
              alt="Vivian Naliaka Mukhongo"
              label="About photo"
              className="relative aspect-square w-full rounded-full object-top shadow-xl ring-4 ring-white dark:ring-neutral-800"
            />
            <div className="absolute bottom-6 left-0 rounded-2xl bg-brand-green px-4 py-3 text-white shadow-xl sm:-left-3">
              <p className="text-xs opacity-90">Final-year student</p>
              <p className="font-bold">Chuka University</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="lg:col-span-3">
          <p className="text-2xl font-bold">{profile.name}</p>
          <p className="mt-1 text-sm italic text-neutral-600 dark:text-neutral-300">
            Software Engineer · Graphic Designer · Computer Science Student · Future Systems & Security Engineer
          </p>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              I'm a final-year Computer Science student at Chuka University, co-founder of DravTech, and the
              operator of Huduma Kenya Cyber. I also serve as an Event Manager for SheCodeAfrica Chuka chapter
              and run Mercy Sisters, a community initiative.
            </p>
            <p>
              I'm also a graphic designer who brings ideas to life with Canva, creating clear and
              eye-catching designs.
            </p>
            <p>
              I'm passionate about using technology to solve real problems, empower others, and build a secure,
              innovative digital future.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {chips.map(({ icon: Icon, top, bottom, tone }) => (
              <li key={top} className={`flex flex-col items-center gap-2 rounded-2xl border-2 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 dark:bg-neutral-800 ${tones[tone]}`}>
                <Icon className="h-7 w-7" />
                <span className="text-sm font-semibold text-brand-black dark:text-white">{top}</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-300">{bottom}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">My <span className="text-brand-red">Journey</span></h3>
              <ul className="mt-4 space-y-3">
                {journey.map((j) => (
                  <li key={j} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                    <Check className="mt-0.5 h-5 w-5 flex-none rounded-full bg-brand-green p-0.5 text-white" />
                    {j}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-4">
              <Target className="h-14 w-14 flex-none text-brand-red" />
              <div>
                <h3 className="text-2xl font-bold">My <span className="text-brand-green">Goal</span></h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  To grow into a Systems Administrator with strong Cybersecurity and Network Security skills,
                  and contribute to a safer, smarter digital world.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <ul className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal as="li" key={s.label} direction="zoom" delay={i * 100}>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center dark:border-neutral-700 dark:bg-neutral-800">
              <p className="text-4xl font-extrabold text-brand-red"><CountUp to={s.value} /></p>
              <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
