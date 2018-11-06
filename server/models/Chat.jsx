const mongoose = require('mongoose');
var Schema = mongoose.Schema;
import users from './User';

const ChatSchema = new Schema({
	from: {type: Schema.Types.ObjectId, ref: users},
	to: {type: Schema.Types.ObjectId, ref: users},
	detail: String,
	time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('chats', ChatSchema);