const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// we need the bcrypt to encrypt and decrypt the data

// making a schema for the user data
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

// we are hashing the document
userSchema.pre("save", async function (next) {
  // 'save' for, we want call this pre method before 'save()' function will execute
  console.log("hi from inside");
  if (this.isModified("password")) {
    // here we just want to hash the pasword so, we just want when it is modified
    this.password = await bcrypt.hash(this.password, 12);
    // here we are hashing the 'this.password'
    // 12 define the no. of prunes
    // and again we are storing the hashing password in 'this.password'
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
  // now after writing next(); save method will call
});

// now connecting Schema to the collection
const UserData = mongoose.model("USERDATA", userSchema);

// so here we will going to need the model of the schema so we are exporting it
module.exports = UserData;
