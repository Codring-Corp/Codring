const db = require('../../database/export')
const Accounts = db.accounts

module.exports = async(req, res) => {
  // Delete an account by id
  const id = req.params.id
  Accounts.findByIdAndDelete(id)
  .then(() => res.status(200).send({ status: 200, msg: 'Account deleted' }))
}
