const mongoose = require('mongoose');
var Schema = mongoose.Schema;
import apartments from './Apartment';
import users from './User';

const ReportSchema = new Schema({
  apartment: {type: Schema.Types.ObjectId, ref: apartments},
	author: {type: Schema.Types.ObjectId, ref: users},
  detail: String,
	date: String
});

module.exports = mongoose.model('Report', ReportSchema);