import { Code, ArrowRight, Mail, Laptop, Users, ShieldCheck, Rocket, Network, Palette } from 'lucide-react'
import ImageSlot from './ImageSlot'
import ValuesBar from './ValuesBar'
import useTypewriter from '../hooks/useTypewriter'
import { profile } from '../data/site'

const roles = ['Software Engineer', 'Graphic Designer with Canva', 'Computer Science Student', 'Future Systems & Security Engineer']

const values = [
  { icon: Laptop, label: 'Build Solutions' },
  { icon: Users, label: 'Share Knowledge' },
  { icon: ShieldCheck, label: 'Strengthen Security' },
  { icon: Rocket, label: 'Drive Innovation' },
]

const chips = [
  { icon: Code, label: 'Web Dev', pos: 'left-0 top-12 sm:-left-6', delay: '0s', color: 'text-brand-red' },
  { icon: ShieldCheck, label: 'Security', pos: 'right-0 top-1/3 sm:-right-6', delay: '1.2s', color: 'text-brand-green' },
  { icon: Network, label: 'Networking', pos: 'bottom-12 left-0 sm:-left-6', delay: '2.4s', color: 'text-white' },
  { icon: Palette, label: 'Canva Design', pos: 'bottom-24 right-0 sm:-right-6', delay: '3.2s', color: 'text-pink-400' },
]

const enter = (ms) => ({ animationDelay: `${ms}ms` })

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <>
      <section id="home" className="relative scroll-mt-16 overflow-hidden bg-neutral-950 text-white">
        {/* background effects */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 animate-glow rounded-full bg-brand-red/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 animate-glow rounded-full bg-brand-green/40 blur-3xl" style={enter(2000)} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-green bg-brand-green/10 px-4 py-2 text-sm" style={enter(0)}>
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-green" />
              </span>
              Open to partnerships, jobs and web development work
            </p>

            <h1 className="animate-fade-up mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl" style={enter(150)}>
              Vivian Naliaka <span className="text-brand-red">Mukhongo</span>
            </h1>

            <p className="animate-fade-up mt-6 min-h-[2rem] text-xl text-neutral-100 sm:text-2xl" style={enter(300)} aria-label={roles.join(', ')}>
              <span className="text-neutral-300">I'm a </span>
              <span className="font-semibold text-brand-green">{typed}</span>
              <span className="animate-blink ml-0.5 text-brand-red">|</span>
            </p>

            <div className="animate-fade-up mt-5 h-1 w-20 rounded-full bg-brand-red" style={enter(400)} />

            <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-neutral-300" style={enter(500)}>
              I build web solutions, design with Canva, teach others to use technology, and I'm working
              toward a career in systems administration and cybersecurity.
            </p>

            <div className="animate-fade-up mt-8 flex flex-wrap gap-4" style={enter(650)}>
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-semibold shadow-lg shadow-brand-red/30 transition hover:-translate-y-0.5 hover:bg-red-700">
                <Code className="h-5 w-5" /> View Projects
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-black">
                <Mail className="h-5 w-5" /> Contact Me
              </a>
            </div>
          </div>

          <div className="animate-fade-up relative mx-auto w-full max-w-md lg:max-w-none" style={enter(300)}>
            <div className="pointer-events-none absolute inset-0 m-auto aspect-square w-[115%] animate-rotate-slow rounded-full bg-[conic-gradient(from_0deg,#D9111E,#111111,#1B7F3B,#111111,#D9111E)] opacity-40 blur-2xl" />
            <div className="animate-float relative">
              <ImageSlot
                src={profile.heroPhoto}
                alt="Vivian Naliaka Mukhongo"
                label="Hero photo"
                className="aspect-[4/5] w-full rounded-[2.5rem] border border-white/15 shadow-2xl shadow-black/50 sm:aspect-[5/6]"
              />
              {chips.map(({ icon: Icon, label, pos, delay, color }) => (
                <div
                  key={label}
                  className={`animate-float absolute ${pos} flex items-center gap-2 rounded-2xl border border-white/15 bg-neutral-900/80 px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur`}
                  style={{ animationDelay: delay }}
                >
                  <Icon className={`h-4 w-4 ${color}`} /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ValuesBar items={values} />
    </>
  )
}
