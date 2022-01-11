const mongoose = require('mongoose')

const messagesSchema = new mongoose.Schema({
    author: {
        type: String,
        require: true
    },
    authorId: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    alert: {
        type: Number
    }
}, {timestamps: true})


module.exports = mongoose.model('messages', messagesSchema)
