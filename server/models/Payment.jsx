const mongoose = require('mongoose');
var Schema = mongoose.Schema;
import apartments from './Apartment';
import users from './User';

const PaymentSchema = new Schema({
  resident: {type: Schema.Types.ObjectId, ref: users},
  apartment: {type: Schema.Types.ObjectId, ref: apartments},
  electricVolume: Decimal,
  waterVolume: Decimal,
  parkingFee: Number,
  serviceFee: Number,
  total: Decimal,
	Date: {type: Date, default: Date.now},
	isPaid: Boolean
});

module.exports = mongoose.model('payments', PaymentSchema);