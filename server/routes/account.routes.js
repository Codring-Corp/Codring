const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/token/authenticateToken");

const db = require("../database/export");
const Accounts = db.accounts;

const accountController = require("../controllers/accounts/export.controller");

router.get("/", async (req, res) => {
  // Return all acounts
  const accounts =
    await Accounts.find(); /* .then(accounts => { return accounts }) */
  res.status(200).send({ status: 200, accounts });
});
router.get("/:username", async (req, res) => {
  const account = await Accounts.find({ username: req.params.username });
  res.status(200).send({
    status: 200,
    account,
  });
});
router.patch("/", authenticateToken, accountController.patch);
router.delete("/:id", authenticateToken, accountController.delete);

module.exports = router;
