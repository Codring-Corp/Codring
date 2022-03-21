const express = require('express')
const router = express.Router()

const db = require('../database/export')
const Messages = db.message

router.get('/', async(req, res) => {
  const messages = await Messages.find()
  res.status(200).send({ status: 200, messages })
})

module.exports = router