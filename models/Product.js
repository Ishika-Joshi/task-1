const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  purchase_price: {
    type: Number,
    required: false
  },
  landing_cost: {
    type: Number,
    required: false
  },
  mrp: {
    type: Number,
    required: true
  },
  retail_discount: {
    type: Number,
    required: false
  },
  retail_price: {
    type: Number,
    required: false
  },
  retail_margin: {
    type: Number,
    required: false
  },
  wholesaler_discount: {
    type: Number,
    required: false
  },
  wholesaler_price: {
    type: Number,
    required: false
  },
  wholesale_margin: {
    type: Number,
    required: false
  },
  minimum_stock: {
    type: Number,
    required: false
  },
  maximum_stock: {
    type: Number,
    required: false
  },
  opening_qty: {
    type: Number,
    required: false
  }
});

const productSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: false
  },
  subbrand: {
    type: String,
    required: false
  },
  uom: {
    type: String,
    required: false
  },
  gstrate: {
    type: Number,
    required: false
  },
  purchase_tax_included: {
    type: Boolean,
    required: false
  },
  sales_tax_included: {
    type: Boolean,
    required: false
  },
  cess: {
    type: Boolean,
    required: false
  },
  batch_no: {
    type: Number,
    required: false
  },
  expiry_date: {
    type: Date,
    required: false
  },
  manufacturer: {
    type: String,
    required: false
  },
  ingredients: {
    type: String,
    required: false
  },
  features: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  net_weight: {
    type: Number,
    required: false
  },
  purchase_price: {
    type: Number,
    required: false
  },
  landing_cost: {
    type: Number,
    required: false
  },
  mrp: {
    type: Number,
    required: true
  },
  retail_discount: {
    type: Number,
    required: false
  },
  retail_price: {
    type: Number,
    required: false
  },
  retail_margin: {
    type: Number,
    required: false
  },
  wholesaler_discount: {
    type: Number,
    required: false
  },
  wholesaler_price: {
    type: Number,
    required: false
  },
  wholesale_margin: {
    type: Number,
    required: false
  },
  minimum_stock: {
    type: Number,
    required: false
  },
  maximum_stock: {
    type: Number,
    required: false
  },
  particular: {
    type: String,
    required: false
  },
  quantity: {
    type: Number,
    required: false
  },
  rate: {
    type: Number,
    required: false
  },
  units: {
    type: Number,
    required: false
  },
  amount: {
    type: Number,
    required: false
  },
  variants: [variantSchema]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
