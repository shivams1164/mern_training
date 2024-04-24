

const { query } = require('express');
const productModel = require('../models/productsModel')

const getAllProducts = async (req, res) => {

    // const q = req.query
    // console.log(q);
    // const data = await productModel.find(q);

    // res.send({
    //     status: 'success',
    //     results: data.length,
    //     message: "All Products",
    //     data: {
    //         products: data,
    //     }
    // })



    // const q = req.query;
    // console.log(q);
    // let query = productModel.find(q);
    // // console.log(query);
    // // query = query.sort('price')
    // // query = query.sort('-price title')                //for descending order
    // query = query.sort('price title')                //sort by price if same and then sort by title
    // query = query.sort()
    // const products = await query;


    // console.log((q, sort));
    // const { sort, ...q } = req.query
    // const sortStr = sort.split(',').join(' ')
    // let query = productModel.find(q);
    // query = query.sort(sortStr)

    // console.log(sortStr);

    // res.send({
    //     status: 'success',
    //     results: products.length,
    //     message: "All Products",
    //     data: {
    //         products: products,
    //     }
    // })


    //---------------paging---------------------

    // const { sort='price', ...q } = req.query
    // const sortStr = sort.split(',').join(' ')
    // let query = productModel.find(q);
    // query = query.sort(sortStr)

    // const skip=0;
    // const limit =3;

    // query = query.skip(skip).limit(limit)
    // console.log(sortStr);

    // const products = await query;

    // ---------------------------------------------------------------------
    const { sort = 'price', page = 1, pagesize = 3, fields = "title, price", ...q } = req.query
    const sortStr = sort.split(',').join(' ')
    const fieldStr = fields.split(',').join(' ')
    let query = productModel.find(q);
    // for select
    // query = query.select('title')

    //for deselect
    // query = query.select('-title')

    query = query.sort(sortStr)
    const skip = pagesize * (page - 1);
    const limit = pagesize;
    query = query.skip(skip).limit(limit)
    query = query.select(fieldStr)

    const products = await query;
    const totalResults = await productModel.countDocuments(q);


    res.send({
        status: 'success',
        results: products.length,
        totalResults: totalResults,
        page: page,
        pagesize: pagesize,
        data: {
            products,                    
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

