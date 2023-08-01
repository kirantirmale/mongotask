const mongoose = require('mongoose');

const products = new mongoose.Schema({
  productname: { type: String, required: true },
  size: { type: Number,String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('products', products);