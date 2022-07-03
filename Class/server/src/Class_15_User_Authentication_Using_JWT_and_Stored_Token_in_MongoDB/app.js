/*
  -> so, now when user is successfully login then inside the website there is some important page in which only user can access so, in that case we use User Authentication 
  -> where we will provide user the unique id means JWT TOKEN through which user can autheticate an if that match only after that they can access the page
  -> in this project we are autheicating which the '/about' page 
  -> where his personal data will going to be and only his data will going to show in his about page
  -> so, now you have to download(install) jsonwebtoken from the npmjs.com
      -> npm i jsonwebtoken
  
*/

/*
# Steps:
  -> Generate JWT Token and Stored it in Database
  -> then store the token in Cookies
  -> Get token from Cookies and Verify the user
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
