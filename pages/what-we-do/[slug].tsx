import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import matter from 'gray-matter'
import Hero from '../../components/blocks/Hero'
import Layout from '../../components/utils/Layout'
import ReactMarkdown from '../../components/utils/ReactMarkdown'
import WorkSlider from '../../components/blocks/WorkSlider'

type Job = {
  title: string
  image: string
  imageAlt: string
  draft: boolean
  featured: boolean
  galleryImages: string[]
}

type Props = {
  slug: string
  job: {
    content: string
    data: Job
  }
}

const Job = ({ job }: Props) => {
  // Hide the content if it's a draft
  if (job.data.draft) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <Layout>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <main className="flex-grow">
          <Hero title={job.data.title} image={job.data.image} nextBg="white" />

          <section className="pb-20 bg-white-300 pt-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <ReactMarkdown>{job.content}</ReactMarkdown>
                {job.data.galleryImages && <WorkSlider gallery={job.data.galleryImages} />}
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
  const files = fs.readdirSync(path.join('./_services'))
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
  const file = fs.readFileSync(path.join('_services', `${slug}.md`))
  const { content, data } = matter(file)
  return {
    props: {
      slug,
      job: {
        content,
        data: data as Job,
      },
    },
  }
}

export default Job
