import { House, User, Code, FolderOpen, Briefcase, Image as ImageIcon, Users, Mail } from 'lucide-react'

// Edit your details here. Leave a link as '#' until you have it.
export const profile = {
  name: 'Vivian Naliaka Mukhongo',
  shortName: 'Mukhongo Vivian',
  email: 'vivian.mukhongo@gmail.com',
  phone: '+254 7XX XXX XXX',
  location: 'Nairobi, Kenya',
  linkedin: 'https://linkedin.com/in/mukhongo-vivian',
  github: 'https://github.com/vivianmukhongo',
  // WhatsApp number with country code, digits only, e.g. '254712345678'. Leave '' until ready.
  whatsapp: '',
  youtube: '#',
  x: '#',
  // Image paths: files live in public/images, paths start with '/images/'
  heroPhoto: '/images/hero.png',
  aboutPhoto: '/images/about.jpg',
  skillsPhoto: '/images/skills.jpg',
  experiencePhoto: '/images/experience.jpg',
}

export const navLinks = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'gallery', label: 'Gallery', icon: ImageIcon },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail },
]
