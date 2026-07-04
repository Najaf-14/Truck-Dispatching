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

router.put("/update/:id", editDriver);

router.delete("/delete/:id", deleteDriver);

module.exports = router;
