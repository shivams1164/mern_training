const mongoose = require('mongoose')
const imageSchema = mongoose.Schema({
    searchText: {
        type: Date,
        require: true,
    },
    userID: {
        type: String,
        default: "default-user",
    },
    imageUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }
})

const imageModel = mongoose.model('ai-images', imageSchema);
module.exports = imageModel;