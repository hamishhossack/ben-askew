import BuildBlock from '../components/blocks/BuildBlock'
import ContactBlock from '../components/blocks/ContactBlock'
import Hero from '../components/blocks/Hero'
import ServiceBlocks from '../components/blocks/ServiceBlocks'
import Layout from '../components/utils/Layout'
import data from '../data/pages/home.json'
import QuoteSlider from '../components/blocks/QuoteSlider'
import ReactMarkdown from 'react-markdown'

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow">
          <Hero title={data.title} underlinedTitle={data.underlinedTitle} slogan={data.slogan} image={data.image} />
          <ServiceBlocks services={data.serviceBlock.services} />

          <div className="flex flex-wrap items-center bg-gray-300">
            <div data-aos="zoom-in" className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              {data.main.title && (
                <div className="w-full px-4 mr-auto ml-auto">
                  <h3 className="text-3xl font-semibold">{data.main.title}</h3>
                </div>
              )}
              {data.main.body && (
                <div className="w-full px-4 mr-auto ml-auto">
                  <ReactMarkdown>{data.main.body}</ReactMarkdown>
                </div>
              )}
              <QuoteSlider quotes={data.main.quotes} />
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                data-aos="fade-up-left"
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt={data.main.featured.imageAlt}
                  src={require(`../data/media/featured.png`)}
                  className="w-full align-middle rounded-t-lg"
                />
                <div className="relative p-8 mb-4">
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
                  <h4 className="text-xl font-bold text-white">{data.main.featured.title}</h4>
                  <p className="text-md font-light mt-2 text-white">{data.main.featured.description}</p>
                </div>
              </div>
            </div>
          </div>

          <BuildBlock {...data.buildBlock} />
          <ContactBlock />
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage
