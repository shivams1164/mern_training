const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.route('/')
    .get(userController.geAllUser)
    .post(userController.createUser)

userRouter.route('/:id')
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = userRouter;