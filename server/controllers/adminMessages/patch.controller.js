const db = require('../../database/export')
const adminMessage = db.adminMessage


module.exports = async(req, res) => {
  // Update an admin message
  const message = req.body.message
  const id = req.params.id

  const newMesage = await adminMessage.findByIdAndUpdate(id, { body: message } )
  newMesage.save(() => res.status(200).send({ status: 200, msg: 'Admin message updated' }))
}