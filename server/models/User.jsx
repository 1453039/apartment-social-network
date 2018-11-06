const mongoose = require('mongoose');
var Schema = mongoose.Schema;
import apartments from './Apartment'

const UserSchema = new Schema({
  email: String,
  apartment: {type: Schema.Types.ObjectId, ref: apartments},
	pass: String,
	name: String,
	birthday: Date,
	sex: String,
	room: String,
	isAdmin: Boolean
});

module.exports = mongoose.model('users', UserSchema);