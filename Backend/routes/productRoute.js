const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProduct);
router
  .route("/products/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct); // Updated route path
router
  .route("/products/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct)
  .get(getProductDetails); // Updated route path

module.exports = router;
