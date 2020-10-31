import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Router, withRouter } from 'next/router'
import React from 'react'
import { PATHS } from '../../utils/navigation'

type Props = {
  router: Router
  transparent: boolean
}

function Navbar({ router, transparent }: Props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav
        className={
          (transparent ? 'top-0 absolute z-50 w-full' : 'relative shadow-lg bg-white shadow-lg') +
          ' flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className={
                  (transparent ? 'text-white' : 'text-gray-800') +
                  ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase'
                }
              >
                Ben the Builder
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={['fas', 'bars']} className={transparent ? 'text-white' : 'text-gray-800'} />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {PATHS.map(({ title, path, icon }, k) => (
                <li key={k} className="flex items-center">
                  <Link href={path}>
                    <a
                      className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase ${
                        transparent
                          ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                          : 'text-gray-800 hover:text-gray-600'
                      } ${router.pathname === path ? 'font-bold' : ''}`}
                    >
                      {icon && (
                        <FontAwesomeIcon
                          icon={icon}
                          className={`mr-2 ${transparent ? 'lg:text-gray-300 text-gray-500' : 'text-gray-500'}`}
                        />
                      )}
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  href="https://facebook.com/ben.askew"
                >
                  <FontAwesomeIcon icon={['fab', 'google']} className="text-gray-500 text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Google</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  href="https://facebook.com/ben.askew"
                >
                  <FontAwesomeIcon icon={['fab', 'facebook']} className="text-gray-500 text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className={
                    (transparent
                      ? 'bg-white text-gray-800 active:bg-gray-100'
                      : 'bg-pink-500 text-white active:bg-pink-600') +
                    ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                  }
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <FontAwesomeIcon icon={['fas', 'arrow-alt-circle-down']} /> Enquire
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Navbar)
