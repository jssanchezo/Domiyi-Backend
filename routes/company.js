const express=require('express');
const router=express.Router();


const CompanyController= require('../controllers/company.js');
router.get('/companies/category',CompanyController.getByCategory);

module.exports= router;



