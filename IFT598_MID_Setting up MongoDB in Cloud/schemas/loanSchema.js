const mongoose = require('mongoose');
const { Schema } = mongoose;

const loanSchema = new Schema({
  customerName: String,
  phoneNumber: String,
  address: String,
  loanAmount: Number,
  interest: Number,
  loanTermYears: Number,
  loanType: String,
  description: String,
  createdDate: { type: Date, default: Date.now },
  insertedDate: { type: Date, default: Date.now },
});
const Blog = mongoose.model('Loan', loanSchema);
