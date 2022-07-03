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
      // and if the password and the conform password don't match at that time also we have to through an error
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
      // hashing the password data
      /*
        -> models have 'pre' and 'post' function that take two parameters:
          1) type of event('int','validate','save','remove')
          2) A callback that is exeuted with 'this' refrencing the model instance
      */
      // to do hashing we are hashing in 'userSchema.js' file

      const userRegister = await userdata.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// now we are making router for login
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the form to login" });
    }
    const userLogin = await UserData.findOne({ email: email });
    if (!userLogin) {
      res.status(400).json({ error: "error login! User does't exist" });
    } else {
      res.json({ message: "Login sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
