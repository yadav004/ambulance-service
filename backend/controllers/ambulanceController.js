const Ambulance = require("../models/Ambulance");

exports.getAmbulances = async (req, res) => {
  try {
    const ambulances = await Ambulance.find();
    res.json(ambulances);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
