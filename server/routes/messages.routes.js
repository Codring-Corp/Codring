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

module.exports = router