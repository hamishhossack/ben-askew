import { AppProps } from 'next/app'

import '../utils/icons'

import '../css/tailwind.scss'
import '../css/theme.scss'
import '../css/utility-patterns.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
