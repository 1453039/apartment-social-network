const mongoose = require('mongoose');
import Apartment from './Apartment';
import User from './User';

const PaymentSchema = new mongoose.Schema({
  resident: {type: Schema.Types.ObjectId, ref: User},
  apartment: {type: Schema.Types.ObjectId, ref: Apartment},
  electricVolume: Decimal,
  waterVolume: Decimal,
  parkingFee: Number,
  serviceFee: Number,
  total: Decimal,
	Date: {type: Date, default: Date.now},
	isPaid: Boolean
});

module.exports = mongoose.model('Payment', PaymentSchema);