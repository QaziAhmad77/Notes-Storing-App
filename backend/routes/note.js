const express = require('express');
const router = express.Router();

const controller = require('../controllers/notes');
const authenticateuser = require('../middleware/authentication');

router.post('/createNote', authenticateuser, controller.createNote);
router.put('/updatenote/:id', authenticateuser, controller.updatenote);
router.get('/getallnotes', authenticateuser, controller.getAllNotes);
router.delete('/deleteAll', controller.deleteAllUsers);
router.delete('/deletenote/:noteId', authenticateuser, controller.deletenote);

module.exports = router;
