/*
    -> while login by the user it must follow:
    1) No Empty Fields
    2) Email Must be registered already(invalid details error)
    3) password should be matched
*/
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "../../config.env" });
const PORT = process.env.PORT;

require("../../db/conn");
const UserData = require("../../model/userSchema");

app.use(express.json());

app.use(require("../../router/auth"));

const middleware = (req, res, next) => {
  console.log("Middelware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world from app.js");
});
app.get("/about", middleware, (req, res) => {
  res.send("Hello i am from about page from app.js");
});
app.get("/contact", (req, res) => {
  res.send("Hello i am from contact page from app.js");
});
app.get("/signin", (req, res) => {
  res.send("Hello i am from signin page from app.js");
});
app.get("/signup", (req, res) => {
  res.send("Hello i am from signup page from app.js");
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
