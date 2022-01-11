const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true
    },
    lastConnection: {
        type: Date,
        require: true
    },
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