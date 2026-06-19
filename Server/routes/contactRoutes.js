const express = require("express");
const router = express.Router();

const {
  createContact,
  getAllMessages,
  deleteMessage,
} = require("../App/controllers/contactController");

router.post("/", createContact);

router.get("/admin/message", getAllMessages);

router.delete("/admin/message/:id", deleteMessage);

module.exports = router;
