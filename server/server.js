const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome!");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
