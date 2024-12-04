const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  vehicleDetails: String,
  currentLocation: { type: { type: String, default: 'Point' }, coordinates: [Number] },
  isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model('Driver', driverSchema);
