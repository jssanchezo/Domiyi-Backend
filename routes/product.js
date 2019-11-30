const express = require('express');
const router = express.Router();
const ProtectRoute = require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const ProductController = require('../controllers/product.js');

router.get('/products', ProductController.getAll);
router.get('/products/price', ProtectRoute, ProductController.getByPrice);
router.post('/products/id', ProtectRoute, ProductController.getById);
router.post('/product/register', ProtectRoute, ProductController.register);
router.post('/product/getByIdOrder', ProtectRoute, ProductController.getByIdOrder);
router.post('/product/getByIdCompany', ProductController.getByIdCompany);

module.exports = router;