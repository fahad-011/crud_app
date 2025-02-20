require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(302).json("Welcome!");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
});
