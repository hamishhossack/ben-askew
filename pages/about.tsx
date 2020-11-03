import BuildBlock from '../components/blocks/BuildBlock'
import SectionBreak from '../components/elements/SectionBreak'
import Layout from '../components/utils/Layout'
import ReactMarkdown from '../components/utils/ReactMarkdown'
import data from '../data/pages/about.json'

const AboutPage = () => (
  <Layout>
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <BuildBlock {...data.keyPoints} withBP={false} />
        <section className="relative py-20">
          <SectionBreak />
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <ReactMarkdown>{data.extra}</ReactMarkdown>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </Layout>
)

export default AboutPage
