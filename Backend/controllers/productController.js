const Product = require("../models/productModel");

// create product Admin
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
// get all product
exports.getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};

// get product details

exports.getProductDetails = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({ success: false, message: "Product not found" });
  }
};

// update product admin
exports.updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({ success: false, message: "Product not found" });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, product });
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne({ _id: req.params.id });
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};
