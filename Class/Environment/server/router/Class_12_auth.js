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
    }
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
  } catch (err) {
    console.log(err);
  }
});

// now we are making router for login
// here when the user trying to login at that time this router will work
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the form to login" });
    }
    // now we are trying to match the data that user is trying to login to the database
    const userLogin = await UserData.findOne({ email: email });
    // here 'userLogin' will return a document if email will match
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
