import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import FeaturedBlock from '../../components/blocks/FeaturedBlock'
import Hero from '../../components/blocks/Hero'
import Layout from '../../components/utils/Layout'
import data from '../../data/pages/portfolio.json'

type Props = {
  jobs: {
    content: string
    data: { [key: string]: string }
  }[]
}

const PortfolioPage = ({ jobs }: Props) => (
  <Layout>
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <Hero title={data.title} underlinedTitle={data.underlinedTitle} image={data.image} nextBg="text-white" />
        {jobs.map((job) => (
          <FeaturedBlock key={job.data.title} />
        ))}
      </main>
    </div>
  </Layout>
)

type StaticProps = {
  props: Props
}

export const getStaticProps = async (): Promise<StaticProps> => {
  const paths = fs.readdirSync(path.join('./_jobs'))
  const jobs = paths.map((p) => {
    const { content, data } = matter.read(path.join('_jobs', p))
    return { content, data }
  })
  return {
    props: {
      jobs,
    },
  }
}

export default PortfolioPage
