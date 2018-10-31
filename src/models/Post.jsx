const mongoose = require('mongoose');
import Apartment from './Apartment'
import User from './User'

const PostSchema = new mongoose.Schema({
	apartment: {type: Schema.Types.ObjectID, ref: Apartment},
  author: {type: Schema.Types.ObjectID, ref: User},
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

module.exports = mongoose.model('Post', PostSchema);