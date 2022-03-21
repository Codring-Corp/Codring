const mongoose = require('mongoose')

const messagesSchema = new mongoose.Schema({
    author: String,
    authorId: String,
    body: String,
    alert: Number
}, {timestamps: true})


module.exports = mongoose.model('messages', messagesSchema)
