// Modules importations
require('dotenv').config()

const express = require('express')
const figlet = require('figlet')
const cors = require('cors')


// Server initiation
const app = express()

app.use(express.json())
app.use(express.text())
app.use(cors())

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server listenning on port ${PORT}`))


// Database importations
const db = require('./database/export')
const { route } = require('./routes/auth.routes')
db.connect


//figlet("Codring", (err, data) => console.log(data))


// Routes
const routes = require('./routes/export.routes')

app.use('/auth', routes.auth)
app.use('/discord', routes.discord)
app.use('/messages', routes.messages)
app.use('/rewards', routes.rewards)
app.use('/slack', routes.slack)
app.use('/todo', routes.todoList)
app.use('/accounts', routes.accounts)
