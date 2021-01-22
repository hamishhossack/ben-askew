import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BuildBlock from '../components/blocks/BuildBlock'
import ContactBlock from '../components/blocks/ContactBlock'
import FeaturedBlock from '../components/blocks/FeaturedBlock'
import Hero from '../components/blocks/Hero'
import ServiceBlocks from '../components/blocks/ServiceBlocks'
import Layout from '../components/utils/Layout'
import data from '../data/pages/home.json'

type Props = {
  featured: {
    content: string
    href: string
    data: { [key: string]: string }
  }[]
}

const IndexPage = ({ featured }: Props) => {
  const [topFeature] = featured
  return (
    <Layout title="Home">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow">
          <Hero title={data.title} underlinedTitle={data.underlinedTitle} slogan={data.slogan} image={data.image} />
          <ServiceBlocks
            services={data.serviceBlock.services}
            icon={data.serviceBlock.icon}
            content={data.serviceBlock.content}
            featured={data.serviceBlock.featured}
          />
          {topFeature && (
            <FeaturedBlock
              href={topFeature.href}
              title={topFeature.data.title}
              description={topFeature.data.description}
              image={topFeature.data.image}
              imageAlt={topFeature.data.imageAlt}
              content={topFeature.content}
            />
          )}
          <BuildBlock {...data.buildBlock} />
          <ContactBlock />
        </main>
      </div>
    </Layout>
  )
}

type StaticProps = {
  props: Props
}

export const getStaticProps = async (): Promise<StaticProps> => {
  const files = fs.readdirSync(path.join('./_services'))
  const featured = files
    .map((f) => {
      const file = fs.readFileSync(path.join('./_services', f)).toString()
      const { data, content } = matter(file)
      return { data, content, href: `/what-we-do/${f.replace('.md', '')}` }
    })
    .filter((j) => j.data.featured)

  return {
    props: {
      featured,
    },
  }
}

export default IndexPage
