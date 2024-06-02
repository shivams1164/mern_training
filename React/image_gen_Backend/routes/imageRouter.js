const express = require("express");
const imageRouter = express.Router();
const { generateImage } = require("../controllers/imageController");

imageRouter.route('/')
    .post(generateImage)

module.exports = imageRouter;   