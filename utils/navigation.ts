import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Path = {
  title: string
  path: string
  icon?: IconProp
}

export const PATHS: Path[] = [
  { title: 'About', path: '/about' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Contact', path: '/contact' },
]
