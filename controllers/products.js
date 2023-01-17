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

const handleModifyProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ itemId: req.body.itemId });
    if (!product) {
      res.status(400).json({ message: "Product does not exist!" });
    } else {
      res.status(201).json({
        error: false,
        data: product,
        message: "Here is the product for editing.",
      });
    }
  } catch {
    res.status(500).json({ message: err.message });
  }
};

const handleDeleteProduct = async (req, res, next) => {
  const { itemId } = req.body;
  try {
    const product = await Product.findOne({ itemId: itemId });
    if (!product) {
      res.status(400).json({ message: "Product does not exist!" });
    } else {
      await Product.deleteOne({ itemId: itemId });
      res
        .status(201)
        .json({ error: false, message: "The selected product was deleted!" });
    }
  } catch {
    res.status(500).json({ message: err.message });
  }
};

const getExistingCategories = async (req, res, next) => {
  try {
    const product = await Product.distinct("itemCategory");
    if (!product) {
      res.status(400).json({ message: "No categories found!" });
    } else {
      res.status(201).json({
        error: false,
        data: product,
        message: "Here's the list of all item categories!",
      });
    }
  } catch {
    res.status(500).json({ message: err.message });
  }
};

const handleProductModificationDb = async (req, res, next) => {
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
      const product = await Product.findOne({ itemId: itemId });
      if (!product) {
        res
          .status(400)
          .json({ message: "Some error occured! Could not find the product!" });
      } else {
        const updatedProduct = {
          itemId: itemId,
          itemName: itemName,
          itemPrice: itemPrice,
          itemDesc: itemDesc,
          itemImageUrl: itemImageUrl,
          itemCategory: itemCategory,
          availableQuantity: availableQuantity,
          itemManufacturer: itemManufacturer,
        };
        const updateResponse = await product.updateOne(updatedProduct);
        res.status(201).json({
          error: false,
          data: updateResponse,
          message: "Product data updated successfully!",
        });
      }
    } catch {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = {
  handleNewProduct,
  handleGetAllProducts,
  handleModifyProduct,
  handleDeleteProduct,
  getExistingCategories,
  handleProductModificationDb,
};
