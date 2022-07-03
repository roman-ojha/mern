const bcrypt = require("bcryptjs");
const express = require("express");
const UserData = require("../model/userSchema");
const router = express.Router();
const authenticate = require("../Middleware/authenticate");

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
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("Jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
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

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

// get user data for contact and home page at the front end
router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

// contact us page
// here we have to use 'router.post()' because we are posting the data
router.post("/contact", authenticate, async (req, res) => {
  try {
    // we can get the data from req.body because in the front end we send the data
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      // if the req.body data is empty then this condition will run
      console.log("Error is contact form");
      return res.json({ error: "Plzz filled the contact form" });
    }
    // now we also have to autheticate that does user even exist in the data base if exist only at that time message will be store in the database
    const userContact = await UserData.findOne({ _id: req.userID });
    // here we are getting the id from the 'authenticate' module
    // now on the 'userSchema.js' we will going to add the data and message field
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "User contact successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
