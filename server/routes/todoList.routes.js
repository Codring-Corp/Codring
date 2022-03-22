const express = require('express')
const router = express.Router()

const db = require('../database/export')
const Todo = db.todoList


router.get('/', async(req, res) => {
  const todo = await Todo.find()
  res.status(200).send({ status: 200, todo })
})

module.exports = router