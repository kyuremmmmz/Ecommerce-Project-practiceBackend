const { default: mongoose } = require('mongoose');
const schema = require('mongoose');

const products = schema.Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required', { min: 10, max: 500 }, 'Description must be between 10 and 500 characters long'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number'],
    },
    discount: {
        type: Number,
        default: 0,
        min: [0, 'Discount must be a positive number'],
        max: [100, 'Discount must be between 0 and 100'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be a positive number'],
    },
    productType: {
        type: String,
        required: [true, 'Product type is required'],
        enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Other'],
    }
});

const Product = mongoose.model('Product', products);

module.exports = Product;