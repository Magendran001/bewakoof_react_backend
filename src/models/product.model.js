const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {

    all_offer_price: { type: Number, required: true },
    average_rating: { type: Number, required: true },

    brand: { type: String },
    cat_designer: { type: String },
    category: { type: String, required: true },
    category_info: {
      gender: { type: String, required: true },
      subclass: { type: String, required: true },
      id: { type: Number, required: true },
      name: { type: String, required: true },
      url: { type: String, required: false },
      gender: { type: String, required: true },

    },
    child_category: {
      gender: { type: String, required: true },
      subclass: { type: String, required: true },
      id: { type: Number, required: true },
      name: { type: String, required: true },
      url: { type: String, required: false },
      gender: { type: String, required: true },

    },

    color: [{ type: String, required: true }],
    custom_name: { type: String, required: true },
    discount: { type: String, required: true },
    display_image: { type: String, required: true },
    designer: { type: String, required: true },
    gender: { type: String, required: true },
    manufacturer_brand: { type: String, required: true },
    member_discount: { type: String, required: true },
    member_price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    name: { type: String, required: true },
    offer: { type: String, required: true },
    offer_type: { type: String, required: true },
    price: { type: Number, required: true },
    product_discount: { type: String, required: true },
    product_sizes: [{
      id: { type: Number, required: true },
      name: { type: String, required: true },
      stock_status: { type: String, required: true },
    }],
    ptype: { type: String, required: true },
    stock_status: { type: Boolean, required: true },
    subclass: { type: String, required: true },
    tribe_text: { type: String, required: true },

    brand: { type: String, required: false },
    tribe: { type: Number, required: true },
    description: { type: String, required: true },





  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
