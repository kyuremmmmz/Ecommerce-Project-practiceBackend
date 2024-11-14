const schema = require('mongoose');

const tableSchema = schema.Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required'],
    },
    expiry: {
        type: Date,
        required: [true, 'Expiry date is required'],
    },
    discountOffer: {
        type: Number,
        min: 0,
        max: 100,
        required: [true, 'Discount offer is required'],
    }
});

const parse = schema.model('DiscountOffer', tableSchema);
module.exports = parse;