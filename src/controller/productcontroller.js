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

    console.log(req.query, "query")

    let obj = {};
    let sort = {};
    obj.category = req.params.category;

    if (req.query?.size && req.query?.size !== "null") {


      obj.product_sizes = { $elemMatch: { name: req.query.size, stock_status: true } }


    }
    if (req.query?.color && req.query?.color != "null") {

      obj.color = req.query.color;

    }

    if (req.query.sort && req.query?.sort != "null") {
      sort.price = req.query.sort;
    }
    if (req.query.rating && req.query?.rating != "null") {
      obj.average_rating = { $gte: req.query.rating }
    }
    if (req.query?.discount && req.query?.discount != "null") {
      obj.product_discount = { $gte: req.query.discount };
    }

    if (req.query.brand && req.query.brand) {
      if (req.query.brand == "bewakoof") {
        obj.manufacturer_brand = { $ne: req.query.Bewakoof }
      }

      else {
        obj.manufacturer_brand = { $ne: "Bewakoof" }
      }
    }


    console.log(obj, "obj")


    const product = await Product.find(obj).sort(sort).lean();
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
