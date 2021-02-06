import BuildBlock from '../components/blocks/BuildBlock'
import ContactBlock from '../components/blocks/ContactBlock'
import Layout from '../components/utils/Layout'
import data from '../data/pages/contact.json'

const ContactPage = () => (
  <Layout title={data.title}>
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <BuildBlock classNames="pt-24" {...data.contact} />
        <ContactBlock />
      </main>
    </div>
  </Layout>
)

export default ContactPage
