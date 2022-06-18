const express = require("express");
const Product = require("../models/product.model");

const router = express.Router();


// Get route

router.get("", async (req, res) => {
  try {





    const product = await Product.find({}).lean().exec();


    return res.send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/:category", async (req, res) => {
  try {







    const product = await Product.find({ category: req.params.category }).lean().exec();


    return res.send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});







// Get product by Id route

router.get("/category/:id", async (req, res) => {
  try {
    console.log("yes");
    const product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});



router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// patch route

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// delete route

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
module.exports = router;
