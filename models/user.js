const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userType: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  addressName: { type: String, required: false },
  street: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  landmark: { type: String, required: false },
  zipCode: { type: String, required: false },
  orders: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
