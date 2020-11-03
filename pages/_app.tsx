import { useEffect } from 'react'
import { AppProps } from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css'

import '../utils/icons'

import '../css/tailwind.scss'
import '../css/theme.scss'
import '../css/utility-patterns.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return <Component {...pageProps} />
}
