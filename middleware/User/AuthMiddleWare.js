const jwt = require('jsonwebtoken');


const role = async (req, res, next) => { 
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role === 'admin') {
            res.status(200).json({ message: 'Admin role granted' });
        } else {
            res.status(403).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
        next(error);
    }
}


exports = { role };