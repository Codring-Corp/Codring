const db = require('../../database/export')
const adminMessage = db.adminMessage

module.exports = async(req, res) => {
  // Create a message sent by an admin
  const message = req.body.message
  const author = req.user

  const newMessage = new adminMessage({
    author: author.username,
    authorId: author._id,
    body: message,
  })
  
  newMessage.save()
  .then(() => res.status(200).send({ status: 200, msg: 'Admin message created'}))
}