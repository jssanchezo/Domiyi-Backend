const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const TransactionController= require('../controllers/transaction');

router.post('/PayPal',TransactionController.register);
module.exports= router;