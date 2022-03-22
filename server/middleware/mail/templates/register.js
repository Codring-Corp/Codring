const transporter = require('../transporter')
const template = require('../models/register')

module.exports = to => {
  const options = {
    from: process.env.MAIL_CODRING,
    to,
    subject: 'Bienvenue sur Codring !',
    html: template()
  }
  transporter.sendMail(options, (err, info) => { if (err) console.log(err) })
}