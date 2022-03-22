const jwt = require('jsonwebtoken')
require('dotenv').config()
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

module.exports = user => {
  // Generate a Json Web Token for a specific user
  return jwt.sign(user.toJSON(), ACCESS_TOKEN_SECRET)
}