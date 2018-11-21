const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')
import apartments from './Apartment';

const UserSchema = new Schema({
  email: String,
	apartment: {type: Schema.Types.ObjectId, ref: apartments},
	password: String,
	name: String,
	birthday: Date,
	sex: String,
  avatar: String,
  cover: String,
	flat: String,
	status: {type: Boolean, default: false},
	isAdmin: {type: Boolean, default: false},
});

UserSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', UserSchema);