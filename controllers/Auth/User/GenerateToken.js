const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const bearerToken = crypto.randomBytes.toString('hex');
exports.tokenGenerator = async ( res, next) => {
    try {
        await jwt.sign({
            bearerToken: bearerToken,
        },
            bearerToken
        );
        res.status(200).json({ message: 'Token generated successfully', token: bearerToken });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: `${e}` });
        next(e);
    }
}