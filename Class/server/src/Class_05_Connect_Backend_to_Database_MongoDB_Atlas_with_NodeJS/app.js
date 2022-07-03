/*
    My mongodb Project name for the tutorial:
        Project name: MERN Tutorial Project
        DatabaseUser:
                username: process.env.USERNAME
                password:process.env.PASSWORD
    -> now Add IP Address to your Access List
*/

// now install mongoose in the project by:
// npm i mongoose

const mongoose = require("mongoose");
const express = require("express");
const app = express();
dotenv.config({ path: "../../config.env" });
/*
    now here you have to put the exact user password and collection name like:
        mongodb+srv://<username>:<password>@cluster0.lcsww.mongodb.net/<Collection_Name>?retryWrites=true&w=majority
*/
const DB = process.env.DATABASE;

// connection mongodb:
// it will return promise so we have to use then() and catch()
mongoose
  .connect(DB, {
    // to get through deprecation warning you have to write this:
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

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

app.listen(8080, () => {
  console.log("Successfull");
});
