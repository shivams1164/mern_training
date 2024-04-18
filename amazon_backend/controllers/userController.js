
const UserModel = require('../models/userModel');
const userRouter = require('../routes/userRoute');

const geAllUser = async (req, res) => {
    const data = await UserModel.find();
    res.send({
        status: 'success',
        message: "All users",
        data: {
            users: data,
        }
    })

}

const createUser = async (req, res) => {
    try {
        const { _if, ...reqData } = req.body;
        const data = await UserModel.create(reqData);
        // console.log(data);
        // console.log(req.body);
        res.json({
            status: 'success',
            message: "User created",
            data: {
                users: data,
            }
        })

    }
    catch (err) {
        // console.log(err);
        res.status(403);
        res.json({
            status: 'fail',
            message: err.message,
        })
    }
}


const updateUser = async (req, res) => {
    try {
        const reqID = req.params.id;
        const updatedData = req.body;
        const result = await UserModel.findByIdAndUpdate(reqID, updatedData, { new: true });

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

const deleteUser = async (req, res) => {
    try {
        const reqID = req.params.id;
        const result = await UserModel.findByIdAndDelete(reqID);

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
            message: 'User deleted successfully',
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
    geAllUser,
    createUser,
    updateUser,
    deleteUser

}