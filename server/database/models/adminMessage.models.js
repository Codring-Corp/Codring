const mongoose = require('mongoose')

const adminMessagesSchema = new mongoose.Schema({
    author: String,
    authorId: String,
    body: String,
}, {timestamps: true})


module.exports = mongoose.model('adminMessages', adminMessagesSchema)
