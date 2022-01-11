const connect = require('./connection')
const models = require('./models/export.models')

const accountController = require('../controller/account.controller')

module.exports = {
    connect,

    accounts: models.account,
    message: models.message,
    rewards: models.rewards,
    todoList: models.todoList,

    accountController
}