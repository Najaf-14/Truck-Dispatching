const Driver = require("../models/Driver");

const registerDriver = async (req, res) => {
  console.log("Body : ", req.body);
  try {
    const {
      fullName,
      email,
      phoneNo,
      truckType,
      truckYear,
      licensePlate,
      mcNo,
      experience,
      route,
      homeTerminal,
      info,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phoneNo ||
      !truckType ||
      !truckYear ||
      !licensePlate ||
      !mcNo ||
      !experience ||
      !route ||
      !homeTerminal ||
      !info
    ) {
      return res.status(400).json({
        success: false,
        message: "All field required",
      });
    }

    const existing = await Driver.findOne({ email });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const driver = await Driver.create({
      fullName,
      email,
      phoneNo,
      truckType,
      truckYear,
      licensePlate,
      mcNo,
      experience,
      route,
      homeTerminal,
      info,
    });

    res.status(201).json({
      success: true,
      message: "Driver created successfully",
      driver,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find().sort({createdAt: -1})

    if(!drivers){
      res.status(404).json({
        success: false,
        message: "Drivers not found"
      })
    }
    res.status(200).json({
      success: true,
      message: "All Drivers",
      drivers
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = { registerDriver, getAllDrivers };
