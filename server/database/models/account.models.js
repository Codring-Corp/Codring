const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String, // admin, moderator, user
    lastConnection: Date,
    personalTodoList: [
        {
            taskId: mongoose.Schema.Types.ObjectId,
            taskBody: String,
            isDone: Boolean
        }
    ],
    defaultTodoList: [
        {
            taskId: String,
            isDone: Boolean
        }
    ],
    userPoints: {
        type: Number,
        require: true
    },
    rewards: [
        {
            rewardId: String,
            rewardTitle: String,
            lastClaim: Date,
            claimed: Boolean
        }
    ],
}, {timestamps: true})

module.exports = mongoose.model('accounts', accountSchema)