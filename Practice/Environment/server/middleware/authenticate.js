const jwt = require("jsonwebtoken");
const UserDatabase = require("../model/userSchema");

const autheticate = async (req, res, next) => {
  try {
    const token = req.cookies.Jwtoken;
    const varifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await UserDatabase.findOne({
      _id: varifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unarhorized: No token provided");
    console.log(err);
  }
};

module.exports = autheticate;
