const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  itemId: { type: String, required: true },
  itemName: { type: String, required: true },
  itemPrice: { type: String, required: true },
  itemDesc: { type: String, required: true },
  itemImageUrl: { type: String, required: true },
  itemCategory: { type: String, required: true },
  availableQuantity: { type: String, required: true },
  itemManufacturer: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
