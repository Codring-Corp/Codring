const db = require('../../database/export')
const Message = db.message

module.exports = (req, res) => {
  const message = req.body
  
  const newMessage = new Message({
    author: message.author,
    authorId: message.authorId,
    body: message.body,
    alert: message.alert
  })

  newMessage.save()
  .then(() => { res.status(200).send({ status: 200, msg: 'Message created'}) })
}