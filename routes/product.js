const express=require('express');
const router=express.Router();

const ProductController= require('../controllers/product.js');
router.get('/products',ProductController.getAll);
module.exports=router;





