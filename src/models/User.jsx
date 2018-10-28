const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	birthday: Date,
	sex: {type: String, enum: ['Male', 'Female']},
	room: String,
	position: {type: String, enum:['Resident', 'Admin']}
});

module.exports = mongoose.model('User', UserSchema);