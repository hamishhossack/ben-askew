import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Path = {
  title: string
  path: string
  icon?: IconProp
}

export const PATHS: Path[] = [
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact', icon: ['fas', 'phone'] },
]
