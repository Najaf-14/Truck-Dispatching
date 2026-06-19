const express = require("express");
const router = express.Router();

const {
  createContact,
  getAllMessages,
  deleteMessage,
} = require("../App/controllers/contactController");
const authMiddleware = require("../App/middleware/authMiddleware");
const adminMiddleware = require("../App/middleware/adminMiddleware");

router.post("/", createContact);

router.get("/admin/messages", getAllMessages);

router.delete(
  "/admin/message/:id",
  authMiddleware,
  adminMiddleware,
  deleteMessage,
);

module.exports = router;
