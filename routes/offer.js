const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const OfferController= require('../controllers/offer');


router.post('/offer/register',ProtectRoute,OfferController.RegisterIFNotExist);
module.exports= router;


