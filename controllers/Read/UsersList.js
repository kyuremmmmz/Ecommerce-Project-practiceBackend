const User = require('../../models/Registration');
const product = require('../../models/products');
exports.ListUsers = async (req, res, next) => {
    try {
        const usersList = await User.find({
            _id: '6729b86229499d66235a1a84'
        }).limit(50);
        res.status(200).json({ usersList, message: 'Users fetched successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get users', e });
        next(error);
    }
}

exports.Products = async (req, res, next) => {
    try {
        const products = await product.find();
        res.status(200).json({ products, message: 'Products fetched successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get products', e });
        next(error);
    }
}
