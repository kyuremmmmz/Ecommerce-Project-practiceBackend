const createProduct = require('../../models/products');

exports.createProducts = async (res, req, next) => {
    try {
        const { productName, description, price, discount, quantity, productType } = req.body;
        const newProduct = new createProduct({
            productName: productName,
            description: description,
            price: price,
            discount: discount,
            quantity: quantity,
            productType: productType,
        });
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', newProduct });
    } catch (err) {
        res.status(500).json({ message: 'Failed to create product', err });
        next(err);
    }
}
