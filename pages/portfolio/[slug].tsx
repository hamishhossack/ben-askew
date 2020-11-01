import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import * as matter from 'gray-matter'
import Hero from '../../components/blocks/Hero'
import Layout from '../../components/utils/Layout'

type Props = {
  slug: string
  job: {
    content: string
    data: {
      [key: string]: string
    }
  }
}

const Job = ({ slug, job }: Props) => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <main className="flex-grow">
          <Hero title={job.data.title} image={job.data.image} nextBg="text-white" />

          <section className="pb-20 bg-white-300 pt-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <ReactMarkdown>{job.content}</ReactMarkdown>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

type Paths = {
  paths: StaticParams[]
  fallback: boolean
}

type Params = {
  slug: string
}

type StaticParams = {
  params: Params
}

export const getStaticPaths = async (): Promise<Paths> => {
  const files = fs.readdirSync(path.join('./_jobs'))
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

type StaticProps = {
  props: Props
}

export const getStaticProps = async ({ params: { slug } }: StaticParams): Promise<StaticProps> => {
  const { content, data } = matter.read(path.join('_jobs', `${slug}.md`))
  return {
    props: {
      slug,
      job: {
        content,
        data,
      },
    },
  }
}

export default Job
