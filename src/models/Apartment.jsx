const mongoose = require('mongoose');

const ApartmentSchema = new mongoose.Schema({
  name: String,
	address: String
});

module.exports = mongoose.model('Apartment', ApartmentSchema);