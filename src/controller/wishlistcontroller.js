const Wishlist = require("../models/wishlistmodel");
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
    try {

        let wishlist = await Wishlist.find({}).lean().exec();
        return res.send(wishlist)

    }
    catch {

    }
})

router.get("/:id", async (req, res) => {
    try {

        let wishlist = await Wishlist.find(req.params.id).lean().exec();
        return res.send(wishlist)

    }
    catch {

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
