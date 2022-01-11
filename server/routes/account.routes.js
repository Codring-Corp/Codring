const express = require('express')
const router = express.Router()


const db = require('../database/export')
const Accounts = db.accounts

router.get('/', async(req, res) => {
    // Return all acounts
    const accounts = await Accounts.find().then(accounts => { return accounts })
    res.status(200).send(accounts)
})

module.exports = router