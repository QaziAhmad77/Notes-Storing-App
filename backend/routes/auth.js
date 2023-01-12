const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth");
const authenticateuser = require("../middleware/authentication");

router.post("/createuser", controller.signUp);
router.post("/login", controller.logIn);
router.get("/getuser", authenticateuser, controller.getUser);
router.delete("/deleteAll", controller.deleteAllUsers);

module.exports = router;
