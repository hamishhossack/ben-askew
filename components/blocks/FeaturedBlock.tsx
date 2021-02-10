import Link from 'next/link'
import SectionBreak from '../elements/SectionBreak'
import ReactMarkdown from '../utils/ReactMarkdown'

type Props = {
  href: string
  title: string
  description: string
  content: string
  image: string
  imageAlt: string
  imageRight: boolean
  isMarkdown: boolean
  isEven: boolean
}

function FeaturedBlock({
  href,
  title,
  description,
  image,
  imageAlt,
  imageRight,
  isMarkdown = false,
  isEven = false,
}: Props) {
  const color = isEven ? 'white' : 'gray-300'
  return (
    <section className={`relative py-20 bg-${color}`}>
      <SectionBreak color={color} />

      <div className="container mx-auto px-4 py-12">
        <div className="items-center flex flex-wrap">
          <div
            data-aos="fade-up-right"
            className={`w-full md:w-5/12 ml-auto place-self-center mr-auto order-first ${
              imageRight ? 'md:order-last' : ''
            }`}
          >
            <img alt={imageAlt} className="max-w-full rounded-lg shadow-lg" src={require(`../../data/${image}`)} />
          </div>
          <div data-aos="zoom-in" className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold">{title}</h3>
              {isMarkdown ? (
                <ReactMarkdown>{description}</ReactMarkdown>
              ) : (
                <p className="mt-4 text-lg leading-relaxed text-gray-600">{description}</p>
              )}
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
