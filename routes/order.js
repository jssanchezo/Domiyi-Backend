const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const OrderController= require('../controllers/order');


router.post('/order/register',ProtectRoute,OrderController.register);
module.exports= router;



