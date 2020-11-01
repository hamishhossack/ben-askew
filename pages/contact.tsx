import ReactMarkdown from 'react-markdown'
import BuildBlock from '../components/blocks/BuildBlock'
import ContactBlock from '../components/blocks/ContactBlock'
import Layout from '../components/utils/Layout'

const ContactPage = () => (
  <Layout>
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <BuildBlock />
        <ContactBlock />
      </main>
    </div>
  </Layout>
)

export default ContactPage
