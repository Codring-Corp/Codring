const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const authenticateToken = require('../middleware/authenticateToken')

const db = require('../database/export')
const Accounts = db.accounts


router.get('/', authenticateToken, (req, res) => {
    // If the autehticateToken middle doens't return an error, return the user
    res.status(200).send({ code: 200, user: req.user })
})
router.post('/login', async(req, res) => {
    // Login
    const data = JSON.parse(req.body)
    const email = data.email
    const password = data.password
    const user = await Accounts.findOne({ email })
    
    if (!user) {
        return res.status(410).send({ code: 410, message: 'Ce mail n\'est rattaché à aucun compte' })
    }
    // Check if the given password is correct
    else if (!bcrypt.compareSync(password, user.password)) {
        return res.status(411).send({ code: 411, message: 'Mot de passe incorrect' })
    }
    else {
        // Generate an access token and send it
        const accessToken = generateAccessToken(user)
        res.status(200).send({ code: 200, accessToken })
    }
})
router.post('/register', async(req, res) => {
    // Register
    const data = JSON.parse(req.body)
    const email = data.email
    const username = data.username
    const password = bcrypt.hashSync(data.password, 10)
    
    // Check if email already exists
    if (await Accounts.findOne({ email })) res.status(410).send({ code: 410, message: 'Ce mail est déjà rattaché à un compte' })
    // Check if username already exists
    else if (await Accounts.findOne({ username })) res.status(411).send({ code: 411, message: 'Nom d\'utilisateur déjà prit' })
    
    else {
        // Create a new user
        const newUser = new Accounts({
            username,
            email,
            password,
            isAdmin: data.isAdmin ? true : false,
            lastConnection: new Date(),
            userPoints: 0
        })
        // Save user in the DB
        await newUser.save()
        .then(user => {
            // When user is saved, generate his JWT
            const accessToken = generateAccessToken(user)

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