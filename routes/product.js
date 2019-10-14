const express=require('express');
const router=express.Router();
const ProductController= require('../controllers/product.js');
router.post('/product/register',ProductController.register);
module.exports=router;