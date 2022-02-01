const express = require("express");
const UserData = require("../model/userSchema");
const router = express.Router();

require("../db/conn");

router.get("/", (req, res) => {
  res.send("Hello world from router.js");
});

router.post("/register", (req, res) => {
  // here by using object distructuring we will going to get all the data from the clint
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    // now here we are checking that does user put all the data inside the form or not
    return res.status(422).json({ error: "Plz filled the field property" });
    // 422 Error: The request was well-formed but was unable to be followed due to semantic errors
  }
  // now here we are checking the email, does email from the previous data get match to the email that user is posting
  // and it return promise
  UserData.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        console.log(userExist);
        return res.status(422).json({ error: "Email alread Exist" });
      }
      // now here we are trying to post the data into the database if email doesn't exist
      const creatingUserData = new UserData({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      creatingUserData
        .save()
        .then(() => {
          // here this also return the promises
          res.status(201).json({ message: "User registered successfully" });
        })
        .catch((err) => {
          res.status(status(500).json({ error: "Failed registered!!!" }));
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
