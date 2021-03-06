const formData = require('form-data')
const Mailgun = require('mailgun.js')
const domain = 'mg.bwaelectrical.com'
const mgDefaults = {
  from: 'Website Contact <postmaster@bwaelectrical.com>',
  to: 'info@bwaelectrical.com',
  subject: 'Website contact',
}

const mailgun = new Mailgun(formData)
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY, url: 'https://api.eu.mailgun.net' })

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    console.log('event.body', event.body)
    const data = JSON.parse(event.body)
    const text = `
      Name: ${data.payload.name}
      Email: ${data.payload.email}

      ${data.payload.body}
    `
    await mg.messages.create(domain, {
      from: 'Web Admin <postmaster@bwaelectrical.com>',
      to: ['info@bwaelectrical.com'],
      subject: 'Website Contact',
      text,
    })
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
