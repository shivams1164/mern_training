const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },

});

const reviewModel = mongoose.model('reviews', reviewSchema);

module.exports = reviewModel;
