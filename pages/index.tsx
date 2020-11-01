import BuildBlock from '../components/blocks/BuildBlock'
import ContactBlock from '../components/blocks/ContactBlock'
import FeaturedBlock from '../components/blocks/FeaturedBlock'
import Hero from '../components/blocks/Hero'
import ServiceBlocks from '../components/blocks/ServiceBlocks'
import Layout from '../components/utils/Layout'
import data from '../data/pages/home.json'

const IndexPage = () => (
  <Layout title="Home">
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <Hero title={data.title} underlinedTitle={data.underlinedTitle} slogan={data.slogan} image={data.image} />
        <ServiceBlocks
          services={data.serviceBlock.services}
          icon={data.serviceBlock.icon}
          content={data.serviceBlock.content}
          featured={data.serviceBlock.featured}
        />
        <FeaturedBlock />
        <BuildBlock />
        <ContactBlock />
      </main>
    </div>
  </Layout>
)

export default IndexPage
