const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
  name: String,
	address: String
});

module.exports = mongoose.model('apartments', ApartmentSchema);