const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded());

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/contact", require("./routes/contactRoutes"));

app.use("/api/driverform", require("./routes/driverRoutes"))

app.listen(process.env.PORT, () => {
  console.log("Server running at port", process.env.PORT);
});
