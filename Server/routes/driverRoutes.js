const express = require("express");
const router = express.Router();

const {
  registerDriver,
  getAllDrivers,
  editDriver,
  deleteDriver,
} = require("../App/controllers/driverController.js");

router.post("/register", registerDriver);

router.get("/all", getAllDrivers);

router.get("/update/:id", editDriver);

router.get("/delete/:id", deleteDriver);

module.exports = router;
