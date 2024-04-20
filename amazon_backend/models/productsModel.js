

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    info: {
        category: String,
        brand: String,
        ratingCount: Number,
        ratingValue: Number,
        stock: Number,
        specificOffers: [
            {
                title: String,
                description: String,
            }
        ],
        amazonServices: [
            {
                title: String,
                description: String,
            }
        ]
    },
    description: String,
    images: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }

})

const productModel = mongoose.model('products', productSchema);


module.exports = productModel;

// const testProduct = new productModel({
//     title: 'samsung watch',
//     price: 9900,
// })

// testProduct.save().then((res)=>{
// console.log(res);
// })




// const deleteProduct = async () => {
//     try {
//         const deletedProduct = await productModel.deleteOne({ title: 'samsung watch' });
//         console.log(deletedProduct);

//     } catch (error) {
//         console.log(error);
//     }
// }

// deleteProduct();
