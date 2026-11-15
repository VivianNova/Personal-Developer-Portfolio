import { Code, Server, Shield, Calendar, Landmark, GraduationCap } from 'lucide-react'

export const skillGroups = [
  { title: 'Web & Software', icon: Code, tone: 'red', items: ['Python', 'Django, Flask', 'Laravel/PHP', 'MERN Stack', 'MySQL'] },
  { title: 'Systems & Networking', icon: Server, tone: 'green', items: ['Unix/Linux', 'Docker', 'Cisco Networking', 'On-prem & Cloud Admin', 'HPC'] },
  { title: 'Security', icon: Shield, tone: 'red', items: ['SIEM Tools', 'Threat & Risk Management'] },
  { title: 'Productivity & Tools', icon: Calendar, tone: 'green', items: ['MS Office Suite', 'Graphic Design (Canva)', 'Responsible AI', 'AI-Assisted Dev'] },
  { title: 'Digital Services Knowledge', icon: Landmark, tone: 'red', items: ['eCitizen', 'KRA, SHA', 'NHSSF', 'and more...'] },
  { title: 'Training', icon: GraduationCap, tone: 'green', items: ['Computer Packages', 'Responsible AI', 'Canva Design'] },
]
