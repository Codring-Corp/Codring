const express = require('express')
const router = express.Router()

const db = require('../database/export')
const Todo = db.todoList

const todoController = require('../controllers/todo/export.controller')
const authenticateToken = require('../middleware/token/authenticateToken')


router.get('/', async(req, res) => {
  const todo = await Todo.find()
  res.status(200).send({ status: 200, todo })
})
router.delete('/:id', authenticateToken, todoController.delete)

module.exports = router