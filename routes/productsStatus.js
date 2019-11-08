const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const ProductStatusController= require('../controllers/productsStatus.js');
router.get('/productsStatus' ,ProductStatusController.getAll);

module.exports= router;
