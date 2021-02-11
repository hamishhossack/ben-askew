const mailgun = require('mailgun-js')
const axios = require('axios')
const domain = 'sandbox05050bd5b01d4cf2b5920b735a2b624b.mailgun.org'
const apiKey = process.env.MAILGUN_API_KEY || ''
const secret = process.env.RECAPTCHA_KEY || ''
const mg = mailgun({ apiKey, domain })
const mgDefaults = {
  from: 'Mailgun Sandbox <postmaster@sandbox05050bd5b01d4cf2b5920b735a2b624b.mailgun.org>',
  to: 'info@bwaelectrical.com',
  subject: 'Website contact',
}

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const data = JSON.parse(event.body)
    const text = `
      Name: ${data.name}
      Email: ${data.email}

      ${data.body}
    `
    await axios.post('https://www.google.com/recaptcha/api/siteverify', { secret, response: data.token })
    await mg.messages().send({ ...mgDefaults, text })
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
