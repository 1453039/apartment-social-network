const mongoose = require('mongoose');
import Apartment from './Apartment'

const UserSchema = new mongoose.Schema({
  email: String,
  apartment: {type: Schema.Types.ObjectId, ref: Apartment},
	pass: String,
	name: String,
	DOB: Date,
	sex: {type: String, enum: ['Male', 'Female']},
	room: String,
	isAdmin: Boolean
});

module.exports = mongoose.model('User', UserSchema);