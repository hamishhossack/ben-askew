import { AppProps } from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css'

import '../utils/icons'

import '../css/tailwind.scss'
import '../css/theme.scss'
import '../css/utility-patterns.scss'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('use')
    AOS.init()
    AOS.refresh()
  }, [])

  return <Component {...pageProps} />
}
