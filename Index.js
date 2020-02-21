const bodyParser = require("body-parser");
const CategoryRoute = require("./Routes/Category");
const express = require("express");
const mongoose = require("mongoose");
const dbURI = process.env.REACT_APP_DB_URI;

const app = express();

const port = process.env.PORT || 5000;
//connecting to DB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect to MongoDB", err));
//To parse reqBody JSON
app.use(bodyParser.json());
app.use(CategoryRoute);

//Listening to Server
app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
