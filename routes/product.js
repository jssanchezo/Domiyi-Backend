const express=require('express');
const router=express.Router();

//we match all routes with the functions wich it executes

const ProductController= require('../controllers/product.js');
router.get('/products',ProductController.getAll);
router.get('/products/price',ProductController.getByPrice) ;
router.get('/products/id',ProductController.getById) ;
router.post('/product/register',ProductController.register);
module.exports= router;




