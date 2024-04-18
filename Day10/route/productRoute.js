const express = require('express')
const ProductController = require('../controllers_/productsControllers.js');

const productRouter = express.Router();

productRouter.route('/')
    .get(ProductController.getAllProducts)
    .post(ProductController.addProduct);

module.exports = productRouter;