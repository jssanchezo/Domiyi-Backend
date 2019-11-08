const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const CompanyStatusController= require('../controllers/companiesStatus.js');
router.get('/companiesStatus' ,CompanyStatusController.getAll);

module.exports= router;