const express = require("express");
const Category = require("../models/Product");
const Product = require("../models/Category");
const CategoryRoute = express.Router();

CategoryRoute.delete("/Categories:id", async (req, res) => {
  try {
    await Product.find({ category: req.params.id }).remove();
    await Category.findOneAndDelete({ _id: req.params.id });

    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = CategoryRoute;
