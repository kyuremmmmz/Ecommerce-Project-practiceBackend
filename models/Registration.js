const { default: mongoose } = require('mongoose');
const schema = require('mongoose');
const api = require('dotenv');
const jwt = require('jsonwebtoken');

const registration = schema.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        validate: {
            validator: (value) => {
                return /^[a-zA-Z]+$/.test(value) && value.length;
            },
            message: props => `${props.value} is not a valid first name! It must be at least 2 characters long and only contain letters.`
        },
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        validate: {
            validator: (value) => {
                return /^[a-zA-Z]+$/.test(value) && value.length;
            },
            message: props => `${props.value} is not a valid last name! It must be at least 2 characters long and only contain letters.`
        },
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        validate: {
            validator: (value) => {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    verified: {
        type: Boolean,
        required: [true, 'Verified'],
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = mongoose.model('User', registration)

module.exports = User;