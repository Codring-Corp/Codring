const resetPassword = require('./templates/resetPassword')
const register = require('./templates/register')

module.exports = {
  send: { resetPassword, register }
}