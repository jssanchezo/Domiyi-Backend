const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const ProductOfferController= require('../controllers/ProductOffer');


router.post('/productOffer/IdsProductById',ProtectRoute,ProductOfferController.getIdsProductByIdsProductOffer);
router.post('/productOffer/ByIdCompany',ProductOfferController.getByIdCompany);
router.post('/productOffer/ByIdProduct',ProtectRoute,ProductOfferController.getByIdProduct);
router.post('/productOffer/register',ProtectRoute,ProductOfferController.register);
module.exports= router;


