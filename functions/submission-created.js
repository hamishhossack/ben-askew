const mailgun = require('mailgun-js')
const domain = 'mg.bwaelectrical.com'
const apiKey = process.env.MAILGUN_API_KEY
const mg = mailgun({ apiKey, domain })
const mgDefaults = {
  from: 'Website Contact <postmaster@bwaelectrical.com>',
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
