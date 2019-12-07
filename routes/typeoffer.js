const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const TypeOfferController= require('../controllers/typeoffer');


router.get('/typeoffers',TypeOfferController.getAll);
module.exports= router;


