import React, { ReactNode } from 'react'
import Head from 'next/head'
import { withRouter, NextRouter } from 'next/router'
import Footer from '../blocks/Footer'
import Navbar from '../blocks/NavBar'

type Props = {
  children?: ReactNode
  title?: string
  router: NextRouter
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="relative min-h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header className="w-full">
      <Navbar transparent />
    </header>

    {children}

    <Footer />
  </div>
)

export default withRouter(Layout)
