const db = require('../../database/export')
const Todos = db.todoList


module.exports = async(req, res) => {
  // Create a todo
  const task = req.body.task
  const newTodo = new Todos({ task })
  
  newTodo.save()
  .then(() => res.status(200).send({ status: 200, msg: 'Todo created' }))
}