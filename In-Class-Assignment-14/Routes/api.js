const express = require('express');
const authentication = require('../Middleware/auth');

const router = express.Router();

// Public Route
router.get('/public', (req, res,) => {
    res.send({message: 'Welcome to the Public API!'});
});

// Protected Route
router.get('/protected', authentication, (req, res) => {
    res.send({message: 'Welcome to the Protected API!'});
});

// Error Route
router.get('/error', (req, res, next) => {
    const error = new Error('Something went wrong!');
    next(error);
});

module.exports = router;