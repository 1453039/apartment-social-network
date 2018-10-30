const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: String,
  is_admin: Boolean,
	description: String,
	publish_time: {type: Date, default: Date.now},
	num_like: {type: Number, default: 0 },
	num_dislike: {type: Number, default: 0},
	link_img: String,
	link_vid: String
});

module.exports = mongoose.model('Post', PostSchema);