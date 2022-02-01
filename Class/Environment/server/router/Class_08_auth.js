const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world from router.js");
});

// so, we had only seen the .get but we also have the .post
// when the user put some data and you want to get that data in the server than you have to use .post method
router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
  // here this will response the data in the form of json that is comming from the client and we are posting message to the client
});
// now go to postman and create a collection and create a post request
// and after the make as headers "content-type":"application/json" and in body raw and after that just make the json file as like structure you made in schema like:
// {
//     "name":"Roman",
//     "email":"razz@roman.com",
//     "phone":9843287723,
//     "work":"web dev",
//     "password":"ojha",
//     "cpassword":"ojha"
// }

module.exports = router;
