const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const ProductController= require('../controllers/product.js');

router.get('/products',ProtectRoute,ProductController.getAll);
router.get('/products/price',ProtectRoute,ProductController.getByPrice) ;
router.get('/products/id',ProtectRoute,ProductController.getById) ;
router.post('/product/register',ProtectRoute,ProductController.register);
module.exports= router;




