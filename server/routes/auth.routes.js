const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const db = require('../database/export')
const Accounts = db.accounts

router.get('/', (req, res) => {
    res.status(200).send('hi auth')
})
router.post('/login', async(req, res) => {
    // Login
    const data = JSON.parse(req.body)
    const email = data.email
    const password = data.password

    // Check if the email exists
    if (!await isEmailExists(email)) res.status(410).send({ code: 410, message: 'Email rattaché à aucun compte' })
    // Check if the password is correct
    else if (!await isPasswordCorrect(email, password)) res.status(411).send({ code: 411, message: 'Mot de passe incorrect' })
    
    else res.status(200).send({ code: 200, message: 'Connexion réussie' })
})
router.post('/register', async(req, res) => {
    // Register
    const data = JSON.parse(req.body)
    const email = data.email
    const username = data.username
    const password = data.password
    
    // Check if email already exists
    if (await isEmailExists(email)) res.status(410).send({ code: 410, message: 'Email déjà rattaché à un compte' })
    // Check if username already exists
    else if (await isUsernameExists(username)) res.status(411).send({ code: 411, message: 'Nom d\'utilisateur déjà prit' })
    
    else {
        // Create a new user
        const newUser = new Accounts({
            username,
            email,
            password: bcrypt.hashSync(password, 10),
            isAdmin: data.isAdmin ? true : false,
            lastConnection: new Date(),
            userPoints: 0
        })
        // Save user in the DB
        await newUser.save()
            .then(() => res.status(200).send({ code: 200, message: 'Inscription réussie' }))
            .catch((error) => res.status(400).send({ code: 400, message: error }))
    }
})







async function isEmailExists(email) {
    // Check if the given email exists or not
    const user = await Accounts.findOne({ email }).then(res => { return res })
    
    if (user) return true
    else return false
}
async function isPasswordCorrect(email, password) {
    // Check if the given password is correct or not
    const user = await Accounts.findOne({ email }).then(user => { return user })
    
    return bcrypt.compare(password, user.password)
}
async function isUsernameExists(username) {
    // Check if the given username already exists or not
    const user = await Accounts.findOne({ username }).then(res => { return res })
    
    if (user) return true
    else return false
}

module.exports = router