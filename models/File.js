const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  name: String,
  type: String,
  size: Number,
})

module.exports = mongoose.model('file', FileSchema);