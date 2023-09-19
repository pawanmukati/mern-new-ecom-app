const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/products/new").post(createProduct); // Updated route path
router.route("/products/:id").put(updateProduct).delete(deleteProduct); // Updated route path

module.exports = router;
