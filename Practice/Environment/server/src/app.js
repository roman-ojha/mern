const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
dotenv.config({ path: "../config.env" });
const PORT = process.env.PORT;
require("../db/conn");
const UserDataBase = require("../model/userSchema");
app.use(express.json());
app.use(require("../router/auth"));
app.listen(PORT, () => {
  console.log("running server");
});
