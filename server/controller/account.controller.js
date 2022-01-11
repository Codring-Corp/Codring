const db = require('../database/export')
const Users = db.users

function getAllAccounts() {
    Users.find().then(users => {
        return users
    })
}

module.exports = {getAllAccounts}