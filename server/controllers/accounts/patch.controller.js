const db = require('../../database/export')
const Accounts = db.accounts

const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = async(req, res) => {
  // Update a specific user
  let user
  const data = req.body
  
  if (data.password) {
    // If it's a password update, hash the new password before update
    const newPassword = bcrypt.hashSync(req.body.password, saltRounds)
    user = await Accounts.findByIdAndUpdate(req.user._id, { password: newPassword })
  }
  else {
    if (await Accounts.findOne({ username: data.username })) {
      // Check if the new username isn't already taken
      return res.status(400).send({ status: 400, error: { input: 'username', msg: 'Nom d\'utilisateur déjà prit' }})
    }
    
    user = await Accounts.findOneAndUpdate({ email: data.email }, data)
  }
  
  user.save(() => res.status(200).send({ status: 200, msg: 'Account updated'}))
}