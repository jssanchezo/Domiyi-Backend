const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const DetailController= require('../controllers/detail');


router.post('/detail/register',DetailController.register);
module.exports= router;


