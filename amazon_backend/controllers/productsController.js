

const getAllProducts = (req, res) => {

    res.send({
        status: 'success',
        results: 0,
        message:"All Products",
        data: {
            products: [],
        }
    })
}

module.exports = {
    getAllProducts
}