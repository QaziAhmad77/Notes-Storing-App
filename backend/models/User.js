const validation = require('validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    minlength: [3, 'Too small'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validation.isEmail,
      message: '{VALUE} is not a valid email',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Too short'],
  },
  time: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('users', UserSchema);
