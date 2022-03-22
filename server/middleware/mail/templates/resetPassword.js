const transporter = require('../transporter')
const template = require('../models/resetPassword')

module.exports = (to, token) => {
  const options = {
    from: process.env.MAIL_CODRING,
    to,
    subject: 'Codring - Réinitialisation du mot de passe',
    html: template(token)
  }
  transporter.sendMail(options, (err, info) => { if (err) console.log(err) })
}