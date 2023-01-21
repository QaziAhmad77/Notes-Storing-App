const Users = require("../models/User");
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    console.log(token, "middleware");
    if (!token) {
      throw { status: 500, message: "Token must be require" };
    }
    console.log("oper");
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log("middle");
    req.user = data.user;
    console.log("Neche");
    next();
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).send(err.message || "Something went wrong");
  }
};
