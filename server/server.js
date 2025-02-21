require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(cors);

// Routes

app.get("/", (req, res) => {
  res.status(302).json("Welcome!");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
});
