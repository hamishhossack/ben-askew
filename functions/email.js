const mailgun = require('mailgun-js')
const DOMAIN = 'sandbox05050bd5b01d4cf2b5920b735a2b624b.mailgun.org'
const mg = mailgun({ apiKey: '***REMOVED***', domain: DOMAIN })
const data = {
  from: 'Mailgun Sandbox <postmaster@sandbox05050bd5b01d4cf2b5920b735a2b624b.mailgun.org>',
  to: 'info@bwaelectrical.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
}

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body)

  await mg.messages().send(data, function (error, body) {
    console.log(body)
  })

  return {
    statusCode: 201,
  }
}
