const Product = require("../models/productModel");

// create product
exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product: newProduct,
    });
    console.log(newProduct);
  } catch (error) {
    if (error.name === "ValidationError") {
      // Log the validation errors
      console.error("Validation Error:", error.message);
      res.status(400).json({
        success: false,
        message: "Validation error. Check your request data.",
        errors: error.errors,
      });
    } else {
      // Handle other types of errors
      next(error);
    }
  }
};

exports.getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};
