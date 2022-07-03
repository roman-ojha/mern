/*
    -> now you have to create a folder called 'model'
    -> and make a file inside the 'model' folder called 'userSchema.js'
    -> and now fill all the Schema and the model that you want for the project
*/

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "../../config.env" });
const PORT = process.env.PORT;

require("../../db/conn");
// now here we re requiring the model that we created
const UserData = require("../../model/userSchema");

const middleware = (req, res, next) => {
  console.log("Middelware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/about", middleware, (req, res) => {
  res.send("Hello i am from about page");
});
app.get("/contact", (req, res) => {
  res.send("Hello i am from contact page");
});
app.get("/signin", (req, res) => {
  res.send("Hello i am from signin page");
});
app.get("/signup", (req, res) => {
  res.send("Hello i am from signup page");
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
