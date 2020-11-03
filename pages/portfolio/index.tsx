import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import FeaturedBlock from '../../components/blocks/FeaturedBlock'
import Hero from '../../components/blocks/Hero'
import Layout from '../../components/utils/Layout'
import data from '../../data/pages/portfolio.json'

type Job = {
  content: string
  data: {
    title: string
    titleUnderlined: string
    image: string
    imageAlt: string
    href: string
    description: string
    content: string
  }
}

type Props = {
  jobs: Job[]
}

const PortfolioPage = ({ jobs }: Props) => (
  <Layout>
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <Hero title={data.title} underlinedTitle={data.underlinedTitle} image={data.image} nextBg="white" />
        {jobs.map((job) => (
          <FeaturedBlock key={job.data.title} {...job.data} />
        ))}
      </main>
    </div>
  </Layout>
)

type StaticProps = {
  props: Props
}

export const getStaticProps = async (): Promise<StaticProps> => {
  const files = fs.readdirSync(path.join('./_jobs'))
  const jobs = files.map((f) => {
    const file = fs.readFileSync(path.join('./_jobs', f)).toString()
    const { data, content } = matter(file)
    return { data: { ...data, href: `/portfolio/${f.replace('.md', '')}` }, content }
  }) as Job[]

  return {
    props: {
      jobs,
    },
  }
}

export default PortfolioPage
