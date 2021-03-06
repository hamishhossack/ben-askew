import { createRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

function ContactBlock() {
  // const [sending, setSending] = useState(false)
  // const [sent, setSent] = useState(false)
  // const [error, setError] = useState(false)
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [body, setBody] = useState('')
  const recaptchaRef = createRef<any>()

  // const submit: FormEventHandler = async (e) => {
  //   e.preventDefault()
  //   setSending(true)

  //   try {
  //     const token = await recaptchaRef.current.executeAsync()
  //     const response = await fetch('/.netlify/functions/email', {
  //       method: 'POST',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         body,
  //         token,
  //       }),
  //     })

  //     if (!response.ok) {
  //       setError(true)
  //     }
  //   } catch (e) {
  //     console.error(e)
  //     setError(true)
  //   } finally {
  //     setSending(false)
  //     setSent(true)
  //   }
  // }

  return (
    <section className="relative block py-40 lg:pt-0 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              {/* @ts-ignore */}
              <form className="flex-auto p-5 lg:p-10" netlify>
                <h4 className="text-2xl font-semibold">Contact us</h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-700">
                  Complete this form and we will get back to you in 24 hours
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Full Name"
                    style={{ transition: 'all .15s ease' }}
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style={{ transition: 'all .15s ease' }}
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    cols={80}
                    id="message"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Type a message..."
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                  />
                </div>
                <div className="text-center mt-6">
                  <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey="6LcB01IaAAAAAFUvCmdxi3Zdhb6GRLI6qbpYoMq2" />
                  {/* {sent && !error && <p className="text-green-600 text-bold py-6">Your message has been sent</p>}
                  {sent && error && (
                    <p className="text-red-600 text-bold py-6">
                      Your message has failed to send, please contact us on Facebook
                    </p>
                  )} */}
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style={{ transition: 'all .15s ease' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBlock
