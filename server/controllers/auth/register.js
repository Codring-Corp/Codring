const db = require('../../database/export')
const Accounts = db.accounts

const bcrypt = require('bcrypt')
const generateAccessToken = require('../../middleware/token/generateAccessToken')

const mailer = require('../../middleware/mail/export')


module.exports = async(req, res) => {
  // Register
  const data = req.body
  const email = data.email
  const username = data.username.toLowerCase()
  const password = bcrypt.hashSync(data.password, 10)
  
  // Check if email already exists
  if (await Accounts.findOne({ email })) return res.status(400).send({ status: 400, error: { input: 'email', msg: 'Ce mail est déjà rattaché à un compte' }})
  // Check if username already exists
  else if (await Accounts.findOne({ username })) return res.status(400).send({ status: 400, error: { input: 'username', msg: 'Nom d\'utilisateur déjà prit' }})
  
  else {
      // Create a new user
      const newUser = new Accounts({
          username,
          email,
          password,
          isAdmin: data.isAdmin ? true : false,
          lastConnection: new Date(),
          userPoints: 0
      })
      // Save user in the DB
      await newUser.save()
      .then(user => {
          // When user is saved, generate his JWT
          const accessToken = generateAccessToken(user)
          // Send a registration confirmation email
          mailer.send.register(email)
          
          res.status(200).send({ status: 200, accessToken })
      })
  }
}