const express = require("express");
const router = express.Router();

const { registerDriver, getAllDrivers } = require("../App/controllers/driverController.js");

router.post("/register", registerDriver);

router.get("/all", getAllDrivers)

module.exports = router;
