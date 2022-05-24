const db = require('../../database/export')
const Messages = db.message

module.exports = async(req, res) => {
  // Set a server sent events to auto refresh messages list when a new message is created in DB
  res.setHeader("Content-Type", "text/event-stream");

  let startTime = new Date();
  checkMsgLoop(res, startTime);
}

async function checkMsgLoop(res, startTime) {
  // Get the diff number of messages between the start of the request and now
  const messages = await Messages.find({ createdAt: { $gte: startTime } })
  
  if (messages.length > 0) {
    const data = messages
    res.write("data: " + JSON.stringify(data) + "\n\n");
    startTime = new Date()
  }

  setTimeout(() => checkMsgLoop(res, startTime), 3000)
}