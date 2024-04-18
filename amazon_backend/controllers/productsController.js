

const productModel = require('../models/productsModel')

const getAllProducts = async (req, res) => {

    const data = await productModel.find();
    // console.log(data);

    res.send({
        status: 'success',
        results: 0,
        message: "All Products",
        data: {
            products: data,
        }
    })
}

const addProduct = async (req, res) => {
    try {
        const { _id, ...reqData } = req.body;
        const data = await productModel.create(reqData);
        // console.log(data);
        // console.log(req.body);

        res.json({
            status: 'success',
            result: 1,
            data: {
                products: data,
            }
        });

    } catch (err) {
        console.log(err);
        res.status(403);
        res.json({
            status: 'fail',
            message: err.message,

        });
    }
}

const replaceProduct = async (req, res) => {
    try {
        const reqID = req.params.id;
        const data = { ...req.body, _id: reqID }
        const result = await productModel.findOneAndReplace({ _id: reqID }, data)
        // console.log(result);
        res.status(200);
        res.json({
            status: 'success',
            result: 1,
            data: {
                products: data,
            }
        });
    }
    catch (err) {
        // console.log(err);
        res.status(400);
        res.json({
            status: 'fail',
            message: err.message,

        });
    }


}



const deleteProduct = async (req, res) => {
    try {
        const reqID = req.params.id;
        const result = await productModel.findByIdAndDelete(reqID);

        if (!result) {
            res.status(404);
            return res.json({
                status: 'fail',
                message: 'Product not found',
            });
        }

        res.status(200);
        res.json({
            status: 'success',
            result: 1,
            message: 'Product deleted successfully',
        });
    } catch (err) {
        // console.log(err);
        res.status(500);
        res.json({
            status: 'fail',
            message: err.message,
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const reqID = req.params.id;
        const updatedData = req.body;
        const result = await productModel.findByIdAndUpdate(reqID, updatedData, { new: true });

        if (!result) {
            res.status(404);
            return res.json({
                status: 'fail',
                message: 'User not found',
            });
        }

        res.status(200);
        res.json({
            status: 'success',
            result: 1,
            data: {
                users: result,
            }
        });
    } catch (err) {
        // console.log(err);
        res.status(500);
        res.json({
            status: 'fail',
            message: err.message,
        });
    }
}


module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct,
    updateProduct
}

