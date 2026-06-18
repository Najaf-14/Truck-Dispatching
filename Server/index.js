const express=require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded())

connectDB();

app.use("/api/auth", require("./routes/authRoutes"))

// Testing route
app.get("/", (req, res)=>{
    res.send("API....")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server running at port", process.env.PORT)
})
