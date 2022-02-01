/*
    -> this is most important to secure you project so that other can't be able to use you project
    -> now we need a package called 'dotenv'
    -> install it by:
        npm i dotenv
    -> now you have to create a file called 'config.env'
    -> now you have to go to 'config.env' file then write,
    -> DATABASE=mongodb+srv://Roman_Ojha01:<yourpassword>@cluster0.lcsww.mongodb.net/MernProjectTutorial?retryWrites=true&w=majority
    -> so, now in a password just type anything 
    -> now add 'config.env' inside the '.gitignore' file

*/

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// now i just have to include the path of the config
dotenv.config({ path: "../../config.env" });

// so, to make the port number secure
const PORT = process.env.PORT;

// so here in previous class we have mongose.connect but in this case now we need that part of the code in all the file that we are going to make in the future so we will going to make a file and put the whole code inside that file
// and here we are requiring the file
// now you also have to add the ip address of the project in whitelist for that you can allow the database from anywhere
require("../../db/conn");

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
