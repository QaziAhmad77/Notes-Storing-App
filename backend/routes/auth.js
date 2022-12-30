const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth');
const authenticateuser = require('../middleware/authentication');

router.post('/signUp', controller.signUp);
router.post('/logIn', controller.logIn);
router.get('/getuser', authenticateuser, controller.getUser);
router.delete('/deleteAll', controller.deleteAllUsers);

module.exports = router;
