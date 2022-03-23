const db = require('../../database/export')
const Todos = db.todoList


module.exports = async(req, res) => {
  // Delete a todo by id
  const id = req.params.id
  Todos.findByIdAndDelete(id)
  .then(() => res.status(200).send({ status: 200, msg: 'Todo deleted' }))
}