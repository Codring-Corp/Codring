const db = require('../../database/export')
const adminMessage = db.adminMessage

const get = async(req, res) => {
  // Get all messages sent by admins
  const messages = await adminMessage.find()
  res.status(200).send({ status: 200, messages })
}

const create = async(req, res) => {
  // Create a message sent by an admin
  const message = req.body
  
  const newMessage = new adminMessage({
    author: message.author,
    authorId: message.authorId,
    body: message.body,
  })

  newMessage.save()
  .then(() => res.status(200).send({ status: 200, msg: 'Admin message created'}))
}

const remove = async(req, res) => {
  // Delete a message sent by an admin
  const id = req.params.id
  adminMessage.findByIdAndDelete(id)
  .then(() => res.status(200).send({ status: 200, msg: 'Admin message deleted' }))
}

module.exports = { get, create, remove }