const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  pickupLocation: { type: { type: String, default: 'Point' }, coordinates: [Number] },
  dropLocation: { type: { type: String, default: 'Point' }, coordinates: [Number] },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ride', rideSchema);
