const connect = require('./connection')
const models = require('./models/export.models')

module.exports = {
    connect,
    accounts: models.account,
    message: models.message,
    adminMessage: models.adminMessage,
    rewards: models.rewards,
    todoList: models.todoList,
}