const express = require('express')

const userController = require('../controllers_/userController.js')

const userRoute = express.Router();


userRoute.route('/')
    .get(userController.getUser)
    .post(userController.addUser)

module.exports= userRoute;