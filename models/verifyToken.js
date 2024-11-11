const token = require('mongoose');


const table = token.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
});

const emailVerification = token.model('Token', table);

module.exports = emailVerification;