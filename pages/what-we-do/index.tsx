import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import FeaturedBlock from '../../components/blocks/FeaturedBlock'
import Hero from '../../components/blocks/Hero'
import Layout from '../../components/utils/Layout'
import data from '../../data/pages/what-we-do.json'

type Job = {
  content: string
  data: {
    title: string
    titleUnderlined: string
    image: string
    imageAlt: string
    imageRight: boolean
    href: string
    description: string
    content: string
  }
}

type Props = {
  jobs: Job[]
}

const PortfolioPage = ({ jobs }: Props) => (
  <Layout title={data.title}>
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <Hero title={data.title} underlinedTitle={data.underlinedTitle} image={data.image} nextBg="white" />
        {jobs.map((job, i) => (
          <FeaturedBlock key={job.data.title} isMarkdown={true} isEven={i % 2 === 0} {...job.data} />
        ))}
      </main>
    </div>
  </Layout>
)

type StaticProps = {
  props: Props
}

export const getStaticProps = async (): Promise<StaticProps> => {
  const files = fs.readdirSync(path.join('./_services'))
  const jobs = files.map((f) => {
    const file = fs.readFileSync(path.join('./_services', f)).toString()
    const { data, content } = matter(file)
    return { data: { ...data, href: `/what-we-do/${f.replace('.md', '')}` }, content }
  }) as Job[]

  return {
    props: {
      jobs,
    },
  }
}

export default PortfolioPage
