import { useState } from 'react'
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import Section from './Section'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { profile } from '../data/site'

const info = [
  { icon: Mail, label: 'Email', value: profile.email },
  { icon: Phone, label: 'Phone', value: profile.phone, note: '(WhatsApp Available)' },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: profile.linkedin.replace('https://', ''), href: profile.linkedin },
  { icon: FaGithub, label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github },
]

const field = 'w-full rounded-xl border border-neutral-300 bg-white py-3 pl-11 pr-4 text-brand-black outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/30 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Opens the visitor's email app. Swap for Formspree/EmailJS later if you want real form submissions.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" tone="light">
      <SectionTitle
        plain="Contact"
        accent="Me"
        eyebrow="Get in touch"
        subtitle="Let's Build Something Great Together"
        description="Have a project, collaboration idea, or just want to say hi? I'd love to hear from you!"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal direction="left">
        <ul className="space-y-4">
          {info.map(({ icon: Icon, label, value, note, href }) => {
            const Tag = href ? 'a' : 'div'
            return (
              <li key={label}>
                <Tag
                  {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-red text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-brand-black dark:text-white">{label}</span>
                    <span className="block break-words text-neutral-600 dark:text-neutral-300">{value}</span>
                    {note && <span className="block text-xs italic text-neutral-500">{note}</span>}
                  </span>
                </Tag>
              </li>
            )
          })}
        </ul>
        </Reveal>

        <Reveal direction="right">
        <form onSubmit={submit} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
          <h3 className="mb-5 flex items-center gap-3 text-xl font-bold italic text-brand-red">
            <Send className="h-5 w-5" /> Send a Message
          </h3>
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-3.5 h-5 w-5 text-neutral-500" />
              <input name="name" required value={form.name} onChange={update} placeholder="Your Name" className={field} />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-neutral-500" />
              <input name="email" type="email" required value={form.email} onChange={update} placeholder="Your Email" className={field} />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-neutral-500" />
              <textarea name="message" required rows={5} value={form.message} onChange={update} placeholder="Your Message..." className={field} />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3 font-semibold text-white transition hover:bg-red-700">
              <Send className="h-5 w-5" /> Send Message
            </button>
          </div>
        </form>
        </Reveal>
      </div>
    </Section>
  )
}
