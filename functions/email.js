const mailgun = require('mailgun-js')
const domain = 'sandbox05050bd5b01d4cf2b5920b735a2b624b.mailgun.org'
const apiKey = process.env.MAILGUN_API_KEY || ''
const mg = mailgun({ apiKey, domain })
const data = {
  from: 'Mailgun Sandbox <postmaster@sandbox05050bd5b01d4cf2b5920b735a2b624b.mailgun.org>',
  to: 'info@bwaelectrical.com',
  subject: 'Website contact',
  text: 'Testing some Mailgun awesomness!',
}

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    await mg.messages().send({ ...data, text: event.body })
  } catch (e) {
    console.error(e)
    return {
      statusCode: 403,
    }
  } finally {
    return {
      statusCode: 201,
    }
  }
}
