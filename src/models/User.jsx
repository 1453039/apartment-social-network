const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  apartment: Schema.Types.ObjectId,
	password: String,
	name: String,
	birthday: Date,
	sex: {type: String, enum: ['Male', 'Female']},
	room: String,
	isAdmin: Boolean
});

module.exports = mongoose.model('User', UserSchema);