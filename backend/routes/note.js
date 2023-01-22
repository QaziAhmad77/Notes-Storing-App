const express = require("express");
const router = express.Router();

const controller = require("../controllers/notes");
const authenticateuser = require("../middleware/authentication");

router.post("/addnote", authenticateuser, controller.createNote);
router.put("/updatenote/:id", authenticateuser, controller.updatenote);
router.get("/fetchallnotes", authenticateuser, controller.getAllNotes);
router.delete("/deleteAll", controller.deleteAllNotes);
router.delete("/deletenote/:id", authenticateuser, controller.deletenote);

module.exports = router;
