const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const OrderController= require('../controllers/product.js');


router.post('/order/register',OrderController.register);
module.exports= router;



