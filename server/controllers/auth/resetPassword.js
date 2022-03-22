const db = require('../../database/export')
const Accounts = db.accounts

const mailer = require('../../middleware/mail/export')
const generateAccessToken = require('../../middleware/token/generateAccessToken')

module.exports = async (req, res) => {
  // Send an email with a reset password link
  const email = req.body.email
  const user = await Accounts.findOne({ email })
  
  if (!user) {
    return res.status(400).send({ status: 400, error: { input: 'email', msg: 'Cet email n\'est rattaché à aucun compte' }})
  }
  
  mailer.send.resetPassword(email, generateAccessToken(user))
  return res.status(200).send({ status: 200, msg: 'Email sent to ' + email })
}