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
    // now here we are using await rather then promise
    // and now we are wating if the data will check then it will store that response to the 'userExist'
    const userExist = await UserData.findOne({ email: email });

    if (userExist) {
      // now if user exist then we are throwing an error
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
    // now here we are saving the data into the database and it also return the promise
    const userRegister = await userdata.save();
    // if (userRegister) {
    //   res.status(201).json({ message: "User registered successfully" });
    // } else {
    //   res.status(status(500).json({ error: "Failed registered!!!" }));
    // }

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
