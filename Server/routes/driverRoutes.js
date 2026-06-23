const express = require("express");
const router = express.Router();

const { registerDriver } = require("../App/controllers/driverController.js");

router.post("/register", registerDriver);

module.exports = router;
