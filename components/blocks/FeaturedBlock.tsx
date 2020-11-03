import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import SectionBreak from '../elements/SectionBreak'

type Props = {
  href: string
  title: string
  description: string
  content: string
  image: string
  imageAlt: string
  key?: string
}

function FeaturedBlock({ href, title, description, image, imageAlt }: Props) {
  return (
    <section className="relative py-20">
      <SectionBreak />

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          {image && (
            <div data-aos="fade-up-right" className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img alt={imageAlt} className="max-w-full rounded-lg shadow-lg" src={require(`../../data/${image}`)} />
            </div>
          )}
          <div data-aos="zoom-in" className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full text-green-600 bg-green-300">
                <FontAwesomeIcon icon={['fas', 'award']} className="text-xl" />
              </div>
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{description}</p>
              <Link href={href}>
                <a className="font-bold text-gray-800 mt-8">See the project in detail</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlock
