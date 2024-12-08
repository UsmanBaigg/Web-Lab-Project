// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');  // Extract token from headers

    if (!token) {
        return res.status(403).json({ message: 'Access Denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token
        req.user = decoded;  // Attach the decoded user info to the request
        next();  // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authenticateToken;
