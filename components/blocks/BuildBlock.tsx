import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type BlockBlockContent = {
  icon: IconName
  title: string
  description: string
}

function BuildBlock() {
  const title = 'Build Something'
  const description =
    'Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos.'
  const buildBlocks: BlockBlockContent[] = [
    {
      icon: 'medal',
      title: 'Excelent Services',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      icon: 'poll',
      title: 'Grow your market',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      icon: 'lightbulb',
      title: 'Launch time',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]
  return (
    <section className="pb-20 relative block bg-gray-900">
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
          <polygon className="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div data-aos="zoom-in" className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">{title}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">{description}</p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          {buildBlocks.map(({ icon, title, description }) => (
            <div key={title} data-aos="fade-up" className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FontAwesomeIcon icon={['fas', icon]} className="text-xl" />
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
