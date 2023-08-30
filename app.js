require('express-async-errors')
const express = require("express");
const app = express();
const router = require("./src/routers");
require("dotenv").config();
require("./src/db/dbConnection");
const port = process.env.PORT || 3001;

// Middlewars
app.use(express.json())


app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
app.use("/api", router); 



app.listen(port, () => {
  console.log(`The server is running on port ${port}.`);
});
