const db = require('../../database/export')
const Messages = db.message

module.exports = async(req, res) => {
  // Delete a message by id
  const id = req.params.id
  Messages.findByIdAndDelete(id)
  .then(() => res.status(200).send({ status: 200, msg: 'Message deleted' }))
}