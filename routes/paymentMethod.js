const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const PaymentMethodController= require('../controllers/paymentMethod.js');

router.get('/paymentMethods',PaymentMethodController.getAll);
module.exports= router;