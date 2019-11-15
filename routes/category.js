const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const CategoryController= require('../controllers/category.js');

router.get('/categories',CategoryController.getAll);
module.exports= router;
