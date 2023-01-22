const Users = require("../models/User");
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      throw { status: 500, message: "Token must be require" };
    }
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).send(err.message || "Something went wrong");
  }
};
