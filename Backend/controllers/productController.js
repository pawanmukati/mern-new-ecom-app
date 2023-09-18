const Product = require("../models/productModel");

// create product
exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
    // Handle any errors that occur during product creation
    next(error);
  }
};

exports.getAllProduct = (req, res) => {
  res.status(200).json({ message: "route is working fine" });
};
