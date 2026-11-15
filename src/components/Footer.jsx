import { ChevronRight, MapPin, Mail, Phone, ArrowUp } from 'lucide-react'
import { FaLinkedinIn, FaGithub, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import Stripe from './Stripe'
import { profile } from '../data/site'

const quickLinks = [
  ['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact'],
]
const services = ['Computer Training', 'Web Development', 'IT Support & Solutions', 'Cyber Security', 'Networking', 'Graphic Design (Canva)', 'Digital Solutions']
const socials = [
  { icon: FaLinkedinIn, href: profile.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: profile.github, label: 'GitHub' },
  { icon: FaYoutube, href: profile.youtube, label: 'YouTube' },
  { icon: FaXTwitter, href: profile.x, label: 'X' },
]

const listLink = 'flex items-center gap-2 text-neutral-300 hover:text-white'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <Stripe />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-extrabold">
            {profile.shortName.split(' ')[0]} <span className="text-brand-red">{profile.shortName.split(' ')[1]}</span>
          </p>
          <p className="mt-1 text-sm italic text-neutral-300">Tech <span className="text-brand-red">•</span> Innovation <span className="text-brand-red">•</span> Impact</p>
          <p className="mt-4 text-neutral-300">Building innovative solutions in software engineering, IT support and digital education.</p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-brand-red">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(([label, href]) => (
              <li key={label}><a href={href} className={listLink}><ChevronRight className="h-4 w-4" /> {label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-brand-red">Our Services</h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s} className={listLink}><ChevronRight className="h-4 w-4" /> {s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-brand-red">Get In Touch</h3>
          <ul className="space-y-3 text-neutral-300">
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand-red" /> {profile.location}</li>
            <li className="flex items-center gap-3 break-all"><Mail className="h-5 w-5 flex-none text-brand-red" /> {profile.email}</li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand-red" /> {profile.phone}</li>
          </ul>
          <p className="mt-6 font-semibold">Follow Me</p>
          <div className="mt-3 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 transition hover:border-brand-red hover:bg-brand-red">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-sm sm:px-8">
          <p>© {new Date().getFullYear()} {profile.shortName}. All rights reserved.</p>
          <p className="italic text-neutral-300">Dream <span className="text-brand-red">•</span> Build <span className="text-brand-red">•</span> Innovate</p>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-brand-red px-4 py-2 hover:bg-brand-red">
            <ArrowUp className="h-4 w-4" /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}
