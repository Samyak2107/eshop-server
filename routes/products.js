const express = require("express");
const router = express.Router();
const { check, validationResult, body } = require("express-validator");

/* Controllers */
const productsController = require("../controllers/products");

router.post("/add", (req, res) => {
  productsController.handleNewProduct(req, res);
});

router.get("/display", (req, res) => {
  productsController.handleGetAllProducts(req, res);
});

router.post("/modify", (req, res) => {
  productsController.handleModifyProduct(req, res);
});

router.post("/delete-product", (req, res) => {
  productsController.handleDeleteProduct(req, res);
});

router.get("/get-categories", (req, res) => {
  productsController.getExistingCategories(req, res);
});

module.exports = router;
