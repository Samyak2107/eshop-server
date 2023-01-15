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

module.exports = router;
