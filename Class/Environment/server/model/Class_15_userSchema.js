const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
  // now here we have to add another field that is tokens
  // we need an array of an object because we have to generate a token every single time when user will loged in
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// here we are generating token
// NOTE: this keyword doesn't work with fat arrow function
userSchema.methods.generateAuthToken = async function () {
  try {
    // jwt.sign(payload,secretOrPrivateKey,[option,callback])
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    // here '_id' refer as the user database _id and 'this._id' refer as the id that user is login with username and the password
    // and when we will get the id then we can easily know about which email belong to that id and after that we can generate the token for the user
    // and in SECRET_KEY we know that 'SECRET_KEY' is the private data so we have to put that value(data) in the 'config.env', AND SECRET_KEY must be atleat 32 charcter to make it strong
    // Now we can get the SECRET_KEY by "process.env.SECRET_KEY"
    // now we have to add the token that is generate to the field of the user
    this.tokens = this.tokens.concat({ token: token });
    //{<Schema token>:<generated token>}
    // here now we are concatinating all the token that will generate when the user will log in evey time
    // now we have to save the token in the database for that user
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const UserData = mongoose.model("USERDATA", userSchema);

module.exports = UserData;
