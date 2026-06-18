const express=require("express");
const router=express.Router();

const {signup, login, manageUsers, deleteUser} = require("../App/controllers/authController");
const authMiddleware = require("../App/middleware/authMiddleware");
const adminMiddleware = require("../App/middleware/adminMiddleware");

router.post("/signup", signup);

router.post("/login", login);

router.get("/admin/manageUsers", authMiddleware, adminMiddleware, manageUsers);

router.delete("/admin/user/:id", authMiddleware, adminMiddleware, deleteUser);

module.exports = router;