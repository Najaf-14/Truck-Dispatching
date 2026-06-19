const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { fullName, email, phoneNo, subject, message } = req.body;

    if (!fullName || !email || !phoneNo || !subject || !message) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const newMessage = await Contact.create({
      fullName,
      email,
      phoneNo,
      subject,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const message = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: message.length,
      message,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await Contact.findById(id);
    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }
    await Contact.findByIdAndDelete(id);

    res.status(200).json({
      message: "Message deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createContact, getAllMessages, deleteMessage };
