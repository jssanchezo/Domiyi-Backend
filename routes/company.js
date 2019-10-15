const express=require('express');
const router=express.Router();


const CompanyController= require('../controllers/company.js');
router.get('/companies',CompanyController.getAll);
router.get('/companies/id',CompanyController.getById);
router.get('/companies/category',CompanyController.getByCategory);
router.get('/companies/idAdmin',CompanyController.getByAdminId);
router.get('/companies/company',CompanyController.getByCompany);
router.post('/company/register',CompanyController.register);

module.exports= router;
