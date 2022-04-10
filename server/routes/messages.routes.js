const express = require("express");
const router = express.Router();

const db = require("../database/export");
const Messages = db.message;
const adminMessage = db.adminMessage

const authenticateToken = require("../middleware/token/authenticateToken");
const messagesController = require("../controllers/messages/export.controller");
const adminMessagesController = require("../controllers/adminMessages/export.controler");


router.get("/", async (req, res) => {
  const messages = await Messages.find();
  res.status(200).send({ status: 200, messages });
})
router.get("/author/:author", async (req, res) => {
  const messages = await Messages.find({ author: req.params.author })
  res.status(200).send({ status: 200, messages })
})
router.post("/", /* authenticateToken, */ messagesController.create)
router.delete("/:id", authenticateToken, messagesController.delete)
router.get("/sse", messagesController.sse)


router.get('/admin', async(req, res) => {
  const messages = await adminMessage.find()
  res.status(200).send({ status: 200, messages })
})
router.post('/admin', authenticateToken, adminMessagesController.create)
router.delete('/admin/:id', adminMessagesController.delete)
router.patch('/admin/:id', adminMessagesController.patch)


module.exports = router;
