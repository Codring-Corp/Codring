const express = require("express");
const router = express.Router();

const db = require("../database/export");
const Messages = db.message;

const authenticateToken = require("../middleware/token/authenticateToken");
const messagesController = require("../controllers/messages/export.controller");

router.get("/", async (req, res) => {
  const messages = await Messages.find();
  res.status(200).send({ status: 200, messages });
});
router.get("/author/:author", async (req, res) => {
  const messages = await Messages.find({ author: req.params.author });
  res.status(200).send({ status: 200, messages });
});
router.post("/", /* authenticateToken, */ messagesController.create);
router.delete("/:id", authenticateToken, messagesController.delete);

router.get("/sse", async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");

  let startTime = new Date();
  checkMsgLoop(res, startTime);
});

async function checkMsgLoop(res, startTime) {
  // Get the diff number of messages between the start of the request and now
  const messages = await Messages.find({ createdAt: { $gte: startTime } });

  startTime = new Date();

  if (messages.length > 0) {
    const data = messages;
    res.write("data: " + JSON.stringify(data) + "\n\n");
  }

  setTimeout(() => {
    checkMsgLoop(res, startTime);
  }, 3000);
}

module.exports = router;
