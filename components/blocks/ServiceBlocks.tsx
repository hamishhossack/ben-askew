import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'

export type ServiceContent = {
  icon: string
  title: string
  description: string
  color: string
  animation: string
}

type Props = {
  services: ServiceContent[]
  icon: string
  featured: {
    title: string
    description: string
    image: string
  }
  content: string
}

function ServiceBlocks({ services, icon, featured, content }: Props) {
  return (
    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {services.map(({ icon, title, description, color, animation }, i) => (
            <div
              key={title}
              data-aos={animation}
              className={`${i % 2 === 0 ? `lg:pt-${i === 0 ? '12' : '6'}` : ''} w-full md:w-4/12 px-4 text-center`}
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div
                    className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${color}-400`}
                  >
                    <FontAwesomeIcon icon={['fas', icon as IconName]} />
                  </div>
                  <h6 className="text-xl font-semibold">{title}</h6>
                  <p className="mt-2 mb-4 text-gray-600">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div data-aos="zoom-in" className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <FontAwesomeIcon icon={['fas', icon as IconName]} className="text-xl" />
            </div>
            <ReactMarkdown>{content}</ReactMarkdown>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">Working with us is a pleasure</h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them
              first via JavaScript.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              The kit comes with three pre-built pages to help you get started faster. You can change the text and
              images and you're good to go. Just make sure you enable them first via JavaScript.
            </p>
            <a href="#" className="font-bold text-gray-800 mt-8">
              Check Tailwind Starter Kit!
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div
              data-aos="fade-up-left"
              className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
            >
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: '95px',
                    top: '-94px',
                  }}
                >
                  <polygon points="-30,95 583,95 583,65" className="text-pink-600 fill-current"></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">{featured.title}</h4>
                <p className="text-md font-light mt-2 text-white">{featured.description}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceBlocks
