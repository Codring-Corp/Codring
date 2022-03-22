const express = require('express')
const router = express.Router()

const db = require('../database/export')
const Accounts = db.accounts
const Messages = db.message

const authenticateToken = require('../middleware/token/authenticateToken')


router.get('/', authenticateToken, async(req, res) => {
  // Get all statsof the website
  const [ totalAccounts, totalPoints ] = await getTotalAccountsAndPoints()
  const totalMessages = await getTotalMessages()
  
  
  res.status(200).send({
    status: 200,
    totalAccounts, totalMessages, totalPoints
  })
})

async function getTotalAccountsAndPoints() {
  // Retun the total number of accounts and points
  const accounts = await Accounts.find()
  const totalAccounts = accounts.length
  let totalPoints = 0
  
  accounts.map(account => totalPoints += account.userPoints)
  
  return [ totalAccounts, totalPoints ]
}
async function getTotalMessages() {
  // Return the total number messages
  const messages = await Messages.find()
  return messages.length
}


module.exports = router