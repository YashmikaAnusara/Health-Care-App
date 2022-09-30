const express = require("express");
const mogoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();

//port Number Assign
const port = process.env.port || 8010;

app.use(cors());
app.use(bodyParser.json());

//Database Connection URL
const URL = process.env.DB_URL;

mogoose.connect(URL, {
  useUnifiedTopology: true,
});

//Check the database connection
const connection = mogoose.connection;
connection.once("open", () => {
  console.log("Database is connected successfully!");
});

app.use("/details", require("./Routes/apiRoutes"));

//Display the working port
app.listen(port, () => {
  console.log(`This Server is running in this ${port} port`);
});
