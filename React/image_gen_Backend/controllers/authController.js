const userModel = require("../models/userModel");

const signup = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Please enter all fields' });
    }
    const user = await userModel.create({ email, password });
    res.json({
        status: 'inprogess..'
    })

}
module.exports = {
    signup
}