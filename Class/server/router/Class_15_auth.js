const bcrypt = require("bcryptjs");
const express = require("express");
const UserData = require("../model/userSchema");
const router = express.Router();

require("../db/conn");

router.get("/", (req, res) => {
  res.send("Hello world from router.js");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the field property" });
  }
  try {
    const userExist = await UserData.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email alread Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password are not matching" });
    } else {
      const userdata = new UserData({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      const userRegister = await userdata.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the form to login" });
    }
    const userLogin = await UserData.findOne({ email: email });

    if (!userLogin) {
      res.status(400).json({ error: "Username and password doesn't match" });
    } else {
      const isPasswordMatch = await bcrypt.compare(
        password,
        userLogin.password
      );
      // here now we are calling 'generateAuthToke()'and here this will also return promise so, we will use asyn and await
      // we will generate the token in the 'userSchema.js' file
      token = await userLogin.generateAuthToken();
      // and the returning value will come inside the 'token'
      console.log(token);

      if (!isPasswordMatch) {
        res.status(400).json({ error: "Username and password doesn't match" });
      } else {
        res.json({ message: "Login sucessfully" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/about", (req, res) => {});

module.exports = router;
