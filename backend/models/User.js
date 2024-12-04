const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  location: { type: { type: String, default: 'Point' }, coordinates: [Number] },
});

module.exports = mongoose.model('User', userSchema);
