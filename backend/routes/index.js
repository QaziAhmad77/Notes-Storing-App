const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const authRouter = require('./auth');
const noteRouter = require('./note');

router.use('/auth', authRouter);
router.use('/notes', noteRouter);

module.exports = router;
