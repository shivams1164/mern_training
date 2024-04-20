const express = require('express');
const reviewController = require('../controllers/reviewController');

const reviewRouter = express.Router();

reviewRouter.route('/')
    .get(reviewController.getAllReviews)
    .post(reviewController.createReview);

reviewRouter.route('/:id')
    .get(reviewController.getOneReview)
    .patch(reviewController.updateReview)
    .delete(reviewController.deleteReview);

reviewRouter.route('/product/:id')
    .get(reviewController.getReviewsByProductId)

module.exports = reviewRouter;
