const createProduct = require('../../models/products');
const express = require('express');
exports.createProducts = async (req, res, next) => {
    try {
        const { productName, description, price, discount, quantity, productType, imgUrl } = req.body;
        const newProduct = new createProduct({
            productName: productName,
            description: description,
            price: price,
            discount: discount,
            quantity: quantity,
            productType: productType,
            imgUrl: imgUrl
        });
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', newProduct });
    } catch (err) {
        res.status(500).json({ message: `${err}` });
        next(err);
    }
}


