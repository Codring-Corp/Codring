const mongoose = require('mongoose')

const defaultTodoListSchema = new mongoose.Schema({
    task: String
        
}, {timestamps: true})


module.exports = mongoose.model('defaulttodolists', defaultTodoListSchema)
