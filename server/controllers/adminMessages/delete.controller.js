const db = require('../../database/export')
const adminMessage = db.adminMessage

module.exports = async(req, res) => {
  // Delete a message sent by an admin
  const id = req.params.id
  adminMessage.findByIdAndDelete(id)
  .then(() => res.status(200).send({ status: 200, msg: 'Admin message deleted' }))
}