const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number
    },

    email: {
        type: String
    },
    profilePhoto: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }

})

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;