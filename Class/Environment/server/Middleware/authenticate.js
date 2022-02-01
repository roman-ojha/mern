const express = require("express");
const jwt = require("jsonwebtoken");
const UserData = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    // here we are getting the toke that had been store in the cookies and we are trying to authenticate the user
    const token = req.cookies.Jwtoken;
    // to use cookies you have to install cookie-parser by :
    // npm i cookie-parser
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    // now here we are verifying the token using 'verify()'
    const rootUser = await UserData.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    // now here we are checking the token inside the database that did that toke is same or not
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    // in here we are getting all the data of the user from the server
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized: No token provided");
    console.log(err);
  }
};

module.exports = authenticate;
