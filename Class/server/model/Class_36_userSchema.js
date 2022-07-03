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
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
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
      message: {
        type: String,
        require: true,
      },
    },
  ],
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

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

// Storing the message
// so in the 'auth.js' we have to function 'addMessage' which is taking the data form the client so we just have to take that data and store that data into the database
userSchema.methods.addMessage = async function (
  namevalue,
  email,
  phone,
  message
) {
  try {
    this.messages = this.messages.concat({
      // here we are contaticating all the data that user send to the server
      name: namevalue,
      email,
      // if key and value are same then we don't have to write two times
      phone,
      message,
    });
    // now we have to save the data to the database
    await this.save();
    return this.messages;
  } catch (err) {
    console.log(err);
  }
};
const UserData = mongoose.model("USERDATA", userSchema);

module.exports = UserData;
