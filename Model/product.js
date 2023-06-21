const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: String,
  productPrice: Number,
  productCategory: String,
  productQuantity: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("Product", productSchema);
