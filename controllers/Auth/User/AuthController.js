
const User = require('../../../models/Registration');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');
const mailer = require('nodemailer');
const emailVerificationSchema = require('./../../../models/verifyToken');

const sendMail = async (email, token) => {
    try {
        const verify = new emailVerificationSchema({
            email: email,
            token: token
        });
        await verify.save();
    } catch (e) {
        return `Error: ${e.message}`;
    }
}
exports.register = async (req, res, next) => {
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MjllNjNjYjY1MTlhZmRjMjc4NDkyZSIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoia3Vyb3Nhd2F0YWtpODRAZ21haWwuY29tIiwiaWF0IjoxNzMwNzk5MTY0LCJleHAiOjE3MzA4MDI3NjR9.mC_AGIgBteAJ0uQToxtiuYlXHxpTcizL2uAorQpG6YA';
    try {
        const { firstName, lastName, email, password, role } = req.body;

        const existingUser = await User.findOne({ email: email });
        sendMail(email, false);
        if (existingUser) {
            return res.status(200).json({ message: `User ${email} already exist` });
        }

        const passHash = await bycrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passHash,
            role: role || 'user'
        });
        const token = jwt.sign({
            id: newUser._id,
            role: newUser.role,
            email: newUser.email,
        },
            apiKey,
            {
                expiresIn: '1h'
            }
        )
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', token });

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: `${e}` });
        next(e);
    }
};