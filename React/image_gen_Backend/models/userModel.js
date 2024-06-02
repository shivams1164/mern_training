const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
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

const userModel = mongoose.model('usermodel', userSchema);
module.exports = userModel;