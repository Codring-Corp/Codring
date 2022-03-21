const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const authenticateToken = require('../middleware/token/authenticateToken')

const authController = require('../controllers/auth/export')


router.get('/', authenticateToken, (req, res) => {
    // If the autehticateToken middle doens't return an error, return the user
    res.status(200).send({ status: 200, user: req.user })
})
router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/reset/password', authController.resetPassword)


module.exports = router