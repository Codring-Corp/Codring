const db = require('../../database/export')
const Todos = db.todoList


module.exports = async(req, res) => {
  // Update a todo
  const task = req.body.task
  const id = req.body.id

  const todo = await Todos.findByIdAndUpdate(id, { task } )
  todo.save(() => res.status(200).send({ status: 200, msg: 'Todo updated' }))
}