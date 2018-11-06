const mongoose = require('mongoose');
var Schema = mongoose.Schema;
import apartments from './Apartment'
import users from './User'

const PostSchema = new Schema({
	apartment: {type: Schema.Types.ObjectID, ref: apartments},
  author: {type: Schema.Types.ObjectID, ref: users},
	isAdmin: Boolean,
	time: {type: Date, default: Date.now},
	description: String,
	numLike: {type: Number, default: 0 },
	numDislike: {type: Number, default: 0},
	linkImg: String,
	linkVideo: String,
	type: {type: String, enum: ['Post', 'Event', 'Trading']},
	attendent: {type: Number, default: 0}
});

module.exports = mongoose.model('posts', PostSchema);