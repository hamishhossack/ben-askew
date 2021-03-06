import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { PATHS } from '../../utils/navigation'
import metadata from '../../data/settings.json'

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: '80px', transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">{metadata.footer_title}</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">{metadata.footer_description}</h5>
              <div className="mt-6">
                <button
                  aria-label="Facebook profile"
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  onClick={() => (window.location.href = `https://facebook.com/${metadata.facebook_account}`)}
                >
                  <FontAwesomeIcon icon={['fab', 'facebook-square']} className="flex" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 mt-12 md:mt-0 ml-auto">
                  <span className="block uppercase text-gray-700 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    {PATHS.map(({ title, path, icon }) => (
                      <li key={path}>
                        <Link href={path}>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                            {icon && <FontAwesomeIcon icon={icon} />} {title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-700 text-sm font-semibold mb-2">Contact</span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href={`tel:${metadata.telephone}`}
                      >
                        {metadata.telephone}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href={`mailto:${metadata.email}`}
                      >
                        {metadata.email}
                      </a>
                    </li>
                    <li>
                      <p className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                        {metadata.company_reg}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="md:w-8/12 px-4 flex flex-wrap flex-column">
              <div className="w-full flex flex-row justify-between pb-8">
                <a className="px-4" href="https://niceic.com">
                  <img src={require('../../data/media/niceic.png')} alt="niceic logo" className="max-w-full" />
                </a>
                <a className="px-4" href="https://cityandguilds.com">
                  <img
                    src={require('../../data/media/city-and-guilds-logo.png')}
                    alt="City and Guilds logo"
                    className="max-w-full"
                  />
                </a>
                <a className="px-4" href={`https://g.page/${metadata.google_account}?share`}>
                  <img
                    src={require('../../data/media/google-reviews.png')}
                    alt="Google reviews logo"
                    className="max-w-full"
                  />
                </a>
              </div>
              <div className="w-full flex flex-row justify-between">
                <a className="px-4" href="https://mytrustedexpert.com">
                  <img
                    src={require('../../data/media/my-trusted-expert-logo.png')}
                    alt="My Trusted Expert logo"
                    className="max-w-full"
                  />
                </a>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 py-4 text-right">
              <div className="text-sm text-center md:text-right text-gray-700 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()} BWA electrical
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
