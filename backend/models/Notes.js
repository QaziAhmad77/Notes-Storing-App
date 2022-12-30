const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const noteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    defaultValue: 'General',
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('notes', noteSchema);
