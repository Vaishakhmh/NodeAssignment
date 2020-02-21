const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timeStamps: true }
);

CategorySchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "category"
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
