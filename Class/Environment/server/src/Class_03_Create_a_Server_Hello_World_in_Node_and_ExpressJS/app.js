// first install express in the root path by
// npm i express

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
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
