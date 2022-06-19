const Wishlist = require("../models/wishlistmodel");
const express = require("express");

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {

        let wishlist = await Wishlist.find({ user_id: req.params.id }).populate('product_id').lean().exec();


        return res.send(wishlist)

    }
    catch (err) {
        return res.send({ err: err.message })
    }
})




router.delete("/:id", async (req, res) => {
    try {

        let wishlist = await Wishlist.findByIdAndDelete(req.params.id).lean().exec();
        console.log(wishlist)


        return res.send(wishlist)

    }
    catch (err) {   
        return res.send({ err: err.message })
    }
})


router.post("", async (req, res) => {
    try {

        let wishlist = await Wishlist.create(req.body);
        return res.send(wishlist)

    }
    catch (err) {
        return res.send({ err: err.message })
    }
})


module.exports = router;
