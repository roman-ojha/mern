/*
  -> Now you have to download Postman app from the website
    -> https://www.postman.com/downloads/
  -> now we have to make a new collection in the postman
  -> now make a new folder callde 'router'
  -> and make file inside the 'router' folder called 'auth.js'
  -> now we have to acquire the path of the 'auth.js'
*/

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "../../config.env" });
const PORT = process.env.PORT;

require("../../db/conn");
const UserData = require("../../model/userSchema");

// here while we are getting the api data we are saying that, if data 'exporess.json()' will came then just convert into the object
app.use(express.json());

// to make our app file clean we will push all the router to the 'auth.js' file
// here we linked the router file
app.use(require("../../router/auth"));

const middleware = (req, res, next) => {
  console.log("Middelware");
  next();
};

// so, here we had already require the router path and place it at the upper side
// it means rather then using this peace of code it will run the code that we require at the top of the line
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
