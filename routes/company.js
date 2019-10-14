const express=require('express');
const router=express.Router();


const CompanyController= require('../controllers/company.js');
router.get('/companies/category',CompanyController.getByCategory);
router.get('/companies/idAdmin',CompanyController.getByAdminId);

module.exports= router;



