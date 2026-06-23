const mongoose = require("mongoose");

const driverSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    truckType: {
      type: String,
      required: true,
    },
    truckYear: {
      type: String,
      required: true,
    },
    licensePlate: {
      type: String,
      required: true,
    },
    mcNo: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    route: [String],
    homeTerminal: {
      type: String,
      required: true,
    },
    info: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Driver", driverSchema);