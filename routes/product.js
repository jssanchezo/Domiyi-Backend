const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const ProductController= require('../controllers/product.js');

router.get('/products',ProductController.getAll);
router.post('/products/price',ProductController.getByPrice) ;
router.post('/products/id',ProtectRoute,ProductController.getById) ;
router.post('/product/register',ProtectRoute,ProductController.register);
router.post('/product/getByIdOrder',ProtectRoute,ProductController.getByIdOrder);

router.post('/product/getByWord', ProductController.getByWord);


router.post('/product/update',ProductController.EditProduct);

module.exports= router;




