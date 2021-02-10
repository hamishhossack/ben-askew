import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type ServiceContent = {
  icon: string
  title: string
  description: string
  color: string
  animation: string
  index?: number
}

type Props = {
  services: ServiceContent[]
}

function Block({ index = 0, title, animation, color, description, icon }: ServiceContent) {
  const padding = index % 2 === 0 ? `lg:pt-${index === 0 ? '12' : '6'}` : ''
  const colorClass = `bg-${color}-400`
  return (
    <div data-aos={animation} className={`${padding} w-full md:w-4/12 px-4 text-center`}>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <div
            className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${colorClass}`}
          >
            <FontAwesomeIcon icon={['fas', icon as IconName]} />
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 mb-4 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ServiceBlocks({ services }: Props) {
  return (
    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        {services && services.length > 0 && (
          <div className="flex flex-wrap">
            {services.map((service, i) => (
              <Block key={service.title} index={i} {...service} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ServiceBlocks
