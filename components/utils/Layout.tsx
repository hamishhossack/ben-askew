import React, { ReactNode } from 'react'
import Head from 'next/head'
import { withRouter, NextRouter } from 'next/router'
import Footer from '../blocks/Footer'
import Navbar from '../blocks/NavBar'
import settings from '../../data/settings.json'

type Props = {
  children?: ReactNode
  title?: string
  router: NextRouter
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="relative min-h-screen">
    <Head>
      <title>
        {settings.site_title} | {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="/logo.webp" />
      <meta property="og:title" content={`${settings.site_title} | ${title}`} />
      <meta property="og:description" content={settings.site_description} />
      <meta property="og:image" content="/logo-with-bg.png" />
    </Head>

    <header className="w-full">
      <Navbar transparent />
    </header>

    {children}

    <Footer />
  </div>
)

export default withRouter(Layout)
