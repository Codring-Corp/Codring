const auth = require('./auth.routes')
const discord = require('./discord.routes')
const messages = require('./messages.routes')
const rewards = require('./rewards.routes')
const slack = require('./slack.routes')
const todoList = require('./todoList.routes')
const accounts = require('./account.routes')


module.exports = {
    auth, discord, messages, rewards, slack, todoList, accounts
}