const express=require('express');
const router=express.Router();


const ProductStatusController= require('../controllers/productsStatus.js');
router.get('/productsStatus',ProductStatusController.getAll);

module.exports= router;
