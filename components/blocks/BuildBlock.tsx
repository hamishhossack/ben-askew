import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionBreak from '../elements/SectionBreak'

type BuildBlockContent = {
  icon: string
  title: string
  description: string
}

type Props = {
  title: string
  description: string
  withBP?: boolean
  items: BuildBlockContent[]
}

function BuildBlock({ title, description, items, withBP = true }: Props) {
  return (
    <section className="pb-20 relative block bg-gray-900">
      <SectionBreak color="gray-900" />

      <div className={`container mx-auto px-4 lg:pt-24 ${withBP ? 'lg:pb-64' : ''}`}>
        <div data-aos="zoom-in" className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">{title}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">{description}</p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          {items.map(({ icon, title, description }) => (
            <div key={title} data-aos="fade-up" className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FontAwesomeIcon icon={['fas', icon as IconName]} className="text-xl" />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">{title}</h6>
              <p className="mt-2 mb-4 text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuildBlock
