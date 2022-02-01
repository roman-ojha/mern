const express = require("express");
const UserDatabase = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const router = express.Router();
require("../db/conn");
const authenticate = require("../middleware/authenticate");

router.post("/register", async (req, res) => {
  const { name, email, phone, address, password, cpassword } = req.body;
  if (!name || !email || !phone || !address || !password || !cpassword) {
    return res.status(422).json({ error: "Please filled the field properly" });
  } else {
    console.log(req.body);
  }
  try {
    const userExist = await UserDatabase.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email alread exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Passwrod are not matching" });
    } else {
      const userData = new UserDatabase({
        name,
        email,
        phone,
        address,
        password,
        cpassword,
      });
      const userRegister = userData.save();
      res.status(201).json({ message: "user register successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  let token;
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the form to login" });
    }
    const userLogin = await UserDatabase.findOne({ email: email });
    if (!userLogin) {
      res.status(400).json({ error: "User and password doesn't exist" });
    } else {
      const isPasswrodMatch = await bcrypt.compare(
        password,
        userLogin.password
      );
      token = await userLogin.generateAuthToken();
      res.cookie("Jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      console.log(token);
      if (!isPasswrodMatch) {
        res.status(400).json({ error: "User and password doesn't exist" });
      } else {
        res.json({ message: "login successfully" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  console.log("Passing middelware");
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.json({ error: "Please filled the contact form" });
    }
    const userContact = await UserDatabase.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
    }
    await userContact.save();
    res.status(201).json({ message: "Message send Successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", authenticate, (req, res) => {
  res.clearCookie("Jwtoken", { path: "/" });
  res.status(200).json({ message: "User Logout" });
});

module.exports = router;
