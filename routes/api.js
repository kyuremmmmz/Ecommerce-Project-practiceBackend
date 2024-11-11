
const express = require('express');
const router = express.Router();
const UserControlller = require('../controllers/Auth/User/AuthController');
const tokenGenerator = require('../controllers/Auth/User/GenerateToken');
const productCreate = require('../controllers/Create/createProducts');
const users = require('../controllers/Read/UsersList');
router.post('/registration', UserControlller.register);
router.get('/token', tokenGenerator.tokenGenerator);
router.get('/users/:id', users.ListUsers);
router.post('/products', productCreate.createProducts);
router.get('/products2', users.Products);
module.exports = router;