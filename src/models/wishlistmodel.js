const mongoose = require("mongoose");
const wishlistschema = new mongoose.Schema({


    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, },
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
})

const Wishlist = mongoose.model("wishlist", wishlistschema);

module.exports = Wishlist
