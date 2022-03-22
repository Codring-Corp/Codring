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

            res.status(200).send({ code: 200, accessToken })
        })
        .catch((error) => res.status(400).send({ code: 400, message: error }))
    }
})








async function isUsernameExists(username) {
    // Check if the given username already exists or not
    const user = await Accounts.findOne({ username }).then(res => { return res })
    
    if (user) return true
    else return false
}
function generateAccessToken(user) {
    // Generate a Json Web Token for a specific user
    return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET)
}

module.exports = router