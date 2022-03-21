const db = require('../../database/export')
const Accounts = db.accounts

const bcrypt = require('bcrypt')
const generateAccessToken = require('../../middleware/token/generateAccessToken')


module.exports = async(req, res) => {
  // Login
  const data = req.body
  const email = data.email
  const password = data.password
  const user = await Accounts.findOne({ email })
  
  if (!user) {
      return res.status(400).send({ status: 400, error: { input: 'email',  msg: 'Ce mail n\'est rattaché à aucun compte' }})
  }
  // Check if the given password is correct
  else if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({ status: 400, error: { input: 'password', msg: 'Mot de passe incorrect' }})
  }
  else {
      // Generate an access token and send it
      const accessToken = generateAccessToken(user)
      res.status(200).send({ status: 200, accessToken })
  }
}