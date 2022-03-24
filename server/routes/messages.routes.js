const express = require('express')
const router = express.Router()

const db = require('../database/export')
const Messages = db.message

const authenticateToken = require('../middleware/token/authenticateToken')
const messagesController = require('../controllers/messages/export.controller')


router.get('/', async(req, res) => {
  const messages = await Messages.find()
  res.status(200).send({ status: 200, messages })
})
router.post('/', /* authenticateToken, */  messagesController.create)
router.delete('/:id', authenticateToken, messagesController.delete)

router.get('/sse', async(req, res) => {
  res.setHeader('Content-Type', 'text/event-stream')
  
  let startTime = new Date()
  send(res, startTime)
})

async function send(res, startTime) {
  // Get the diff number of messages between the start of the request and now
  const messages = await Messages.find({ createdAt: { $gte: startTime }})
  
  startTime = new Date()
  
  if (messages.length > 0) {
    const data = messages
    res.write('data: ' + JSON.stringify(data) + '\n\n')
  }
  
  setTimeout(() => {
    send(res, startTime)
  }, 3000);
}


module.exports = router