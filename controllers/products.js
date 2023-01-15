const Product = require("../models/product");

const handleNewProduct = async (req, res, next) => {
  const {
    itemId,
    itemName,
    itemPrice,
    itemDesc,
    itemImageUrl,
    itemCategory,
    availableQuantity,
    itemManufacturer,
  } = req.body;
  if (
    !itemId ||
    !itemName ||
    !itemPrice ||
    !itemDesc ||
    !itemImageUrl ||
    !itemCategory ||
    !availableQuantity ||
    !itemManufacturer
  ) {
    res.status(400).json({ message: "Please provide all fields!" });
  } else {
    try {
      const newProduct = new Product({
        itemId: itemId,
        itemName: itemName,
        itemPrice: itemPrice,
        itemDesc: itemDesc,
        itemImageUrl: itemImageUrl,
        itemCategory: itemCategory,
        availableQuantity: availableQuantity,
        itemManufacturer: itemManufacturer,
      });
      const savedProduct = await newProduct.save();
      res.status(201).json({
        error: false,
        data: savedProduct,
        message: "Product created",
      });
    } catch {
      res.status(500).json({ message: err.message });
    }
  }
};

const handleGetAllProducts = async (req, res, next) => {
  try {
    const product = await Product.find();
    if (!product) {
      res.status(400).json({ error: true, message: "No products in the db!" });
    } else {
      res.status(201).json({
        error: false,
        data: product,
        message: "Here is the list of all products in the db!",
      });
    }
  } catch {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  handleNewProduct,
  handleGetAllProducts,
};
