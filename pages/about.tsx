import ReactMarkdown from 'react-markdown'
import Layout from '../components/utils/Layout'
import data from '../data/pages/contact.json'

const AboutPage = () => (
  <Layout>
    <div className="w-full p-4">
      <ReactMarkdown>{data.content}</ReactMarkdown>
      <br />
    </div>
  </Layout>
)

export default AboutPage
