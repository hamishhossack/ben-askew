import ReactMarkdown from 'react-markdown'
import BuildBlock from '../components/blocks/BuildBlock'
import Layout from '../components/utils/Layout'
import data from '../data/pages/about.json'

const AboutPage = () => (
  <Layout>
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <BuildBlock />
      </main>
    </div>
  </Layout>
)

export default AboutPage
