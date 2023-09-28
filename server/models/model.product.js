const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  price: Number,
  quantity: Number
});

module.exports.ProductSchema = ProductSchema