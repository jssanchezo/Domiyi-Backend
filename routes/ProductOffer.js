const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const ProductOfferController= require('../controllers/ProductOffer');


router.post('/productOffer/IdsProductById',ProtectRoute,ProductOfferController.getIdsProductByIdsProductOffer);

module.exports= router;


