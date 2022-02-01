const express = require("express");
const app = express();

// Middelware
/*
    -> Middleware functions are functions that have access to the request object(req),the response object(res),and next function in the application's request-response cycle

    -> The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
*/
const middleware = (req, res, next) => {
  console.log("Middelware");
  // here if we will call next() function it means  middleware pass the test the we don't and now user ca access the data or url that user want
  // in this project that we are making we are trying to authenticate that when the user will go to '/about' page and if the user is login only at that time we want to call the next() function in this case which will going to respose to the user
  next();
};

// middleware();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", middleware, (req, res) => {
  // now here middleware will worke as the middle path to go the '/about' and request and respond
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
